import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Crown, Check, ArrowLeft } from 'lucide-react';
import '../styles/Premium.css';

function Premium({ user, onLogout }) {
  const navigate = useNavigate();

  const handleUpgrade = (plan) => {
    navigate('/payment', { state: { plan } });
  };

  return (
    <div className="premium-page">
      <nav className="navbar">
        <h2>AI Website Builder</h2>
        <button onClick={onLogout} className="logout-btn">Logout</button>
      </nav>

      <div className="premium-content">
        <Link to="/dashboard" className="back-btn">
          <ArrowLeft size={16} /> Back to Dashboard
        </Link>

        <div className="premium-header">
          <Crown size={48} className="crown-icon" />
          <h1>Upgrade to Premium</h1>
          <p>Unlock unlimited website generation and advanced features</p>
        </div>

        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Free</h3>
            <div className="price">$0<span>/month</span></div>
            <ul className="features">
              <li><Check size={16} /> 5 websites per month</li>
              <li><Check size={16} /> Basic templates</li>
              <li><Check size={16} /> Standard support</li>
            </ul>
            <button className="plan-btn" disabled>Current Plan</button>
          </div>

          <div className="pricing-card featured">
            <div className="popular-badge">Most Popular</div>
            <h3>Pro</h3>
            <div className="price">$29<span>/month</span></div>
            <ul className="features">
              <li><Check size={16} /> Unlimited websites</li>
              <li><Check size={16} /> Premium templates</li>
              <li><Check size={16} /> Custom domains</li>
              <li><Check size={16} /> Priority support</li>
              <li><Check size={16} /> Advanced customization</li>
            </ul>
            <button className="plan-btn primary" onClick={() => handleUpgrade('pro')}>
              Upgrade Now
            </button>
          </div>

          <div className="pricing-card">
            <h3>Enterprise</h3>
            <div className="price">$99<span>/month</span></div>
            <ul className="features">
              <li><Check size={16} /> Everything in Pro</li>
              <li><Check size={16} /> Team collaboration</li>
              <li><Check size={16} /> API access</li>
              <li><Check size={16} /> White-label solution</li>
              <li><Check size={16} /> Dedicated support</li>
            </ul>
            <button className="plan-btn" onClick={() => handleUpgrade('enterprise')}>
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Premium;
