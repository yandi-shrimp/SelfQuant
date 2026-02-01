
import React, { useState } from 'react';
import { MOCK_STOCKS } from '../constants';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const Dashboard: React.FC = () => {
  const stock = MOCK_STOCKS[0]; // AAPL as default
  const [syncProgress, setSyncProgress] = useState(85);

  // Mock chart data
  const data = Array.from({ length: 24 }, (_, i) => ({
    time: `${i}:00`,
    price: 178 + Math.random() * 8,
    vol: Math.random() * 100
  }));

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-text-main mb-2">Stock Analysis</h2>
          <p className="text-text-secondary">Real-time quantitative analysis and fundamental data aggregation.</p>
        </div>
        <div className="w-full md:max-w-md relative group">
          <span className="material-symbols-outlined absolute left-3 top-3 text-text-placeholder">search</span>
          <input 
            className="block w-full pl-10 pr-4 py-3 bg-white border border-border-light rounded-xl text-sm shadow-sm placeholder-text-placeholder focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" 
            placeholder="Search stock code (e.g. AAPL, MSFT, TSLA)..." 
            defaultValue="AAPL"
          />
        </div>
      </div>

      <div className="bg-primary-light rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-4 border border-primary/20">
        <div className="flex items-center gap-3">
          <div className="animate-spin text-primary">
            <span className="material-symbols-outlined">sync</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-text-main">Syncing Real-time Data</p>
            <p className="text-xs text-text-secondary">Connecting to exchange API...</p>
          </div>
        </div>
        <div className="flex-1 w-full max-w-xs sm:ml-auto">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-primary font-medium">Processing</span>
            <span className="text-text-secondary">{syncProgress}%</span>
          </div>
          <div className="h-1.5 w-full bg-white rounded-full overflow-hidden border border-primary/10">
            <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${syncProgress}%` }}></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-soft border border-border-lighter p-6">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-lg bg-surface-accent border border-border-lighter flex items-center justify-center p-2">
                  <img alt="Logo" className="w-full h-full object-contain" src={stock.logo} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-main">{stock.name} ({stock.symbol})</h3>
                  <p className="text-sm text-text-secondary">NASDAQ • USD</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-text-main">${stock.price.toFixed(2)}</p>
                <p className={`text-sm font-medium flex items-center justify-end gap-1 ${stock.change >= 0 ? 'text-success' : 'text-danger'}`}>
                  <span className="material-symbols-outlined text-lg">{stock.change >= 0 ? 'trending_up' : 'trending_down'}</span>
                  {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                </p>
              </div>
            </div>

            <div className="flex border-b border-border-light mb-4">
              <button className="px-4 py-2 text-sm font-medium text-primary border-b-2 border-primary">Price</button>
              <button className="px-4 py-2 text-sm font-medium text-text-regular hover:text-primary">Financials</button>
              <button className="px-4 py-2 text-sm font-medium text-text-regular hover:text-primary">Analysis</button>
              <button className="px-4 py-2 text-sm font-medium text-text-regular hover:text-primary">News</button>
            </div>

            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#409eff" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#409eff" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="time" hide />
                  <YAxis domain={['auto', 'auto']} hide />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: '1px solid #dcdfe6', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    itemStyle={{ color: '#409eff', fontWeight: 'bold' }}
                  />
                  <Area type="monotone" dataKey="price" stroke="#409eff" fillOpacity={1} fill="url(#colorPrice)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-soft border border-border-lighter overflow-hidden">
            <div className="px-6 py-4 border-b border-border-light flex justify-between items-center bg-surface-accent/30">
              <h3 className="font-bold text-text-main">Fundamental Data</h3>
              <button className="text-primary text-sm font-medium hover:underline">View All</button>
            </div>
            <table className="w-full text-sm text-left">
              <thead className="bg-surface-accent text-text-secondary font-medium border-b border-border-light">
                <tr>
                  <th className="px-6 py-3">Metric</th>
                  <th className="px-6 py-3">Value</th>
                  <th className="px-6 py-3">YoY Change</th>
                  <th className="px-6 py-3">Industry Avg</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-lighter">
                <tr className="hover:bg-surface-accent/50">
                  <td className="px-6 py-4 font-medium text-text-main">Market Cap</td>
                  <td className="px-6 py-4">{stock.marketCap}</td>
                  <td className="px-6 py-4 text-success">+12.4%</td>
                  <td className="px-6 py-4 text-text-secondary">1.92T</td>
                </tr>
                <tr className="hover:bg-surface-accent/50">
                  <td className="px-6 py-4 font-medium text-text-main">P/E Ratio</td>
                  <td className="px-6 py-4">{stock.peRatio}</td>
                  <td className="px-6 py-4 text-danger">-2.1%</td>
                  <td className="px-6 py-4 text-text-secondary">24.1</td>
                </tr>
                <tr className="hover:bg-surface-accent/50">
                  <td className="px-6 py-4 font-medium text-text-main">EPS</td>
                  <td className="px-6 py-4">{stock.eps}</td>
                  <td className="px-6 py-4 text-success">+8.7%</td>
                  <td className="px-6 py-4 text-text-secondary">4.12</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-soft border border-border-lighter p-6">
            <h3 className="font-bold text-text-main mb-4">Technical Indicators</h3>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-xl bg-surface-accent border border-border-lighter">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-text-regular">RSI (14)</span>
                  <span className="text-sm font-bold text-purple-600">62.4</span>
                </div>
                <div className="w-full bg-white border border-border-light rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '62.4%' }}></div>
                </div>
                <p className="text-xs text-text-secondary mt-2">Neutral Zone</p>
              </div>
              
              <div className="p-4 rounded-xl bg-surface-accent border border-border-lighter">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-text-regular">MACD</span>
                  <span className="text-sm font-bold text-success">Buy Signal</span>
                </div>
                <div className="flex gap-1 h-8 items-end">
                   {[4, 6, 8, 10, 7, 5].map((h, i) => (
                     <div key={i} className={`flex-1 bg-success rounded-sm opacity-${h*10}`} style={{ height: `${h*10}%` }}></div>
                   ))}
                </div>
                <p className="text-xs text-text-secondary mt-2">Crossover detected 2h ago</p>
              </div>
              
              <div className="p-4 rounded-xl bg-surface-accent border border-border-lighter">
                <div className="flex justify-between items-center mb-2 text-sm font-semibold text-text-regular">
                  <span>Volume</span>
                  <span className="text-text-main font-bold">45.2M</span>
                </div>
                <p className="text-xs text-text-secondary">Below avg (52.1M)</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-soft border border-border-lighter p-6 flex-1">
            <h3 className="font-bold text-text-main mb-4">Analyst Consensus</h3>
            <div className="flex items-center justify-center py-6">
              <div className="relative size-32">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#ebeef5" strokeWidth="4" />
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#67c23a" strokeWidth="4" strokeDasharray="75, 100" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-text-main">Buy</span>
                  <span className="text-xs text-text-secondary">75%</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Strong Buy', color: 'bg-success', val: 18 },
                { label: 'Buy', color: 'bg-primary', val: 12 },
                { label: 'Hold', color: 'bg-warning', val: 8 },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className={`size-2 rounded-full ${item.color}`}></span>
                    <span className="text-text-regular">{item.label}</span>
                  </div>
                  <span className="font-medium text-text-main">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
