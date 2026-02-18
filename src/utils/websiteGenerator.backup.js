// AI-powered website generator that analyzes prompts and creates unique designs
import { generateAgency, generateFitness } from './additionalTemplates';

export function generateWebsite(prompt) {
  const analysis = analyzePrompt(prompt);
  
  // Generate website based on analysis
  switch (analysis.type) {
    case 'portfolio':
      return generatePortfolio(analysis);
    case 'restaurant':
      return generateRestaurant(analysis);
    case 'landing':
      return generateLanding(analysis);
    case 'blog':
      return generateBlog(analysis);
    case 'ecommerce':
      return generateEcommerce(analysis);
    case 'agency':
      return generateAgency(analysis);
    case 'fitness':
      return generateFitness(analysis);
    default:
      return generateGeneric(analysis);
  }
}

// Analyze the prompt to extract key information
function analyzePrompt(prompt) {
  const lower = prompt.toLowerCase();
  
  // Extract business name
  const nameMatch = prompt.match(/for\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)/);
  const businessName = nameMatch ? nameMatch[1] : 'Your Business';
  
  // Detect website type
  let type = 'generic';
  if (lower.includes('portfolio') || lower.includes('personal')) type = 'portfolio';
  else if (lower.includes('restaurant') || lower.includes('cafe') || lower.includes('coffee') || lower.includes('food')) type = 'restaurant';
  else if (lower.includes('landing') || lower.includes('product') || lower.includes('saas') || lower.includes('startup')) type = 'landing';
  else if (lower.includes('blog') || lower.includes('article') || lower.includes('news')) type = 'blog';
  else if (lower.includes('shop') || lower.includes('store') || lower.includes('ecommerce') || lower.includes('clothing') || lower.includes('fashion')) type = 'ecommerce';
  else if (lower.includes('agency') || lower.includes('marketing') || lower.includes('design studio')) type = 'agency';
  else if (lower.includes('gym') || lower.includes('fitness') || lower.includes('yoga') || lower.includes('workout')) type = 'fitness';
  else if (lower.includes('school') || lower.includes('education') || lower.includes('course') || lower.includes('learning')) type = 'education';
  else if (lower.includes('real estate') || lower.includes('property') || lower.includes('housing')) type = 'real-estate';
  else if (lower.includes('medical') || lower.includes('clinic') || lower.includes('doctor') || lower.includes('health')) type = 'medical';
  
  // Detect color preferences
  let colorScheme = 'purple';
  if (lower.includes('blue')) colorScheme = 'blue';
  else if (lower.includes('green')) colorScheme = 'green';
  else if (lower.includes('red')) colorScheme = 'red';
  else if (lower.includes('orange')) colorScheme = 'orange';
  else if (lower.includes('pink')) colorScheme = 'pink';
  else if (lower.includes('dark')) colorScheme = 'dark';
  else if (lower.includes('light')) colorScheme = 'light';
  
  // Detect style preferences
  let style = 'modern';
  if (lower.includes('minimal') || lower.includes('minimalist')) style = 'minimal';
  else if (lower.includes('elegant') || lower.includes('luxury')) style = 'elegant';
  else if (lower.includes('playful') || lower.includes('fun')) style = 'playful';
  else if (lower.includes('professional') || lower.includes('corporate')) style = 'professional';
  else if (lower.includes('creative') || lower.includes('artistic')) style = 'creative';
  
  // Extract features mentioned
  const features = [];
  if (lower.includes('contact')) features.push('contact');
  if (lower.includes('gallery')) features.push('gallery');
  if (lower.includes('testimonial')) features.push('testimonials');
  if (lower.includes('pricing')) features.push('pricing');
  if (lower.includes('team')) features.push('team');
  if (lower.includes('about')) features.push('about');
  if (lower.includes('service')) features.push('services');
  
  return {
    type,
    businessName,
    colorScheme,
    style,
    features,
    originalPrompt: prompt
  };
}

// Get color palette based on scheme
function getColorPalette(scheme) {
  const palettes = {
    purple: { primary: '#667eea', secondary: '#764ba2', accent: '#f093fb' },
    blue: { primary: '#4facfe', secondary: '#00f2fe', accent: '#43e97b' },
    green: { primary: '#11998e', secondary: '#38ef7d', accent: '#a8edea' },
    red: { primary: '#eb3349', secondary: '#f45c43', accent: '#fa709a' },
    orange: { primary: '#f46b45', secondary: '#eea849', accent: '#ffd89b' },
    pink: { primary: '#f857a6', secondary: '#ff5858', accent: '#fccb90' },
    dark: { primary: '#232526', secondary: '#414345', accent: '#667eea' },
    light: { primary: '#e0e0e0', secondary: '#f5f5f5', accent: '#667eea' }
  };
  return palettes[scheme] || palettes.purple;
}

