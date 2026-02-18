# 🚀 Complete Setup Guide - AI Website Builder

## Overview

This guide will help you set up:
1. ✅ Multi-page AI website generation
2. ✅ Firebase authentication
3. ✅ Firestore database
4. ✅ Google Gemini AI integration

---

## Part 1: Firebase Setup (Backend)

### Step 1: Create Firebase Project

1. Visit: **https://console.firebase.google.com/**
2. Click **"Add project"**
3. Name: `ai-website-builder`
4. Disable Analytics (optional)
5. Click **"Create project"**

### Step 2: Enable Authentication

1. Go to **Authentication** → **Get started**
2. Enable these methods:
   - ✅ Email/Password
   - ✅ Google
   - ✅ Phone

### Step 3: Create Firestore Database

1. Go to **Firestore Database** → **Create database**
2. Choose **Production mode**
3. Select your region
4. Click **Enable**

### Step 4: Get Firebase Config

1. Click ⚙️ **Settings** → **Project settings**
2. Scroll to **Your apps**
3. Click **Web** icon (</>)
4. Register app
5. Copy the config object

### Step 5: Add Config to App

Open `src/config/firebase.js` and replace with your config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

---

## Part 2: Gemini AI Setup

### Step 1: Get API Key

1. Visit: **https://aistudio.google.com/app/apikey**
2. Sign in with Google
3. Click **"Create API Key"**
4. Copy the key

### Step 2: Add to App

1. Open the website: `http://localhost:5174`
2. Login/Signup
3. Click **"Enable AI Generation"**
4. Paste your API key
5. Click **"Save"**

---

## Part 3: Multi-Page Website Generation

### How It Works

The AI now generates websites with:
- ✅ **Multiple pages** (Home, About, Services, Contact, etc.)
- ✅ **Working navigation** between pages
- ✅ **Smooth transitions**
- ✅ **Interactive elements**
- ✅ **Responsive design**
- ✅ **All in one HTML file**

### Example Prompts for Multi-Page Sites

#### E-commerce Store:
```
Create a complete e-commerce website for a tech gadgets store with:
- Home page with featured products and hero section
- Products page with filterable grid
- Product detail pages
- Shopping cart page
- Checkout page
- About us page
- Contact page with form
Use dark theme with blue accents and smooth animations
```

#### Business Website:
```
Build a professional business website for a marketing agency with:
- Home page with services overview
- About page with team members
- Services page with detailed offerings
- Portfolio page with case studies
- Blog page with articles
- Contact page with form and map
Modern design with gradient backgrounds
```

#### Restaurant Website:
```
Design a restaurant website with:
- Home page with hero image and specials
- Menu page with categories (appetizers, mains, desserts)
- About page with restaurant story
- Gallery page with food photos
- Reservations page with booking form
- Contact page with location and hours
Warm colors and elegant design
```

---

## Part 4: Project Structure

```
ai-website-builder/
├── src/
│   ├── config/
│   │   └── firebase.js          # Firebase configuration
│   ├── services/
│   │   └── authService.js       # Authentication functions
│   ├── utils/
│   │   ├── aiWebsiteGenerator.js    # AI generation (multi-page)
│   │   ├── websiteGenerator.js      # Template generation
│   │   └── deploymentService.js     # Deployment logic
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   │   ├── MyWebsites.jsx
│   │   ├── Premium.jsx
│   │   └── Payment.jsx
│   └── App.jsx
├── FIREBASE_SETUP.md
├── GEMINI_API_SETUP.md
└── package.json
```

---

## Part 5: Features Overview

### Current Features

#### 🤖 AI Generation
- Multi-page websites
- Custom animations
- Interactive elements
- Responsive design
- Working navigation
- Forms and buttons

#### 🔐 Authentication
- Email/Password
- Google Sign-In
- Phone OTP
- Email verification

#### 💾 Database
- User profiles
- Website storage
- Payment history
- Settings sync

#### 💳 Payment
- Stripe integration ready
- Premium plans
- Custom domains
- Unlimited websites

#### 🚀 Deployment
- One-click deploy
- Live preview
- Download files
- Website management

---

## Part 6: Installation & Running

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## Part 7: Environment Variables

Create `.env` file:

```env
# Firebase
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Gemini AI (optional - can be added in UI)
VITE_GEMINI_API_KEY=your_gemini_api_key
```

Add to `.gitignore`:
```
.env
.env.local
node_modules/
dist/
```

---

## Part 8: Testing

### Test Authentication
1. Sign up with email
2. Verify email
3. Login
4. Test Google sign-in
5. Test phone OTP

### Test AI Generation
1. Add Gemini API key
2. Enter detailed prompt
3. Wait for generation (5-10 seconds)
4. Check multiple pages
5. Test navigation
6. Test responsiveness

### Test Deployment
1. Generate website
2. Click "Deploy Live"
3. Check preview
4. Download files
5. View in "My Websites"

---

## Part 9: Costs

### Firebase (Free Tier)
- Authentication: Unlimited
- Firestore: 1GB storage, 50K reads/day
- Storage: 5GB
- **Cost**: FREE for small apps

### Gemini AI (Free Tier)
- 60 requests per minute
- **Cost**: FREE

### Total Monthly Cost
- **Development**: $0
- **Small Production**: $0-$5
- **Medium Production**: $5-$25
- **Large Production**: $25-$100+

---

## Part 10: Deployment to Production

### Option 1: Netlify
```bash
npm run build
# Drag dist/ folder to Netlify
```

### Option 2: Vercel
```bash
npm run build
vercel --prod
```

### Option 3: Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

---

## Part 11: Next Steps

### Immediate
- [x] Set up Firebase
- [x] Add Gemini API key
- [x] Test multi-page generation
- [x] Test authentication

### Short Term
- [ ] Add Stripe payment
- [ ] Implement real deployment (Netlify API)
- [ ] Add custom domain DNS
- [ ] Email notifications
- [ ] SMS OTP (Twilio)

### Long Term
- [ ] Team collaboration
- [ ] Version control
- [ ] A/B testing
- [ ] Analytics dashboard
- [ ] Template marketplace
- [ ] API for developers

---

## Part 12: Troubleshooting

### Firebase Issues
**"Firebase not initialized"**
- Check firebase.js config
- Verify API keys
- Check Firebase console

### AI Generation Issues
**"Failed to generate"**
- Check Gemini API key
- Verify internet connection
- Try simpler prompt first

### Multi-Page Issues
**"Navigation not working"**
- Check JavaScript in generated code
- Verify page sections exist
- Test in different browsers

---

## 🎉 You're Ready!

1. ✅ Firebase backend configured
2. ✅ Gemini AI integrated
3. ✅ Multi-page generation enabled
4. ✅ Authentication working
5. ✅ Database connected

**Start building amazing multi-page websites with AI!** 🚀

---

## Support

- Firebase Docs: https://firebase.google.com/docs
- Gemini AI Docs: https://ai.google.dev/docs
- React Docs: https://react.dev

## License

MIT
