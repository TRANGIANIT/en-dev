import React from 'react';
import '../styles/Navigation.css';

function Navigation({ onViewChange, currentView }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <h1>📚 English Learning Hub</h1>
          <p>Học tiếng Anh với Spaced Repetition</p>
        </div>
        <div className="nav-links">
          <button
            className={`nav-btn ${currentView === 'dashboard' ? 'active' : ''}`}
            onClick={() => onViewChange('dashboard')}
          >
            📊 Dashboard
          </button>
          <button
            className={`nav-btn ${currentView === 'learning' ? 'active' : ''}`}
            onClick={() => onViewChange('learning')}
          >
            📖 Học bây giờ
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
