import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Brain, Coffee } from 'lucide-react';

const SelectiveVisionIndicator = () => {
  const [isBlind, setIsBlind] = useState(false);
  const [currentExcuse, setCurrentExcuse] = useState('');

  const excuses = [
    "Can't see it, too busy cancelling yesterday! 🙈",
    "Sorry, my eyeballs rolled under my desk 👀",
    "Everything's black! Or white? Who can tell! 🌗",
    "Brain.exe has stopped working ⚠️",
    "My Slurpee froze my common sense 🥤",
    "Too busy being tolerantly intolerant 🤔",
    "Error 404: Reality not found 💻",
    "Selective vision mode: Activated! 🎯"
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Eyeballs */}
      <div className="absolute top-1/3 right-1/3">
        <div className={`relative transition-all duration-500 ${
          isBlind ? 'opacity-50 blur-sm' : ''
        }`}>
          <div className="flex space-x-8">
            {/* Left Eye */}
            <div className="relative">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full absolute top-2 left-2" />
                </div>
              </div>
              {isBlind && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <EyeOff className="w-8 h-8 text-red-500 animate-pulse" />
                </div>
              )}
            </div>
            
            {/* Right Eye */}
            <div className="relative">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full absolute top-2 left-2" />
                </div>
              </div>
              {isBlind && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <EyeOff className="w-8 h-8 text-red-500 animate-pulse" />
                </div>
              )}
            </div>
          </div>

          {/* Brain with Loading Symbol */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <Brain className={`w-8 h-8 ${isBlind ? 'animate-spin-slow text-gray-400' : 'text-pink-400'}`} />
          </div>

          {/* Slurpee of Confusion */}
          <div className="absolute -right-12 top-0 text-2xl animate-bounce">
            🥤
          </div>

          {/* Excuse Bubble */}
          <div className="absolute -right-48 -top-12 bg-white text-black p-3 rounded-lg shadow-lg text-sm max-w-xs">
            <div className="relative">
              {currentExcuse || excuses[0]}
              <div className="absolute -bottom-2 left-2 transform rotate-45 w-4 h-4 bg-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Cancellation Calendar */}
      <div className="absolute bottom-20 right-20 bg-gray-800 rounded-lg p-4">
        <div className="text-sm font-bold mb-2">Cancellation Schedule</div>
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span>Yesterday:</span>
            <span className="text-red-400">Cancelled ❌</span>
          </div>
          <div className="flex justify-between">
            <span>Today:</span>
            <span className="text-yellow-400">No Slots Available 🤷</span>
          </div>
          <div className="flex justify-between">
            <span>Tomorrow:</span>
            <span className="text-gray-400">Pre-cancelled 🔄</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SelectiveVisionIndicator;
