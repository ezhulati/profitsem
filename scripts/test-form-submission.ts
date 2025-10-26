/**
 * Test Form Submission to API
 * Simulates a form submission to test Airtable integration
 */

const testFormData = {
  fullName: 'Test User',
  email: 'test@example.com',
  company: 'Test Company Inc',
  website: 'https://testcompany.com',
  phone: '+1 (555) 123-4567',
  monthlyAdSpend: '10k-20k',
  monthlyRevenue: '250k-500k',
  timeline: 'within-month',
  decisionMaker: 'final-decision',
  previousAgency: 'yes-unhappy',
  industry: 'ecommerce',
  primaryGoal: 'roi',
  currentChallenges: 'High CPA and low conversion rates',
  budget: '10k-25k',
  additionalInfo: 'Looking to scale profitably',
  score: 85,
  category: 'hot' as const,
  submittedAt: new Date().toISOString(),
};

async function testSubmission() {
  console.log('\n🧪 Testing Form Submission API\n');
  console.log('='.repeat(50));

  try {
    console.log('\n📤 Sending test submission...');
    console.log(`   Email: ${testFormData.email}`);
    console.log(`   Company: ${testFormData.company}`);
    console.log(`   Score: ${testFormData.score}`);
    console.log(`   Category: ${testFormData.category}`);

    const response = await fetch('http://localhost:4321/api/submit-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testFormData),
    });

    console.log(`\n📨 Response Status: ${response.status} ${response.statusText}`);

    const data = await response.json();

    if (response.ok) {
      console.log('\n✅ Submission Successful!');
      console.log(`   Category: ${data.category}`);
      console.log(`   Score: ${data.score}`);
      console.log(`   Airtable ID: ${data.airtableId || 'Not saved'}`);
      console.log(`   Message: ${data.message}`);

      if (data.airtableId) {
        console.log('\n✅ Lead was saved to Airtable!');
        console.log(`   Check: https://airtable.com/appVEtlYXwBNXSEr2`);
      } else {
        console.log('\n⚠️  Lead was NOT saved to Airtable (check server logs for errors)');
      }
    } else {
      console.log('\n❌ Submission Failed');
      console.log(`   Error: ${data.error || 'Unknown error'}`);
    }

  } catch (error: any) {
    console.error('\n❌ Request Failed');
    console.error(`   Error: ${error.message}`);
    console.error('\n💡 Make sure the dev server is running: npm run dev');
  }

  console.log('\n' + '='.repeat(50) + '\n');
}

testSubmission();
