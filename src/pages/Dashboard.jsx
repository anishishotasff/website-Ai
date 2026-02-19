import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Crown, LogOut, Send, Download, Globe, FolderOpen, Key } from 'lucide-react';
import '../styles/Dashboard.css';
import { generateWebsite } from '../utils/websiteGenerator';
import { generateWebsiteWithAI } from '../utils/aiWebsiteGenerator';
import { deployWebsite, generateDownloadFiles, downloadAsZip } from '../utils/deploymentService';

function Dashboard({ user, onLogout, updateUser }) {
  const [prompt, setPrompt] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployedUrl, setDeployedUrl] = useState('');
  const [websiteName, setWebsiteName] = useState('');
  const [showCustomDomain, setShowCustomDomain] = useState(false);
  const [customDomain, setCustomDomain] = useState(user.customDomain || '');
  const [apiKey, setApiKey] = useState(localStorage.getItem('geminiApiKey') || '');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const [useAI, setUseAI] = useState(false); // Default to false, only enable when API key is added

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setDeployedUrl('');
    
    try {
      let code;
      
      // Only use AI if explicitly enabled AND API key exists
      if (useAI && apiKey && apiKey.trim()) {
        // Use Gemini AI to generate website
        try {
          code = await generateWebsiteWithAI(prompt, apiKey);
        } catch (aiError) {
          console.error('AI generation failed:', aiError);
          // Automatically switch to template mode
          setUseAI(false);
          alert('AI generation failed. Switching to template mode. Please check your API key in settings.');
          // Use template as fallback
          await new Promise(resolve => setTimeout(resolve, 1500));
          code = generateWebsite(prompt);
        }
      } else {
        // Use template-based generation (default)
        await new Promise(resolve => setTimeout(resolve, 1500));
        code = generateWebsite(prompt);
      }
      
      setGeneratedCode(code);
      setWebsiteName(prompt.slice(0, 30));
    } catch (error) {
      console.error('Generation error:', error);
      alert('Failed to generate website. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSaveApiKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem('geminiApiKey', apiKey.trim());
      setUseAI(true); // Enable AI only after saving key
      setShowApiKeyInput(false);
      alert('Gemini API key saved! AI generation is now enabled. Try generating a website!');
    } else {
      alert('Please enter a valid API key');
    }
  };

  const handleRemoveApiKey = () => {
    if (window.confirm('Are you sure you want to remove the API key? You will use template mode.')) {
      localStorage.removeItem('geminiApiKey');
      setApiKey('');
      setUseAI(false);
      setShowApiKeyInput(false);
      alert('API key removed. Using template-based generation.');
    }
  };

  const handleDisableAI = () => {
    setUseAI(false);
    alert('AI generation disabled. Using fast template mode.');
  };

  const handleDeploy = async () => {
    setIsDeploying(true);
    try {
      const result = await deployWebsite({ 
        html: generatedCode, 
        name: websiteName 
      }, user);
      
      if (result.success) {
        setDeployedUrl(result.url);
        
        // Save to user's websites
        const newWebsite = {
          id: result.deploymentId,
          name: websiteName,
          url: result.url,
          code: generatedCode,
          blobUrl: result.blobUrl,
          createdAt: result.deployedAt
        };
        
        const updatedWebsites = [...(user.websites || []), newWebsite];
        updateUser({ websites: updatedWebsites });
        
        alert('Website deployed successfully! Opening in new tab...');
      }
    } catch (error) {
      alert('Deployment failed. Please try again.');
    }
    setIsDeploying(false);
  };

  const handleDownload = () => {
    const files = generateDownloadFiles(generatedCode, websiteName);
    downloadAsZip(files, websiteName);
  };

  const handleSaveCustomDomain = () => {
    if (customDomain && user.isPremium) {
      updateUser({ customDomain });
      alert('Custom domain saved! It will be used for your next deployment.');
      setShowCustomDomain(false);
    }
  };

  return (
    <div className="dashboard">
      <nav className="navbar">
        <h2>AI Website Builder</h2>
        <div className="nav-right">
          <span className="user-name">{user.name}</span>
          <Link to="/my-websites" className="nav-link-btn">
            <FolderOpen size={16} /> My Websites
          </Link>
          {!user.isPremium && (
            <Link to="/premium" className="premium-btn">
              <Crown size={16} /> Upgrade
            </Link>
          )}
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

      <div className="main-content">
        <div className="input-section">
          <div className="header-row">
            <div>
              <h1>Describe your website</h1>
              <p>Tell us what kind of website you want to create</p>
            </div>
            <div className="ai-toggle">
              {useAI && apiKey ? (
                <div className="ai-status">
                  <span className="ai-badge">🤖 AI Powered</span>
                  <div className="ai-actions">
                    <button onClick={() => setShowApiKeyInput(true)} className="api-key-btn">
                      <Key size={16} /> Manage Key
                    </button>
                    <button onClick={handleDisableAI} className="disable-ai-btn">
                      Use Templates
                    </button>
                  </div>
                </div>
              ) : (
                <button onClick={() => setShowApiKeyInput(true)} className="enable-ai-btn">
                  <Key size={16} /> Enable AI Generation
                </button>
              )}
            </div>
          </div>

          {showApiKeyInput && (
            <div className="api-key-section">
              <h3>🤖 Gemini AI Configuration</h3>
              <p>Enter your Google Gemini API key to enable AI-powered website generation</p>
              <div className="api-key-input-group">
                <input
                  type="password"
                  placeholder="Enter your Gemini API key (AIzaSy...)"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
                <button onClick={handleSaveApiKey} className="save-key-btn" disabled={!apiKey.trim()}>
                  Save
                </button>
                {apiKey && (
                  <button onClick={handleRemoveApiKey} className="remove-key-btn">
                    Remove
                  </button>
                )}
                <button onClick={() => setShowApiKeyInput(false)} className="cancel-key-btn">
                  Cancel
                </button>
              </div>
              <div className="api-key-info">
                <p className="api-key-help">
                  <strong>Don't have an API key?</strong> Get one free from: 
                  <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer"> Google AI Studio</a>
                </p>
                <p className="api-key-note">
                  ℹ️ Without an API key, the system will use fast template-based generation
                </p>
              </div>
            </div>
          )}
          
          <div className="prompt-box">
            <div className="mode-indicator">
              {useAI ? (
                <span className="mode-badge ai-mode">🤖 AI Mode Active</span>
              ) : (
                <span className="mode-badge template-mode">⚡ Template Mode (Fast)</span>
              )}
            </div>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={useAI 
                ? "e.g., Create a modern landing page for a coffee shop with a hero section, animated menu cards, testimonials, and a contact form with a map"
                : "e.g., Create a modern landing page for a coffee shop with a hero section, menu, and contact form"}
              rows={4}
            />
            <button 
              onClick={handleGenerate} 
              disabled={isGenerating || !prompt.trim()}
              className="generate-btn"
            >
              {isGenerating 
                ? (useAI ? '🤖 AI is thinking...' : '⚡ Generating...') 
                : (useAI ? '🤖 Generate with AI' : '⚡ Generate Website')} 
              <Send size={16} />
            </button>
          </div>
        </div>

        {generatedCode && (
          <div className="output-section">
            <div className="output-header">
              <h3>Your Website</h3>
              <div className="output-actions">
                <button onClick={handleDownload} className="action-btn">
                  <Download size={16} /> Download Files
                </button>
                <button 
                  onClick={handleDeploy} 
                  className="action-btn primary"
                  disabled={isDeploying}
                >
                  <Globe size={16} /> {isDeploying ? 'Deploying...' : 'Deploy Live'}
                </button>
              </div>
            </div>

            {user.isPremium && (
              <div className="custom-domain-section">
                {!showCustomDomain ? (
                  <button onClick={() => setShowCustomDomain(true)} className="domain-btn">
                    Set Custom Domain
                  </button>
                ) : (
                  <div className="domain-input-group">
                    <input
                      type="text"
                      placeholder="yourdomain.com"
                      value={customDomain}
                      onChange={(e) => setCustomDomain(e.target.value)}
                    />
                    <button onClick={handleSaveCustomDomain} className="save-domain-btn">
                      Save
                    </button>
                    <button onClick={() => setShowCustomDomain(false)} className="cancel-btn">
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            )}

            {deployedUrl && (
              <div className="deployed-url">
                <span>🎉 Website Deployed Successfully!</span>
                <p style={{ fontSize: '0.9em', marginTop: '10px', opacity: 0.9 }}>
                  Your website has been opened in a new tab. In production, it would be available at: {deployedUrl}
                </p>
              </div>
            )}
            
            <div className="preview-container">
              <iframe
                srcDoc={generatedCode}
                title="Website Preview"
                className="preview-frame"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
