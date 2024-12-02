import React, { useState, useEffect } from 'react';
import { Network, Brain, Lightbulb, School, Key, Lock, Globe, Database } from 'lucide-react';

const EduDisruptionMap = () => {
  const [connectionActive, setConnectionActive] = useState(false);
  const [dataFlow, setDataFlow] = useState(false);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden bg-gray-900 bg-opacity-90">
      {/* Central Web of Connections */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-4xl">
          {/* Romania Hub */}
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="bg-red-900 p-4 rounded-lg">
                <div className="text-xl font-bold">Romania Hub</div>
                <div className="text-sm opacity-70">Data Collection Central</div>
                {/* Connection Lines */}
                <div className="absolute w-40 h-1 bg-gradient-to-r from-red-500 to-transparent 
                  top-1/2 -right-40 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Tate University 5.0 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-purple-900 p-6 rounded-lg shadow-glow">
              <div className="text-2xl font-bold">University 5.0</div>
              <div className="mt-2 space-y-2 text-sm">
                <div className="flex items-center">
                  <Brain className="w-4 h-4 mr-2" />
                  <span>Automation Without Bots</span>
                </div>
                <div className="flex items-center">
                  <Key className="w-4 h-4 mr-2" />
                  <span>Discord War Rooms</span>
                </div>
                <div className="flex items-center">
                  <Database className="w-4 h-4 mr-2" />
                  <span>Mass Data Collection</span>
                </div>
              </div>
            </div>
          </div>

          {/* JBP Clone Platform */}
          <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2">
            <div className="bg-blue-900 p-4 rounded-lg">
              <div className="text-xl font-bold">JBP University</div>
              <div className="text-sm opacity-70">$40/month Knowledge Matrix</div>
              <div className="mt-2">
                <div className="text-xs">Bachelor's Degree: $2000</div>
                <div className="text-xs">"Totally Not Connected" ™️</div>
              </div>
            </div>
          </div>

          {/* TAAFT Platform */}
          <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="bg-green-900 p-4 rounded-lg">
              <div className="text-xl font-bold">TAAFT Network</div>
              <div className="text-sm opacity-70">27,000 AI and Counting</div>
              <div className="mt-2">
                <div className="text-xs">Location: Romania 👀</div>
                <div className="text-xs">Status: "Collecting Data"</div>
              </div>
            </div>
          </div>

          {/* Floating Connection Lines */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0"
              style={{
                border: '1px solid rgba(255,255,255,0.1)',
                transform: `rotate(${i * 72}deg)`
              }}
            />
          ))}

          {/* Data Flow Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-500 rounded-full animate-data-flow"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Conspiracy Notes */}
      <div className="absolute bottom-10 right-10 bg-gray-800 p-4 rounded-lg max-w-md">
        <div className="text-sm font-bold mb-2">Connection Points:</div>
        <div className="space-y-2 text-xs">
          <div>• Both platforms launched suspiciously close timing</div>
          <div>• Similar pricing/degree structure</div>
          <div>• Romania connection 🤔</div>
          <div>• Mass data collection capabilities</div>
          <div>• "Automated" learning systems</div>
        </div>
        <div className="mt-4 text-xs italic">
          "Could sell bark to a tree" - Conspiracy Level: 🌲🌲🌲🌲🌲
        </div>
      </div>

      <style jsx>{`
        .shadow-glow {
          box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
        }

        @keyframes data-flow {
          0% { 
            transform: scale(1);
            opacity: 1; 
          }
          100% { 
            transform: scale(0);
            opacity: 0;
          }
        }

        .animate-data-flow {
          animation: data-flow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default EduDisruptionMap;
