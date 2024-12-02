import React, { useState, useEffect } from 'react';
import { Ghost, Clock, TrendingUp, Calendar, Sparkles } from 'lucide-react';

const MarketChristmasGhosts = () => {
  const [timePhase, setTimePhase] = useState('present');
  const [futuresContract, setFuturesContract] = useState(null);

  const pastTrades = [
    "Remember when you panic sold Bitcoin at $100? 😭",
    "That time you said 'Amazon is just a bookstore' 📚",
    "Remember ignoring Tesla at $20? Good times! 🚗",
    "Pets.com seemed like such a good idea... 🐕"
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Ghost of Trading Past */}
      <div className="absolute top-1/4 left-1/4">
        <div className="relative">
          <Ghost className="w-16 h-16 text-sepia-400" />
          {/* Old School Ticker Tape */}
          <div className="absolute -top-4 left-0 right-0 overflow-hidden">
            <div className="ticker-tape text-xs font-mono">
              MSFT @ $2.00 AAPL @ $0.50 GOOGL @ IPO ...
            </div>
          </div>
          
          {/* Regret Bubble */}
          <div className="absolute -right-40 top-0 bg-sepia-300 p-2 rounded-lg
            text-white text-sm vintage-shadow">
            {pastTrades[Math.floor(Math.random() * pastTrades.length)]}
            <Clock className="w-4 h-4 inline ml-1 rotate-counterclockwise" />
          </div>

          {/* Ancient Charts */}
          <div className="absolute -left-20 -bottom-10 opacity-50">
            📈📉📊
            <div className="text-xs text-sepia-600">Dow 1929</div>
          </div>
        </div>
      </div>

      {/* Ghost of Trading Present */}
      <div className="absolute top-1/3 right-1/3">
        <div className="relative">
          <Ghost className="w-20 h-20 text-green-400 animate-pulse" />
          
          {/* Real-Time Ticker */}
          <div className="absolute -top-8 left-0 right-0">
            <div className="bg-black bg-opacity-50 p-1 rounded text-xs text-green-400 font-mono">
              BTC: $69,420 | SPY: $420.69 | VIX: 13.37
            </div>
          </div>

          {/* FOMO Alert */}
          <div className="absolute -right-32 top-0 bg-green-500 p-2 rounded-lg text-white">
            "Buy now, think later!" 🚀
            <div className="text-xs mt-1">*Not Financial Advice</div>
          </div>

          {/* Meme Stonks */}
          <div className="absolute -left-20 bottom-0 text-sm">
            🦍💎🙌
            <div className="text-xs">HODL!</div>
          </div>
        </div>
      </div>

      {/* Ghost of Trading Futures */}
      <div className="absolute bottom-1/3 right-1/4">
        <div className="relative">
          <Ghost className="w-24 h-24 text-blue-400 opacity-80" />
          
          {/* Futuristic Hologram */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-2xl hologram">₿</div>
          </div>

          {/* Future Predictions */}
          <div className="absolute -left-40 top-0 space-y-2">
            <div className="bg-blue-500 p-2 rounded-lg text-white text-sm">
              <div className="font-bold">Future Headlines:</div>
              <div className="text-xs mt-1">
                "Dogecoin becomes world currency" 🐕
              </div>
              <div className="text-xs">
                "JPMorgan converts to crypto" 🏦
              </div>
              <div className="text-xs">
                "Fed starts minting NFTs" 🖼️
              </div>
            </div>
          </div>

          {/* Derivatives Portal */}
          <div className="absolute -right-20 -bottom-10">
            <div className="text-sm font-mono bg-black bg-opacity-50 p-2 rounded">
              <div>Leverage: ∞x</div>
              <div>Risk: YES</div>
            </div>
          </div>
        </div>
      </div>

      {/* Time Distortion Effects */}
      <div className="absolute bottom-20 right-20 bg-gray-800 bg-opacity-90 p-4 rounded-lg">
        <div className="text-sm font-bold mb-2">Temporal Trading Terminal</div>
        <div className="space-y-2 text-xs">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-sepia-400" />
            <span>Past: Buy Bitcoin</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-green-400" />
            <span>Present: To The Moon!</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-blue-400" />
            <span>Future: 1 DOGE = 1 DOGE</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes hologram {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }

        .hologram {
          animation: hologram 2s ease-in-out infinite;
          text-shadow: 0 0 10px #4299e1;
        }

        .vintage-shadow {
          box-shadow: 2px 2px 0px #8b4513;
        }

        .ticker-tape {
          animation: slide 20s linear infinite;
        }

        @keyframes slide {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }

        .rotate-counterclockwise {
          animation: rotate 2s linear infinite reverse;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default MarketChristmasGhosts;
