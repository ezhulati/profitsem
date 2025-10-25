import type { APIRoute } from 'astro';

/**
 * Lead submission API endpoint
 *
 * Receives form data, validates it, and stores in Airtable
 * Returns success/error response
 *
 * TODO: Set up Airtable integration with environment variables:
 * - AIRTABLE_API_KEY
 * - AIRTABLE_BASE_ID
 * - AIRTABLE_TABLE_NAME
 */

interface LeadSubmission {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  monthlyAdSpend: string;
  monthlyRevenue: string;
  timeline: string;
  decisionMaker: string;
  previousAgency?: string;
  industry: string;
  primaryGoal: string;
  currentChallenges?: string;
  budget: string;
  additionalInfo?: string;
  score: number;
  category: 'hot' | 'warm' | 'cold' | 'reject';
  submittedAt: string;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse request body
    const data: LeadSubmission = await request.json();

    // Validate required fields
    const requiredFields = [
      'fullName',
      'email',
      'company',
      'phone',
      'monthlyAdSpend',
      'monthlyRevenue',
      'timeline',
      'industry',
      'decisionMaker',
      'primaryGoal',
      'budget',
      'score',
      'category',
    ];

    for (const field of requiredFields) {
      if (!data[field as keyof LeadSubmission]) {
        return new Response(
          JSON.stringify({ error: `Missing required field: ${field}` }),
          {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          }
        );
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // TODO: Send to Airtable
    // For now, log to console (will be replaced with Airtable integration)
    console.log('New lead submission:', {
      email: data.email,
      company: data.company,
      score: data.score,
      category: data.category,
      timestamp: data.submittedAt,
    });

    // Simulate Airtable API call
    const airtablePayload = {
      fields: {
        'Full Name': data.fullName,
        'Email': data.email,
        'Company': data.company,
        'Phone': data.phone,
        'Monthly Ad Spend': data.monthlyAdSpend,
        'Monthly Revenue': data.monthlyRevenue,
        'Timeline': data.timeline,
        'Decision Maker': data.decisionMaker,
        'Previous Agency': data.previousAgency || '',
        'Industry': data.industry,
        'Primary Goal': data.primaryGoal,
        'Current Challenges': data.currentChallenges || '',
        'Budget': data.budget,
        'Additional Info': data.additionalInfo || '',
        'Lead Score': data.score,
        'Category': data.category,
        'Submitted At': data.submittedAt,
        'Status': 'New',
      },
    };

    // TODO: Uncomment when Airtable is configured
    /*
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${import.meta.env.AIRTABLE_BASE_ID}/${import.meta.env.AIRTABLE_TABLE_NAME}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(airtablePayload),
      }
    );

    if (!airtableResponse.ok) {
      throw new Error('Failed to save to Airtable');
    }
    */

    // TODO: Send email notifications based on category
    // - Hot leads: Immediate notification to sales team
    // - Warm leads: Notification to review queue
    // - Cold leads: Add to nurture sequence
    // - Reject: Send resources email

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        category: data.category,
        score: data.score,
        message: 'Lead submitted successfully',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Lead submission error:', error);

    return new Response(
      JSON.stringify({
        error: 'Failed to submit lead. Please try again.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
