import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Trash2, ExternalLink, Crown, LogOut } from 'lucide-react';
import '../styles/MyWebsites.css';

function MyWebsites({ user, onLogout }) {
  const websites = user.websites || [];

  const handleDelete = (websiteId) => {
    if (window.confirm('Are you sure you want to delete this website?')) {
      const updatedWebsites = websites.filter(w => w.id !== websiteId);
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const updatedUsers = users.map(u => 
        u.id === user.id ? { ...u, websites: updatedWebsites } : u
      );
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      
      const updatedUser = { ...user, websites: updatedWebsites };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      window.location.reload();
    }
  };

  return (
    <div className="my-websites-page">
      <nav className="navbar">
        <h2>AI Website Builder</h2>
        <div className="nav-right">
          <span className="user-name">{user.name}</span>
          <Link to="/dashboard" className="nav-link-btn">
            Back to Dashboard
          </Link>
          {user.isPremium && (
            <span className="premium-badge">
              <Crown size={14} /> {user.plan || 'Premium'}
            </span>
          )}
          <button onClick={onLogout} className="logout-btn">
            <LogOut size={16} />
          </button>
        </div>
      </nav>

      <div className="websites-content">
        <div className="websites-header">
          <h1>My Websites</h1>
          <p>Manage all your deployed websites</p>
        </div>

        {websites.length === 0 ? (
          <div className="empty-state">
            <Globe size={64} color="#666" />
            <h2>No websites yet</h2>
            <p>Create and deploy your first website from the dashboard</p>
            <Link to="/dashboard" className="create-btn">
              Create Website
            </Link>
          </div>
        ) : (
          <div className="websites-grid">
            {websites.map((website) => (
              <div key={website.id} className="website-card">
                <div className="website-preview">
                  <iframe
                    srcDoc={website.code}
                    title={website.name}
                    className="mini-preview"
                  />
                </div>
                <div className="website-info">
                  <h3>{website.name}</h3>
                  <p className="website-date">
                    Created: {new Date(website.createdAt).toLocaleDateString()}
                  </p>
                  <div className="website-url">
                    📍 {website.url}
                  </div>
                  <div className="website-actions">
                    <button 
                      onClick={() => {
                        const blob = new Blob([website.code], { type: 'text/html' });
                        const url = URL.createObjectURL(blob);
                        window.open(url, '_blank');
                      }}
                      className="view-btn"
                    >
                      <Globe size={16} /> View Live
                    </button>
                    <button 
                      onClick={() => handleDelete(website.id)}
                      className="delete-btn"
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyWebsites;