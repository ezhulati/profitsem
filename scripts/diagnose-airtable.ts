/**
 * Airtable Diagnostic Script
 * Checks what we can access with the provided credentials
 */

import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;

console.log('\n🔍 Airtable Access Diagnostic\n');
console.log('='.repeat(50));

// Step 1: Check credentials
console.log('\n📋 Step 1: Checking credentials...');
if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
  console.error('❌ Missing credentials in .env file');
  process.exit(1);
}
console.log(`✅ API Key: ${AIRTABLE_API_KEY.substring(0, 15)}...`);
console.log(`✅ Base ID: ${AIRTABLE_BASE_ID}`);

// Step 2: Test API key validity with Web API
console.log('\n🔑 Step 2: Testing API key validity...');

async function testApiKey() {
  try {
    const response = await fetch('https://api.airtable.com/v0/meta/whoami', {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log('✅ API key is valid!');
      console.log(`   User ID: ${data.id}`);
      return true;
    } else {
      console.error(`❌ API key test failed: ${response.status} ${response.statusText}`);
      const error = await response.text();
      console.error(`   Error: ${error}`);
      return false;
    }
  } catch (error: any) {
    console.error(`❌ Network error: ${error.message}`);
    return false;
  }
}

// Step 3: Check base access
async function checkBaseAccess() {
  console.log('\n🗄️  Step 3: Checking base access...');

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/meta/bases/${AIRTABLE_BASE_ID}/tables`,
      {
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log('✅ Can access base!');
      console.log(`\n📊 Found ${data.tables.length} table(s):`);

      if (data.tables.length === 0) {
        console.log('   ⚠️  Base is empty - no tables created yet');
        return { hasAccess: true, tables: [] };
      }

      data.tables.forEach((table: any, index: number) => {
        console.log(`\n   ${index + 1}. "${table.name}" (ID: ${table.id})`);
        console.log(`      Primary field: ${table.primaryFieldId}`);
        console.log(`      Fields: ${table.fields?.length || 0}`);

        if (table.fields && table.fields.length > 0) {
          console.log('      Field names:');
          table.fields.slice(0, 5).forEach((field: any) => {
            console.log(`        - ${field.name} (${field.type})`);
          });
          if (table.fields.length > 5) {
            console.log(`        ... and ${table.fields.length - 5} more`);
          }
        }
      });

      const hasLeadsTable = data.tables.some((t: any) => t.name === 'Leads');
      if (hasLeadsTable) {
        console.log('\n   ✅ "Leads" table found!');
      } else {
        console.log('\n   ⚠️  "Leads" table NOT found');
        console.log('   💡 You need to create a table called "Leads"');
      }

      return { hasAccess: true, tables: data.tables };
    } else if (response.status === 404) {
      console.error('❌ Base not found!');
      console.error(`   Base ID "${AIRTABLE_BASE_ID}" does not exist or you don't have access`);
      console.error('\n   💡 How to find your Base ID:');
      console.error('   1. Open your base in Airtable');
      console.error('   2. Look at the URL: https://airtable.com/[BASE_ID]/...');
      console.error('   3. Copy the BASE_ID and update your .env file');
      return { hasAccess: false, tables: [] };
    } else if (response.status === 403) {
      console.error('❌ Access forbidden!');
      console.error('   Your API key does not have permission to access this base');
      console.error('\n   💡 Fix permissions:');
      console.error('   1. Go to https://airtable.com/create/tokens');
      console.error('   2. Edit your token');
      console.error('   3. Add access to base: appVEtlYXwBNXSEr2');
      console.error('   4. Enable: data.records:read, data.records:write, schema.bases:read');
      return { hasAccess: false, tables: [] };
    } else {
      console.error(`❌ Unexpected error: ${response.status} ${response.statusText}`);
      const error = await response.text();
      console.error(`   ${error}`);
      return { hasAccess: false, tables: [] };
    }
  } catch (error: any) {
    console.error(`❌ Network error: ${error.message}`);
    return { hasAccess: false, tables: [] };
  }
}

