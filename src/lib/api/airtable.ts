/**
 * Airtable API Integration
 * Handles lead submission and tracking for ProfitSEM qualification form
 */

import Airtable from 'airtable';

// Initialize Airtable with credentials from environment
const AIRTABLE_API_KEY = import.meta.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = import.meta.env.AIRTABLE_BASE_ID;

if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
  throw new Error('Missing Airtable credentials in environment variables');
}

// Configure Airtable client
const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);

/**
 * Lead record structure matching qualification form
 */
export interface LeadRecord {
  // Contact Information
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company: string;
  website?: string;

  // Business Information
  monthlyAdSpend: string; // e.g., "$15,000 - $50,000"
  monthlyRevenue: string; // e.g., "$500,000 - $2,000,000"
  timeline: string; // e.g., "Immediate (Next 30 days)"
  isDecisionMaker: string; // "Yes", "No", "Shared decision"

  // Goals & Context
  primaryGoals: string[]; // Multiple goals possible
  currentChallenges?: string;
  currentlyRunningAds: string; // "Yes" or "No"

  // Metadata
  leadScore: number; // 0-100 calculated score
  leadType: 'hot' | 'warm' | 'cold' | 'reject'; // Classification
  submittedAt: string; // ISO timestamp
  source: string; // "Qualification Form"

  // UTM & Tracking
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  referrer?: string;

  // Status tracking
  status: 'new' | 'contacted' | 'qualified' | 'disqualified';
}

/**
 * Airtable field mapping
 * Maps our TypeScript fields to Airtable column names
 */
const FIELD_MAPPING = {
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  phone: 'Phone',
  company: 'Company',
  website: 'Website',
  monthlyAdSpend: 'Monthly Ad Spend',
  monthlyRevenue: 'Monthly Revenue',
  timeline: 'Timeline',
  isDecisionMaker: 'Decision Maker',
  primaryGoals: 'Primary Goals',
  currentChallenges: 'Current Challenges',
  currentlyRunningAds: 'Currently Running Ads',
  leadScore: 'Lead Score',
  leadType: 'Lead Type',
  submittedAt: 'Submitted At',
  source: 'Source',
  utmSource: 'UTM Source',
  utmMedium: 'UTM Medium',
  utmCampaign: 'UTM Campaign',
  referrer: 'Referrer',
  status: 'Status',
};

/**
 * Creates a new lead record in Airtable
 * @param leadData - Lead information from qualification form
 * @returns Airtable record ID
 */
export async function createLead(leadData: LeadRecord): Promise<string> {
  try {
    // Map TypeScript fields to Airtable column names
    const airtableFields: Record<string, any> = {};

    Object.entries(leadData).forEach(([key, value]) => {
      const airtableFieldName = FIELD_MAPPING[key as keyof typeof FIELD_MAPPING];
      if (airtableFieldName && value !== undefined && value !== null) {
        // Keep arrays as arrays for multipleSelects fields (Primary Goals)
        // Airtable expects arrays for multipleSelects, not comma-separated strings
        airtableFields[airtableFieldName] = value;
      }
    });

    // Create record in Airtable
    const records = await base('Leads').create([
      {
        fields: airtableFields,
      },
    ]);

    const recordId = records[0].getId();
    console.log(`✅ Lead created in Airtable: ${recordId}`);

    return recordId;
  } catch (error) {
    console.error('❌ Failed to create lead in Airtable:', error);
    throw new Error(`Airtable API error: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Updates an existing lead record
 * @param recordId - Airtable record ID
 * @param updates - Partial lead data to update
 */
export async function updateLead(
  recordId: string,
  updates: Partial<LeadRecord>
): Promise<void> {
  try {
    const airtableFields: Record<string, any> = {};

    Object.entries(updates).forEach(([key, value]) => {
      const airtableFieldName = FIELD_MAPPING[key as keyof typeof FIELD_MAPPING];
      if (airtableFieldName && value !== undefined && value !== null) {
        // Keep arrays as arrays for multipleSelects fields (Primary Goals)
        airtableFields[airtableFieldName] = value;
      }
    });

    await base('Leads').update([
      {
        id: recordId,
        fields: airtableFields,
      },
    ]);

    console.log(`✅ Lead updated in Airtable: ${recordId}`);
  } catch (error) {
    console.error('❌ Failed to update lead in Airtable:', error);
    throw new Error(`Airtable API error: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Retrieves a lead record by email
 * Useful for checking if lead already exists
 */
export async function findLeadByEmail(email: string): Promise<any | null> {
  try {
    const records = await base('Leads')
      .select({
        filterByFormula: `{Email} = "${email}"`,
        maxRecords: 1,
      })
      .firstPage();

    return records.length > 0 ? records[0] : null;
  } catch (error) {
    console.error('❌ Failed to find lead by email:', error);
    return null;
  }
}

/**
 * Test connection to Airtable
 * Useful for debugging and setup verification
 */
export async function testConnection(): Promise<boolean> {
  try {
    // Try to list tables to verify connection
    await base('Leads').select({ maxRecords: 1 }).firstPage();
    console.log('✅ Airtable connection successful');
    return true;
  } catch (error) {
    console.error('❌ Airtable connection failed:', error);
    return false;
  }
}
