// marketComponents.js
import React from 'react';
import RothschildGhost from './components/enhanced-rothschild-ghost';
import MarketGhosts from './components/ghost-market-indicators';
import MysticClocks from './components/mystical-market-elements';
import ChessMarket from './components/dynamic-chess-market';
import TrumpyBear from './components/trumpy-bear';
import YellenStilts from './components/yellen-stilts';

// Configuration options for each component
export const componentConfig = {
  RothschildGhost: {
    enableMoneyTrail: true,
    crashDanceEnabled: true,
    moleculeSpeed: 'slow',
    hatTipTrigger: 'marketRise',
    ghostColor: 'purple-400',
    phrases: [
      'Would ya look at that!',
      'Simply marvelous, darling',
      'Oh, the peasants are trading again'
    ]
  },
  
  TrumpyBear: {
    moodTriggers: {
      bullMarket: 'tremendous',
      bearMarket: 'fake news',
      sideways: 'covfefe'
    },
    tweetEnabled: true,
    hairAnimation: 'flow',
    catchphrases: [
      'We have the best stocks, don\'t we folks?',
      'The market is doing tremendously well',
      'WITCH HUNT by the Fed!'
    ]
  },

  YellenStilts: {
    uncleSamHeight: 'tall',
    fedSpeechBubbles: true,
    stiltWobble: 'medium',
    reactions: {
      rateHike: 'careful_walking',
      rateCut: 'happy_dance',
      unchanged: 'balance_beam'
    }
  }
};

// Usage example
export const MarketIndicators = ({ config = {} }) => {
  return (
    <div className="market-container">
      {/* Base Market Components */}
      <ChessMarket />
      <MysticClocks />
      
      {/* Ghost Family */}
      <MarketGhosts />
      <RothschildGhost {...componentConfig.RothschildGhost} {...config.rothschild} />
      
      {/* Political Theater */}
      <TrumpyBear {...componentConfig.TrumpyBear} {...config.trumpy} />
      <YellenStilts {...componentConfig.YellenStilts} {...config.yellen} />
    </div>
  );
};

// Sample implementation script
const implementationExample = `
import { MarketIndicators } from './marketComponents';

// Custom configuration
const myConfig = {
  rothschild: {
    enableMoneyTrail: true,
    customPhrases: ['My own custom phrase!']
  },
  trumpy: {
    tweetEnabled: true,
    customCatchphrases: ['Make Markets Great Again!']
  },
  yellen: {
    stiltWobble: 'high',
    fedSpeechBubbles: true
  }
};

// Use in your app
const MyTradingApp = () => {
  return (
    <div>
      <h1>4xtraPip Trading Platform</h1>
      <MarketIndicators config={myConfig} />
    </div>
  );
};
`;

// Style guide for components
const styleGuide = `
/* Component Color Scheme */
:root {
  --rothschild-purple: #9F7AEA;
  --trumpy-gold: #FFD700;
  --yellen-blue: #4299E1;
  --ghost-fade: rgba(255, 255, 255, 0.1);
  --market-green: #48BB78;
  --market-red: #F56565;
}

/* Animation Speeds */
.slow-float { animation: float 5s infinite; }
.medium-float { animation: float 3s infinite; }
.fast-float { animation: float 1s infinite; }

/* Ghost Trails */
.money-trail { opacity: 0.6; }
.tweet-trail { opacity: 0.8; }
.fed-speech-trail { opacity: 0.7; }
`;

// README section
const documentation = `
# 4xtraPip Market Components Library

## Overview
A collection of whimsical yet functional market indicators and characters that bring
personality to your trading platform.

## Components

### RothschildGhost
The aristocratic market observer with top hat and molecule accessories.
- Configure money trail
- Set market reaction phrases
- Adjust molecule rotation speed

### TrumpyBear
Market commentary with signature style.
- Tweet generation
- Hair physics
- Market mood responses

### YellenStilts
Fed policy visualization with Uncle Sam ghost.
- Configure stilt height
- Set wobble intensity
- Enable/disable Fed speech bubbles

## Usage
1. Import desired components
2. Configure using componentConfig
3. Implement with custom settings
4. Enjoy the show!

## Tips
- Components can be used independently or together
- All animations can be customized
- Event handlers can be added for market data
- Mobile-responsive and performance-optimized
`;

export { documentation, styleGuide, implementationExample };
