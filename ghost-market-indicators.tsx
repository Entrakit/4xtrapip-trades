import React, { useState, useEffect } from 'react';
import { Ghost } from 'lucide-react';

const MarketGhosts = () => {
  const [ghostPositions, setGhostPositions] = useState([]);
  
  useEffect(() => {
    const generateGhosts = () => {
      return Array.from({ length: 4 }, (_, i) => ({
        id: i,
        x: Math.random() * 80,
        y: Math.random() * 80,
        color: getGhostColor(i),
        direction: Math.random() * 360,
        speed: 0.5 + Math.random() * 1,
        personality: getGhostPersonality(i)
      }));
    };

    setGhostPositions(generateGhosts());
  }, []);

  const getGhostColor = (index) => {
    const colors = [
      'text-red-400',    // Blinky
      'text-pink-400',   // Pinky
      'text-cyan-400',   // Inky
      'text-orange-400', // Clyde
      'text-blue-400',   // Scared Ghost
      'text-purple-400', // Rothschild Ghost
      'text-green-400',  // Market Bull Ghost
      'text-yellow-400'  // Market Bear Ghost
    ];
    return colors[index % colors.length];
  };

  const getGhostPersonality = (index) => {
    const personalities = [
      'aggressive-ghost',
      'ambush-ghost',
      'patrol-ghost',
      'random-ghost',
      'scared-ghost',
      'wealthy-ghost',
      'bull-ghost',
      'bear-ghost'
    ];
    return personalities[index % personalities.length];
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Classic Pac-Man Style Ghosts */}
      {ghostPositions.map((ghost) => (
        <div
          key={ghost.id}
          className={`absolute transform ${ghost.color}`}
          style={{
            top: `${ghost.y}%`,
            left: `${ghost.x}%`,
            transition: 'all 0.5s ease-in-out',
            animation: `${ghost.personality} ${10 + ghost.id}s infinite`
          }}
        >
          <div className="relative">
            <Ghost className="w-8 h-8" />
            {/* Ghost Eyes */}
            <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full" />
            <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full" />
            {/* Personality Indicators */}
            {ghost.personality === 'wealthy-ghost' && (
              <div className="absolute -top-2 right-0 text-xl">💰</div>
            )}
            {ghost.personality === 'bull-ghost' && (
              <div className="absolute -top-2 right-0 text-xl">🐂</div>
            )}
            {ghost.personality === 'bear-ghost' && (
              <div className="absolute -top-2 right-0 text-xl">🐻</div>
            )}
          </div>
        </div>
      ))}

      {/* Rothschild Ghost with Top Hat */}
      <div className="absolute top-1/4 right-1/4 transform animate-wealthy-float">
        <div className="relative">
          <Ghost className="w-12 h-12 text-purple-400" />
          <div className="absolute -top-4 left-2 text-xl">🎩</div>
          <div className="absolute -right-2 top-0 text-xl">💎</div>
        </div>
      </div>

      {/* Market Bull & Bear Ghosts */}
      <div className="absolute bottom-1/4 left-1/4 animate-market-float">
        <div className="relative group">
          <Ghost className="w-10 h-10 text-green-400 group-hover:text-red-400 transition-colors duration-1000" />
          <div className="absolute -top-2 right-0 text-sm group-hover:hidden">📈</div>
          <div className="absolute -top-2 right-0 text-sm hidden group-hover:block">📉</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes aggressive-ghost {
          0%, 100% { transform: translate(0, 0) scale(1.1); }
          25% { transform: translate(100px, 50px) scale(0.9); }
          50% { transform: translate(0, 100px) scale(1.1); }
          75% { transform: translate(-100px, 50px) scale(0.9); }
        }

        @keyframes ambush-ghost {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(150px, -50px) rotate(180deg); }
        }

        @keyframes patrol-ghost {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(200px); }
        }

        @keyframes random-ghost {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(120px, -80px) scale(1.2); }
          50% { transform: translate(-50px, 100px) scale(0.8); }
          75% { transform: translate(-120px, -40px) scale(1.1); }
        }

        @keyframes scared-ghost {
          0%, 100% { transform: translate(0, 0) scale(0.8); opacity: 0.7; }
          50% { transform: translate(30px, 30px) scale(1.2); opacity: 0.9; }
        }

        @keyframes wealthy-float {
          0%, 100% { transform: translate(0, 0) rotate(5deg); }
          50% { transform: translate(20px, -20px) rotate(-5deg); }
        }

        @keyframes market-float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, -20px); }
        }
      `}</style>
    </div>
  );
};

export default MarketGhosts;
