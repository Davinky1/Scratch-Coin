import React from 'react';
import '../App.css';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Scratch-Coin</h4>
          <p>A fun and interactive way to learn about cryptocurrency through scratch cards.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/how-to-play">How to Play</a></li>
            <li><a href="/leaderboard">Leaderboard</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-links">
            <a href="https://github.com/Davinky1/Scratch-Coin" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {year} Scratch-Coin. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 