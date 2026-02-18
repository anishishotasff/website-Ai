# Testing Guide - AI Website Builder

## 🌐 Access the App
**URL:** http://localhost:5174/

## ✅ Fixed Issues

### 1. Deployment Working
- Click "Generate Website" - creates the website
- Click "Deploy Live" - generates a live URL
- URL is displayed and clickable
- Website is saved to "My Websites"

### 2. Enhanced Animations
All generated websites now include:
- Smooth fade-in animations
- Hover effects with scale and shadow
- Gradient animations
- Floating elements
- Slide-in transitions
- Pulse effects
- Shimmer effects

## 🎨 Test Different Website Types

### Portfolio Website
**Prompt:** `Create a portfolio website for a developer`

**Features:**
- Animated gradient background
- Floating skill tags
- Project cards with hover effects
- Smooth transitions

### Restaurant/Cafe Website
**Prompt:** `Make a restaurant website with menu`

**Features:**
- Animated header with pulse effect
- Menu items slide in from left
- Price tags with pulse animation
- Sticky navigation
- Shimmer effects

### Landing Page
**Prompt:** `Create a landing page for a SaaS product`

**Features:**
- Multi-gradient animated hero
- Floating feature icons
- Scale-in animations
- Statistics counter section
- Shimmer overlay effects

### E-commerce Store
**Prompt:** `Build an online shop for clothing`

**Features:**
- Product cards with hover zoom
- Bouncing sale badges
- Smooth cart button animations
- Grid layout with staggered animations

### Blog Website
**Prompt:** `Create a blog website`

**Features:**
- Clean typography
- Animated post cards
- Smooth hover effects

## 🧪 Complete Testing Flow

### Step 1: Sign Up
1. Go to http://localhost:5174/
2. Click "Get Started" or "Sign up"
3. Fill in:
   - Name: Test User
   - Email: test@example.com
   - Phone: +1234567890
   - Password: test123
4. Click "Sign Up"
5. Note the OTP shown in alert (e.g., 123456)

### Step 2: Verify OTP
1. Enter the 6-digit OTP
2. Click "Verify"
3. You'll be redirected to Dashboard

### Step 3: Generate Website
1. Enter a prompt (try any from above)
2. Click "Generate Website"
3. Wait 1.5 seconds
4. See the animated preview

### Step 4: Deploy Website
1. Click "Deploy Live" button
2. Wait 2 seconds for deployment
3. See success message
4. See the deployed URL appear
5. Click the URL to open in new tab

### Step 5: Download Files
1. Click "Download Files"
2. Get HTML, CSS, and JS files
3. Files are organized and separated

### Step 6: View My Websites
1. Click "My Websites" in navigation
2. See all deployed websites
3. View mini previews
4. Click "View Live" to open
5. Click "Delete" to remove

### Step 7: Upgrade to Premium
1. Click "Upgrade" button
2. Choose "Pro" plan ($29/month)
3. Click "Upgrade Now"
4. Fill in payment details:
   - Card: 4242 4242 4242 4242
   - Name: Test User
   - Expiry: 12/28
   - CVV: 123
5. Click "Pay $29.00"
6. Wait 2 seconds
7. See success message

### Step 8: Set Custom Domain (Premium Only)
1. Generate a new website
2. Click "Set Custom Domain"
3. Enter: mycompany.com
4. Click "Save"
5. Deploy the website
6. URL will use your custom domain

## 🎯 Animation Features to Notice

### On All Websites:
- ✅ Fade-in animations on page load
- ✅ Smooth hover effects
- ✅ Scale transformations
- ✅ Color transitions
- ✅ Shadow animations
- ✅ Gradient movements
- ✅ Floating elements
- ✅ Slide-in effects
- ✅ Pulse animations
- ✅ Staggered animations (elements appear one by one)

### Interactive Elements:
- Buttons grow on hover
- Cards lift up on hover
- Images zoom on hover
- Badges bounce
- Backgrounds shimmer
- Icons float

## 🐛 Known Limitations (Demo Mode)

1. **OTP** - Shown in alert (in production, sent via SMS)
2. **Payment** - Simulated (in production, use Stripe/PayPal)
3. **Deployment** - Simulated URLs (in production, use Netlify/Vercel)
4. **Storage** - LocalStorage (in production, use database)
5. **Download** - Text file (in production, use JSZip for real ZIP)

## 💡 Tips

- Try different prompts to see different templates
- Hover over elements to see animations
- Scroll to see fade-in effects
- Premium features unlock after payment
- All data persists in browser storage

## 🎨 Prompt Examples for Best Results

```
Create a modern portfolio website for a web developer
```
```
Build a restaurant website with animated menu
```
```
Make a landing page for a SaaS startup
```
```
Create an online store for fashion products
```
```
Design a blog website for tech articles
```
```
Build a coffee shop website with menu and contact
```

Enjoy testing! 🚀
