import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

const PoliticalMarketIndicators = () => {
  const [marketMood, setMarketMood] = useState('tremendous');
  const [fedStance, setFedStance] = useState('neutral');

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Trumpy Bear */}
      <div className={`absolute top-1/4 right-1/4 transform ${
        marketMood === 'tremendous' ? 'animate-bounce' : 'animate-shake'
      }`}>
        <div className="relative">
          {/* Bear Body */}
          <div className="w-20 h-20 bg-amber-200 rounded-full relative">
            {/* Signature Hair */}
            <div className="absolute -top-4 left-2 w-16 h-8 bg-yellow-400 
              animate-flow rounded-t-full" />
            
            {/* Face */}
            <div className="absolute top-6 left-4 space-y-2">
              <div className="flex space-x-4">
                <div className="w-2 h-2 bg-black rounded-full" />
                <div className="w-2 h-2 bg-black rounded-full" />
              </div>
              <div className="w-8 h-2 bg-red-400 rounded-full" />
            </div>
          </div>

          {/* Tweet Bubble */}
          {marketMood === 'tremendous' && (
            <div className="absolute -right-32 -top-4 bg-blue-400 p-2 rounded-lg 
              text-white text-sm animate-float">
              TREMENDOUS MARKET GAINS! THANK YOU! 
              <span className="text-xs">🚀</span>
            </div>
          )}
          {marketMood === 'fake' && (
            <div className="absolute -right-32 -top-4 bg-red-400 p-2 rounded-lg 
              text-white text-sm animate-float">
              FAKE NEWS MEDIA won't report REAL market numbers! SAD!
              <span className="text-xs">😤</span>
            </div>
          )}
        </div>
      </div>

      {/* Yellen on Stilts with Uncle Sam */}
      <div className={`absolute bottom-1/4 left-1/4 transform ${
        fedStance === 'hiking' ? 'animate-careful-walk' : 'animate-float'
      }`}>
        <div className="relative">
          {/* Uncle Sam Ghost */}
          <div className="absolute -top-16 animate-float">
            <div className="relative">
              <div className="w-16 h-20 bg-white opacity-50 rounded-t-full">
                <div className="absolute -top-8 w-16 h-8 bg-blue-600 
                  rounded-t-full flex items-center justify-center">
                  <span className="text-white text-xs">🎩</span>
                </div>
                <div className="absolute top-4 left-4 space-y-2">
                  <div className="flex space-x-4">
                    <div className="w-2 h-2 bg-blue-800 rounded-full" />
                    <div className="w-2 h-2 bg-blue-800 rounded-full" />
                  </div>
                  <div className="w-8 h-2 bg-red-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Yellen Stilts */}
          <div className="relative">
            <div className="w-12 h-16 bg-gray-400 rounded-t-lg">
              {/* Yellen's Face */}
              <div className="absolute top-2 left-2 space-y-1">
                <div className="flex space-x-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                </div>
                <div className="w-6 h-1 bg-pink-200 rounded-full" />
              </div>
              {/* Glasses */}
              <div className="absolute top-1 left-1 w-10 h-3 border-t-2 
                border-black rounded-t-full" />
            </div>
            {/* Stilts */}
            <div className="absolute -bottom-20 left-2 w-2 h-24 bg-silver-400" />
            <div className="absolute -bottom-20 right-2 w-2 h-24 bg-silver-400" />
          </div>

          {/* Fed Speech Bubble */}
          <div className="absolute -left-32 -top-8 bg-green-400 p-2 rounded-lg 
            text-white text-sm animate-float">
            {fedStance === 'hiking' ? 'Rate hike incoming!' : 
             fedStance === 'cutting' ? 'Time for stimulus!' : 
             'Data dependent...'}
            <span className="text-xs">📊</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes flow {
          0%, 100% { transform: skew(-5deg); }
          50% { transform: skew(5deg); }
        }

        @keyframes careful-walk {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-5px) rotate(-2deg); }
          75% { transform: translateY(-5px) rotate(2deg); }
        }

        .animate-flow {
          animation: flow 3s ease-in-out infinite;
        }

        .animate-careful-walk {
          animation: careful-walk 2s ease-in-out infinite;
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PoliticalMarketIndicators;
