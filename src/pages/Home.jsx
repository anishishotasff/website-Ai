import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Zap, Globe, Crown, Code, Rocket } from 'lucide-react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-page">
      <nav className="home-nav">
        <div className="nav-content">
          <h2 className="logo">
            <Sparkles size={24} /> AI Website Builder
          </h2>
          <div className="nav-links">
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-btn">Get Started</Link>
          </div>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Build Websites in Seconds<br />
            <span className="gradient-text">Powered by AI</span>
          </h1>
          <p className="hero-subtitle">
            Just describe your vision, and watch as AI creates a fully functional website instantly.
            No coding required.
          </p>
          <div className="hero-buttons">
            <Link to="/signup" className="cta-button primary">
              Start Building Free <Rocket size={20} />
            </Link>
            <Link to="/premium" className="cta-button secondary">
              View Pricing <Crown size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Zap size={32} />
            </div>
            <h3>Lightning Fast</h3>
            <p>Generate complete websites in seconds, not hours or days</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <Code size={32} />
            </div>
            <h3>Download Source Code</h3>
            <p>Get HTML, CSS, and JavaScript files to customize further</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <Globe size={32} />
            </div>
            <h3>Instant Deployment</h3>
            <p>Deploy your website with one click and get a live URL</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <Crown size={32} />
            </div>
            <h3>Custom Domains</h3>
            <p>Premium users can use their own custom domain names</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Sign Up</h3>
            <p>Create your account with phone verification</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Describe</h3>
            <p>Tell AI what kind of website you want</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Generate</h3>
            <p>AI creates your website instantly</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Deploy</h3>
            <p>Launch your website with one click</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Build Your Website?</h2>
        <p>Join thousands of entrepreneurs and startups using AI to build their online presence</p>
        <Link to="/signup" className="cta-button primary large">
          Get Started Now
        </Link>
      </section>

      <footer className="home-footer">
        <p>&copy; 2026 AI Website Builder. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;