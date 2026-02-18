import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OTPVerification from './pages/OTPVerification';
import Dashboard from './pages/Dashboard';
import Premium from './pages/Premium';
import MyWebsites from './pages/MyWebsites';
import Payment from './pages/Payment';

function App() {
  const [user, setUser] = useState(null);
  const [pendingUser, setPendingUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateUser = (updatedData) => {
    const newUser = { ...user, ...updatedData };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.map(u => u.id === newUser.id ? newUser : u);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!user ? <Home /> : <Navigate to="/dashboard" />} />
        <Route path="/login" element={!user ? <Login onLogin={handleLogin} setPendingUser={setPendingUser} /> : <Navigate to="/dashboard" />} />
        <Route path="/signup" element={!user ? <Signup setPendingUser={setPendingUser} /> : <Navigate to="/dashboard" />} />
        <Route path="/verify-otp" element={!user && pendingUser ? <OTPVerification pendingUser={pendingUser} onVerified={handleLogin} /> : <Navigate to="/" />} />
        <Route path="/dashboard" element={user ? <Dashboard user={user} onLogout={handleLogout} updateUser={updateUser} /> : <Navigate to="/login" />} />
        <Route path="/my-websites" element={user ? <MyWebsites user={user} onLogout={handleLogout} /> : <Navigate to="/login" />} />
        <Route path="/premium" element={user ? <Premium user={user} onLogout={handleLogout} /> : <Navigate to="/login" />} />
        <Route path="/payment" element={user ? <Payment user={user} onLogout={handleLogout} updateUser={updateUser} /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