function generatePortfolio(analysis) {
  const colors = getColorPalette(analysis.colorScheme);
  const name = analysis.businessName !== 'Your Business' ? analysis.businessName : 'John Doe';
  
  // Extract profession from prompt or use default
  let profession = 'Full Stack Developer & Designer';
  if (analysis.originalPrompt.toLowerCase().includes('designer')) profession = 'Creative Designer';
  else if (analysis.originalPrompt.toLowerCase().includes('photographer')) profession = 'Professional Photographer';
  else if (analysis.originalPrompt.toLowerCase().includes('writer')) profession = 'Content Writer & Author';
  else if (analysis.originalPrompt.toLowerCase().includes('developer')) profession = 'Software Developer';
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name} - Portfolio</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
      line-height: 1.6; 
      overflow-x: hidden;
    }
    
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    .hero { 
      background: linear-gradient(-45deg, ${colors.primary}, ${colors.secondary}, ${colors.accent}, ${colors.primary});
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
      color: white; 
      padding: 150px 20px; 
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    
    .hero::before {
      content: '';
      position: absolute;
      width: 300px;
      height: 300px;
      border: 2px solid rgba(255,255,255,0.1);
      border-radius: 50%;
      top: -150px;
      right: -150px;
      animation: rotate 20s linear infinite;
    }
    
    .hero::after {
      content: '';
      position: absolute;
      width: 200px;
      height: 200px;
      border: 2px solid rgba(255,255,255,0.1);
      border-radius: 50%;
      bottom: -100px;
      left: -100px;
      animation: rotate 15s linear infinite reverse;
    }
    
    .hero h1 { 
      font-size: 4.5em; 
      margin-bottom: 20px; 
      animation: fadeInUp 1s ease;
      position: relative;
      z-index: 1;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    }
    
    .hero p { 
      font-size: 1.8em; 
      opacity: 0.95;
      animation: fadeInUp 1s ease 0.2s backwards;
      position: relative;
      z-index: 1;
    }
    
    .section { 
      padding: 100px 20px; 
      max-width: 1200px; 
      margin: 0 auto; 
    }
    
    .section h2 {
      text-align: center;
      margin-bottom: 60px;
      font-size: 3em;
      color: #333;
      animation: fadeInUp 1s ease;
      background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .projects { 
      display: grid; 
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); 
      gap: 40px; 
    }
    
    .project-card { 
      background: white;
      padding: 0; 
      border-radius: 20px; 
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      cursor: pointer;
      position: relative;
      overflow: hidden;
      animation: fadeInUp 1s ease backwards;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    
    .project-card:nth-child(1) { animation-delay: 0.1s; }
    .project-card:nth-child(2) { animation-delay: 0.2s; }
    .project-card:nth-child(3) { animation-delay: 0.3s; }
    
    .project-image {
      height: 200px;
      background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4em;
      transition: transform 0.3s;
    }
    
    .project-card:hover .project-image {
      transform: scale(1.1);
    }
    
    .project-content {
      padding: 30px;
    }
    
    .project-card:hover { 
      transform: translateY(-15px); 
      box-shadow: 0 20px 50px rgba(0,0,0,0.2);
    }
    
    .project-card h3 { 
      margin-bottom: 15px; 
      color: #333;
      font-size: 1.6em;
    }
    
    .project-card p {
      color: #666;
      line-height: 1.8;
    }
    
    .skills {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
      margin-top: 50px;
    }
    
    .skill-tag {
      padding: 12px 25px;
      background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%);
      color: white;
      border-radius: 30px;
      animation: fadeInUp 1s ease backwards;
      transition: all 0.3s;
      font-weight: 600;
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }
    
    .skill-tag:hover {
      transform: scale(1.15) rotate(5deg);
      box-shadow: 0 8px 20px rgba(0,0,0,0.3);
    }
    
    .skill-tag:nth-child(1) { animation-delay: 0.1s; }
    .skill-tag:nth-child(2) { animation-delay: 0.2s; }
    .skill-tag:nth-child(3) { animation-delay: 0.3s; }
    .skill-tag:nth-child(4) { animation-delay: 0.4s; }
    .skill-tag:nth-child(5) { animation-delay: 0.5s; }
    
    .contact { 
      background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%);
      color: white; 
      text-align: center; 
      padding: 100px 20px; 
      position: relative;
      overflow: hidden;
    }
    
    .contact::before {
      content: '';
      position: absolute;
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
      border-radius: 50%;
      top: -250px;
      left: 50%;
      transform: translateX(-50%);
      animation: float 6s ease-in-out infinite;
    }
    
    .contact h2 {
      color: white;
      margin-bottom: 20px;
      animation: fadeInUp 1s ease;
      position: relative;
      z-index: 1;
    }
    
    .contact p {
      font-size: 1.3em;
      margin-bottom: 30px;
      animation: fadeInUp 1s ease 0.2s backwards;
      position: relative;
      z-index: 1;
    }
    
    .btn { 
      display: inline-block; 
      padding: 18px 45px; 
      background: white;
      color: ${colors.primary}; 
      text-decoration: none; 
      border-radius: 50px; 
      margin-top: 20px;
      font-weight: 700;
      transition: all 0.3s;
      animation: fadeInUp 1s ease 0.4s backwards;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      position: relative;
      z-index: 1;
      font-size: 1.1em;
    }
    
    .btn:hover {
      transform: translateY(-5px) scale(1.05);
      box-shadow: 0 15px 40px rgba(0,0,0,0.4);
    }
  </style>
