import React, { useState, useEffect } from 'react';
import { AlertTriangle, Rocket, Skull, Ghost, Radio, TrendingUp, TrendingDown, DollarSign, Target } from 'lucide-react';

const ChessMarketDashboard = () => {
  const [warningActive, setWarningActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  
  // Sample market data
  const geopoliticalAlerts = [
    { region: 'NK', alert: 'Missile Test Detected', severity: 'high' },
    { region: 'RU', alert: 'Military Movement', severity: 'medium' },
    { region: 'CN', alert: 'Naval Exercise', severity: 'medium' }
  ];

  const defenseStocks = [
    { symbol: 'LMT', price: 458.92, change: '+2.4%' },
    { symbol: 'RTX', price: 89.45, change: '+1.8%' },
    { symbol: 'NOC', price: 478.30, change: '+3.2%' }
  ];

  const techTitans = [
    { symbol: 'META', price: 485.75, change: '+2.1%', news: 'VR Sales Surge' },
    { symbol: 'TSLA', price: 242.30, change: '-1.8%', news: 'Factory Update' },
    { symbol: 'X', price: 85.20, change: '+0.8%', news: 'User Growth' }
  ];

  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Animated Chess Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="chess-grid"></div>
        <style jsx>{`
          .chess-grid {
            background-image: 
              linear-gradient(45deg, #ffffff 25%, transparent 25%),
              linear-gradient(-45deg, #ffffff 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, #ffffff 75%),
              linear-gradient(-45deg, transparent 75%, #ffffff 75%);
            background-size: 100px 100px;
            background-position: 0 0, 0 50px, 50px -50px, -50px 0px;
            animation: chessmove 20s linear infinite;
            height: 100%;
            width: 100%;
          }
          
          @keyframes chessmove {
            from {background-position: 0 0, 0 50px, 50px -50px, -50px 0px;}
            to {background-position: 100px 100px, 100px 150px, 150px 50px, 50px 100px;}
          }
        `}</style>
      </div>

      {/* Floating Chess Pieces */}
      <div className="pieces-container">
        {['♔', '♕', '♖', '♗', '♘', '♙'].map((piece, index) => (
          <div
            key={index}
            className="absolute text-4xl text-white opacity-20"
            style={{
              animation: `float ${5 + index}s ease-in-out infinite`,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`
            }}
          >
            {piece}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto p-4">
        {/* DEFCON Warning System */}
        <div className={`fixed top-5 right-5 ${warningActive ? 'animate-pulse' : ''}`}>
          <button 
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2"
            onMouseEnter={() => setWarningActive(true)}
            onMouseLeave={() => setWarningActive(false)}
          >
            <Skull className="h-5 w-5" />
            <span>DEFCON 2</span>
          </button>
        </div>

        {/* Geopolitical Alert Ticker */}
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <div className="flex items-center space-x-4 overflow-x-auto whitespace-nowrap">
            {geopoliticalAlerts.map((alert, index) => (
              <div 
                key={index}
                className={`flex items-center space-x-2 ${
                  alert.severity === 'high' ? 'text-red-500' : 'text-yellow-500'
                }`}
              >
                <AlertTriangle className="h-4 w-4" />
                <span>{alert.region}:</span>
                <span>{alert.alert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Defense Industry Tracker */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {defenseStocks.map((stock, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-red-500" />
                  <span className="font-bold">{stock.symbol}</span>
                </div>
                <div className={stock.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                  ${stock.price} ({stock.change})
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech & Social Media Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {techTitans.map((company, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold">{company.symbol}</span>
                <div className={company.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                  {company.change}
                </div>
              </div>
              <div className="text-sm text-gray-400">{company.news}</div>
            </div>
          ))}
        </div>

        {/* L7 Loss Shamer */}
        {gameOver && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <div className="text-center space-y-4">
              <div className="text-6xl animate-bounce">👎</div>
              <div className="text-red-500 text-2xl font-bold">WOULD YA LOOK AT THAT!</div>
              <div className="text-gray-400">Time to go back to paper trading...</div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Nuclear Button */}
      <button 
        className="fixed bottom-5 right-5 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 animate-pulse"
        onClick={() => setGameOver(true)}
      >
        <Rocket className="h-5 w-5" />
        <span>GAME OVER</span>
      </button>
    </div>
  );
};

export default ChessMarketDashboard;
