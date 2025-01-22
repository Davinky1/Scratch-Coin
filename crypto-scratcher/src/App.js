import React, { useState, useEffect } from 'react';
import './App.css';
import ZodiacCard from './components/cards/ZodiacCard';
import TopCatCard from './components/cards/TopCatCard';
import FrostyCard from './components/cards/FrostyCard';
import BingoCard from './components/cards/BingoCard';

const CARD_TYPES = {
  ZODIAC: {
    name: 'Year of the Snake',
    baseColor: '#001F3F',
    baseAccent: '#FFD700',
    component: ZodiacCard,
    variants: [
      { id: 1, name: 'Navy & Gold', mainColor: '#001F3F', accentColor: '#FFD700' },
      { id: 2, name: 'Burgundy & Gold', mainColor: '#800020', accentColor: '#E5C687' },
      { id: 3, name: 'Forest & Copper', mainColor: '#2E4A3B', accentColor: '#B87333' }
    ],
    maxPrize: '60.73 SOL ($15,000 USD)',
    price: '0.008 SOL ($3 USD)'
  },
  TOP_CAT: {
    name: 'Hat Cat',
    baseColor: '#800080',
    baseAccent: '#FFD700',
    component: TopCatCard,
    variants: [
      { id: 1, name: 'Purple & Gold', mainColor: '#800080', accentColor: '#FFD700' },
      { id: 2, name: 'Green & Orange', mainColor: '#1B4D3E', accentColor: '#FFA500' },
      { id: 3, name: 'Red & Silver', mainColor: '#B22222', accentColor: '#C0C0C0' }
    ],
    maxPrize: '60.73 SOL ($15,000 USD)',
    price: '0.008 SOL ($3 USD)'
  },
  FROSTY: {
    name: 'Clue Craze Crossword',
    baseColor: '#87CEEB',
    baseAccent: '#FFFFFF',
    component: FrostyCard,
    variants: [
      { id: 1, name: 'Sky Blue & White', mainColor: '#87CEEB', accentColor: '#FFFFFF' },
      { id: 2, name: 'Purple & Cyan', mainColor: '#9370DB', accentColor: '#E0FFFF' },
      { id: 3, name: 'Sea Green & Blue', mainColor: '#20B2AA', accentColor: '#F0F8FF' }
    ],
    maxPrize: '80.97 SOL ($20,000 USD)',
    price: '0.016 SOL ($4 USD)'
  },
  BINGO: {
    name: 'Scratch-Coin Bingo',
    baseColor: '#00CED1',
    baseAccent: '#FFD700',
    component: BingoCard,
    variants: [
      { id: 1, name: 'Turquoise & Gold', mainColor: '#00CED1', accentColor: '#FFD700' },
      { id: 2, name: 'Pink & Yellow', mainColor: '#FF69B4', accentColor: '#FFFF00' },
      { id: 3, name: 'Indigo & Green', mainColor: '#4B0082', accentColor: '#00FF7F' }
    ],
    maxPrize: '80.97 SOL ($20,000 USD)',
    price: '0.016 SOL ($4 USD)'
  }
};

function App() {
  const [selectedType, setSelectedType] = useState(null);

  // Add ESC key handler
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && selectedType) {
        setSelectedType(null);
      }
    };

    // Add event listener
    document.addEventListener('keydown', handleEscKey);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedType]);  // Only re-run if selectedType changes

  const handleCardSelect = (cardType) => {
    setSelectedType(cardType);
  };

  const handleVariantSelect = () => {
    setSelectedType(null);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Crypto Scratcher</h1>
        <p>Choose your lucky card!</p>
      </header>
      
      <main className="main">
        <div className="cards-grid">
          {Object.entries(CARD_TYPES).map(([key, cardType]) => {
            const CardComponent = cardType.component;
            return (
              <div key={key} onClick={() => handleCardSelect(cardType)}>
                {!selectedType && <div className="price-tag">{cardType.price}</div>}
                <CardComponent
                  variant={{
                    mainColor: cardType.baseColor,
                    accentColor: cardType.baseAccent
                  }}
                  preview={true}
                />
              </div>
            );
          })}
        </div>
      </main>

      {selectedType && (
        <div className="modal-overlay" onClick={() => setSelectedType(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>{selectedType.name}<br/>{selectedType.price}<br/>
              <span className="max-prize" style={{ color: 'white' }}>
                MAX PRIZE: {selectedType.maxPrize.split(' ')[0]} SOL<br/>
                ({selectedType.maxPrize.split('(')[1].split(')')[0]})
              </span>
            </h2>
            <div className="variants-grid">
              {selectedType.variants.map((variant) => {
                const CardComponent = selectedType.component;
                return (
                  <div
                    key={variant.id}
                    className="variant-card"
                    onClick={() => handleVariantSelect(variant)}
                  >
                    <CardComponent
                      variant={variant}
                      preview={true}
                    />
                  </div>
                );
              })}
            </div>
            <button className="close-button" onClick={() => setSelectedType(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