</head>
<body>
  <div class="hero">
    <h1>${name}</h1>
    <p>${profession}</p>
    <div class="skills">
      <span class="skill-tag">React</span>
      <span class="skill-tag">Node.js</span>
      <span class="skill-tag">Python</span>
      <span class="skill-tag">UI/UX</span>
      <span class="skill-tag">AWS</span>
    </div>
  </div>
  
  <div class="section">
    <h2>Featured Projects</h2>
    <div class="projects">
      <div class="project-card">
        <div class="project-image">🚀</div>
        <div class="project-content">
          <h3>E-Commerce Platform</h3>
          <p>A modern online shopping experience with React and Node.js featuring real-time inventory and secure payment processing</p>
        </div>
      </div>
      <div class="project-card">
        <div class="project-image">📱</div>
        <div class="project-content">
          <h3>Task Manager App</h3>
          <p>Productivity tool built with Vue.js and Firebase with drag-and-drop functionality and team collaboration features</p>
        </div>
      </div>
      <div class="project-card">
        <div class="project-image">🌤️</div>
        <div class="project-content">
          <h3>Weather Dashboard</h3>
          <p>Real-time weather data visualization using APIs with interactive maps and 7-day forecasting</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="contact">
    <h2>Let's Work Together</h2>
    <p>Have a project in mind? Let's create something amazing!</p>
    <a href="mailto:contact@example.com" class="btn">Get In Touch</a>
  </div>
</body>
</html>`;
}
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
      line-height: 1.6; 
      overflow-x: hidden;
    }
    
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    .hero { 
      background: linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #4facfe);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
      color: white; 
      padding: 120px 20px; 
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    
    .hero::before {
      content: '';
      position: absolute;
      width: 200%;
      height: 200%;
      top: -50%;
      left: -50%;
      background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
      background-size: 50px 50px;
      animation: float 20s linear infinite;
    }
    
    .hero h1 { 
      font-size: 4em; 
      margin-bottom: 20px; 
      animation: fadeInUp 1s ease;
      position: relative;
      z-index: 1;
    }
    
    .hero p { 
      font-size: 1.5em; 
      opacity: 0.95;
      animation: fadeInUp 1s ease 0.2s backwards;
      position: relative;
      z-index: 1;
    }
    
    .section { 
      padding: 80px 20px; 
      max-width: 1200px; 
      margin: 0 auto; 
    }
    
    .section h2 {
      text-align: center;
      margin-bottom: 50px;
      font-size: 2.5em;
      color: #333;
      animation: fadeInUp 1s ease;
    }
    
    .projects { 
      display: grid; 
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
      gap: 30px; 
    }
    
    .project-card { 
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      padding: 40px; 
      border-radius: 20px; 
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      cursor: pointer;
      position: relative;
      overflow: hidden;
      animation: fadeInUp 1s ease backwards;
    }
    
    .project-card:nth-child(1) { animation-delay: 0.1s; }
    .project-card:nth-child(2) { animation-delay: 0.2s; }
    .project-card:nth-child(3) { animation-delay: 0.3s; }
    
    .project-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
      transition: left 0.5s;
    }
    
    .project-card:hover::before {
      left: 100%;
    }
    
    .project-card:hover { 
      transform: translateY(-10px) scale(1.02); 
      box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    }
    
    .project-card h3 { 
      margin-bottom: 15px; 
      color: #333;
      font-size: 1.5em;
    }
    
    .project-card p {
      color: #555;
      line-height: 1.8;
    }
    
    .contact { 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white; 
      text-align: center; 
      padding: 80px 20px; 
      position: relative;
    }
    
    .contact h2 {
      color: white;
      margin-bottom: 20px;
      animation: fadeInUp 1s ease;
    }
    
    .contact p {
      font-size: 1.2em;
      margin-bottom: 30px;
      animation: fadeInUp 1s ease 0.2s backwards;
    }
    
    .btn { 
      display: inline-block; 
      padding: 15px 40px; 
      background: white;
      color: #667eea; 
      text-decoration: none; 
      border-radius: 50px; 
      margin-top: 20px;
      font-weight: 600;
      transition: all 0.3s;
      animation: fadeInUp 1s ease 0.4s backwards;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }
    
    .btn:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 15px 40px rgba(0,0,0,0.3);
    }
    
    .skills {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
      margin-top: 40px;
    }
    
    .skill-tag {
      padding: 10px 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 25px;
      animation: fadeInUp 1s ease backwards;
      transition: transform 0.3s;
    }
    
    .skill-tag:hover {
      transform: scale(1.1) rotate(5deg);
    }
    
    .skill-tag:nth-child(1) { animation-delay: 0.1s; }
    .skill-tag:nth-child(2) { animation-delay: 0.2s; }
    .skill-tag:nth-child(3) { animation-delay: 0.3s; }
    .skill-tag:nth-child(4) { animation-delay: 0.4s; }
    .skill-tag:nth-child(5) { animation-delay: 0.5s; }
  </style>
</head>
<body>
  <div class="hero">
    <h1>John Doe</h1>
    <p>Full Stack Developer & Designer</p>
    <div class="skills">
      <span class="skill-tag">React</span>
      <span class="skill-tag">Node.js</span>
      <span class="skill-tag">Python</span>
      <span class="skill-tag">UI/UX</span>
      <span class="skill-tag">AWS</span>
    </div>
  </div>
  
  <div class="section">
    <h2>Featured Projects</h2>
    <div class="projects">
      <div class="project-card">
        <h3>🚀 E-Commerce Platform</h3>
        <p>A modern online shopping experience with React and Node.js featuring real-time inventory and payment processing</p>
      </div>
      <div class="project-card">
        <h3>📱 Task Manager App</h3>
        <p>Productivity tool built with Vue.js and Firebase with drag-and-drop functionality and team collaboration</p>
      </div>
      <div class="project-card">
        <h3>🌤️ Weather Dashboard</h3>
        <p>Real-time weather data visualization using APIs with interactive maps and forecasting</p>
      </div>
    </div>
  </div>
  
  <div class="contact">
    <h2>Let's Work Together</h2>
    <p>Have a project in mind? Get in touch!</p>
    <a href="mailto:contact@example.com" class="btn">Contact Me</a>
  </div>
</body>
</html>`;
}

