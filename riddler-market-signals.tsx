import React, { useState } from 'react';
import { Bell } from 'lucide-react';

const RiddlerMarketSignals = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const dailyRiddles = [
    {
      title: "The GoldMold Prophecy",
      riddle: "🌟🍄📈🏦💫",
      hint: "When stars align with mushrooms grow, golden chances start to flow",
      conspiracy: "Fungi-based currency is the future!",
      trade: "Long GoldMold Futures"
    },
    {
      riddle: "🧊🦄🚀💎🌈",
      hint: "Frozen unicorn tears turn to diamonds in space",
      conspiracy: "Colorado's final form affects market gravity",
      trade: "Buy Mountain Tech"
    },
    {
      riddle: "🤖🖥️💝🐄☕",
      hint: "When Gateway cows meet Roomba love over coffee",
      conspiracy: "Tech romance causes market butterflies",
      trade: "Long Robot Dating Apps"
    }
  ];

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {/* Market Opening Bell */}
      <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl animate-bounce">🔔</div>
          <span className="font-bold">Market Riddler's Den</span>
        </div>
        <div className="text-sm opacity-70">
          "Where conspiracy meets profitability"
        </div>
      </div>

      {/* Daily Riddle */}
      <div className="bg-gray-800 rounded-lg p-6 space-y-4">
        <div className="text-center space-y-2">
          <div className="text-2xl font-bold">Today's Market Prophecy</div>
          <div className="text-5xl tracking-wider space-x-4 py-4">
            {dailyRiddles[0].riddle.split('').map((emoji, i) => (
              <span key={i} className="inline-block hover:animate-bounce cursor-pointer">
                {emoji}
              </span>
            ))}
          </div>
        </div>

        {/* Conspiracy Level Meter */}
        <div className="flex items-center justify-center space-x-2">
          <span className="text-sm">Conspiracy Level:</span>
          <div className="flex">
            {"🌲🌲🌲🌲🌲".split('').map((tree, i) => (
              <span key={i} className="animate-pulse" 
                style={{ animationDelay: `${i * 0.2}s` }}>
                {tree}
              </span>
            ))}
          </div>
        </div>

        {/* Hidden Message */}
        <div className="text-center text-sm opacity-70 hover:opacity-100 transition-opacity">
          "But what if it's true? 👀"
        </div>
      </div>

      {/* Trading Signals */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <div className="text-2xl mb-2">👻</div>
          <div className="text-xs">Ghost of Trading Future</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <div className="text-2xl mb-2">🎯</div>
          <div className="text-xs">Target Acquired</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <div className="text-2xl mb-2">🔮</div>
          <div className="text-xs">Crystal Ball Says</div>
        </div>
      </div>

      {/* Decoder Ring */}
      <div className="bg-gray-800 rounded-lg p-4">
        <div className="text-center mb-4">
          <div className="text-xl font-bold">The Decoder Ring</div>
          <div className="text-sm opacity-70">
            (For those who can see through the fog)
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>🌟 = Gold Standard</div>
          <div>🍄 = Organic Growth</div>
          <div>📈 = Moon Soon</div>
          <div>🏦 = Institution Move</div>
          <div>💫 = Cosmic Alignment</div>
        </div>
      </div>

      {/* Market Cheat Sheet */}
      <div className="text-xs opacity-50 text-center italic">
        Remember: The truth is in the emojis, and the emojis never lie 
        (except when Mercury is in retrograde) 🎭
      </div>
    </div>
  );
};

export default RiddlerMarketSignals;
