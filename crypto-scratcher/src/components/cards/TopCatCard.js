import React from 'react';
import './CardStyles.css';

const TopCatCard = ({ variant, preview = false }) => {
  const { mainColor, accentColor } = variant;
  
  return (
    <div className="topcat-card" style={{ '--main-color': mainColor, '--accent-color': accentColor }}>
      <div className="card-header">
        <h2>HAT CAT</h2>
      </div>
      
      <div className="topcat-main">
        <div className="portrait-frame">
          <svg className="cat-portrait" viewBox="0 0 100 100">
            {/* Top Hat */}
            <path
              d="M 30 25
                 L 70 25
                 L 70 35
                 L 75 35
                 L 75 45
                 L 25 45
                 L 25 35
                 L 30 35
                 Z"
              fill={accentColor}
              className="top-hat"
            />
            {/* Hat Band */}
            <path
              d="M 25 40 L 75 40"
              stroke={mainColor}
              strokeWidth="2"
            />
            {/* Cat head */}
            <path
              d="M 30 45
                 Q 50 40, 70 45
                 Q 75 60, 70 75
                 Q 50 85, 30 75
                 Q 25 60, 30 45"
              fill={accentColor}
              className="cat-head"
            />
            {/* Cat ears */}
            <path
              d="M 30 45 L 25 35 L 35 42 Z"
              fill={accentColor}
            />
            <path
              d="M 70 45 L 75 35 L 65 42 Z"
              fill={accentColor}
            />
            {/* Cat eyes */}
            <circle cx="40" cy="55" r="4" fill={mainColor}/>
            <circle cx="60" cy="55" r="4" fill={mainColor}/>
            {/* Cat nose */}
            <path
              d="M 48 65 L 52 65 L 50 68 Z"
              fill={mainColor}
            />
            {/* Cat mouth */}
            <path
              d="M 45 70 Q 50 73, 55 70"
              fill="none"
              stroke={mainColor}
              strokeWidth="1.5"
            />
            {/* Whiskers */}
            <path
              d="M 30 65 L 45 65
                 M 30 68 L 45 68
                 M 55 65 L 70 65
                 M 55 68 L 70 68"
              stroke={mainColor}
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
      
      <div className="numbers-section">
        <div className="winning-numbers">
          <h3>WINNING NUMBERS</h3>
          <div className="winning-grid">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="number-cell scratch-area">
                {preview ? (
                  <svg className="treat-symbol" viewBox="0 0 100 100">
                    {/* Fish-shaped treat */}
                    <path
                      d="M 20 50
                         C 20 30, 40 20, 60 20
                         C 80 20, 90 35, 90 50
                         C 90 65, 80 80, 60 80
                         C 40 80, 20 70, 20 50
                         Z"
                      fill={accentColor}
                      opacity="0.8"
                    />
                    {/* Fish eye */}
                    <circle cx="70" cy="40" r="3" fill={mainColor}/>
                    {/* Fish scales */}
                    <path
                      d="M 40 35 Q 50 30, 60 35
                         M 35 50 Q 45 45, 55 50
                         M 40 65 Q 50 60, 60 65"
                      fill="none"
                      stroke={mainColor}
                      strokeWidth="1"
                    />
                  </svg>
                ) : '?'}
              </div>
            ))}
          </div>
        </div>
        
        <div className="your-numbers">
          <h3>YOUR NUMBERS</h3>
          <div className="your-numbers-grid">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="number-cell scratch-area">
                {preview ? (
                  <svg className="paw-symbol" viewBox="0 0 100 100">
                    {/* Cat paw print design */}
                    <path
                      d="M 50 45
                         C 40 45, 30 55, 30 65
                         C 30 75, 40 80, 50 80
                         C 60 80, 70 75, 70 65
                         C 70 55, 60 45, 50 45
                         
                         M 40 25
                         C 35 25, 30 30, 30 35
                         C 30 40, 35 45, 40 45
                         C 45 45, 50 40, 50 35
                         C 50 30, 45 25, 40 25
                         
                         M 60 25
                         C 55 25, 50 30, 50 35
                         C 50 40, 55 45, 60 45
                         C 65 45, 70 40, 70 35
                         C 70 30, 65 25, 60 25
                         
                         M 25 40
                         C 20 40, 15 45, 15 50
                         C 15 55, 20 60, 25 60
                         C 30 60, 35 55, 35 50
                         C 35 45, 30 40, 25 40
                         
                         M 75 40
                         C 70 40, 65 45, 65 50
                         C 65 55, 70 60, 75 60
                         C 80 60, 85 55, 85 50
                         C 85 45, 80 40, 75 40"
                      fill={accentColor}
                      opacity="0.9"
                    />
                  </svg>
                ) : '?'}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="card-footer">
        <p>Match 3 symbols to win</p>
        <div className="max-prize">
          Max Prize: 60.73 SOL<br/>
          ($15,000 USD)
        </div>
      </div>
    </div>
  );
};

export default TopCatCard; 