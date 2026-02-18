# 🤖 AI Website Builder - Now with Gemini AI!

## 🎉 What's New?

Your website builder now has **REAL AI INTEGRATION**! It can generate completely unique, custom websites using Google's Gemini AI.

## 🚀 Quick Start

### 1. Get Your Free Gemini API Key

Visit: **https://makersuite.google.com/app/apikey**

- Sign in with Google
- Click "Create API Key"
- Copy the key

### 2. Enable AI in Dashboard

1. Open: **http://localhost:5174**
2. Login/Signup
3. Click **"Enable AI Generation"**
4. Paste your API key
5. Click **"Save"**

### 3. Generate Unique Websites!

Try this prompt:
```
Create a modern e-commerce website for a luxury watch brand with dark theme, 
animated product cards, hero section with parallax, testimonials, and newsletter signup
```

## ✨ Features

### AI-Powered Generation
- 🤖 Uses Google Gemini AI
- ✨ Completely unique every time
- 🎨 Understands complex requests
- 💡 Creates custom animations
- 🎯 Generates exactly what you describe

### Dual Mode System
- **AI Mode**: Unique, intelligent generation (with API key)
- **Template Mode**: Fast, reliable templates (without API key)

### Complete Platform
- ✅ User authentication with OTP
- ✅ Payment processing for premium
- ✅ Custom domain support
- ✅ Download HTML/CSS/JS files
- ✅ One-click deployment
- ✅ Website management dashboard

## 📊 Comparison

| Feature | Template Mode | AI Mode |
|---------|--------------|---------|
| Speed | 1.5 seconds | 5-10 seconds |
| Uniqueness | 5-6 templates | Unlimited |
| Customization | Limited | Fully custom |
| Complexity | Simple | Advanced |
| Internet | Not required | Required |
| Cost | Free | Free (60/min) |

## 🎯 Example Prompts

### For Beginners:
```
Create a portfolio website for a photographer
```

### For Advanced Users:
```
Build a SaaS landing page with:
- Animated hero section with gradient background
- Feature cards that flip on hover
- Pricing table with comparison
- Customer testimonials carousel
- Newsletter signup with validation
- Smooth scroll navigation
- Mobile responsive design
```

## 💰 Pricing

### Gemini API (Google):
- **Free Tier**: 60 requests/minute
- **No Credit Card**: Required
- **Perfect for**: Personal use, testing, small projects

### Our Platform:
- **Free**: 5 websites/month, basic features
- **Pro ($29/mo)**: Unlimited websites, custom domains, premium support
- **Enterprise ($99/mo)**: Team features, API access, white-label

## 🔒 Security

- API key stored locally in browser
- Direct connection to Google
- Not sent to our servers
- Remove anytime from dashboard

## 🛠️ Technical Details

### Stack:
- **Frontend**: React 18, Vite
- **AI**: Google Gemini Pro
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Storage**: LocalStorage (demo)

### AI Integration:
```javascript
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize with your API key
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

// Generate website
const result = await model.generateContent(prompt);
const htmlCode = result.response.text();
```

## 📝 How It Works

1. **User enters prompt** → "Create a restaurant website..."
2. **System checks for API key** → AI or Template mode
3. **AI Mode**: Sends to Gemini → Generates unique HTML/CSS/JS
4. **Template Mode**: Uses pre-built templates
5. **Code cleaned** → Removes markdown, formats properly
6. **Preview shown** → Live iframe preview
7. **Deploy/Download** → One-click deployment or file download

## 🎨 What AI Can Create

- ✅ E-commerce stores
- ✅ Portfolio websites
- ✅ Landing pages
- ✅ Restaurant websites
- ✅ Blog platforms
- ✅ Agency websites
- ✅ Fitness websites
- ✅ Educational sites
- ✅ Real estate sites
- ✅ And literally anything else!

## 🚀 Deployment

### Development:
```bash
npm install
npm run dev
```

### Production:
```bash
npm run build
npm run preview
```

## 📚 Documentation

- **AI_SETUP_GUIDE.md** - Detailed AI setup instructions
- **GEMINI_API_SETUP.md** - How to get API key
- **TESTING_GUIDE.md** - Complete testing guide
- **FEATURES.md** - Full feature list

## 🎯 Roadmap

- [x] Gemini AI integration
- [x] API key management
- [x] Dual mode system
- [ ] Multiple AI models (GPT-4, Claude)
- [ ] Image generation
- [ ] Multi-page websites
- [ ] Real-time collaboration
- [ ] Version control
- [ ] A/B testing

## 🤝 Contributing

This is a demo project showcasing AI integration. For production:

1. Add backend (Node.js/Python)
2. Use database (PostgreSQL/MongoDB)
3. Implement real authentication
4. Add payment gateway (Stripe)
5. Use deployment service (Netlify/Vercel)
6. Add SMS service (Twilio)

## 📄 License

MIT

## 🙏 Credits

- **Google Gemini AI** - AI generation
- **React** - UI framework
- **Vite** - Build tool
- **Lucide** - Icons

---

## 🎉 Ready to Build?

1. Get your Gemini API key
2. Add it to the dashboard
3. Start creating unique websites!

**Every website will be completely different!**
