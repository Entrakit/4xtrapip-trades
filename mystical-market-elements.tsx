import React, { useState, useEffect } from 'react';
import { Eye, Target, Ghost, Server, TrendingUp, Clock } from 'lucide-react';

const MysticalMarketElements = () => {
  const [spiralRotation, setSpiralRotation] = useState(0);
  const [easyButtonPosition, setEasyButtonPosition] = useState({ x: 0, y: 0 });
  const [eyeBlink, setEyeBlink] = useState(false);

  useEffect(() => {
    // Spiral animation for bullish trends
    const spiralInterval = setInterval(() => {
      setSpiralRotation(prev => (prev + 1) % 360);
    }, 50);

    // Easy button server movement
    const serverInterval = setInterval(() => {
      setEasyButtonPosition({
        x: Math.sin(Date.now() / 1000) * 20,
        y: Math.cos(Date.now() / 1000) * 20
      });
    }, 50);

    // Eye blink effect
    const blinkInterval = setInterval(() => {
      setEyeBlink(true);
      setTimeout(() => setEyeBlink(false), 100);
    }, 1000);

    return () => {
      clearInterval(spiralInterval);
      clearInterval(serverInterval);
      clearInterval(blinkInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Background Eye of Hours */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <Eye 
          className={`w-96 h-96 text-gray-600 transition-opacity duration-100 ${eyeBlink ? 'opacity-0' : 'opacity-100'}`} 
        />
      </div>

      {/* Spiral Out Bullish Indicator */}
      <div className="absolute top-20 right-20">
        <div 
          className="w-16 h-16 relative"
          style={{ transform: `rotate(${spiralRotation}deg)` }}
        >
          <div className="absolute inset-0 bg-blue-500 opacity-50 rounded-full scale-x-50 animate-pulse">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold">
              SPIRAL OUT
            </span>
          </div>
          <div className="absolute inset-0 border-2 border-blue-400 rounded-full animate-ping" />
        </div>
      </div>

      {/* Rothschild's Ghost */}
      <div className="absolute top-1/3 right-1/3 animate-float">
        <div className="relative">
          <Ghost className="w-12 h-12 text-gray-400" />
          <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-600" />
        </div>
      </div>

      {/* Easy Button Server */}
      <div 
        className="absolute bottom-20 left-20 transform transition-transform duration-1000 ease-in-out"
        style={{ 
          transform: `translate(${easyButtonPosition.x}px, ${easyButtonPosition.y}px)` 
        }}
      >
        <div className="relative">
          <Server className="w-12 h-12 text-gray-300 animate-bounce" />
          <div className="absolute -top-4 -right-4 bg-red-500 rounded-full p-2 animate-pulse">
            <span className="text-xs font-bold text-white">EASY</span>
          </div>
        </div>
      </div>

      {/* Floating Asset Manager Logos */}
      <div className="absolute inset-0">
        {['BlackRock', 'Vanguard', 'Fidelity'].map((manager, index) => (
          <div
            key={manager}
            className="absolute transform rotate-y-180"
            style={{
              top: `${30 + index * 20}%`,
              left: `${20 + index * 25}%`,
              animation: `logoFlip 3s infinite ${index * 1}s`
            }}
          >
            <div className="relative w-16 h-16 rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-white animate-flip-x">
                {manager}
              </div>
              <div className="absolute inset-0 border-2 border-transparent animate-border-flow" />
            </div>
          </div>
        ))}
      </div>

      {/* Floating Archery Targets */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
            animation: `float ${5 + i}s infinite ease-in-out`
          }}
        >
          <Target className="w-8 h-8 text-gold-500 opacity-30" />
        </div>
      ))}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -10px); }
        }

        @keyframes logoFlip {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(180deg); }
          100% { transform: rotateY(360deg); }
        }

        @keyframes border-flow {
          0% { border-image: linear-gradient(45deg, #fff, #000) 1; }
          50% { border-image: linear-gradient(225deg, #000, #fff) 1; }
          100% { border-image: linear-gradient(45deg, #fff, #000) 1; }
        }
      `}</style>
    </div>
  );
};

export default MysticalMarketElements;
