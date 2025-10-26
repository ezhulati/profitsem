#!/bin/bash

# Fix Vercel Environment Variables
# Removes all variables and re-adds them WITHOUT newline characters

set -e

echo "🔧 Fixing Vercel environment variables (removing \\n characters)"
echo ""

# Read from .env file
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ENV_FILE="$SCRIPT_DIR/../.env"

if [ ! -f "$ENV_FILE" ]; then
    echo "❌ Error: .env file not found at $ENV_FILE"
    exit 1
fi

echo "📋 Reading variables from .env..."
echo ""

# Extract variables WITHOUT newlines using -n flag
AIRTABLE_API_KEY=$(grep "^AIRTABLE_API_KEY=" "$ENV_FILE" | cut -d'=' -f2)
AIRTABLE_BASE_ID=$(grep "^AIRTABLE_BASE_ID=" "$ENV_FILE" | cut -d'=' -f2)
RESEND_API_KEY=$(grep "^RESEND_API_KEY=" "$ENV_FILE" | cut -d'=' -f2)
RESEND_FROM_EMAIL=$(grep "^RESEND_FROM_EMAIL=" "$ENV_FILE" | cut -d'=' -f2)
RESEND_NOTIFY_EMAIL=$(grep "^RESEND_NOTIFY_EMAIL=" "$ENV_FILE" | cut -d'=' -f2)
PUBLIC_HCAPTCHA_SITEKEY=$(grep "^PUBLIC_HCAPTCHA_SITEKEY=" "$ENV_FILE" | cut -d'=' -f2)
HCAPTCHA_SECRET=$(grep "^HCAPTCHA_SECRET=" "$ENV_FILE" | cut -d'=' -f2)
PUBLIC_GA_ID=$(grep "^PUBLIC_GA_ID=" "$ENV_FILE" | cut -d'=' -f2)
PUBLIC_SITE_URL=$(grep "^PUBLIC_SITE_URL=" "$ENV_FILE" | cut -d'=' -f2)
PUBLIC_SITE_NAME=$(grep "^PUBLIC_SITE_NAME=" "$ENV_FILE" | cut -d'=' -f2)

# Function to remove and re-add env variable
fix_env_var() {
    local name=$1
    local value=$2
    local envs=("production" "preview" "development")

    for env in "${envs[@]}"; do
        echo "Removing old $name from $env..."
        vercel env rm "$name" "$env" --yes 2>&1 | grep -v "Vercel CLI" || true

        echo "Adding fixed $name to $env..."
        # Use printf instead of echo to avoid newlines
        printf "%s" "$value" | vercel env add "$name" "$env" 2>&1 | grep -v "Vercel CLI" || true
    done
    echo ""
}

echo "🗑️  Removing and re-adding variables without \\n..."
echo ""

fix_env_var "AIRTABLE_API_KEY" "$AIRTABLE_API_KEY"
fix_env_var "AIRTABLE_BASE_ID" "$AIRTABLE_BASE_ID"
fix_env_var "RESEND_API_KEY" "$RESEND_API_KEY"
fix_env_var "RESEND_FROM_EMAIL" "$RESEND_FROM_EMAIL"
fix_env_var "RESEND_NOTIFY_EMAIL" "$RESEND_NOTIFY_EMAIL"
fix_env_var "PUBLIC_HCAPTCHA_SITEKEY" "$PUBLIC_HCAPTCHA_SITEKEY"
fix_env_var "HCAPTCHA_SECRET" "$HCAPTCHA_SECRET"
fix_env_var "PUBLIC_GA_ID" "$PUBLIC_GA_ID"
fix_env_var "PUBLIC_SITE_URL" "$PUBLIC_SITE_URL"
fix_env_var "PUBLIC_SITE_NAME" "$PUBLIC_SITE_NAME"

echo ""
echo "✅ All environment variables fixed!"
echo ""
echo "Next step: Redeploy to apply changes"
echo "  vercel --prod"
echo ""
