/**
 * Test Airtable Connection
 * Verifies credentials and table setup
 */

import Airtable from 'airtable';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;

async function testAirtableConnection() {
  console.log('\n🔍 Testing Airtable Configuration...\n');

  // Step 1: Check environment variables
  console.log('1️⃣  Checking environment variables...');
  if (!AIRTABLE_API_KEY) {
    console.error('   ❌ AIRTABLE_API_KEY not found in .env');
    process.exit(1);
  }
  if (!AIRTABLE_BASE_ID) {
    console.error('   ❌ AIRTABLE_BASE_ID not found in .env');
    process.exit(1);
  }
  console.log('   ✅ Environment variables loaded');
  console.log(`   📋 Base ID: ${AIRTABLE_BASE_ID}`);
  console.log(`   🔑 API Key: ${AIRTABLE_API_KEY.substring(0, 10)}...`);

  // Step 2: Initialize Airtable client
  console.log('\n2️⃣  Initializing Airtable client...');
  const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);
  console.log('   ✅ Client initialized');

  // Step 3: Test connection by fetching records
  console.log('\n3️⃣  Testing connection to "Leads" table...');
  try {
    const records = await base('Leads')
      .select({
        maxRecords: 1,
        view: 'Grid view', // Default view
      })
      .firstPage();

    console.log('   ✅ Successfully connected to Airtable!');
    console.log(`   📊 Current records in table: ${records.length === 0 ? 'Empty (no records yet)' : records.length}`);

    if (records.length > 0) {
      console.log('\n   📋 Sample record fields:');
      const fields = Object.keys(records[0].fields);
      fields.forEach((field) => console.log(`      - ${field}`));
    }
  } catch (error: any) {
    console.error('   ❌ Connection failed!');
    console.error(`   Error: ${error.message}`);

    if (error.statusCode === 404) {
      console.error('\n   💡 Possible issues:');
      console.error('      • Table "Leads" does not exist in your base');
      console.error('      • Base ID is incorrect');
      console.error('      • Check base ID in Airtable URL: https://airtable.com/[BASE_ID]/...');
    } else if (error.statusCode === 401) {
      console.error('\n   💡 Possible issues:');
      console.error('      • API key is invalid or expired');
      console.error('      • Generate new key at: https://airtable.com/create/tokens');
    }

    process.exit(1);
  }

  // Step 4: Validate required fields
  console.log('\n4️⃣  Checking for required fields...');
  const requiredFields = [
    'First Name',
    'Last Name',
    'Email',
    'Company',
    'Monthly Ad Spend',
    'Monthly Revenue',
    'Timeline',
    'Decision Maker',
    'Primary Goals',
    'Lead Score',
    'Lead Type',
    'Status',
    'Submitted At',
    'Source',
  ];

  try {
    // Try to create a test record to validate all fields exist
    const testRecord = {
      'First Name': 'Test',
      'Last Name': 'User',
      'Email': 'test@example.com',
      'Company': 'Test Company',
      'Monthly Ad Spend': '$5,000 - $15,000',
      'Monthly Revenue': '$100,000 - $500,000',
      'Timeline': 'Just exploring options',
      'Decision Maker': 'Yes',
      'Primary Goals': ['Explore Google Ads potential'], // Array for multipleSelects
      'Lead Score': 0,
      'Lead Type': 'cold',
      'Status': 'new',
      'Submitted At': new Date().toISOString(),
      'Source': 'Test Script',
    };

    console.log('   🧪 Creating test record...');
    const created = await base('Leads').create([{ fields: testRecord }]);
    const recordId = created[0].getId();
    console.log(`   ✅ Test record created: ${recordId}`);

    // Clean up test record
    console.log('   🧹 Cleaning up test record...');
    await base('Leads').destroy([recordId]);
    console.log('   ✅ Test record deleted');

    console.log('\n   ✅ All required fields are properly configured!');
  } catch (error: any) {
    console.error('   ❌ Field validation failed!');
    console.error(`   Error: ${error.message}`);
    console.error('\n   💡 Check that all required fields exist in your Airtable table.');
    console.error('   📖 See docs/AIRTABLE-SETUP.md for complete field list.');
    process.exit(1);
  }

  // Success!
  console.log('\n✅ All tests passed! Airtable is ready to use.\n');
  console.log('Next steps:');
  console.log('  1. Review table structure in Airtable');
  console.log('  2. Configure field options (dropdowns)');
  console.log('  3. Test qualification form submission');
  console.log('');
}

// Run the test
testAirtableConnection();
