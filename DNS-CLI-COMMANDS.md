# Vercel DNS CLI Commands - Quick Reference

**Issue:** Network connectivity to `api.vercel.com` is currently unavailable
**Solution:** Run these commands when connectivity is restored

---

## 🚀 Option 1: Run the Automated Script

I've created a script that adds all 4 DNS records automatically:

```bash
cd /Users/ez/Desktop/AI\ Library/Apps/GrowMyAds
./add-dns-records.sh
```

**Note:** Update `DOMAIN="profitsem.com"` in the script if using a different domain.

---

## 🔧 Option 2: Run Individual Commands

### Prerequisites:
```bash
# Make sure you're in the project directory
cd /Users/ez/Desktop/AI\ Library/Apps/GrowMyAds

# Replace YOURDOMAIN.com with your actual domain
DOMAIN="profitsem.com"
```

### Command 1: Add DKIM Record (Email Authentication)
```bash
npx vercel dns add "$DOMAIN" resend._domainkey TXT "p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBSM7Pc2C6Zrf6SeYVPnE7Gza2xu9zzfZ0aJFHJee02icX92ouDb+aTg9hUB5wLGxyIffl2EOl8sQCCgTTGUGC2puPAT4L3iK7xe7S/nMZHYiZ/JF5Bs43BJ/aCgnxYhn+DOR8S+pUXw7GQya2a8yYabJCUG0qv6Mxx4AP7/SItQIDAQAB"
```

### Command 2: Add MX Record (Mail Server)
```bash
npx vercel dns add "$DOMAIN" send MX "feedback-smtp.us-east-1.amazonses.com" --ttl 60
```

**Note:** You may need to specify priority with `--priority 10` if the command supports it.

### Command 3: Add SPF Record (Sender Authorization)
```bash
npx vercel dns add "$DOMAIN" send TXT "v=spf1 include:amazonses.com ~all" --ttl 60
```

### Command 4: Add DMARC Record (Email Policy)
```bash
npx vercel dns add "$DOMAIN" _dmarc TXT "v=DMARC1; p=none;"
```

---

## ✅ Verify Records Were Added

List all DNS records for your domain:
```bash
npx vercel dns ls profitsem.com
```

---

## 🔍 Verify DNS Propagation (After 15-30 minutes)

### Check DKIM:
```bash
dig TXT resend._domainkey.profitsem.com
```

Expected output should contain:
```
p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBSM7Pc2C6Zrf6SeYVPnE7Gza2xu9zzfZ0aJFHJee02icX92ouDb+aTg9hUB5wLGxyIffl2EOl8sQCCgTTGUGC2puPAT4L3iK7xe7S/nMZHYiZ/JF5Bs43BJ/aCgnxYhn+DOR8S+pUXw7GQya2a8yYabJCUG0qv6Mxx4AP7/SItQIDAQAB
```

### Check MX:
```bash
dig MX send.profitsem.com
```

Expected output:
```
send.profitsem.com. 60 IN MX 10 feedback-smtp.us-east-1.amazonses.com.
```

### Check SPF:
```bash
dig TXT send.profitsem.com
```

Expected output should contain:
```
v=spf1 include:amazonses.com ~all
```

### Check DMARC:
```bash
dig TXT _dmarc.profitsem.com
```

Expected output should contain:
```
v=DMARC1; p=none;
```

---

## 🌐 Alternative: Use Online DNS Checker

If `dig` is not available, use these online tools:
- https://dnschecker.org
- https://mxtoolbox.com/SuperTool.aspx

Enter your domain and record type to verify.

---

## 🚨 Troubleshooting

### Error: "getaddrinfo ENOTFOUND api.vercel.com"
**Cause:** No internet connectivity or firewall blocking Vercel API
**Solution:**
- Check internet connection
- Try again when network is available
- Check firewall/VPN settings

### Error: "Domain not found"
**Cause:** Domain not added to Vercel project
**Solution:**
```bash
# First add domain to Vercel project
npx vercel domains add profitsem.com
```

### Error: "Unauthorized"
**Cause:** Not logged in to Vercel CLI
**Solution:**
```bash
npx vercel login
```

### Record Already Exists
**Solution:** Remove existing record first
```bash
# List records to find the record ID
npx vercel dns ls profitsem.com

# Remove specific record
npx vercel dns rm <record-id>

# Then add the new record
```

---

## 📋 After DNS Records Are Added

### 1. Add Environment Variables to Vercel

Go to Vercel Dashboard → Settings → Environment Variables:

```bash
# Resend API Key (get from https://resend.com/api-keys)
RESEND_API_KEY=re_XXXXXXXXXXXXXXXXXXXXXXXX

# Email configuration
RESEND_FROM_EMAIL=hello@profitsem.com
RESEND_NOTIFY_EMAIL=team@profitsem.com
```

### 2. Redeploy Application

After adding environment variables:
```bash
npx vercel --prod
```

Or trigger redeploy from Vercel Dashboard.

### 3. Test Email Sending

- Visit `/contact` and submit a test message
- Visit `/free-analysis` and submit a test lead
- Check Resend dashboard for delivery status

---

## 📊 DNS Records Summary

| Status | Type | Name | Purpose |
|--------|------|------|---------|
| ⏳ Pending | TXT | resend._domainkey | DKIM authentication |
| ⏳ Pending | MX | send | Mail server routing |
| ⏳ Pending | TXT | send | SPF sender authorization |
| ⏳ Pending | TXT | _dmarc | DMARC policy |

Run the commands above to change status to ✅ Complete

---

**Created:** October 25, 2025
**Network Issue:** `api.vercel.com` unreachable
**Next Action:** Run `./add-dns-records.sh` when connectivity restored
