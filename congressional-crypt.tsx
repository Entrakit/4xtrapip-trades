import React, { useState, useEffect } from 'react';
import { Ghost, Skull, DollarSign, Star } from 'lucide-react';

const CongressionalCrypt = () => {
  const [hauntingPhase, setHauntingPhase] = useState('reclaiming');
  const [maxineRant, setMaxineRant] = useState('');

  const cryptKeeperQuotes = [
    "IN PEACH FO FI FUM! 👻",
    "RECLAIMING MY TIME! ⏰",
    "Some people did something 🤷‍♀️",
    "No no no, not that kind of insider trading! 📈",
    "The Squad™ haunts Wall Street 💀"
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Maxine Waters Ghost */}
      <div className="absolute top-1/3 left-1/4 transform">
        <div className="relative">
          {/* James Brown Wig Ghost */}
          <Ghost className="w-16 h-16 text-brown-400" />
          <div className="absolute -top-4 left-2 w-12 h-8 bg-brown-600 
            rounded-t-full animate-wiggle">
            {/* The Legendary Wig */}
          </div>
          
          {/* Reclaiming Time Bubble */}
          <div className="absolute -right-40 top-0 bg-purple-500 p-2 rounded-lg 
            text-white text-sm animate-pulse">
            RECLAIMING MY TIME! RECLAIMING! RE-CLAIM-ING!
            <span className="text-xs">⏰</span>
          </div>
        </div>
      </div>

      {/* Omar Crypt Keeper */}
      <div className="absolute top-1/4 right-1/3">
        <div className="relative">
          <Ghost className="w-16 h-16 text-gray-400" />
          {/* Turban Animation */}
          <div className="absolute -top-2 left-0 w-16 h-8 
            animate-float">
            <div className="w-full h-full bg-blue-500 rounded-t-full">
              {/* Floating Stars */}
              <Star className="w-4 h-4 text-yellow-400 absolute -top-2 right-0 
                animate-spin-slow" />
            </div>
          </div>
          
          {/* Cryptic Messages */}
          <div className="absolute -left-32 top-0 bg-blue-400 p-2 rounded-lg 
            text-white text-xs">
            "Some people did some trades" 
            <span className="text-xs">🤔</span>
          </div>
        </div>
      </div>

      {/* Rashida Ghost */}
      <div className="absolute bottom-1/3 left-1/3">
        <div className="relative">
          <Ghost className="w-16 h-16 text-green-300" />
          {/* Characteristic Features */}
          <div className="absolute -top-2 left-2 text-2xl animate-bounce">
            🗣️
          </div>
          
          {/* Famous Quote Bubble */}
          <div className="absolute -right-36 -top-4 bg-green-500 p-2 rounded-lg 
            text-white text-sm transform rotate-12">
            "We're gonna tax them all!" 
            <span className="text-xs">💰</span>
          </div>
        </div>
      </div>

      {/* Nancy's Trading Empire */}
      <div className="absolute bottom-1/4 right-1/4">
        <div className="relative group">
          {/* Queen Ghost with Crown */}
          <Ghost className="w-20 h-20 text-purple-400 group-hover:text-green-400 
            transition-colors duration-500" />
          <div className="absolute -top-4 left-4 text-2xl">👑</div>
          
          {/* Ice Cream and Gavel */}
          <div className="absolute -right-4 top-0 flex space-x-2">
            <span className="text-2xl">🍦</span>
            <span className="text-2xl animate-bounce">🔨</span>
          </div>
          
          {/* Trading Terminal */}
          <div className="absolute -bottom-8 -right-8 transform rotate-15">
            <DollarSign className="w-6 h-6 text-green-500 animate-pulse" />
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-full border border-green-500 
                    rounded-full animate-ping"
                  style={{ animationDelay: `${i * 0.5}s` }}
                />
              ))}
            </div>
          </div>

          {/* Portfolio Alert */}
          <div className="absolute -left-40 top-0 bg-green-400 p-2 rounded-lg 
            text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
            "Just another perfectly timed trade!" 
            <div className="text-xs mt-1">Return: +420% 📈</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }

        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>

      {/* Squad Trading Alerts */}
      <div className="absolute bottom-20 right-20 bg-gray-800 rounded-lg p-4">
        <div className="text-sm font-bold mb-2">Crypt Keeper Trading Desk</div>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between items-center">
            <span>Maxine:</span>
            <span>"Impeach the Market!" 📉</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Omar:</span>
            <span>"It's all about the Benjamins!" 💵</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Rashida:</span>
            <span>"[CENSORED] the Bears!" 🐻</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Nancy:</span>
            <span>"Just bought the dip! ;)" 🎯</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongressionalCrypt;
