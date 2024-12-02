import React, { useState, useEffect } from 'react';
import { Ghost, DollarSign } from 'lucide-react';

const RothschildGhost = () => {
  const [marketState, setMarketState] = useState('neutral');
  const [moneyBags, setMoneyBags] = useState([]);
  
  useEffect(() => {
    // Simulate market changes for demo
    const marketInterval = setInterval(() => {
      setMarketState(prev => {
        const states = ['crash', 'rise', 'neutral'];
        const currentIndex = states.indexOf(prev);
        return states[(currentIndex + 1) % states.length];
      });
    }, 5000);

    // Create trailing money bags
    const trailInterval = setInterval(() => {
      setMoneyBags(prev => {
        const newBag = {
          id: Date.now(),
          x: Math.random() * 20 - 10,
          y: Math.random() * 20 - 10
        };
        return [...prev.slice(-5), newBag];
      });
    }, 500);

    return () => {
      clearInterval(marketInterval);
      clearInterval(trailInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Money Bag Trail */}
      {moneyBags.map((bag, index) => (
        <div
          key={bag.id}
          className="absolute top-1/3 right-1/3"
          style={{
            transform: `translate(${bag.x * (index + 1)}px, ${bag.y * (index + 1)}px)`,
            opacity: 1 - (index * 0.2)
          }}
        >
          <DollarSign className="w-4 h-4 text-gold-400" />
        </div>
      ))}

      {/* Main Rothschild Ghost */}
      <div 
        className={`absolute top-1/3 right-1/3 transform 
          ${marketState === 'crash' ? 'animate-crash-dance' : ''}
          ${marketState === 'rise' ? 'animate-hat-tip' : ''}
          ${marketState === 'neutral' ? 'animate-float' : ''}`}
      >
        <div className="relative">
          {/* Ghost Body */}
          <Ghost className="w-16 h-16 text-purple-400" />
          
          {/* Top Hat */}
          <div className="absolute -top-6 left-4 text-2xl transform-origin-bottom">🎩</div>
          
          {/* Floating Molecule */}
          <div className="absolute -right-8 top-0 animate-spin-slow">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 border-2 border-blue-400 rounded-full" />
              <div className="absolute inset-0 border-2 border-blue-400 rounded-full transform rotate-45" />
              <div className="absolute inset-2 bg-blue-400 rounded-full" />
            </div>
          </div>

          {/* Market Reaction Expressions */}
          {marketState === 'crash' && (
            <div className="absolute -right-20 top-0 text-xl animate-bounce">
              Would ya look at that! 👀
            </div>
          )}
          {marketState === 'rise' && (
            <div className="absolute -right-16 top-0 text-xl animate-pulse">
              Quite right! 🧐
            </div>
          )}

          {/* Diamond Accessory */}
          <div className="absolute -right-2 top-0 text-xl">💎</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(5deg); }
          50% { transform: translate(20px, -20px) rotate(-5deg); }
        }

        @keyframes crash-dance {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-10px, 0) rotate(-15deg); }
          75% { transform: translate(10px, 0) rotate(15deg); }
        }

        @keyframes hat-tip {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(0, -10px) rotate(15deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        .animate-crash-dance {
          animation: crash-dance 1s ease-in-out infinite;
        }

        .animate-hat-tip {
          animation: hat-tip 2s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default RothschildGhost;
