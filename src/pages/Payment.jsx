import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { CreditCard, Lock, ArrowLeft } from 'lucide-react';
import '../styles/Payment.css';

function Payment({ user, onLogout, updateUser }) {
  const navigate = useNavigate();
  const location = useLocation();
  const plan = location.state?.plan || 'pro';
  
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [processing, setProcessing] = useState(false);

  const prices = {
    pro: 29,
    enterprise: 99
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      updateUser({ 
        isPremium: true, 
        plan: plan,
        paymentDate: new Date().toISOString()
      });
      
      alert('Payment successful! Welcome to Premium!');
      setProcessing(false);
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="payment-page">
      <nav className="navbar">
        <h2>AI Website Builder</h2>
        <button onClick={onLogout} className="logout-btn">Logout</button>
      </nav>

      <div className="payment-content">
        <Link to="/premium" className="back-btn">
          <ArrowLeft size={16} /> Back to Plans
        </Link>

        <div className="payment-container">
          <div className="payment-summary">
            <h2>Order Summary</h2>
            <div className="plan-details">
              <div className="plan-name">{plan.charAt(0).toUpperCase() + plan.slice(1)} Plan</div>
              <div className="plan-price">${prices[plan]}/month</div>
            </div>
            <div className="features-list">
              <h3>Included:</h3>
              <ul>
                <li>✓ Unlimited website generation</li>
                <li>✓ Premium templates</li>
                <li>✓ Custom domain support</li>
                <li>✓ Priority support</li>
                <li>✓ Advanced customization</li>
                {plan === 'enterprise' && (
                  <>
                    <li>✓ Team collaboration</li>
                    <li>✓ API access</li>
                    <li>✓ White-label solution</li>
                  </>
                )}
              </ul>
            </div>
            <div className="total">
              <span>Total Due Today:</span>
              <span className="total-amount">${prices[plan]}.00</span>
            </div>
          </div>

          <div className="payment-form-container">
            <div className="secure-badge">
              <Lock size={16} /> Secure Payment
            </div>
            
            <form onSubmit={handleSubmit} className="payment-form">
              <h2>Payment Details</h2>
              
              <div className="form-group">
                <label>Card Number</label>
                <div className="input-with-icon">
                  <CreditCard size={20} />
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim())}
                    maxLength={19}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Cardholder Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) => {
                      let val = e.target.value.replace(/\D/g, '');
                      if (val.length >= 2) val = val.slice(0, 2) + '/' + val.slice(2, 4);
                      setExpiry(val);
                    }}
                    maxLength={5}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                    maxLength={3}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="pay-btn" disabled={processing}>
                {processing ? 'Processing...' : `Pay $${prices[plan]}.00`}
              </button>

              <p className="payment-note">
                Your payment is secure and encrypted. You can cancel anytime.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;