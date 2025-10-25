# Airtable Setup Guide

This guide explains how to configure your Airtable base to work with the ProfitSEM qualification form.

---

## Base Configuration

**Base ID:** `appVEtlYXwBNXSEr2` (configured in `.env`)

**Required Table:** `Leads`

---

## Table Structure: "Leads"

Create a table named **"Leads"** with the following fields:

### Contact Information Fields

| Field Name | Type | Description | Required |
|------------|------|-------------|----------|
| First Name | Single line text | Lead's first name | ✅ Yes |
| Last Name | Single line text | Lead's last name | ✅ Yes |
| Email | Email | Lead's email address | ✅ Yes |
| Phone | Phone number | Lead's phone number | ❌ Optional |
| Company | Single line text | Company name | ✅ Yes |
| Website | URL | Company website | ❌ Optional |

### Business Information Fields

| Field Name | Type | Description | Required | Options |
|------------|------|-------------|----------|---------|
| Monthly Ad Spend | Single select | Current Google Ads spend | ✅ Yes | See options below |
| Monthly Revenue | Single select | Business monthly revenue | ✅ Yes | See options below |
| Timeline | Single select | When they want to start | ✅ Yes | See options below |
| Decision Maker | Single select | Are they the decision maker | ✅ Yes | "Yes", "No", "Shared decision" |
| Currently Running Ads | Single select | Do they run ads now | ✅ Yes | "Yes", "No" |

### Goals & Context Fields

| Field Name | Type | Description | Required |
|------------|------|-------------|----------|
| Primary Goals | Multiple select | Business objectives | ✅ Yes |
| Current Challenges | Long text | Specific challenges (optional) | ❌ Optional |

### Lead Scoring & Classification

| Field Name | Type | Description | Required |
|------------|------|-------------|----------|
| Lead Score | Number | Calculated score (0-100) | ✅ Yes |
| Lead Type | Single select | Hot/Warm/Cold/Reject | ✅ Yes |
| Status | Single select | Processing status | ✅ Yes |

### Metadata & Tracking

| Field Name | Type | Description | Required |
|------------|------|-------------|----------|
| Submitted At | Date & time | When form was submitted | ✅ Yes |
| Source | Single line text | "Qualification Form" | ✅ Yes |
| UTM Source | Single line text | Marketing UTM source | ❌ Optional |
| UTM Medium | Single line text | Marketing UTM medium | ❌ Optional |
| UTM Campaign | Single line text | Marketing UTM campaign | ❌ Optional |
| Referrer | Single line text | Page referrer URL | ❌ Optional |

---

## Field Options (Single/Multiple Select)

### Monthly Ad Spend Options:
- `$0 - $5,000`
- `$5,000 - $15,000`
- `$15,000 - $50,000`
- `$50,000+`
- `Not currently advertising`

### Monthly Revenue Options:
- `Under $100,000`
- `$100,000 - $500,000`
- `$500,000 - $2,000,000`
- `$2,000,000 - $10,000,000`
- `$10,000,000+`

### Timeline Options:
- `Immediate (Next 30 days)`
- `1-3 months`
- `3-6 months`
- `6+ months`
- `Just exploring options`

### Decision Maker Options:
- `Yes`
- `No`
- `Shared decision`

### Currently Running Ads Options:
- `Yes`
- `No`

### Primary Goals Options (Multiple Select):
- `Scale profitable campaigns`
- `Improve ROAS/ROI`
- `Reduce cost per acquisition`
- `Enter new markets`
- `Launch new products`
- `Fix underperforming campaigns`
- `Better tracking & attribution`
- `Explore Google Ads potential`

### Lead Type Options:
- `hot`
- `warm`
- `cold`
- `reject`

### Status Options:
- `new`
- `contacted`
- `qualified`
- `disqualified`

---

## Quick Setup Checklist

1. ✅ Log into your Airtable account
2. ✅ Open base: `appVEtlYXwBNXSEr2`
3. ✅ Create table named "Leads" (exact name, capital L)
4. ✅ Add all 23 fields from the table above
5. ✅ Configure field types exactly as specified
6. ✅ Add all select options for dropdown fields
7. ✅ Set default Status to "new" for new records
8. ✅ Test connection using the script below

---

## Testing the Connection

Create a test script to verify your Airtable setup:

```typescript
// scripts/test-airtable.ts
import { testConnection } from '../src/lib/api/airtable';

async function test() {
  console.log('Testing Airtable connection...');
  const success = await testConnection();

  if (success) {
    console.log('✅ Airtable is properly configured!');
  } else {
    console.log('❌ Airtable connection failed. Check your credentials and table setup.');
  }
}

test();
```

Run with: `npx tsx scripts/test-airtable.ts`

---

## Common Issues

### "Table not found" Error
- Make sure the table is named exactly "Leads" (capital L)
- Verify you're using the correct Base ID in `.env`

### "Field not found" Error
- Check all field names match exactly (case-sensitive)
- Verify you created all required fields

### "Invalid field type" Error
- Ensure Single Select fields have all options configured
- Check that Number fields accept decimals for Lead Score

### Permission Errors
- Verify your API key has "create" and "update" permissions
- Check the API key is not expired

---

## API Rate Limits

Airtable free tier limits:
- **5 requests per second** per base
- **1,000 records** per base (upgrade for more)

Our integration respects these limits with proper error handling.

---

## Data Privacy & Compliance

- All lead data is stored securely in Airtable
- Airtable is GDPR and CCPA compliant
- Configure Airtable's data retention policies in your base settings
- Add automated deletion workflows for old/rejected leads if needed

---

## Integration Points

This Airtable base is used by:

1. **Qualification Form** (`src/components/forms/QualificationForm.tsx`)
   - Creates new lead records on form submission
   - Stores lead score and classification

2. **Email Notifications** (`src/lib/api/resend.ts`)
   - Reads lead data for email templates
   - Updates status after emails sent

3. **Analytics Dashboard** (Future)
   - Aggregates lead metrics
   - Tracks conversion rates by lead type

---

**Last Updated:** October 25, 2025
