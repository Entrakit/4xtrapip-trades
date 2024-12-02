import React, { useState, useEffect } from 'react';
import { Clock, Skull, Cannabis, Ghost, Music, Radio } from 'lucide-react';

const MysticClocks = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showDoomsday, setShowDoomsday] = useState(true);
  const [show420, setShow420] = useState(false);
  const [showAngel, setShowAngel] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
      // Toggle visibility of different clocks
      setShowDoomsday(Math.random() > 0.3);
      setShow420(Math.random() > 0.5);
      setShowAngel(Math.random() > 0.4);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getTimeIn420Zone = () => {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    return (hours === 16 && minutes === 20) || (hours === 4 && minutes === 20);
  };

  const isAngelNumber = () => {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    return (hours === 11 && minutes === 11) || 
           (hours === 3 && minutes === 33) ||
           (hours === 4 && minutes === 44);
  };

  return (
    <div className="fixed top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
      {/* Doomsday Clock */}
      {showDoomsday && (
        <div className="absolute transition-all duration-1000 ease-in-out"
             style={{
               top: '10%',
               left: '80%',
               animation: 'float 10s ease-in-out infinite, fade 3s ease-in-out infinite'
             }}>
          <div className="flex items-center space-x-2 text-red-500 font-bold text-xl">
            <Skull className="h-6 w-6 animate-pulse" />
            <span className="animate-pulse">11:59</span>
          </div>
        </div>
      )}

      {/* 420 Clock */}
      {show420 && getTimeIn420Zone() && (
        <div className="absolute transition-all duration-1000 ease-in-out"
             style={{
               top: '20%',
               left: '15%',
               animation: 'float 8s ease-in-out infinite, fade 4s ease-in-out infinite'
             }}>
          <div className="flex items-center space-x-2 text-green-500 font-bold text-xl">
            <Cannabis className="h-6 w-6 animate-spin-slow" />
            <span className="animate-pulse">4:20</span>
          </div>
        </div>
      )}

      {/* It's 5 O'Clock Somewhere */}
      <div className="absolute transition-all duration-1000 ease-in-out"
           style={{
             top: '30%',
             left: '60%',
             animation: 'float 12s ease-in-out infinite, fade 5s ease-in-out infinite'
           }}>
        <div className="flex items-center space-x-2 text-blue-500 font-bold text-xl">
          <Clock className="h-6 w-6" />
          <span>5:00</span>
          <span className="text-sm">somewhere</span>
        </div>
      </div>

      {/* Angel Numbers */}
      {showAngel && isAngelNumber() && (
        <div className="absolute transition-all duration-1000 ease-in-out"
             style={{
               top: '40%',
               left: '40%',
               animation: 'float 15s ease-in-out infinite, fade 6s ease-in-out infinite'
             }}>
          <div className="flex items-center space-x-2 text-purple-500 font-bold text-xl">
            <Ghost className="h-6 w-6 animate-bounce" />
            <span className="animate-pulse">
              {currentTime.getHours()}:{currentTime.getMinutes().toString().padStart(2, '0')}
            </span>
          </div>
        </div>
      )}

      {/* Tool - 46 & 2 Radio */}
      <div className="absolute bottom-10 right-10 transition-all duration-1000 ease-in-out">
        <div className="flex items-center space-x-2 text-gray-400 hover:text-gray-200 cursor-pointer">
          <Music className="h-6 w-6 animate-spin-slow" />
          <div className="text-sm">
            <div>Now Playing:</div>
            <div className="font-bold">Tool - Forty Six & 2</div>
          </div>
          <Radio className="h-4 w-4 animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, -10px) rotate(2deg); }
          50% { transform: translate(0, -20px) rotate(0deg); }
          75% { transform: translate(-10px, -10px) rotate(-2deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        @keyframes fade {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.3; }
        }

        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default MysticClocks;
