import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Bell, TrendingUp, TrendingDown, Calendar, LineChart, Clock, AlertCircle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { LineChart as ReChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const MarketOpeningDashboard = () => {
  const [countdown, setCountdown] = useState('');
  const [marketSentiment, setMarketSentiment] = useState(65); // Example value
  const [selectedTab, setSelectedTab] = useState('overview');

  // Sample data - in a real app, this would come from an API
  const futuresData = [
    { index: 'S&P 500', value: '+0.45%', points: '+20.25' },
    { index: 'Dow', value: '+0.38%', points: '+130.50' },
    { index: 'Nasdaq', value: '+0.62%', points: '+95.75' }
  ];

  const topMovers = {
    gainers: [
      { symbol: 'AAPL', change: '+5.2%', price: '185.25', news: 'Earnings beat expectations' },
      { symbol: 'TSLA', change: '+4.8%', price: '242.30', news: 'New factory announcement' },
      { symbol: 'NVDA', change: '+3.9%', price: '475.60', news: 'Analyst upgrade' }
    ],
    losers: [
      { symbol: 'META', change: '-3.2%', price: '334.20', news: 'Regulatory concerns' },
      { symbol: 'NFLX', change: '-2.8%', price: '425.15', news: 'Subscriber growth slows' },
      { symbol: 'AMD', change: '-2.5%', price: '168.40', news: 'Chip demand worries' }
    ]
  };

  const economicEvents = [
    { time: '8:30 AM', event: 'Initial Jobless Claims', forecast: '215K', prior: '220K' },
    { time: '10:00 AM', event: 'New Home Sales', forecast: '675K', prior: '664K' },
    { time: '11:00 AM', event: 'Kansas City Fed Index', forecast: '-5', prior: '-7' }
  ];

  // Calculate time until market open
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const marketOpen = new Date(now);
      marketOpen.setHours(9, 30, 0, 0);
      
      if (now > marketOpen) {
        marketOpen.setDate(marketOpen.getDate() + 1);
      }
      
      const diff = marketOpen - now;
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setCountdown(`${hours}h ${minutes}m ${seconds}s`);
    };

    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  // Sample sentiment data for chart
  const sentimentData = [
    { time: '9:00', value: 62 },
    { time: '9:10', value: 64 },
    { time: '9:20', value: 65 },
    { time: '9:30', value: 68 }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-4">
      {/* Header with Market Status and Timer */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Clock className="h-6 w-6 text-blue-500" />
          <h1 className="text-2xl font-bold">Market Opens In: {countdown}</h1>
        </div>
        <Badge variant="outline" className="text-lg">
          Pre-Market
        </Badge>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="movers">Top Movers</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Futures Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <LineChart className="mr-2 h-4 w-4" />
                  Futures
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {futuresData.map((future) => (
                    <div key={future.index} className="flex justify-between items-center">
                      <span className="font-medium">{future.index}</span>
                      <div>
                        <span className={future.value.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                          {future.value} ({future.points})
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Market Sentiment Card */}
            <Card>
              <CardHeader>
                <CardTitle>Market Sentiment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <ReChart data={sentimentData}>
                      <XAxis dataKey="time" />
                      <YAxis domain={[50, 80]} />
                      <Tooltip />
                      <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} />
                    </ReChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Top Movers Tab */}
        <TabsContent value="movers">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Gainers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-4 w-4 text-green-500" />
                  Top Gainers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topMovers.gainers.map((stock) => (
                    <div key={stock.symbol} className="border-b pb-2">
                      <div className="flex justify-between items-center">
                        <span className="font-bold">{stock.symbol}</span>
                        <span className="text-green-500">{stock.change}</span>
                      </div>
                      <p className="text-sm text-gray-500">{stock.news}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Losers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingDown className="mr-2 h-4 w-4 text-red-500" />
                  Top Decliners
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topMovers.losers.map((stock) => (
                    <div key={stock.symbol} className="border-b pb-2">
                      <div className="flex justify-between items-center">
                        <span className="font-bold">{stock.symbol}</span>
                        <span className="text-red-500">{stock.change}</span>
                      </div>
                      <p className="text-sm text-gray-500">{stock.news}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Events Tab */}
        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Economic Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {economicEvents.map((event, index) => (
                  <div key={index} className="flex items-start space-x-4 border-b pb-2">
                    <Badge variant="outline">{event.time}</Badge>
                    <div>
                      <h3 className="font-medium">{event.event}</h3>
                      <p className="text-sm text-gray-500">
                        Forecast: {event.forecast} | Prior: {event.prior}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Watchlist Tab */}
        <TabsContent value="watchlist">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Watchlist</AlertTitle>
            <AlertDescription>
              Sign in to view and manage your watchlist
            </AlertDescription>
          </Alert>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MarketOpeningDashboard;
