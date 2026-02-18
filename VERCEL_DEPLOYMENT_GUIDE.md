# 🚀 Deploy to Vercel - Complete Guide

## Option 1: Deploy from GitHub (Recommended) ⭐

### Step 1: Upload to GitHub First
1. Follow `UPLOAD_TO_GITHUB.md` to push your code to GitHub
2. Make sure your repository is created and code is pushed

### Step 2: Deploy on Vercel
1. Go to **https://vercel.com/**
2. Click **"Sign Up"** or **"Login"**
3. Choose **"Continue with GitHub"**
4. Click **"Import Project"**
5. Select your repository: `ai-website-builder`
6. Click **"Import"**
7. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
8. Click **"Deploy"**

### Step 3: Wait for Deployment
- Takes 1-2 minutes
- You'll get a live URL like: `https://ai-website-builder.vercel.app`

---

## Option 2: Upload Folder Directly

### Step 1: Build Your Project
```bash
npm run build
```

This creates a `dist` folder with your built website.

### Step 2: Upload to Vercel

#### Method A: Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

#### Method B: Drag & Drop
1. Go to **https://vercel.com/new**
2. Click **"Browse"** or drag the `dist` folder
3. **IMPORTANT**: Select the `dist` folder, NOT the root folder
4. Click **"Deploy"**

---

## 📁 What to Upload?

### ✅ If Using GitHub (Option 1):
- Upload entire project folder
- Vercel will build it automatically

### ✅ If Uploading Directly (Option 2):
- **Only upload the `dist` folder**
- Location: `C:\Users\ANISH\OneDrive\Desktop\AI website\dist`

---

## 🔧 Vercel Configuration

Create `vercel.json` in your project root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 🌍 Environment Variables on Vercel

### Step 1: Go to Project Settings
1. Open your project on Vercel
2. Click **"Settings"**
3. Click **"Environment Variables"**

### Step 2: Add Variables
Add these if using Firebase:

```
VITE_FIREBASE_API_KEY = your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN = your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID = your_project_id
VITE_FIREBASE_STORAGE_BUCKET = your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID = your_sender_id
VITE_FIREBASE_APP_ID = your_app_id
```

### Step 3: Redeploy
Click **"Redeploy"** to apply changes

---

## 📍 Finding Your Dist Folder

### Windows:
```
C:\Users\ANISH\OneDrive\Desktop\AI website\dist
```

### To Create Dist Folder:
```bash
# Run this in your project folder
npm run build
```

This creates the `dist` folder with:
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
└── vite.svg
```

---

## 🎯 Step-by-Step: Direct Upload

### 1. Build the Project
Open terminal in project folder:
```bash
npm run build
```

### 2. Locate Dist Folder
- Open File Explorer
- Navigate to: `C:\Users\ANISH\OneDrive\Desktop\AI website`
- You'll see a `dist` folder

### 3. Upload to Vercel
1. Go to: **https://vercel.com/new**
2. Sign in with GitHub/Email
3. Click **"Browse"**
4. Select the **`dist`** folder (not the project folder!)
5. Click **"Upload"**
6. Wait 30 seconds
7. Get your live URL!

---

## ⚡ Quick Deploy Commands

### First Time:
```bash
# Build
npm run build

# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Future Deploys:
```bash
# Build and deploy
npm run build
vercel --prod
```

---

## 🔄 Auto-Deploy from GitHub

### Setup (One Time):
1. Push code to GitHub
2. Connect GitHub to Vercel
3. Import repository

### Every Update:
1. Make changes locally
2. Commit: `git commit -m "Update"`
3. Push: `git push`
4. Vercel auto-deploys! ✨

---

## 🌐 Custom Domain

### Step 1: Add Domain
1. Go to project settings
2. Click **"Domains"**
3. Add your domain: `yourdomain.com`

### Step 2: Configure DNS
Add these records to your domain:

**A Record:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 3: Wait
- DNS propagation: 5 minutes - 48 hours
- Usually works in 10-30 minutes

---

## 🐛 Troubleshooting

### "Build Failed"
```bash
# Make sure build works locally first
npm run build

# Check for errors
npm run build -- --debug
```

### "404 Not Found"
- Make sure you uploaded the `dist` folder
- Check vercel.json has correct rewrites

### "Environment Variables Not Working"
- Add `VITE_` prefix to all variables
- Redeploy after adding variables

### "Can't Find Dist Folder"
```bash
# Create it
npm run build

# Check it exists
dir dist
```

---

## 📊 Deployment Checklist

Before deploying:
- [ ] Run `npm run build` successfully
- [ ] Test locally: `npm run preview`
- [ ] Remove API keys from code
- [ ] Add environment variables on Vercel
- [ ] Update Firebase config if needed
- [ ] Test all features work

---

## 🎉 After Deployment

Your site is live! Share it:

```
🚀 Live Demo: https://your-project.vercel.app
⭐ GitHub: https://github.com/YOUR_USERNAME/ai-website-builder
```

### Monitor Your Site:
- **Analytics**: Vercel dashboard
- **Logs**: Real-time logs in Vercel
- **Performance**: Lighthouse scores
- **Errors**: Error tracking

---

## 💰 Vercel Pricing

### Free (Hobby):
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Custom domains
- ✅ Perfect for personal projects

### Pro ($20/month):
- Everything in Free
- More bandwidth
- Team features
- Priority support

---

## 🔗 Useful Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Documentation**: https://vercel.com/docs
- **Support**: https://vercel.com/support

---

## 🚀 Quick Start Summary

**Easiest Way (GitHub):**
1. Push to GitHub
2. Import on Vercel
3. Deploy!

**Direct Upload:**
1. Run `npm run build`
2. Upload `dist` folder to Vercel
3. Done!

---

**Your AI Website Builder will be live in minutes!** 🎉
