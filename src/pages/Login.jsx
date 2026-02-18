import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

function Login({ onLogin, setPendingUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      // Generate OTP for login
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      console.log(`Login OTP for ${user.phone}: ${otp}`);
      alert(`Your OTP is: ${otp} (In production, this will be sent to your phone)`);
      
      localStorage.setItem('pendingOTP', otp);
      localStorage.setItem('pendingUser', JSON.stringify(user));
      
      setPendingUser(user);
      navigate('/verify-otp');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>AI Website Builder</h1>
        <p className="subtitle">Generate websites instantly with AI</p>
        
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn-primary">Login</button>
        </form>
        
        <p className="auth-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
