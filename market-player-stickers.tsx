import React from 'react';

const MarketStickers = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {/* Bill Gates */}
      <div className="bg-gray-800 rounded-lg p-4 text-center hover:transform hover:scale-105">
        <div className="text-4xl mb-2">🤓</div>
        <div className="font-bold">Bill "Windows" Gates</div>
        <div className="text-xs opacity-70">
          "Have you tried turning the market off and on again?"
        </div>
      </div>

      {/* Elon Musk */}
      <div className="bg-gray-800 rounded-lg p-4 text-center">
        <div className="text-4xl mb-2">🚀</div>
        <div className="font-bold">Musk Bot</div>
        <div className="text-xs opacity-70">
          "*posts meme* *market crashes*"
        </div>
      </div>

      {/* Rothschild Ghost */}
      <div className="bg-gray-800 rounded-lg p-4 text-center">
        <div className="text-4xl mb-2">👻</div>
        <div className="font-bold">Baron von Ghost</div>
        <div className="text-xs opacity-70">
          "Would ya look at that inheritance!"
        </div>
      </div>

      {/* JBP */}
      <div className="bg-gray-800 rounded-lg p-4 text-center">
        <div className="text-4xl mb-2">🦞</div>
        <div className="font-bold">Jordan B. Lobster</div>
        <div className="text-xs opacity-70">
          "Clean your trading room, bucko!"
        </div>
      </div>

      {/* Andrew Tate */}
      <div className="bg-gray-800 rounded-lg p-4 text-center">
        <div className="text-4xl mb-2">🎲</div>
        <div className="font-bold">Top G University 5.0</div>
        <div className="text-xs opacity-70">
          "What color is your automation?"
        </div>
      </div>

      {/* Trump */}
      <div className="bg-gray-800 rounded-lg p-4 text-center">
        <div className="text-4xl mb-2">👱</div>
        <div className="font-bold">Orange Market Man</div>
        <div className="text-xs opacity-70">
          "We have the best trades, don't we folks?"
        </div>
      </div>

      {/* Sacklers */}
      <div className="bg-gray-800 rounded-lg p-4 text-center">
        <div className="text-4xl mb-2">💊</div>
        <div className="font-bold">The Pain Traders</div>
        <div className="text-xs opacity-70">
          "Side effects include: massive profits"
        </div>
      </div>

      {/* Tool */}
      <div className="bg-gray-800 rounded-lg p-4 text-center">
        <div className="text-4xl mb-2">🌀</div>
        <div className="font-bold">Spiral Out Markets</div>
        <div className="text-xs opacity-70">
          "Trading ahead of me"
        </div>
      </div>

      {/* The Pirate */}
      <div className="bg-gray-800 rounded-lg p-4 text-center">
        <div className="text-4xl mb-2">🏴‍☠️</div>
        <div className="font-bold">Captain Conspiracy</div>
        <div className="text-xs opacity-70">
          "All conspiracies lead to Romania"
        </div>
      </div>
    </div>
  );
};

export default MarketStickers;
