import React from 'react';
import './CardStyles.css';

const BingoCard = ({ variant, preview = false }) => {
  const { mainColor, accentColor } = variant;
  
  // Function to generate random number between 1-100
  const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
  
  // Function to generate numbers for a card
  const generateCardNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 24) { // 24 numbers (excluding FREE space)
      numbers.add(getRandomNumber());
    }
    return Array.from(numbers);
  };

  // Array of vibrant colors for the balls
  const ballColors = [
    '#FF6B6B', // red
    '#4ECDC4', // turquoise
    '#45B7D1', // blue
    '#96CEB4', // green
    '#FFEEAD', // yellow
    '#D4A5A5', // pink
    '#9B59B6', // purple
    '#3498DB', // bright blue
    '#E67E22', // orange
    '#2ECC71'  // emerald
  ];

  const getRandomColor = () => ballColors[Math.floor(Math.random() * ballColors.length)];

  const BingoBall = ({ number, color }) => (
    <svg viewBox="0 0 50 50" className="bingo-ball">
      {/* Main ball circle */}
      <circle cx="25" cy="25" r="20" fill={color} className="ball-body"/>
      {/* Highlight shine */}
      <ellipse cx="18" cy="18" rx="6" ry="6" fill="rgba(255, 255, 255, 0.4)" className="ball-shine"/>
      {/* Number */}
      <text x="25" y="32" 
        fontSize={number > 99 ? "14" : "16"} 
        fill={mainColor} 
        textAnchor="middle" 
        fontWeight="bold"
      >
        {preview ? number : '?'}
      </text>
    </svg>
  );

  // Generate caller's card numbers once
  const callerNumbers = generateCardNumbers();

  return (
    <div className="bingo-card" style={{ '--main-color': mainColor, '--accent-color': accentColor }}>
      <div className="card-header">
        <h2 style={{ color: 'white' }}>SCRATCH-COIN BINGO</h2>
      </div>
      
      <div className="bingo-section">
        <div className="bingo-grid-container">
          {[1, 2, 3, 4].map(cardNum => {
            const cardNumbers = generateCardNumbers();
            let numberIndex = 0;
            
            return (
              <div key={cardNum} className="bingo-grid">
                <div className="bingo-header">
                  <span>B</span>
                  <span>I</span>
                  <span>N</span>
                  <span>G</span>
                  <span>O</span>
                </div>
                {[...Array(5)].map((_, row) => (
                  <div key={row} className="bingo-row">
                    {[...Array(5)].map((_, col) => {
                      const isCenterArea = (row >= 1 && row <= 3) && (col >= 1 && col <= 3);
                      const isCenter = row === 2 && col === 2;
                      const cellClass = `bingo-cell scratch-area ${isCenter ? 'free-cell' : ''} ${isCenterArea ? 'center-tile' : 'outer-tile'}`;
                      
                      // If it's the center (FREE) space, don't increment the counter
                      let content = isCenter ? 'FREE' : (preview ? cardNumbers[numberIndex++] : '?');
                      
                      return (
                        <div 
                          key={col} 
                          className={cellClass}
                        >
                          {content}
                        </div>
                      );
                    })}
                  </div>
                ))}
                <div className="card-label">Card {cardNum}</div>
              </div>
            );
          })}
        </div>
        
        <div className="callers-card">
          <h3 style={{ color: 'white' }}>CALLER'S CARD</h3>
          <div className="callers-grid">
            {callerNumbers.map((number, i) => (
              <div key={i} className="bingo-cell caller-number scratch-area outer-tile">
                <BingoBall number={number} color={getRandomColor()} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="prize-table">
          <div className="prize-row">
            <span style={{ color: 'white' }}>Card 1</span>
            <span style={{ color: 'white' }}>20 SOL</span>
          </div>
          <div className="prize-row">
            <span style={{ color: 'white' }}>Card 2</span>
            <span style={{ color: 'white' }}>40 SOL</span>
          </div>
          <div className="prize-row highlight">
            <span style={{ color: 'white' }}>Card 3/4</span>
            <span style={{ color: 'white' }}>80.97 SOL</span>
          </div>
        </div>
      </div>
      
      <div className="card-footer">
        <p>Match numbers to win prizes</p>
        <div className="max-prize" style={{ color: 'white' }}>
          Max Prize: 80.97 SOL<br/>
          ($20,000 USD)
        </div>
      </div>
    </div>
  );
};

export default BingoCard; 