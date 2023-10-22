import React from 'react';

const NavigationBar = ({ activeTab }) => {
  return (
    <nav className="bottom-nav">
      <a href="topics.html" className={`nav-item ${activeTab === 'topics' ? 'active' : ''}`}>
        <img src="/images/New Chat chosen.png" alt="Image 1" className="nav-icon" />
      </a>
      <a href="index.html" className="nav-item">
        <img src="/images/Chats.png" alt="Image 2" className="nav-icon" />
      </a>
      <a href="information.html" className="nav-item">
        <img src="/images/Information.png" alt="Image 3" className="nav-icon" />
      </a>
    </nav>
  );
};

export default NavigationBar;