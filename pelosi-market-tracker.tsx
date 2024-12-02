import React, { useState, useEffect } from 'react';
import { Ghost, TrendingUp, FileText, Bell } from 'lucide-react';

const PelosiTracker = () => {
  const [isTrading, setIsTrading] = useState(false);
  const [sectorAlert, setSectorAlert] = useState('');
  const [gavelPosition, setGavelPosition] = useState({ x: 0, y: 0 });
  
  const recentTrades = [
    { sector: 'Semiconductors', timing: 'Pre-CHIPS Act', gain: '+145%' },
    { sector: 'Electric Vehicles', timing: 'Pre-Green Bill', gain: '+82%' },
    { sector: 'Tech Options', timing: 'Pre-Earnings', gain: '+168%' }
  ];

  useEffect(() => {
    // Animate gavel position
    const gavelInterval = setInterval(() => {
      setGavelPosition({
        x: Math.sin(Date.now() / 1000) * 10,
        y: Math.cos(Date.now() / 1000) * 10
      });
    }, 50);

    return () => clearInterval(gavelInterval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Pelosi Ghost */}
      <div className={`absolute top-1/3 right-1/3 transform ${
        isTrading ? 'animate-trading-dance' : 'animate-float'
      }`}>
        <div className="relative">
          {/* Ghost Body */}
          <Ghost className="w-16 h-16 text-purple-300" />
          
          {/* Signature Hair */}
          <div className="absolute -top-2 left-2 w-12 h-6 bg-gray-400 rounded-t-full" />
          
          {/* Designer Sunglasses */}
          <div className="absolute top-4 left-3 w-10 h-3 bg-black rounded-full" />
          
          {/* Ice Cream Cone (because why not) */}
          <div className="absolute -right-4 top-6 text-lg">🍦</div>

          {/* The Famous Gavel */}
          <div 
            className="absolute -right-8 -top-6 text-2xl transform rotate-45"
            style={{
              transform: `translate(${gavelPosition.x}px, ${gavelPosition.y}px) rotate(45deg)`
            }}
          >
            🔨
          </div>

          {/* Trading Alert Bubble */}
          {sectorAlert && (
            <div className="absolute -right-32 -top-4 bg-green-400 p-2 rounded-lg 
              text-white text-sm animate-bounce">
              "Let me be clear... BUY BUY BUY!" 
              <span className="text-xs">📈</span>
            </div>
          )}
        </div>
      </div>

      {/* Trade Timing Indicators */}
      <div className="absolute top-20 right-20 bg-gray-800 bg-opacity-90 rounded-lg p-4 w-64">
        <div className="flex items-center mb-2">
          <Bell className="w-4 h-4 mr-2 text-green-400" />
          <span className="text-sm font-bold">Pelosi Trading Alert</span>
        </div>
        
        <div className="space-y-2">
          {recentTrades.map((trade, index) => (
            <div key={index} className="text-sm bg-gray-700 rounded p-2">
              <div className="flex justify-between">
                <span>{trade.sector}</span>
                <span className="text-green-400">{trade.gain}</span>
              </div>
              <div className="text-xs text-gray-400">{trade.timing}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-xs text-gray-400 italic">
          "We're a free market economy" 🤫
        </div>
      </div>

      <style jsx>{`
        @keyframes trading-dance {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, -10px) rotate(10deg); }
          75% { transform: translate(-10px, -10px) rotate(-10deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        @keyframes gavel-swing {
          0% { transform: rotate(45deg); }
          50% { transform: rotate(-45deg); }
          100% { transform: rotate(45deg); }
        }

        .animate-trading-dance {
          animation: trading-dance 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PelosiTracker;
