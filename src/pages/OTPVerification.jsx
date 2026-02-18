import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';
import '../styles/Auth.css';

function OTPVerification({ pendingUser, onVerified }) {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedOTP = localStorage.getItem('pendingOTP');
    
    if (otp === savedOTP) {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      users.push(pendingUser);
      localStorage.setItem('users', JSON.stringify(users));
      
      localStorage.removeItem('pendingOTP');
      localStorage.removeItem('pendingUser');
      
      onVerified(pendingUser);
      navigate('/dashboard');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const handleResend = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log(`New OTP for ${pendingUser.phone}: ${newOtp}`);
    alert(`Your new OTP is: ${newOtp}`);
    localStorage.setItem('pendingOTP', newOtp);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Shield size={48} color="#667eea" />
        </div>
        <h1>Verify OTP</h1>
        <p className="subtitle">Enter the 6-digit code sent to {pendingUser?.phone}</p>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
            required
            style={{ textAlign: 'center', fontSize: '1.5em', letterSpacing: '0.5em' }}
          />
          <button type="submit" className="btn-primary">Verify</button>
        </form>
        
        <p className="auth-link">
          Didn't receive code? <button onClick={handleResend} style={{ background: 'none', color: '#667eea', textDecoration: 'underline' }}>Resend OTP</button>
        </p>
      </div>
    </div>
  );
}

export default OTPVerification;