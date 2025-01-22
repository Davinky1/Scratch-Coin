import React from 'react';
import './CardStyles.css';

const FrostyCard = ({ variant, preview = false }) => {
  const { mainColor, accentColor } = variant;
  
  return (
    <div className="frosty-card" style={{ '--main-color': mainColor, '--accent-color': accentColor }}>
      <div className="card-header">
        <h2>CLUE CRAZE CROSSWORD</h2>
      </div>
      
      <div className="crossword-section">
        <div className="your-letters">
          <h3>YOUR LETTERS</h3>
          <div className="letter-grid">
            {[...Array(18)].map((_, i) => (
              <div key={i} className="letter-cell scratch-area">
                {preview ? (
                  <svg className="magnify-symbol" viewBox="0 0 100 100">
                    {/* Glass circle */}
                    <circle
                      cx="40"
                      cy="40"
                      r="25"
                      fill="none"
                      stroke={accentColor}
                      strokeWidth="6"
                    />
                    {/* Handle */}
                    <path
                      d="M 60 60 L 85 85"
                      stroke={accentColor}
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                    {/* Shine detail */}
                    <path
                      d="M 25 25 Q 30 30, 35 35"
                      stroke={accentColor}
                      strokeWidth="3"
                      opacity="0.6"
                    />
                  </svg>
                ) : '?'}
              </div>
            ))}
          </div>
        </div>
        
        <div className="crossword-grid">
          {preview ? (
            <div className="preview-grid">
              {/* Sample crossword pattern - search/puzzle themed */}
              <div className="crossword-row">
                {['P', 'U', 'Z', 'Z', 'L', 'E', '■', 'C', 'L', 'U', 'E'].map((letter, j) => (
                  <div key={j} className={`crossword-cell ${letter === '■' ? 'black-cell' : ''}`}>
                    {letter !== '■' ? letter : ''}
                  </div>
                ))}
              </div>
              <div className="crossword-row">
                {['A', '■', '■', 'O', '■', '■', '■', 'R', '■', '■', 'S'].map((letter, j) => (
                  <div key={j} className={`crossword-cell ${letter === '■' ? 'black-cell' : ''}`}>
                    {letter !== '■' ? letter : ''}
                  </div>
                ))}
              </div>
              <div className="crossword-row">
                {['T', 'R', 'A', 'O', 'M', '■', 'S', 'Y', 'P', 'T', 'C'].map((letter, j) => (
                  <div key={j} className={`crossword-cell ${letter === '■' ? 'black-cell' : ''}`}>
                    {letter !== '■' ? letter : ''}
                  </div>
                ))}
              </div>
              <div className="crossword-row">
                {['T', '■', '■', 'M', '■', 'H', '■', 'P', '■', '■', 'A'].map((letter, j) => (
                  <div key={j} className={`crossword-cell ${letter === '■' ? 'black-cell' : ''}`}>
                    {letter !== '■' ? letter : ''}
                  </div>
                ))}
              </div>
              <div className="crossword-row">
                {['E', 'N', 'I', 'G', 'M', 'A', '■', 'T', '■', 'S', 'N'].map((letter, j) => (
                  <div key={j} className={`crossword-cell ${letter === '■' ? 'black-cell' : ''}`}>
                    {letter !== '■' ? letter : ''}
                  </div>
                ))}
              </div>
              <div className="crossword-row">
                {['R', '■', '■', '■', '■', 'N', '■', 'O', '■', '■', '■'].map((letter, j) => (
                  <div key={j} className={`crossword-cell ${letter === '■' ? 'black-cell' : ''}`}>
                    {letter !== '■' ? letter : ''}
                  </div>
                ))}
              </div>
              <div className="crossword-row">
                {['N', '■', 'S', 'E', 'E', 'K', '■', '■', 'H', '■', 'M'].map((letter, j) => (
                  <div key={j} className={`crossword-cell ${letter === '■' ? 'black-cell' : ''}`}>
                    {letter !== '■' ? letter : ''}
                  </div>
                ))}
              </div>
              <div className="crossword-row">
                {['■', 'F', '■', '■', '■', '■', 'M', '■', 'I', '■', 'A'].map((letter, j) => (
                  <div key={j} className={`crossword-cell ${letter === '■' ? 'black-cell' : ''}`}>
                    {letter !== '■' ? letter : ''}
                  </div>
                ))}
              </div>
              <div className="crossword-row">
                {['S', 'I', 'P', 'H', 'E', 'R', '■', 'H', 'N', 'T', 'P'].map((letter, j) => (
                  <div key={j} className={`crossword-cell ${letter === '■' ? 'black-cell' : ''}`}>
                    {letter !== '■' ? letter : ''}
                  </div>
                ))}
              </div>
              <div className="crossword-row">
                {['■', 'N', '■', '■', '■', '■', '■', '■', 'T', '■', '■'].map((letter, j) => (
                  <div key={j} className={`crossword-cell ${letter === '■' ? 'black-cell' : ''}`}>
                    {letter !== '■' ? letter : ''}
                  </div>
                ))}
              </div>
              <div className="crossword-row">
                {['■', 'D', 'E', 'C', 'O', 'D', 'E', '■', '■', '■', '■'].map((letter, j) => (
                  <div key={j} className={`crossword-cell ${letter === '■' ? 'black-cell' : ''}`}>
                    {letter !== '■' ? letter : ''}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
        
        <div className="prize-key">
          <h4>PRIZE KEY</h4>
          <div className="prize-table">
            <div className="prize-row">
              <span>3 WORDS</span>
              <span>8 SOL</span>
            </div>
            <div className="prize-row">
              <span>4 WORDS</span>
              <span>16 SOL</span>
            </div>
            <div className="prize-row">
              <span>5 WORDS</span>
              <span>32 SOL</span>
            </div>
            <div className="prize-row highlight">
              <span>6+ WORDS</span>
              <span>80.97 SOL</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card-footer">
        <p>Complete words to win prizes</p>
        <div className="max-prize">
          Max Prize: 80.97 SOL<br/>
          ($20,000 USD)
        </div>
      </div>
    </div>
  );
};

export default FrostyCard; 