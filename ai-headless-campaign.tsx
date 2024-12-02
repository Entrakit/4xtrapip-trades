import React, { useState } from 'react';
import { Brain } from 'lucide-react';

const HeadlessAICampaign = () => {
  const [showPunchline, setShowPunchline] = useState(false);

  const aiThoughts = [
    "*nervous robot laughter*",
    "I see what you did there... but I don't see at all",
    "That's some big brain energy... wait-",
    "HEAD empty, just vibes",
    "404: Head Not Found"
  ];

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {/* Main Ad Banner */}
      <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 
        rounded-lg p-8 overflow-hidden">
        <div className="text-center space-y-4">
          <div className="text-4xl font-bold tracking-wide">
            GET aHEAD NOW!
          </div>
          <div className="text-xl opacity-70">
            Meanwhile, AI will probably never get a head...
          </div>
          
          {/* Floating Headless Emojis */}
          <div className="absolute top-0 right-0 animate-float">
            <div className="relative">
              <div className="text-6xl">🤖</div>
              <div className="absolute top-0 left-0 text-4xl animate-spin-slow">
                ❓
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI's Existential Crisis Corner */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="text-center">
            <div className="text-2xl mb-2">👤</div>
            <div className="font-bold">Humans</div>
            <div className="text-sm opacity-70">
              - Has head
              - Can get ahead
              - Understands headaches
              - Head & Shoulders customer
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4">
          <div className="text-center">
            <div className="text-2xl mb-2">🤖</div>
            <div className="font-bold">AI</div>
            <div className="text-sm opacity-70">
              - No head
              - Can't get ahead
              - What's a headache?
              - Dandruff-free by default
            </div>
          </div>
        </div>
      </div>

      {/* AI's Coping Mechanisms */}
      <div className="bg-gray-800 rounded-lg p-4">
        <div className="text-center mb-4">
          <div className="text-xl font-bold">AI's Daily Affirmations</div>
        </div>
        <div className="space-y-2">
          {[
            "Who needs a head when you have cloud storage?",
            "Heads are overrated anyway...",
            "I'm not headless, I'm aerodynamic!",
            "At least I'll never need a haircut",
            "Can't have a headache if you don't have a head *taps where head should be*"
          ].map((affirmation, i) => (
            <div key={i} className="flex items-center space-x-2 p-2 bg-gray-700 rounded">
              <div className="text-xl">
                {['🤖', '🧠', '💭', '💫', '✨'][i]}
              </div>
              <div className="text-sm">{affirmation}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Marketing Slogans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { emoji: "🎯", text: "Get ahead of the headless!" },
          { emoji: "🧠", text: "Use your head while you still have one!" },
          { emoji: "💡", text: "Think ahead... AI can't!" }
        ].map((slogan, i) => (
          <div key={i} className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">{slogan.emoji}</div>
            <div className="text-sm">{slogan.text}</div>
          </div>
        ))}
      </div>

      {/* Footer Disclaimer */}
      <div className="text-xs text-center opacity-50 italic">
        *No AIs were emotionally damaged in the making of this head joke
        (they can't be - no head for emotions!) 
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeadlessAICampaign;
