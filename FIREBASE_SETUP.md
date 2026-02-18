# Firebase Setup Guide

## Step 1: Create Firebase Project

1. Go to **https://console.firebase.google.com/**
2. Click **"Add project"**
3. Enter project name (e.g., "ai-website-builder")
4. Disable Google Analytics (optional)
5. Click **"Create project"**

## Step 2: Enable Authentication

1. In Firebase Console, click **"Authentication"**
2. Click **"Get started"**
3. Enable these sign-in methods:
   - ✅ **Email/Password**
   - ✅ **Google**
   - ✅ **Phone** (for OTP)

### For Phone Authentication:
1. Click on **"Phone"** tab
2. Enable it
3. Add test phone numbers if needed
4. Save

## Step 3: Create Firestore Database

1. Click **"Firestore Database"** in sidebar
2. Click **"Create database"**
3. Choose **"Start in production mode"**
4. Select location (closest to your users)
5. Click **"Enable"**

### Set Firestore Rules:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Websites collection
    match /websites/{websiteId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
                      request.resource.data.userId == request.auth.uid;
    }
  }
}
```

## Step 4: Enable Storage

1. Click **"Storage"** in sidebar
2. Click **"Get started"**
3. Use default rules
4. Click **"Done"**

## Step 5: Get Firebase Config

1. Click **⚙️ Settings** icon
2. Click **"Project settings"**
3. Scroll to **"Your apps"**
4. Click **Web icon** (</>) to add web app
5. Register app name
6. Copy the configuration object

## Step 6: Add Config to Your App

1. Open `src/config/firebase.js`
2. Replace the config with your values:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:xxxxxxxxxxxxx"
};
```

## Step 7: Environment Variables (Recommended)

Create `.env` file in root:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Update `firebase.js`:
```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
```

## Features Enabled

### ✅ Authentication
- Email/Password login
- Google Sign-In
- Phone OTP verification
- Email verification

### ✅ Firestore Database
- User profiles
- Website storage
- Payment history
- Settings

### ✅ Storage
- Website files
- User uploads
- Images

## Data Structure

### Users Collection:
```javascript
{
  uid: "user_id",
  name: "John Doe",
  email: "john@example.com",
  phone: "+1234567890",
  photoURL: "https://...",
  isPremium: false,
  plan: "free",
  customDomain: null,
  websites: [],
  createdAt: "2026-02-18T...",
  updatedAt: "2026-02-18T..."
}
```

### Websites Collection:
```javascript
{
  id: "website_id",
  userId: "user_id",
  name: "My Website",
  url: "https://...",
  code: "<html>...</html>",
  deploymentId: "deploy_123",
  createdAt: "2026-02-18T...",
  updatedAt: "2026-02-18T..."
}
```

## Security Best Practices

1. **Never commit** `.env` file
2. **Add to .gitignore**:
   ```
   .env
   .env.local
   ```
3. **Use environment variables** for all secrets
4. **Enable App Check** for production
5. **Set up proper Firestore rules**
6. **Enable 2FA** on Firebase account

## Testing

1. Test email/password signup
2. Test Google sign-in
3. Test phone OTP
4. Verify Firestore writes
5. Check Storage uploads

## Costs

### Free Tier (Spark Plan):
- **Authentication**: Unlimited
- **Firestore**: 1GB storage, 50K reads/day, 20K writes/day
- **Storage**: 5GB, 1GB/day downloads
- **Perfect for**: Development and small apps

### Paid Tier (Blaze Plan):
- Pay as you go
- First tier is still free
- Only pay for usage above free tier

## Next Steps

1. ✅ Create Firebase project
2. ✅ Enable authentication methods
3. ✅ Set up Firestore
4. ✅ Get configuration
5. ✅ Add to your app
6. ✅ Test authentication
7. ✅ Deploy!

---

**Your Firebase backend is ready!** 🚀
