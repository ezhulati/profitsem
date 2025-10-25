# Deployment Verification Checklist

## 🔍 Monitor Deployment on Vercel

### 1. Check Deployment Status
Go to: https://vercel.com/ezhulatis-projects/profitsem

**Look for:**
- ✅ Build status: "Ready" (green)
- ❌ Build status: "Error" (red) - click to see logs

### 2. Verify Environment Variables

**Required Variables in Vercel Dashboard:**
```
Settings → Environment Variables
```

Add these if missing:
- `RESEND_API_KEY` = `re_XypgqF2J_KfpDTTvYaKpgRKBGHQ6uKoF5`
- `PUBLIC_GA_ID` = `G-1VD398ZYFC` (optional)
- `PUBLIC_SITE_URL` = `https://profitsem.com`

**Important:** Make sure to select all environments (Production, Preview, Development)

### 3. Check Build Logs

If deployment fails, click on the failed deployment → "View Function Logs"

**Common Issues to Look For:**
- Missing dependencies
- TypeScript errors
- Missing environment variables
- Runtime errors

### 4. Test Health Endpoint

Once deployed, visit:
```
https://profitsem.com/api/health
```

**Expected Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-10-24T...",
  "environment": {
    "resendApiKey": true,
    "nodeVersion": "20.x.x",
    "platform": "linux"
  },
  "services": {
    "resend": "connected"
  }
}
```

**If resend shows "missing" or "connection_failed":**
- Check that `RESEND_API_KEY` is set in Vercel environment variables
- Redeploy after adding the variable

### 5. Test Email Functionality

**Test Contact Form:**
1. Go to https://profitsem.com/contact
2. Fill out the form
3. Submit
4. Check `team@profitsem.com` for notification email
5. Check the email you provided for auto-reply

**Test Lead Qualification:**
1. Go to https://profitsem.com/free-analysis
2. Fill out the form with high-value answers (triggers HOT lead)
3. Submit
4. Check `team@profitsem.com` for lead notification with score
5. Check provided email for personalized response

### 6. Check Function Logs

In Vercel Dashboard:
```
Deployments → [Latest] → Functions → Logs
```

**Look for:**
- Email send confirmations
- Any error messages
- API call traces

### 7. Verify Domain DNS

Make sure these DNS records are still active on Vercel:
```
Domain: profitsem.com

DKIM:
- Type: TXT
- Name: resend._domainkey
- Value: p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBSM7Pc2C6Zrf6SeYVPnE7Gza2xu9zzfZ0aJFHJee02icX92ouDb+aTg9hUB5wLGxyIffl2EOl8sQCCgTTGUGC2puPAT4L3iK7xe7S/nMZHYiZ/JF5Bs43BJ/aCgnxYhn+DOR8S+pUXw7GQya2a8yYabJCUG0qv6Mxx4AP7/SItQIDAQAB

MX (send subdomain):
- Type: MX
- Name: send
- Value: feedback-smtp.us-east-1.amazonses.com
- Priority: 10

SPF (send subdomain):
- Type: TXT
- Name: send
- Value: v=spf1 include:amazonses.com ~all

DMARC:
- Type: TXT
- Name: _dmarc
- Value: v=DMARC1; p=none;
```

## 🐛 Common Errors & Fixes

### Error: "Missing API Key"
**Fix:** Add `RESEND_API_KEY` to Vercel environment variables and redeploy

### Error: "Domain not verified"
**Fix:** Verify domain in Resend dashboard at https://resend.com/domains

### Error: "CORS issues"
**Fix:** The API endpoints don't need CORS since they're same-origin

### Error: "JSON parse error"
**Fix:** Make sure form is sending proper JSON body with Content-Type header

### Build fails with "Invalid runtime"
**Fix:** Already fixed - we're using Node 20 runtime via Astro adapter

## 📊 Success Metrics

Once deployed successfully, you should see:
- ✅ Health endpoint returns "connected" for Resend
- ✅ Contact form submissions send emails
- ✅ Lead form submissions categorize and send appropriate emails
- ✅ Vercel Analytics tracking pageviews
- ✅ No errors in Function logs

## 🔗 Important URLs

- **Production Site:** https://profitsem.com
- **Health Check:** https://profitsem.com/api/health
- **Vercel Dashboard:** https://vercel.com/ezhulatis-projects/profitsem
- **Resend Dashboard:** https://resend.com/emails
- **GitHub Repo:** https://github.com/ezhulati/profitsem
