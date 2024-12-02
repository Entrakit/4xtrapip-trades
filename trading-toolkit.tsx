import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, Zap, Brain, Clock, AlertTriangle } from 'lucide-react';

const TradingTools = () => {
  // Sample data for demonstration
  const currencyPairData = [
    { time: '09:00', EUR_USD: 1.2150, GBP_USD: 1.3850, USD_JPY: 109.45 },
    { time: '09:05', EUR_USD: 1.2155, GBP_USD: 1.3855, USD_JPY: 109.48 },
    { time: '09:10', EUR_USD: 1.2160, GBP_USD: 1.3860, USD_JPY: 109.50 },
    { time: '09:15', EUR_USD: 1.2158, GBP_USD: 1.3858, USD_JPY: 109.47 }
  ];

  const energySectorData = [
    { time: '09:00', oil: 75.30, gas: 4.25, solar: 22.50, wind: 18.75 },
    { time: '09:05', oil: 75.35, gas: 4.28, solar: 22.55, wind: 18.80 },
    { time: '09:10', oil: 75.40, gas: 4.30, solar: 22.60, wind: 18.85 },
    { time: '09:15', oil: 75.38, gas: 4.29, solar: 22.58, wind: 18.82 }
  ];

  const aiLeaderboardData = [
    { company: 'NVDA', price: 845.20, change: '+2.5%', aiRevenue: '45%' },
    { company: 'MSFT', price: 420.15, change: '+1.8%', aiRevenue: '35%' },
    { company: 'GOOGL', price: 150.30, change: '+1.2%', aiRevenue: '25%' },
    { company: 'META', price: 485.75, change: '+2.1%', aiRevenue: '30%' }
  ];

  const optionsData = [
    { strike: 100, expiry: '2024-12-20', calls: 2.50, puts: 1.75, volume: 1500 },
    { strike: 105, expiry: '2024-12-20', calls: 1.80, puts: 2.25, volume: 1200 },
    { strike: 110, expiry: '2024-12-20', calls: 1.20, puts: 2.85, volume: 900 },
    { strike: 115, expiry: '2024-12-20', calls: 0.80, puts: 3.45, volume: 600 }
  ];

  return (
    <div className="max-w-full mx-auto p-4 space-y-6">
      <Tabs defaultValue="forex" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="forex">Forex Analyzer</TabsTrigger>
          <TabsTrigger value="energy">Energy Tracker</TabsTrigger>
          <TabsTrigger value="options">Options Chain</TabsTrigger>
          <TabsTrigger value="ai">AI Leaders</TabsTrigger>
        </TabsList>

        {/* Forex Currency Pair Analyzer */}
        <TabsContent value="forex">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                Currency Pair Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={currencyPairData}>
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="EUR_USD" stroke="#2563eb" name="EUR/USD" />
                      <Line type="monotone" dataKey="GBP_USD" stroke="#16a34a" name="GBP/USD" />
                      <Line type="monotone" dataKey="USD_JPY" stroke="#d97706" name="USD/JPY" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <div className="text-sm text-gray-400">EUR/USD</div>
                      <div className="text-2xl font-bold text-green-500">1.2160</div>
                      <div className="text-sm text-green-400">+0.0015 (+0.12%)</div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <div className="text-sm text-gray-400">Volatility</div>
                      <div className="text-2xl font-bold text-yellow-500">Medium</div>
                      <div className="text-sm text-yellow-400">15.5 ATR</div>
                    </div>
                  </div>
                  <Alert>
                    <AlertTitle className="flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Trading Signals
                    </AlertTitle>
                    <div className="mt-2 space-y-2">
                      <div className="flex justify-between items-center">
                        <span>RSI (14)</span>
                        <Badge variant="secondary">65.5 - Overbought</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>MACD</span>
                        <Badge variant="secondary">Bullish Crossover</Badge>
                      </div>
                    </div>
                  </Alert>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Energy Sector Tracker */}
        <TabsContent value="energy">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2 h-5 w-5" />
                Live Energy Sector Monitor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={energySectorData}>
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="oil" stackId="1" stroke="#2563eb" fill="#2563eb3d" />
                      <Area type="monotone" dataKey="gas" stackId="1" stroke="#16a34a" fill="#16a34a3d" />
                      <Area type="monotone" dataKey="solar" stackId="1" stroke="#d97706" fill="#d977063d" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <div className="text-sm text-gray-400">Oil (WTI)</div>
                      <div className="text-2xl font-bold text-blue-500">$75.40</div>
                      <div className="text-sm text-green-400">+1.20 (+1.62%)</div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <div className="text-sm text-gray-400">Natural Gas</div>
                      <div className="text-2xl font-bold text-green-500">$4.30</div>
                      <div className="text-sm text-green-400">+0.15 (+3.61%)</div>
                    </div>
                  </div>
                  <Alert>
                    <AlertTitle>Utility Rate Impact</AlertTitle>
                    <div className="mt-2 space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Electricity Rates</span>
                        <Badge>+2.5% MoM</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Gas Utilities</span>
                        <Badge>+1.8% MoM</Badge>
                      </div>
                    </div>
                  </Alert>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Options Chain Analysis */}
        <TabsContent value="options">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                Options Chain Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left">
                      <th className="p-2">Strike</th>
                      <th className="p-2">Calls</th>
                      <th className="p-2">Puts</th>
                      <th className="p-2">Volume</th>
                      <th className="p-2">P/C Ratio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {optionsData.map((option) => (
                      <tr key={option.strike} className="border-t border-gray-700">
                        <td className="p-2">${option.strike}</td>
                        <td className="p-2 text-green-500">${option.calls}</td>
                        <td className="p-2 text-red-500">${option.puts}</td>
                        <td className="p-2">{option.volume}</td>
                        <td className="p-2">{(option.puts/option.calls).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* AI Market Leaders */}
        <TabsContent value="ai">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="mr-2 h-5 w-5" />
                AI Market Leaders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiLeaderboardData.map((company) => (
                  <div key={company.company} className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                    <div>
                      <div className="text-lg font-bold">{company.company}</div>
                      <div className="text-sm text-gray-400">AI Revenue: {company.aiRevenue}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg">${company.price}</div>
                      <div className={company.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                        {company.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TradingTools;
