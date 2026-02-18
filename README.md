# AI Website Builder

An AI-powered website builder platform that generates and deploys websites instantly based on user prompts. Perfect for startups and entrepreneurs who need a professional web presence quickly.

## ✨ Features

### 🔐 Authentication & Security
- User signup with phone number
- OTP verification for login and signup
- Secure session management

### 🤖 AI Website Generation
- Generate complete websites from text prompts
- Multiple website types: Portfolio, Restaurant, Landing Page, Blog
- Real-time preview of generated websites
- Intelligent template selection based on prompt

### 📦 Download & Deploy
- **Download Source Files**: Get separate HTML, CSS, and JavaScript files
- **One-Click Deployment**: Deploy websites instantly and get live URLs
- **My Websites Dashboard**: Manage all your deployed websites
- View, delete, and access all your created websites

### 💎 Premium Features
- **Unlimited website generation** (Free: 5/month)
- **Custom domain support** - Use your own domain name
- **Premium templates** - Access to advanced designs
- **Priority support** - Get help faster
- **Advanced customization** - More control over your websites

### 💳 Payment Integration
- Secure payment processing
- Multiple pricing tiers: Free, Pro ($29/mo), Enterprise ($99/mo)
- Card payment with validation
- Instant premium activation

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📖 How to Use

1. **Visit Homepage** - See features and pricing
2. **Sign Up** - Create account with phone verification
3. **Verify OTP** - Enter the 6-digit code sent to your phone
4. **Generate Website** - Describe your website in the dashboard
5. **Preview** - See your website in real-time
6. **Deploy** - Get a live URL instantly
7. **Download** - Get HTML, CSS, and JS files
8. **Manage** - View all websites in "My Websites"

## 💡 Example Prompts

Try these prompts to generate different types of websites:

```
Create a modern portfolio website for a developer
```
```
Make a landing page for a coffee shop with menu
```
```
Build a restaurant website with contact information
```
```
Create a blog website with multiple posts
```
```
Design a product landing page for a SaaS startup
```

## 🎯 Premium Benefits

### Pro Plan ($29/month)
- ✅ Unlimited websites
- ✅ Premium templates
- ✅ Custom domains
- ✅ Priority support
- ✅ Advanced customization

### Enterprise Plan ($99/month)
- ✅ Everything in Pro
- ✅ Team collaboration
- ✅ API access
- ✅ White-label solution
- ✅ Dedicated support

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Storage**: LocalStorage (Demo - use database in production)
- **Styling**: Custom CSS with modern gradients

## 📱 Pages

- **Home** - Landing page with features
- **Login/Signup** - Authentication with OTP
- **Dashboard** - Main workspace for generation
- **My Websites** - Manage deployed websites
- **Premium** - Pricing and plans
- **Payment** - Secure checkout

## 🔒 Security Notes

This is a demo application using localStorage. For production:
- Implement real backend with database
- Use proper authentication (JWT, OAuth)
- Integrate SMS API for real OTP (Twilio, AWS SNS)
- Add payment gateway (Stripe, PayPal)
- Implement actual deployment service (Netlify, Vercel API)
- Add SSL certificates
- Implement rate limiting

## 🌐 Deployment Services (Production)

For real deployment, integrate:
- **Netlify API** - Automated deployments
- **Vercel API** - Serverless deployments
- **AWS S3 + CloudFront** - Custom hosting
- **GitHub Pages** - Static site hosting

## 📄 License

MIT