function generateRestaurant(analysis) {
  const colors = getColorPalette(analysis.colorScheme);
  const name = analysis.businessName !== 'Your Business' ? analysis.businessName : 'The Coffee House';
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Restaurant</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Georgia', serif; overflow-x: hidden; }
    
    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    
    .header { 
      background: linear-gradient(135deg, #2c1810 0%, #4a2c1a 100%);
      color: #f4e4c1; 
      padding: 20px; 
      text-align: center;
      box-shadow: 0 5px 20px rgba(0,0,0,0.3);
      position: sticky;
      top: 0;
      z-index: 100;
      animation: fadeIn 1s ease;
    }
    
    .header h2 {
      font-size: 2em;
      letter-spacing: 3px;
    }
    
    .hero { 
      background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
                  linear-gradient(135deg, #654321 0%, #8b4513 100%);
      color: white; 
      padding: 180px 20px; 
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    
    .hero::before {
      content: '☕';
      position: absolute;
      font-size: 15em;
      opacity: 0.1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: pulse 3s ease-in-out infinite;
    }
    
    .hero h1 { 
      font-size: 5em; 
      margin-bottom: 20px; 
      text-shadow: 3px 3px 6px rgba(0,0,0,0.7);
      animation: slideInLeft 1s ease;
      position: relative;
      z-index: 1;
    }
    
    .hero p {
      font-size: 1.8em;
      animation: slideInRight 1s ease 0.3s backwards;
      position: relative;
      z-index: 1;
    }
    
    .menu { 
      padding: 80px 20px; 
      max-width: 1000px; 
      margin: 0 auto;
      background: linear-gradient(to bottom, #fff 0%, #f9f5f0 100%);
    }
    
    .menu h2 { 
      text-align: center; 
      margin-bottom: 50px; 
      color: #2c1810; 
      font-size: 3em;
      animation: fadeIn 1s ease;
      position: relative;
    }
    
    .menu h2::after {
      content: '';
      display: block;
      width: 100px;
      height: 3px;
      background: linear-gradient(90deg, transparent, #c17817, transparent);
      margin: 20px auto 0;
    }
    
    .menu-items { 
      display: grid; 
      gap: 30px; 
    }
    
    .menu-item { 
      display: flex; 
      justify-content: space-between; 
      align-items: center;
      border-bottom: 2px dotted #ddd; 
      padding: 25px;
      background: white;
      border-radius: 10px;
      transition: all 0.3s;
      animation: slideInLeft 0.8s ease backwards;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }
    
    .menu-item:nth-child(1) { animation-delay: 0.1s; }
    .menu-item:nth-child(2) { animation-delay: 0.2s; }
    .menu-item:nth-child(3) { animation-delay: 0.3s; }
    .menu-item:nth-child(4) { animation-delay: 0.4s; }
    
    .menu-item:hover {
      transform: translateX(10px);
      box-shadow: 0 5px 20px rgba(193, 120, 23, 0.2);
      border-color: #c17817;
    }
    
    .menu-item h3 { 
      color: #2c1810;
      font-size: 1.5em;
      margin-bottom: 8px;
    }
    
    .menu-item p {
      color: #666;
      font-size: 0.95em;
    }
    
    .menu-item .price { 
      color: #c17817; 
      font-weight: bold; 
      font-size: 1.5em;
      animation: pulse 2s ease-in-out infinite;
    }
    
    .footer { 
      background: linear-gradient(135deg, #2c1810 0%, #1a0f08 100%);
      color: #f4e4c1; 
      padding: 60px 20px; 
      text-align: center;
      animation: fadeIn 1s ease;
    }
    
    .footer h3 {
      font-size: 2em;
      margin-bottom: 20px;
    }
    
    .footer p {
      font-size: 1.1em;
      margin: 10px 0;
    }
    
    .special-badge {
      display: inline-block;
      background: linear-gradient(135deg, #c17817 0%, #f4a460 100%);
      color: white;
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 0.8em;
      margin-left: 10px;
      animation: pulse 2s ease-in-out infinite;
    }
  </style>
</head>
<body>
  <div class="header">
    <h2>☕ ${name.toUpperCase()}</h2>
  </div>
  
  <div class="hero">
    <h1>Welcome to Our Cafe</h1>
    <p>Freshly brewed coffee & homemade pastries</p>
  </div>
  
  <div class="menu">
    <h2>Our Menu</h2>
    <div class="menu-items">
      <div class="menu-item">
        <div>
          <h3>Espresso <span class="special-badge">Popular</span></h3>
          <p>Rich and bold Italian coffee, expertly crafted</p>
        </div>
        <span class="price">$3.50</span>
      </div>
      <div class="menu-item">
        <div>
          <h3>Cappuccino</h3>
          <p>Espresso with velvety steamed milk foam</p>
        </div>
        <span class="price">$4.50</span>
      </div>
      <div class="menu-item">
        <div>
          <h3>Croissant <span class="special-badge">Fresh Daily</span></h3>
          <p>Buttery French pastry, baked fresh every morning</p>
        </div>
        <span class="price">$3.00</span>
      </div>
      <div class="menu-item">
        <div>
          <h3>Avocado Toast</h3>
          <p>Fresh avocado on artisan sourdough with herbs</p>
        </div>
        <span class="price">$8.00</span>
      </div>
    </div>
  </div>
  
  <div class="footer">
    <h3>Visit Us Today</h3>
    <p>📍 123 Main Street, Downtown</p>
    <p>🕐 Open Daily 7AM - 8PM</p>
    <p>📞 (555) 123-4567</p>
  </div>
</body>
</html>`;
}

function generateLanding(analysis) {
  const colors = getColorPalette(analysis.colorScheme);
  const name = analysis.businessName;
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Landing Page</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; overflow-x: hidden; }
    
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.8); }
      to { opacity: 1; transform: scale(1); }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
    }
    
    @keyframes shimmer {
      0% { background-position: -1000px 0; }
      100% { background-position: 1000px 0; }
    }
    
    .hero { 
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
      color: white; 
      padding: 140px 20px; 
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    
    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 200%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
      animation: shimmer 3s infinite;
    }
    
    .hero h1 { 
      font-size: 4em; 
      margin-bottom: 20px;
      animation: slideDown 1s ease;
      position: relative;
      z-index: 1;
    }
    
    .hero p { 
      font-size: 1.5em; 
      margin-bottom: 30px; 
      opacity: 0.95;
      animation: slideDown 1s ease 0.2s backwards;
      position: relative;
      z-index: 1;
    }
    
    .cta-btn { 
      display: inline-block; 
      padding: 18px 50px; 
      background: white; 
      color: #6366f1; 
      text-decoration: none; 
      border-radius: 50px; 
      font-weight: bold; 
      font-size: 1.2em; 
      transition: all 0.3s;
      animation: scaleIn 1s ease 0.4s backwards;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      position: relative;
      z-index: 1;
    }
    
    .cta-btn:hover { 
      transform: translateY(-5px) scale(1.05); 
      box-shadow: 0 15px 40px rgba(0,0,0,0.4);
    }
    
    .features { 
      padding: 100px 20px; 
      max-width: 1200px; 
      margin: 0 auto;
      background: linear-gradient(to bottom, #fff 0%, #f8f9fa 100%);
    }
    
    .features h2 { 
      text-align: center; 
      font-size: 3em; 
      margin-bottom: 70px;
      animation: slideDown 1s ease;
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .feature-grid { 
      display: grid; 
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
      gap: 50px; 
    }
    
    .feature { 
      text-align: center; 
      padding: 40px;
      background: white;
      border-radius: 20px;
      transition: all 0.4s;
      animation: scaleIn 1s ease backwards;
      box-shadow: 0 5px 20px rgba(0,0,0,0.05);
    }
    
    .feature:nth-child(1) { animation-delay: 0.1s; }
    .feature:nth-child(2) { animation-delay: 0.2s; }
    .feature:nth-child(3) { animation-delay: 0.3s; }
    
    .feature:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 40px rgba(99, 102, 241, 0.2);
    }
    
    .feature-icon { 
      font-size: 4em; 
      margin-bottom: 25px;
      animation: float 3s ease-in-out infinite;
    }
    
    .feature:nth-child(2) .feature-icon { animation-delay: 0.5s; }
    .feature:nth-child(3) .feature-icon { animation-delay: 1s; }
    
    .feature h3 { 
      margin-bottom: 15px; 
      color: #333;
      font-size: 1.5em;
    }
    
    .feature p { 
      color: #666; 
      line-height: 1.8;
      font-size: 1.05em;
    }
    
    .cta-section { 
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      padding: 100px 20px; 
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    
    .cta-section::before {
      content: '';
      position: absolute;
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
      border-radius: 50%;
      top: -250px;
      right: -250px;
      animation: float 6s ease-in-out infinite;
    }
    
    .cta-section h2 { 
      font-size: 3em; 
      margin-bottom: 20px;
      color: white;
      animation: slideDown 1s ease;
      position: relative;
      z-index: 1;
    }
    
    .cta-section p {
      font-size: 1.3em;
      color: rgba(255,255,255,0.9);
      margin-bottom: 40px;
      animation: slideDown 1s ease 0.2s backwards;
      position: relative;
      z-index: 1;
    }
    
    .cta-section .cta-btn {
      background: white;
      color: #6366f1;
      animation: scaleIn 1s ease 0.4s backwards;
    }
    
    .stats {
      display: flex;
      justify-content: center;
      gap: 60px;
      margin-top: 50px;
      flex-wrap: wrap;
      position: relative;
      z-index: 1;
    }
    
    .stat {
      text-align: center;
      animation: scaleIn 1s ease backwards;
    }
    
    .stat:nth-child(1) { animation-delay: 0.5s; }
    .stat:nth-child(2) { animation-delay: 0.6s; }
    .stat:nth-child(3) { animation-delay: 0.7s; }
    
    .stat-number {
      font-size: 3em;
      font-weight: bold;
      color: white;
    }
    
    .stat-label {
      color: rgba(255,255,255,0.8);
      font-size: 1.1em;
    }
  </style>
</head>
<body>
  <div class="hero">
    <h1>Build Your Dream Product</h1>
    <p>The all-in-one platform for modern teams</p>
    <a href="#" class="cta-btn">Get Started Free →</a>
  </div>
  
  <div class="features">
    <h2>Why Choose Us</h2>
    <div class="feature-grid">
      <div class="feature">
        <div class="feature-icon">⚡</div>
        <h3>Lightning Fast</h3>
        <p>Optimized performance for the best user experience with cutting-edge technology</p>
      </div>
      <div class="feature">
        <div class="feature-icon">🔒</div>
        <h3>Secure</h3>
        <p>Enterprise-grade security to protect your data with end-to-end encryption</p>
      </div>
      <div class="feature">
        <div class="feature-icon">🎨</div>
        <h3>Customizable</h3>
        <p>Tailor everything to match your brand with our flexible design system</p>
      </div>
    </div>
  </div>
  
  <div class="cta-section">
    <h2>Ready to Get Started?</h2>
    <p>Join thousands of satisfied customers worldwide</p>
    <a href="#" class="cta-btn">Start Your Free Trial</a>
    <div class="stats">
      <div class="stat">
        <div class="stat-number">10K+</div>
        <div class="stat-label">Active Users</div>
      </div>
      <div class="stat">
        <div class="stat-number">99.9%</div>
        <div class="stat-label">Uptime</div>
      </div>
      <div class="stat">
        <div class="stat-number">24/7</div>
        <div class="stat-label">Support</div>
      </div>
    </div>
  </div>
</body>
</html>`;
}

function generateBlog(analysis) {
  const colors = getColorPalette(analysis.colorScheme);
  const name = analysis.businessName !== 'Your Business' ? analysis.businessName : 'My Blog';
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Georgia', serif; line-height: 1.8; color: #333; }
    .header { background: white; padding: 20px; text-align: center; border-bottom: 1px solid #eee; }
    .header h1 { font-size: 2.5em; margin-bottom: 10px; }
    .container { max-width: 800px; margin: 60px auto; padding: 0 20px; }
    .post { margin-bottom: 60px; padding-bottom: 60px; border-bottom: 1px solid #eee; }
    .post h2 { font-size: 2.2em; margin-bottom: 15px; }
    .post-meta { color: #999; margin-bottom: 20px; font-size: 0.9em; }
    .post p { margin-bottom: 20px; font-size: 1.1em; }
    .read-more { color: #6366f1; text-decoration: none; font-weight: bold; }
    .sidebar { background: #f8f9fa; padding: 30px; border-radius: 10px; margin-top: 40px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>${name}</h1>
    <p>Thoughts, stories and ideas</p>
  </div>
  
  <div class="container">
    <article class="post">
      <h2>Getting Started with Web Development</h2>
      <div class="post-meta">Posted on January 15, 2026 by Admin</div>
      <p>Web development is an exciting journey that opens up countless opportunities. Whether you're building your first website or diving into complex applications, the fundamentals remain the same...</p>
      <a href="#" class="read-more">Read More →</a>
    </article>
    
    <article class="post">
      <h2>The Future of AI in Design</h2>
      <div class="post-meta">Posted on January 10, 2026 by Admin</div>
      <p>Artificial intelligence is revolutionizing how we approach design. From automated layouts to intelligent color schemes, AI tools are becoming indispensable for modern designers...</p>
      <a href="#" class="read-more">Read More →</a>
    </article>
    
    <div class="sidebar">
      <h3>About</h3>
      <p>Welcome to my blog where I share insights about technology, design, and innovation.</p>
    </div>
  </div>
</body>
</html>`;
}

function generateGeneric(analysis) {
  const colors = getColorPalette(analysis.colorScheme);
  const prompt = analysis.originalPrompt;
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generated Website</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; overflow-x: hidden; }
    
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    .header { 
      background: linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #4facfe);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
      color: white; 
      padding: 100px 20px; 
      text-align: center; 
    }
    
    .header h1 { 
      font-size: 4em; 
      margin-bottom: 15px;
      animation: fadeInUp 1s ease;
    }
    
    .header p {
      font-size: 1.3em;
      animation: fadeInUp 1s ease 0.2s backwards;
    }
    
    .content { 
      max-width: 1200px; 
      margin: 80px auto; 
      padding: 0 20px; 
    }
    
    .section { 
      margin-bottom: 80px;
      animation: fadeInUp 1s ease backwards;
    }
    
    .section:nth-child(1) { animation-delay: 0.1s; }
    .section:nth-child(2) { animation-delay: 0.2s; }
    
    .section h2 { 
      font-size: 2.5em; 
      margin-bottom: 25px; 
      color: #333;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .section p { 
      color: #666; 
      font-size: 1.15em; 
      margin-bottom: 15px;
      line-height: 1.8;
    }
    
    .grid { 
      display: grid; 
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
      gap: 35px; 
      margin-top: 50px; 
    }
    
    .card { 
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      padding: 35px; 
      border-radius: 15px;
      transition: all 0.4s;
      animation: fadeInUp 1s ease backwards;
      cursor: pointer;
    }
    
    .card:nth-child(1) { animation-delay: 0.3s; }
    .card:nth-child(2) { animation-delay: 0.4s; }
    .card:nth-child(3) { animation-delay: 0.5s; }
    
    .card:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
    }
    
    .card h3 { 
      margin-bottom: 15px; 
      color: #333;
      font-size: 1.5em;
    }
    
    .card p {
      color: #555;
    }
    
    .footer { 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white; 
      padding: 60px 20px; 
      text-align: center; 
      margin-top: 80px;
      animation: fadeInUp 1s ease;
    }
    
    .footer p {
      color: rgba(255,255,255,0.9);
      font-size: 1.1em;
    }
    
    .prompt-info {
      background: rgba(102, 126, 234, 0.1);
      border-left: 4px solid #667eea;
      padding: 20px;
      margin: 30px 0;
      border-radius: 5px;
      animation: fadeInUp 1s ease 0.3s backwards;
    }
    
    .prompt-info strong {
      color: #667eea;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Welcome</h1>
    <p>Your custom website generated by AI</p>
  </div>
  
  <div class="content">
    <div class="section">
      <h2>About This Website</h2>
      <div class="prompt-info">
        <strong>Your Prompt:</strong> "${prompt}"
      </div>
      <p>This website was automatically generated based on your description. Every element has been carefully crafted with modern design principles and smooth animations.</p>
      <p>Customize this template to match your exact needs and brand identity. Add your own content, images, and styling to make it truly yours.</p>
    </div>
    
    <div class="section">
      <h2>Key Features</h2>
      <div class="grid">
        <div class="card">
          <h3>🚀 Feature One</h3>
          <p>Description of your first key feature or service that makes your offering unique</p>
        </div>
        <div class="card">
          <h3>💡 Feature Two</h3>
          <p>Description of your second key feature or service that adds value to customers</p>
        </div>
        <div class="card">
          <h3>⭐ Feature Three</h3>
          <p>Description of your third key feature or service that sets you apart</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="footer">
    <p>&copy; 2026 Your Company. All rights reserved.</p>
    <p style="margin-top: 10px; font-size: 0.9em;">Built with AI Website Builder</p>
  </div>
</body>
</html>`;
}

function generateEcommerce(analysis) {
  const colors = getColorPalette(analysis.colorScheme);
  const name = analysis.businessName !== 'Your Business' ? analysis.businessName : 'ShopNow';
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Online Store</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
    
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    
    .navbar {
      background: white;
      padding: 20px 40px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 100;
      animation: slideIn 1s ease;
    }
    
    .logo {
      font-size: 1.8em;
      font-weight: bold;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .cart-btn {
      padding: 10px 25px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 25px;
      cursor: pointer;
      transition: transform 0.3s;
      font-weight: 600;
    }
    
    .cart-btn:hover {
      transform: scale(1.05);
      animation: bounce 0.5s ease;
    }
    
    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 100px 20px;
      text-align: center;
      animation: fadeIn 1s ease;
    }
    
    .hero h1 {
      font-size: 4em;
      margin-bottom: 20px;
      animation: slideIn 1s ease 0.2s backwards;
    }
    
    .hero p {
      font-size: 1.5em;
      animation: slideIn 1s ease 0.4s backwards;
    }
    
    .products {
      max-width: 1400px;
      margin: 80px auto;
      padding: 0 20px;
    }
    
    .products h2 {
      text-align: center;
      font-size: 3em;
      margin-bottom: 60px;
      animation: fadeIn 1s ease;
    }
    
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 40px;
    }
    
    .product-card {
      background: white;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 5px 20px rgba(0,0,0,0.1);
      transition: all 0.4s;
      animation: fadeIn 1s ease backwards;
      cursor: pointer;
    }
    
    .product-card:nth-child(1) { animation-delay: 0.1s; }
    .product-card:nth-child(2) { animation-delay: 0.2s; }
    .product-card:nth-child(3) { animation-delay: 0.3s; }
    .product-card:nth-child(4) { animation-delay: 0.4s; }
    
    .product-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
    }
    
    .product-image {
      height: 250px;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 5em;
      transition: transform 0.3s;
    }
    
    .product-card:hover .product-image {
      transform: scale(1.1);
    }
    
    .product-info {
      padding: 25px;
    }
    
    .product-name {
      font-size: 1.4em;
      margin-bottom: 10px;
      color: #333;
    }
    
    .product-price {
      font-size: 1.8em;
      color: #667eea;
      font-weight: bold;
      margin-bottom: 15px;
    }
    
    .buy-btn {
      width: 100%;
      padding: 12px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      font-size: 1em;
      transition: all 0.3s;
    }
    
    .buy-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    }
    
    .sale-badge {
      position: absolute;
      top: 15px;
      right: 15px;
      background: #ff4444;
      color: white;
      padding: 8px 15px;
      border-radius: 20px;
      font-weight: bold;
      font-size: 0.9em;
      animation: bounce 2s ease-in-out infinite;
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <div class="logo">🛍️ ${name}</div>
    <button class="cart-btn">🛒 Cart (0)</button>
  </nav>
  
  <div class="hero">
    <h1>Welcome to Our Store</h1>
    <p>Discover amazing products at great prices</p>
  </div>
  
  <div class="products">
    <h2>Featured Products</h2>
    <div class="product-grid">
      <div class="product-card">
        <div class="product-image">👕</div>
        <div class="product-info">
          <div class="product-name">Premium T-Shirt</div>
          <div class="product-price">$29.99</div>
          <button class="buy-btn">Add to Cart</button>
        </div>
      </div>
      
      <div class="product-card" style="position: relative;">
        <span class="sale-badge">SALE</span>
        <div class="product-image">👟</div>
        <div class="product-info">
          <div class="product-name">Running Shoes</div>
          <div class="product-price">$79.99</div>
          <button class="buy-btn">Add to Cart</button>
        </div>
      </div>
      
      <div class="product-card">
        <div class="product-image">🎧</div>
        <div class="product-info">
          <div class="product-name">Wireless Headphones</div>
          <div class="product-price">$149.99</div>
          <button class="buy-btn">Add to Cart</button>
        </div>
      </div>
      
      <div class="product-card">
        <div class="product-image">⌚</div>
        <div class="product-info">
          <div class="product-name">Smart Watch</div>
          <div class="product-price">$199.99</div>
          <button class="buy-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;
}
