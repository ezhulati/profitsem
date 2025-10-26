#!/bin/bash

# Add Vercel Environment Variables
# This script adds all required environment variables to your Vercel project

set -e  # Exit on error

echo "🚀 Adding environment variables to Vercel project: profitsem"
echo ""

# Read from .env file
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ENV_FILE="$SCRIPT_DIR/../.env"

if [ ! -f "$ENV_FILE" ]; then
    echo "❌ Error: .env file not found at $ENV_FILE"
    exit 1
fi

# Function to add env variable
add_env_var() {
    local name=$1
    local value=$2
    local envs=("production" "preview" "development")

    for env in "${envs[@]}"; do
        echo "Adding $name to $env..."
        echo "$value" | vercel env add "$name" "$env" 2>&1 | grep -v "Vercel CLI" || true
    done
}

# Extract and add each variable
echo "📋 Reading variables from .env..."

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

echo ""
echo "📤 Adding variables to Vercel..."
echo ""

add_env_var "AIRTABLE_API_KEY" "$AIRTABLE_API_KEY"
add_env_var "AIRTABLE_BASE_ID" "$AIRTABLE_BASE_ID"
add_env_var "RESEND_API_KEY" "$RESEND_API_KEY"
add_env_var "RESEND_FROM_EMAIL" "$RESEND_FROM_EMAIL"
add_env_var "RESEND_NOTIFY_EMAIL" "$RESEND_NOTIFY_EMAIL"
add_env_var "PUBLIC_HCAPTCHA_SITEKEY" "$PUBLIC_HCAPTCHA_SITEKEY"
add_env_var "HCAPTCHA_SECRET" "$HCAPTCHA_SECRET"
add_env_var "PUBLIC_GA_ID" "$PUBLIC_GA_ID"
add_env_var "PUBLIC_SITE_URL" "$PUBLIC_SITE_URL"
add_env_var "PUBLIC_SITE_NAME" "$PUBLIC_SITE_NAME"

echo ""
echo "✅ All environment variables added successfully!"
echo ""
echo "Next steps:"
echo "1. Redeploy your Vercel project: vercel --prod"
echo "2. Or trigger a new deployment by pushing to GitHub"
echo ""