// Step 4: Test record operations (if possible)
async function testRecordOperations() {
  console.log('\n📝 Step 4: Testing record operations on "Leads" table...');

  try {
    // Try to fetch records
    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Leads?maxRecords=1`,
      {
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log('✅ Can read from "Leads" table!');
      console.log(`   Current records: ${data.records.length === 0 ? 'Empty (0 records)' : data.records.length}`);

      if (data.records.length > 0) {
        console.log('\n   📋 Sample record structure:');
        const fields = Object.keys(data.records[0].fields);
        fields.forEach((field) => console.log(`      - ${field}`));
      } else {
        console.log('   ℹ️  Table exists but is empty (no records yet)');
      }

      return true;
    } else if (response.status === 404) {
      console.error('❌ "Leads" table does not exist');
      console.error('   💡 Create a table called "Leads" in your Airtable base');
      return false;
    } else {
      console.error(`❌ Cannot access "Leads" table: ${response.status}`);
      const error = await response.text();
      console.error(`   ${error}`);
      return false;
    }
  } catch (error: any) {
    console.error(`❌ Error: ${error.message}`);
    return false;
  }
}

// Main diagnostic flow
async function runDiagnostics() {
  const apiKeyValid = await testApiKey();

  if (!apiKeyValid) {
    console.log('\n❌ Stopping - API key is invalid\n');
    process.exit(1);
  }

  const { hasAccess, tables } = await checkBaseAccess();

  if (!hasAccess) {
    console.log('\n❌ Stopping - Cannot access base\n');
    process.exit(1);
  }

  if (tables.length === 0) {
    console.log('\n⚠️  Base is empty - you need to create tables');
    console.log('\n📖 Next steps:');
    console.log('   1. Open: https://airtable.com/' + AIRTABLE_BASE_ID);
    console.log('   2. Click "Add or import" → "Create empty table"');
    console.log('   3. Name it "Leads" (exact spelling)');
    console.log('   4. Follow setup guide in docs/AIRTABLE-SETUP.md');
    console.log('   5. Run this script again\n');
    process.exit(0);
  }

  const hasLeads = tables.some((t: any) => t.name === 'Leads');

  if (!hasLeads) {
    console.log('\n⚠️  "Leads" table not found');
    console.log('\n📖 Next steps:');
    console.log('   1. Open: https://airtable.com/' + AIRTABLE_BASE_ID);
    console.log('   2. Create a new table called "Leads"');
    console.log('   3. Follow setup guide in docs/AIRTABLE-SETUP.md');
    console.log('   4. Run this script again\n');
    process.exit(0);
  }

  // Test record operations
  const canAccessRecords = await testRecordOperations();

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('\n📊 DIAGNOSTIC SUMMARY\n');
  console.log(`API Key:          ${apiKeyValid ? '✅' : '❌'}`);
  console.log(`Base Access:      ${hasAccess ? '✅' : '❌'}`);
  console.log(`"Leads" Table:    ${hasLeads ? '✅' : '❌'}`);
  console.log(`Record Access:    ${canAccessRecords ? '✅' : '❌'}`);

  if (apiKeyValid && hasAccess && hasLeads && canAccessRecords) {
    console.log('\n🎉 ALL CHECKS PASSED!\n');
    console.log('Your Airtable is configured correctly.');
    console.log('\n📖 Next steps:');
    console.log('   1. Add remaining fields to "Leads" table (see docs/AIRTABLE-SETUP.md)');
    console.log('   2. Run: npx tsx scripts/test-airtable.ts');
    console.log('   3. Test the qualification form\n');
  } else {
    console.log('\n⚠️  Some issues found - follow the suggestions above\n');
  }
}

// Run diagnostics
runDiagnostics();
