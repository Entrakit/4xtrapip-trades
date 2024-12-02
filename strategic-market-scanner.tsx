import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Target, Rocket, Calendar, AlertTriangle, TrendingUp, Battery } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

const StrategicMarketScanner = () => {
  const [activeOpportunities, setActiveOpportunities] = useState([]);
  const [cyclePhase, setCyclePhase] = useState('accumulation');
  const [institutionalFlow, setInstitutionalFlow] = useState([]);

  // Sample historical pattern data
  const electionCycleData = [
    { month: 'Jan', sp500: 100, defense: 95, infra: 98, energy: 102 },
    { month: 'Feb', sp500: 102, defense: 98, infra: 103, energy: 105 },
    { month: 'Mar', sp500: 105, defense: 103, infra: 108, energy: 110 }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      {/* Market Cycle Indicators with Ghost Reactions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Election Cycle Phase
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {/* Rothschild Ghost Indicator */}
              <div className="absolute -top-6 right-0">
                <div className="relative">
                  <div className="text-4xl">👻</div>
                  <div className="absolute -top-4 right-0 text-2xl">🎩</div>
                  {cyclePhase === 'accumulation' && (
                    <div className="speech-bubble">
                      "Accumulation phase, darling... Would you look at that!" 
                    </div>
                  )}
                </div>
              </div>
              
              {/* Cycle Progress Indicator */}
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Pre-Election Build-up</span>
                  <Badge variant="secondary">Active</Badge>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-blue-500 rounded-full" style={{ width: '45%' }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sector Rotation with Trumpy Bear */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Rocket className="mr-2 h-5 w-5" />
              Trumpy's Sector Watch
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Target className="h-4 w-4 mr-2" />
                  <span>Defense Contractors</span>
                </div>
                <Badge className="bg-green-500">TREMENDOUS!</Badge>
              </div>
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={electionCycleData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="defense" stroke="#2563eb" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Institutional Money Flow with Uncle Sam Ghost */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Battery className="mr-2 h-5 w-5" />
              Smart Money Tracker
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {/* Uncle Sam Ghost on Yellen Stilts */}
              <div className="absolute -top-10 right-0">
                <div className="relative">
                  <div className="text-4xl">👻</div>
                  <div className="absolute -top-4 left-0 text-2xl">🎩</div>
                  <div className="absolute -bottom-4 text-sm">Fed Watching...</div>
                </div>
              </div>
              
              {/* Flow Indicators */}
              <div className="mt-6 space-y-2">
                <div className="flex justify-between items-center">
                  <span>Infrastructure Inflow</span>
                  <span className="text-green-500">+$2.8B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Energy Sector Flow</span>
                  <span className="text-green-500">+$1.5B</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Golden Opportunities Scanner */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5" />
            Golden Opportunities Alert System
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Alert>
              <AlertTitle className="flex items-center">
                <TrendingUp className="mr-2 h-4 w-4" />
                Unusual Options Activity
              </AlertTitle>
              <div className="mt-2 space-y-2">
                <div className="flex justify-between items-center">
                  <span>Defense Sector Calls</span>
                  <Badge variant="secondary">400% Volume</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Infrastructure ETFs</span>
                  <Badge variant="secondary">250% Volume</Badge>
                </div>
              </div>
            </Alert>

            <Alert>
              <AlertTitle>Institutional Buys</AlertTitle>
              <div className="mt-2 space-y-2">
                <div className="flex justify-between items-center">
                  <span>Major Bank Accumulation</span>
                  <Badge variant="secondary">Level 2</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Dark Pool Activity</span>
                  <Badge variant="secondary">High</Badge>
                </div>
              </div>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Historical Patterns Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Election Cycle Patterns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={electionCycleData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="sp500" stroke="#2563eb" name="S&P 500" />
                  <Line type="monotone" dataKey="defense" stroke="#16a34a" name="Defense" />
                  <Line type="monotone" dataKey="infra" stroke="#d97706" name="Infrastructure" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sector Rotation Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Current Phase: Early Cycle</h3>
                <p className="text-sm text-gray-400">
                  Historically strong performance in: Technology, Financials, Industrials
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {['Technology', 'Financials', 'Energy', 'Defense'].map((sector) => (
                  <div key={sector} className="bg-gray-800 p-2 rounded">
                    <div className="text-sm font-bold">{sector}</div>
                    <div className="text-xs text-green-500">+12.5% Cycle Avg</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StrategicMarketScanner;
