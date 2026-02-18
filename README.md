# 🤖 AI Website Builder

> Generate complete, multi-page websites using Google's Gemini AI - No coding required!

![AI Website Builder](https://img.shields.io/badge/AI-Powered-blue)
![React](https://img.shields.io/badge/React-18-61dafb)
![Firebase](https://img.shields.io/badge/Firebase-Ready-orange)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🤖 AI-Powered Generation
- **Multi-page websites** (3-5+ pages per generation)
- **Completely unique** designs every time
- **Custom animations** and transitions
- **Working navigation** between pages
- **Responsive** and mobile-friendly
- **Interactive elements** (forms, buttons, etc.)

### 🔐 Authentication
- Email/Password login
- Google Sign-In
- Phone OTP verification
- Firebase backend

### 💎 Premium Features
- Unlimited website generation
- Custom domain support
- Priority support
- Advanced customization
- Download source files (HTML/CSS/JS)

### 🚀 Deployment
- One-click deployment
- Live preview
- Website management dashboard
- Download complete source code

## 🎯 Demo

Try these prompts:

```
Create a complete e-commerce website for a tech store with home, products, 
cart, checkout, about, and contact pages. Use dark theme with blue accents.
```

```
Build a restaurant website with home, menu (appetizers, mains, desserts), 
gallery, reservations, and contact pages. Elegant design with warm colors.
```

```
Design a portfolio website for a photographer with home, gallery, about, 
services, and contact pages. Modern and minimalist design.
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn
- Google Gemini API key
- Firebase account (optional)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/ai-website-builder.git
cd ai-website-builder
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5174
```

### Get API Keys

#### Gemini AI (Required for AI generation)
1. Visit: https://aistudio.google.com/app/apikey
2. Create API key
3. Add in dashboard UI

#### Firebase (Optional - for authentication)
1. Visit: https://console.firebase.google.com/
2. Create project
3. Enable Authentication
4. Copy config to `src/config/firebase.js`

See [COMPLETE_SETUP_GUIDE.md](COMPLETE_SETUP_GUIDE.md) for detailed instructions.

## 📖 Documentation

- [Complete Setup Guide](COMPLETE_SETUP_GUIDE.md) - Full setup instructions
- [Firebase Setup](FIREBASE_SETUP.md) - Firebase configuration
- [Gemini API Setup](GEMINI_API_SETUP.md) - AI API configuration
- [Testing Guide](TESTING_GUIDE.md) - How to test features
- [Features List](FEATURES.md) - Complete feature documentation

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **AI**: Google Gemini Pro
- **Backend**: Firebase (Auth, Firestore, Storage)
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Styling**: Custom CSS

## 📁 Project Structure

```
ai-website-builder/
├── src/
│   ├── config/
│   │   └── firebase.js              # Firebase configuration
│   ├── services/
│   │   └── authService.js           # Authentication functions
│   ├── utils/
│   │   ├── aiWebsiteGenerator.js    # AI generation (multi-page)
│   │   ├── websiteGenerator.js      # Template generation
│   │   └── deploymentService.js     # Deployment logic
│   ├── pages/
│   │   ├── Home.jsx                 # Landing page
│   │   ├── Dashboard.jsx            # Main workspace
│   │   ├── Login.jsx                # Authentication
│   │   ├── Signup.jsx               # Registration
│   │   ├── MyWebsites.jsx           # Website management
│   │   ├── Premium.jsx              # Pricing
│   │   └── Payment.jsx              # Checkout
│   ├── styles/                      # CSS files
│   └── App.jsx                      # Main app component
├── COMPLETE_SETUP_GUIDE.md
├── FIREBASE_SETUP.md
├── GEMINI_API_SETUP.md
└── package.json
```

## 💰 Costs

### Free Tier (Perfect for development)
- **Gemini AI**: 60 requests/minute - FREE
- **Firebase**: 50K reads/day, 1GB storage - FREE
- **Total**: $0/month

### Production (Small app)
- **Gemini AI**: Still FREE
- **Firebase**: $0-$5/month
- **Total**: $0-$5/month

## 🎨 Features in Detail

### AI Generation
- Generates 3-5+ pages per website
- Understands complex requirements
- Creates custom animations
- Responsive design
- Working navigation
- Interactive forms

### Template Mode
- Fast generation (1.5 seconds)
- 6+ website types
- Pre-designed templates
- Works offline

### Authentication
- Email/Password
- Google Sign-In
- Phone OTP
- Email verification

### Website Management
- View all websites
- Live preview
- Download source
- Delete websites
- Custom domains (premium)

## 🚀 Deployment

### Build for production
```bash
npm run build
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Deploy to Firebase Hosting
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and initialize
firebase login
firebase init hosting

# Deploy
npm run build
firebase deploy
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Google Gemini AI](https://ai.google.dev/) - AI generation
- [Firebase](https://firebase.google.com/) - Backend services
- [React](https://react.dev/) - UI framework
- [Vite](https://vitejs.dev/) - Build tool
- [Lucide](https://lucide.dev/) - Icons

## 📧 Contact

For questions or support, please open an issue on GitHub.

## ⭐ Star History

If you find this project useful, please consider giving it a star!

---

**Built with ❤️ using React and Google Gemini AI**

