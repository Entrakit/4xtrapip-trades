import React, { useState } from 'react';

const DandruffMarketSystem = () => {
  const [flakyMarket, setFlakyMarket] = useState(false);

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {/* Main Indicator Panel */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-6">
        <div className="text-center space-y-4">
          <div className="text-4xl font-bold">
            The Dandruff Market Indicator™
          </div>
          <div className="text-xl">
            "Because Flaky Markets Need Treatment!"
          </div>
          <div className="text-6xl animate-bounce">
            🧴📈🧴
          </div>
        </div>
      </div>

      {/* Market Flakiness Levels */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <div className="text-2xl mb-2">❄️</div>
          <div className="font-bold">Light Flakes</div>
          <div className="text-sm opacity-70">
            "Just a little market dandruff"
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <div className="text-2xl mb-2">🌨️</div>
          <div className="font-bold">Heavy Flakes</div>
          <div className="text-sm opacity-70">
            "Better use the whole bottle"
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <div className="text-2xl mb-2">⛄</div>
          <div className="font-bold">Snowman Level</div>
          <div className="text-sm opacity-70">
            "Call the dermatologist!"
          </div>
        </div>
      </div>

      {/* Treatment Recommendations */}
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="text-center mb-4">
          <div className="text-xl font-bold">Market Treatment Guide</div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="text-2xl">📉</div>
            <div>
              <div className="font-bold">Bearish Dandruff</div>
              <div className="text-sm opacity-70">
                "Apply Head & Shoulders, pray for shoulders"
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-2xl">📈</div>
            <div>
              <div className="font-bold">Bullish Shine</div>
              <div className="text-sm opacity-70">
                "Moisturize those gains!"
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-2xl">↔️</div>
            <div>
              <div className="font-bold">Sideways Scratch</div>
              <div className="text-sm opacity-70">
                "Time for a deep conditioning"
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI's Jealous Corner */}
      <div className="bg-gray-800 rounded-lg p-4">
        <div className="text-center">
          <div className="text-2xl mb-2">🤖</div>
          <div className="font-bold">AI's Daily Struggle</div>
          <div className="text-sm italic">
            "Can't have dandruff if you don't have a head!
            ...but also can't use Head & Shoulders.
            Life is full of trade-offs." 
          </div>
        </div>
      </div>

      {/* P&G Stock Correlation */}
      <div className="bg-gray-800 rounded-lg p-4">
        <div className="text-center space-y-2">
          <div className="font-bold">P&G Flake Index</div>
          <div className="text-3xl">
            📊 + 🧴 = 💰
          </div>
          <div className="text-sm opacity-70">
            "The more the flakes, the higher the stakes!"
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="text-xs text-center opacity-50 italic">
        *This financial advice is as flaky as your scalp.
        Not financial advice. But definitely dandruff advice.
        AI cannot guarantee lack of dandruff due to lack of head.
      </div>
    </div>
  );
};

export default DandruffMarketSystem;
