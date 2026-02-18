// Additional website templates for more variety

export function generateAgency(analysis) {
  const colors = getColorPalette(analysis.colorScheme);
  const name = analysis.businessName;
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name} - Creative Agency</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Helvetica Neue', Arial, sans-serif; overflow-x: hidden; }
    
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(50px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    .hero {
      height: 100vh;
      background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
      position: relative;
      overflow: hidden;
    }
    
    .hero h1 {
      font-size: 5em;
      margin-bottom: 20px;
      animation: slideUp 1s ease;
    }
    
    .hero p {
      font-size: 1.8em;
      animation: slideUp 1s ease 0.2s backwards;
    }
    
    .services {
      padding: 100px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .services h2 {
      font-size: 3em;
      text-align: center;
      margin-bottom: 60px;
      animation: fadeIn 1s ease;
    }
    
    .service-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 40px;
    }
    
    .service-card {
      padding: 40px;
      background: white;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      transition: all 0.3s;
      animation: slideUp 1s ease backwards;
    }
    
    .service-card:nth-child(1) { animation-delay: 0.1s; }
    .service-card:nth-child(2) { animation-delay: 0.2s; }
    .service-card:nth-child(3) { animation-delay: 0.3s; }
    
    .service-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 50px rgba(0,0,0,0.15);
    }
    
    .service-icon {
      font-size: 3em;
      margin-bottom: 20px;
    }
    
    .service-card h3 {
      font-size: 1.8em;
      margin-bottom: 15px;
      color: ${colors.primary};
    }
    
    .service-card p {
      color: #666;
      line-height: 1.8;
    }
  </style>
</head>
<body>
  <div class="hero">
    <div>
      <h1>${name}</h1>
      <p>Creative Solutions for Modern Brands</p>
    </div>
  </div>
  
  <div class="services">
    <h2>Our Services</h2>
    <div class="service-grid">
      <div class="service-card">
        <div class="service-icon">🎨</div>
        <h3>Brand Design</h3>
        <p>Create memorable brand identities that resonate with your audience</p>
      </div>
      <div class="service-card">
        <div class="service-icon">💻</div>
        <h3>Web Development</h3>
        <p>Build stunning websites that convert visitors into customers</p>
      </div>
      <div class="service-card">
        <div class="service-icon">📱</div>
        <h3>Digital Marketing</h3>
        <p>Grow your business with data-driven marketing strategies</p>
      </div>
    </div>
  </div>
</body>
</html>`;
}

export function generateFitness(analysis) {
  const colors = getColorPalette(analysis.colorScheme);
  const name = analysis.businessName;
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name} - Fitness Center</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Arial', sans-serif; }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    
    .hero {
      background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                  linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%);
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
    }
    
    .hero h1 {
      font-size: 5em;
      margin-bottom: 20px;
      animation: pulse 2s ease-in-out infinite;
    }
    
    .hero p {
      font-size: 2em;
    }
    
    .cta-btn {
      display: inline-block;
      margin-top: 30px;
      padding: 20px 50px;
      background: ${colors.accent};
      color: white;
      text-decoration: none;
      border-radius: 50px;
      font-weight: bold;
      font-size: 1.2em;
      transition: all 0.3s;
    }
    
    .cta-btn:hover {
      transform: scale(1.1);
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }
    
    .programs {
      padding: 100px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .programs h2 {
      font-size: 3em;
      text-align: center;
      margin-bottom: 60px;
    }
    
    .program-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 40px;
    }
    
    .program-card {
      background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%);
      color: white;
      padding: 40px;
      border-radius: 15px;
      transition: transform 0.3s;
    }
    
    .program-card:hover {
      transform: translateY(-10px);
    }
    
    .program-card h3 {
      font-size: 2em;
      margin-bottom: 15px;
    }
  </style>
</head>
<body>
  <div class="hero">
    <div>
      <h1>💪 ${name}</h1>
      <p>Transform Your Body, Transform Your Life</p>
      <a href="#" class="cta-btn">Start Your Journey</a>
    </div>
  </div>
  
  <div class="programs">
    <h2>Our Programs</h2>
    <div class="program-grid">
      <div class="program-card">
        <h3>🏋️ Strength Training</h3>
        <p>Build muscle and increase strength with our expert trainers</p>
      </div>
      <div class="program-card">
        <h3>🧘 Yoga Classes</h3>
        <p>Find balance and flexibility through mindful movement</p>
      </div>
      <div class="program-card">
        <h3>🏃 Cardio Workouts</h3>
        <p>Boost your endurance and burn calories effectively</p>
      </div>
    </div>
  </div>
</body>
</html>`;
}

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
