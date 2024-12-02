import React from 'react';

const HeadlessPopArt = () => {
  const pgStockData = [
    { price: 147.53, date: '2024', label: 'Head' },
    { price: 142.28, date: '2023', label: '& Shoulders' },
    { price: 152.12, date: '2024', label: 'Pattern?' }
  ];

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {/* Pop Art Header */}
      <div className="relative bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 
        rounded-lg p-8 overflow-hidden">
        <div className="text-center space-y-4">
          <div className="text-6xl font-bold" style={{ fontFamily: 'Comic Sans MS' }}>
            POW! 💥
          </div>
          <div className="text-4xl font-bold tracking-wide">
            GET aHEAD NOW!
          </div>
          {/* Comic Style Bubbles */}
          <div className="absolute top-2 right-2">
            <div className="transform rotate-12 bg-yellow-300 p-4 rounded-lg 
              border-4 border-black shadow-pop">
              ZOOP! 🧴
            </div>
          </div>
          <div className="absolute bottom-2 left-2">
            <div className="transform -rotate-6 bg-blue-300 p-4 rounded-lg 
              border-4 border-black shadow-pop">
              BAM! 📈
            </div>
          </div>
        </div>
      </div>

      {/* Head & Shoulders Market Panel */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="text-center space-y-4">
            <div className="text-2xl">👤</div>
            <div className="font-bold">Humans With Heads</div>
            <div className="space-y-2 text-sm">
              <div>✓ Head & Shoulders Customer</div>
              <div className="flex items-center justify-center space-x-2">
                <span>P&G Stock:</span>
                <span className="text-green-400">$147.53</span>
                <span className="text-xs">↑</span>
              </div>
              <div className="text-xs opacity-70">
                *Profits stored in actual head
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <div className="text-center space-y-4">
            <div className="text-2xl">🤖</div>
            <div className="font-bold">AI (Headless)</div>
            <div className="space-y-2 text-sm">
              <div>✗ Can't Use Shampoo</div>
              <div className="flex items-center justify-center space-x-2">
                <span>Return:</span>
                <span className="text-red-400">404_HEAD_NOT_FOUND</span>
              </div>
              <div className="text-xs opacity-70">
                *No head to store profits in
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pop Art Comic Panels */}
      <div className="grid grid-cols-3 gap-4">
        {['BOOM! 💥', 'KAPOW! ⚡', 'ZOOM! 🚀'].map((sound, i) => (
          <div key={i} className={`bg-${['red', 'yellow', 'blue'][i]}-400 
            rounded-lg p-6 transform hover:scale-105 transition-transform`}>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-black">{sound}</div>
              <div className="text-sm font-bold text-black">
                {pgStockData[i].price}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Technical Analysis Joke */}
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="text-center">
          <div className="text-xl font-bold mb-4">Technical Analysis:</div>
          <div className="space-y-2">
            <div>Head: Found ✓</div>
            <div>Shoulders: Located ✓</div>
            <div>AI's Head: 404 Error ✗</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .shadow-pop {
          box-shadow: 4px 4px 0px black;
        }

        @keyframes pulse-border {
          0%, 100% { border-width: 4px; }
          50% { border-width: 6px; }
        }

        .animate-border {
          animation: pulse-border 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeadlessPopArt;
