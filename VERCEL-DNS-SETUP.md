# Vercel DNS Configuration for ProfitSEM

**Purpose:** Configure DNS records for Resend email service (form submissions & notifications)

---

## 📋 DNS Records to Add

### 1. Domain Verification (DKIM)
**Purpose:** Authenticates emails sent from your domain

| Type | Name | Value | TTL |
|------|------|-------|-----|
| TXT | `resend._domainkey` | `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBSM7Pc2C6Zrf6SeYVPnE7Gza2xu9zzfZ0aJFHJee02icX92ouDb+aTg9hUB5wLGxyIffl2EOl8sQCCgTTGUGC2puPAT4L3iK7xe7S/nMZHYiZ/JF5Bs43BJ/aCgnxYhn+DOR8S+pUXw7GQya2a8yYabJCUG0qv6Mxx4AP7/SItQIDAQAB` | Auto |

### 2. Mail Server Configuration (MX Record)
**Purpose:** Routes emails through Amazon SES for delivery

| Type | Name | Value | TTL | Priority |
|------|------|-------|-----|----------|
| MX | `send` | `feedback-smtp.us-east-1.amazonses.com` | 60 | 10 |

### 3. SPF Record
**Purpose:** Specifies authorized mail servers for your domain

| Type | Name | Value | TTL |
|------|------|-------|-----|
| TXT | `send` | `v=spf1 include:amazonses.com ~all` | 60 |

### 4. DMARC Policy
**Purpose:** Defines email authentication policy

| Type | Name | Value | TTL |
|------|------|-------|-----|
| TXT | `_dmarc` | `v=DMARC1; p=none;` | Auto |

---

## 🔧 How to Add DNS Records in Vercel

### Step 1: Access Vercel DNS Settings
1. Go to https://vercel.com/dashboard
2. Select your **ProfitSEM** project
3. Go to **Settings** → **Domains**
4. Click on your domain (e.g., `profitsem.com`)
5. Scroll down to **DNS Records** section

### Step 2: Add Each Record

#### Record 1: DKIM (Domain Key)
```
Type: TXT
Name: resend._domainkey
Value: p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBSM7Pc2C6Zrf6SeYVPnE7Gza2xu9zzfZ0aJFHJee02icX92ouDb+aTg9hUB5wLGxyIffl2EOl8sQCCgTTGUGC2puPAT4L3iK7xe7S/nMZHYiZ/JF5Bs43BJ/aCgnxYhn+DOR8S+pUXw7GQya2a8yYabJCUG0qv6Mxx4AP7/SItQIDAQAB
TTL: Auto
```

Click **Add** or **Save**

#### Record 2: MX (Mail Exchange)
```
Type: MX
Name: send
Value: feedback-smtp.us-east-1.amazonses.com
TTL: 60
Priority: 10
```

Click **Add** or **Save**

#### Record 3: SPF (Sender Policy Framework)
```
Type: TXT
Name: send
Value: v=spf1 include:amazonses.com ~all
TTL: 60
```

Click **Add** or **Save**

#### Record 4: DMARC (Email Authentication)
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none;
TTL: Auto
```

Click **Add** or **Save**

---

## ✅ Verification

### After Adding Records:

1. **Wait for DNS Propagation** (5-60 minutes)
   - DNS changes can take time to propagate globally
   - Usually happens within 5-15 minutes for Vercel

2. **Verify DKIM Record:**
   ```bash
   dig TXT resend._domainkey.profitsem.com
   ```
   Should return the public key starting with `p=MIGfMA0GCS...`

3. **Verify MX Record:**
   ```bash
   dig MX send.profitsem.com
   ```
   Should return `feedback-smtp.us-east-1.amazonses.com` with priority 10

4. **Verify SPF Record:**
   ```bash
   dig TXT send.profitsem.com
   ```
   Should return `v=spf1 include:amazonses.com ~all`

5. **Verify DMARC Record:**
   ```bash
   dig TXT _dmarc.profitsem.com
   ```
   Should return `v=DMARC1; p=none;`

---

## 🔐 Environment Variables to Add

After DNS is configured, add these to Vercel Environment Variables:

**Settings → Environment Variables → Add New**

### Production Variables:

```bash
# Resend Email Service
RESEND_API_KEY=re_XXXXXXXXXXXXXXXXXXXXXXXX
# (You'll get this from Resend dashboard)

# Email Configuration
RESEND_FROM_EMAIL=hello@profitsem.com
RESEND_NOTIFY_EMAIL=team@profitsem.com
```

### Where to Get Your Resend API Key:
1. Go to https://resend.com/dashboard
2. Click **API Keys**
3. Create new API key for "ProfitSEM Production"
4. Copy the key (starts with `re_`)
5. Add to Vercel environment variables

---

## 📧 Email Sending Domains

With this DNS setup, you can send emails from:

- **From Address:** `hello@profitsem.com`
- **Notifications:** `team@profitsem.com`
- **No Reply:** `noreply@profitsem.com`

All emails will be sent via the `send.profitsem.com` subdomain MX record.

---

## 🧪 Test Email Sending

After DNS propagation and API key configuration:

1. **Test Contact Form:**
   - Visit `https://profitsem.com/contact`
   - Submit a message
   - Check that email is received

2. **Test Qualification Form:**
   - Visit `https://profitsem.com/free-analysis`
   - Submit as a hot lead
   - Verify notification email sent to team

3. **Check Resend Dashboard:**
   - Go to https://resend.com/emails
   - Verify emails appear in "Sent" list
   - Check delivery status

---

## 🚨 Troubleshooting

### DNS Records Not Propagating
- **Solution:** Wait up to 60 minutes, then check again
- **Tool:** Use https://dnschecker.org to check propagation status

### Emails Not Sending
- **Check:** Resend API key is correct in Vercel env vars
- **Check:** DNS records are verified in Resend dashboard
- **Check:** No typos in email addresses

### SPF/DKIM Failures
- **Check:** Wait for full DNS propagation (can take 24-48 hours)
- **Tool:** Use https://mxtoolbox.com/SuperTool.aspx to verify records

### DMARC Issues
- **Note:** `p=none` means monitoring mode (no action taken on failures)
- **Future:** Can change to `p=quarantine` or `p=reject` after testing

---

## 📊 DNS Record Summary

| Record | Status | Purpose |
|--------|--------|---------|
| ✅ TXT `resend._domainkey` | Add this | Email authentication (DKIM) |
| ✅ MX `send` | Add this | Email routing (SES) |
| ✅ TXT `send` | Add this | Authorized senders (SPF) |
| ✅ TXT `_dmarc` | Add this | Email policy (DMARC) |

---

## 🎯 Next Steps

1. **Add all 4 DNS records** in Vercel dashboard
2. **Wait 15-30 minutes** for propagation
3. **Verify each record** using dig commands above
4. **Add Resend API key** to Vercel environment variables
5. **Test email sending** via contact form
6. **Monitor Resend dashboard** for deliverability

---

**Last Updated:** October 25, 2025
**Domain:** profitsem.com (or your actual domain)
**Service:** Resend + Amazon SES
