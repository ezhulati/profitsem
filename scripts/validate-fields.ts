/**
 * Airtable Field Validation Script
 * Shows exactly what fields exist and what needs to be configured
 */

import * as dotenv from 'dotenv';

dotenv.config();

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;

// Required fields and their expected types
const REQUIRED_FIELDS = {
  // Contact Information
  'First Name': { type: 'singleLineText', required: true },
  'Last Name': { type: 'singleLineText', required: true },
  'Email': { type: 'email', required: true },
  'Phone': { type: 'phoneNumber', required: false },
  'Company': { type: 'singleLineText', required: true },
  'Website': { type: 'url', required: false },

  // Business Information
  'Monthly Ad Spend': {
    type: 'singleSelect',
    required: true,
    options: [
      '$0 - $5,000',
      '$5,000 - $15,000',
      '$15,000 - $50,000',
      '$50,000+',
      'Not currently advertising',
    ],
  },
  'Monthly Revenue': {
    type: 'singleSelect',
    required: true,
    options: [
      'Under $100,000',
      '$100,000 - $500,000',
      '$500,000 - $2,000,000',
      '$2,000,000 - $10,000,000',
      '$10,000,000+',
    ],
  },
  'Timeline': {
    type: 'singleSelect',
    required: true,
    options: [
      'Immediate (Next 30 days)',
      '1-3 months',
      '3-6 months',
      '6+ months',
      'Just exploring options',
    ],
  },
  'Decision Maker': {
    type: 'singleSelect',
    required: true,
    options: ['Yes', 'No', 'Shared decision'],
  },
  'Currently Running Ads': {
    type: 'singleSelect',
    required: true,
    options: ['Yes', 'No'],
  },

  // Goals & Context
  'Primary Goals': {
    type: 'multipleSelects',
    required: true,
    options: [
      'Scale profitable campaigns',
      'Improve ROAS/ROI',
      'Reduce cost per acquisition',
      'Enter new markets',
      'Launch new products',
      'Fix underperforming campaigns',
      'Better tracking & attribution',
      'Explore Google Ads potential',
    ],
  },
  'Current Challenges': { type: 'multilineText', required: false },

  // Lead Scoring
  'Lead Score': { type: 'number', required: true },
  'Lead Type': {
    type: 'singleSelect',
    required: true,
    options: ['hot', 'warm', 'cold', 'reject'],
  },
  'Status': {
    type: 'singleSelect',
    required: true,
    options: ['new', 'contacted', 'qualified', 'disqualified'],
  },

  // Metadata
  'Submitted At': { type: 'dateTime', required: true },
  'Source': { type: 'singleLineText', required: true },
  'UTM Source': { type: 'singleLineText', required: false },
  'UTM Medium': { type: 'singleLineText', required: false },
  'UTM Campaign': { type: 'singleLineText', required: false },
  'Referrer': { type: 'url', required: false },
};

async function validateFields() {
  console.log('\n🔍 Validating Airtable Field Configuration\n');
  console.log('='.repeat(60));

  // Fetch table schema
  console.log('\n📋 Fetching table schema...');
  const response = await fetch(
    `https://api.airtable.com/v0/meta/bases/${AIRTABLE_BASE_ID}/tables`,
    {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
    }
  );

  if (!response.ok) {
    console.error('❌ Failed to fetch table schema');
    process.exit(1);
  }

  const data = await response.json();
  const leadsTable = data.tables.find((t: any) => t.name === 'Leads');

  if (!leadsTable) {
    console.error('❌ Leads table not found');
    process.exit(1);
  }

  console.log(`✅ Found "Leads" table with ${leadsTable.fields.length} fields\n`);

  // Validate each field
  const issues: string[] = [];
  const warnings: string[] = [];

  console.log('🔎 Checking fields...\n');

  for (const [fieldName, config] of Object.entries(REQUIRED_FIELDS)) {
    const field = leadsTable.fields.find((f: any) => f.name === fieldName);

    if (!field) {
      if (config.required) {
        issues.push(`❌ Missing REQUIRED field: "${fieldName}"`);
        console.log(`❌ "${fieldName}" - MISSING (required)`);
      } else {
        warnings.push(`⚠️  Missing optional field: "${fieldName}"`);
        console.log(`⚠️  "${fieldName}" - MISSING (optional)`);
      }
      continue;
    }

    // Check type
    if (field.type !== config.type) {
      issues.push(
        `❌ "${fieldName}" - Wrong type: ${field.type} (expected: ${config.type})`
      );
      console.log(
        `❌ "${fieldName}" - Wrong type: ${field.type} (should be: ${config.type})`
      );
      continue;
    }

    // Check options for select fields
    if (
      (config.type === 'singleSelect' || config.type === 'multipleSelects') &&
      'options' in config
    ) {
      const fieldOptions = field.options?.choices?.map((c: any) => c.name) || [];
      const missingOptions = config.options.filter(
        (opt) => !fieldOptions.includes(opt)
      );

      if (missingOptions.length > 0) {
        issues.push(
          `❌ "${fieldName}" - Missing options: ${missingOptions.join(', ')}`
        );
        console.log(`❌ "${fieldName}" - Missing options:`);
        missingOptions.forEach((opt) => console.log(`      • ${opt}`));
        continue;
      }
    }

    console.log(`✅ "${fieldName}" - Configured correctly`);
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('\n📊 VALIDATION SUMMARY\n');

  if (issues.length === 0 && warnings.length === 0) {
    console.log('🎉 ALL FIELDS ARE CORRECTLY CONFIGURED!\n');
    console.log('Next steps:');
    console.log('  ✅ Run: npx tsx scripts/test-airtable.ts');
    console.log('  ✅ Start building the qualification form\n');
    return;
  }

  if (issues.length > 0) {
    console.log(`❌ Found ${issues.length} critical issue(s):\n`);
    issues.forEach((issue) => console.log(`   ${issue}`));
  }

  if (warnings.length > 0) {
    console.log(`\n⚠️  Found ${warnings.length} warning(s):\n`);
    warnings.forEach((warning) => console.log(`   ${warning}`));
  }

  console.log('\n📖 HOW TO FIX:\n');

  if (issues.some((i) => i.includes('MISSING'))) {
    console.log('To add missing fields:');
    console.log('  1. Open: https://airtable.com/' + AIRTABLE_BASE_ID);
    console.log('  2. Click "+" next to the last column');
    console.log('  3. Choose the field type from the list above');
    console.log('  4. Name it exactly as shown (case-sensitive)');
  }

  if (issues.some((i) => i.includes('Wrong type'))) {
    console.log('\nTo fix field types:');
    console.log('  1. Click the field name dropdown');
    console.log('  2. Choose "Customize field type"');
    console.log('  3. Select the correct type from the list above');
  }

  if (issues.some((i) => i.includes('Missing options'))) {
    console.log('\nTo add select options:');
    console.log('  1. Click the field name dropdown');
    console.log('  2. Choose "Customize field type"');
    console.log('  3. Click "Add option" and type each missing option');
    console.log('  4. Make sure spelling matches exactly');
  }

  console.log('\n💡 See detailed setup guide: docs/AIRTABLE-SETUP.md\n');
}

validateFields();
