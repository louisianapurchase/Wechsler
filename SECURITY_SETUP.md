# Security Setup Guide

## Overview
Your Firebase credentials are now hidden from the public repository while still working on GitHub Pages. Secrets are injected at build time by GitHub Actions.

## Setup Instructions

### 1. Add GitHub Repository Secrets

Go to your repository settings and add these secrets:

1. Navigate to: **Settings** → **Secrets and variables** → **Actions**
2. Click **"New repository secret"** and add each of these:

| Secret Name | Value | Location |
|-------------|-------|----------|
| `FIREBASE_API_KEY` | Your Firebase API Key | Firebase Console |
| `FIREBASE_AUTH_DOMAIN` | `mountainliontech-f4a19.firebaseapp.com` | Firebase Console |
| `FIREBASE_PROJECT_ID` | `mountainliontech-f4a19` | Firebase Console |
| `FIREBASE_STORAGE_BUCKET` | `mountainliontech-f4a19.firebasestorage.app` | Firebase Console |
| `FIREBASE_MESSAGING_SENDER_ID` | `605785106462` | Firebase Console |
| `FIREBASE_APP_ID` | `1:605785106462:web:70299abcafea61cf74260f` | Firebase Console |

### 2. How It Works

- **js/config.js** contains placeholders (e.g., `###FIREBASE_API_KEY###`)
- When you push to the repository, GitHub Actions automatically:
  1. Replaces placeholders with actual secrets
  2. Deploys to GitHub Pages
- The public repository never contains your actual credentials
- Everything still works the same on your deployed site

### 3. Enable GitHub Pages

1. Go to **Settings** → **Pages**
2. Set **Source** to `Deploy from a branch`
3. Select `main` (or `master`) branch
4. Save

## Security Best Practices

✅ **Following:**
- Secrets are not in the public repository
- Credentials are injected at build time
- `.env` files are in `.gitignore`
- Only deployed site has actual credentials

⚠️ **Important:**
- Never commit actual credentials to the repository
- Always use GitHub Secrets for sensitive data
- The deployed site will contain credentials in the final HTML (this is necessary for client-side Firebase)
- Rotate your Firebase keys periodically if compromised

## Troubleshooting

If the contact form doesn't work:
1. Check that all GitHub Secrets are correctly set
2. Go to **Actions** tab and check the latest workflow run
3. Look for errors in the "Inject secrets into config" step

## Additional Files to Protect

Make sure these remain hidden (already in .gitignore):
- `.env` files
- `secrets/` directory
- `*_private.*` files
- `*.key` files
- `*.token` files
