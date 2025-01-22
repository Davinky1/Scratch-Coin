import React from 'react';
import './CardStyles.css';

const ZodiacCard = ({ variant, preview = false }) => {
  const { mainColor, accentColor } = variant;
  
  return (
    <div className="scratch-card zodiac-card" style={{ '--main-color': mainColor, '--accent-color': accentColor }}>
      <div className="card-content">
        <h3>Year of the Snake</h3>
        <div className="zodiac-circle">
          <svg className="snake-symbol" viewBox="0 0 100 100">
            {/* Snake body with S-curve */}
            <path
              d="M 20 50 
                 Q 35 20, 50 50 
                 Q 65 80, 80 50"
              fill="none"
              stroke={accentColor}
              strokeWidth="6"
              strokeLinecap="round"
              className="snake-body"
            />
            {/* Snake head */}
            <path
              d="M 75 50
                 L 85 45
                 Q 87 50, 85 55
                 Z"
              fill={accentColor}
              className="snake-head"
            />
            {/* Snake eyes */}
            <circle cx="82" cy="48" r="1" fill={mainColor}/>
            {/* Snake scales */}
            <path
              d="M 30 45 Q 40 35, 50 45
                 M 40 55 Q 50 45, 60 55
                 M 50 45 Q 60 35, 70 45"
              fill="none"
              stroke={accentColor}
              strokeWidth="1"
              className="snake-scales"
            />
          </svg>
        </div>
      </div>
      
      <div className="scratch-grid">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="scratch-cell">
            {preview ? (
              <svg className="gold-ingot" viewBox="0 0 100 100">
                {/* Yuan Bao base */}
                <path
                  d="M 20 65
                     C 20 75, 80 75, 80 65
                     C 80 40, 50 25, 20 65
                     Z"
                  fill={accentColor}
                  opacity="0.8"
                />
                {/* Yuan Bao top */}
                <path
                  d="M 20 65
                     C 20 55, 80 55, 80 65"
                  fill="none"
                  stroke={accentColor}
                  strokeWidth="3"
                />
                {/* Chinese character lines suggesting 元寶 */}
                <path
                  d="M 45 45 L 55 45
                     M 50 40 L 50 50
                     M 40 55 L 60 55"
                  stroke={accentColor}
                  strokeWidth="2"
                  opacity="0.6"
                />
              </svg>
            ) : '?'}
          </div>
        ))}
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

export default ZodiacCard; 