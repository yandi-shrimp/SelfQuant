
import React from 'react';
import { MOCK_STOCKS } from '../constants';

const MarketScanner: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
      <div className="flex flex-wrap justify-between items-end gap-4">
        <div className="flex min-w-72 flex-col gap-2">
          <h1 className="text-text-main text-3xl font-bold leading-tight tracking-tight">Market Scanner Results</h1>
          <p className="text-text-secondary text-base font-normal">Real-time quantitative analysis and multi-agent recommendations</p>
        </div>
        <div className="flex gap-3">
          <button className="flex min-w-[84px] items-center justify-center rounded h-9 px-4 border border-border-base bg-white text-text-regular hover:text-primary transition-all">
            <span className="material-symbols-outlined mr-2 text-[18px]">download</span>
            <span>CSV</span>
          </button>
          <button className="flex min-w-[84px] items-center justify-center rounded h-9 px-4 bg-success text-white hover:bg-success/80 text-sm font-medium transition-colors shadow-sm">
            <span className="material-symbols-outlined mr-2 text-[18px]">table_view</span>
            <span>Export to Excel</span>
          </button>
        </div>
      </div>

      <div className="p-5 rounded-lg border border-border-light bg-white shadow-soft">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-md text-primary">
              <span className="material-symbols-outlined">tune</span>
            </div>
            <div>
              <p className="text-text-main text-sm font-bold leading-tight">Active Scanners</p>
              <p className="text-text-secondary text-xs">Apply predefined strategies</p>
            </div>
          </div>
          <div className="flex flex-1 md:flex-none gap-2 overflow-x-auto pb-2 md:pb-0">
            {['Market Cap: Large', 'Sector: Technology', 'Vol: > 1M'].map(filter => (
              <button key={filter} className="whitespace-nowrap flex h-8 items-center gap-x-2 rounded-full bg-surface-accent border border-transparent hover:bg-border-light px-3 transition-all text-xs font-medium text-text-regular">
                {filter}
                <span className="material-symbols-outlined text-text-secondary text-[14px]">close</span>
              </button>
            ))}
            <button className="whitespace-nowrap flex h-8 items-center gap-x-2 rounded-full bg-primary/10 border border-primary/20 px-3 text-primary text-xs font-medium">
              Signal: Strong Buy
              <span className="material-symbols-outlined text-primary text-[14px]">close</span>
            </button>
          </div>
          <div className="w-px h-8 bg-border-light hidden lg:block"></div>
          <button className="flex items-center h-8 px-4 border border-border-base hover:border-primary hover:text-primary bg-white text-text-regular rounded text-sm font-medium transition-colors">
            <span className="material-symbols-outlined text-[16px] mr-1">filter_list</span>
            Advanced Filters
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-border-light bg-white shadow-soft">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-surface-accent text-text-secondary font-semibold border-b border-border-light uppercase text-[10px] tracking-wider">
              <tr>
                <th className="px-5 py-4 text-left">Symbol</th>
                <th className="px-5 py-4 text-right">Last Price</th>
                <th className="px-5 py-4 text-right">Change %</th>
                <th className="px-5 py-4 text-right hidden md:table-cell">Volume</th>
                <th className="px-5 py-4 text-left hidden lg:table-cell">Tech Signal</th>
                <th className="px-5 py-4 text-center">Agent Rec.</th>
                <th className="px-5 py-4 text-left hidden xl:table-cell">AI Confidence</th>
                <th className="px-5 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light">
              {MOCK_STOCKS.map((s, idx) => (
                <tr key={s.symbol} className={`group hover:bg-primary-light/30 transition-colors ${idx % 2 !== 0 ? 'bg-surface-accent/30' : ''}`}>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                        {s.symbol[0]}
                      </div>
                      <div>
                        <p className="text-text-main text-sm font-bold">{s.symbol}</p>
                        <p className="text-text-secondary text-xs">{s.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-right font-mono font-medium">${s.price.toFixed(2)}</td>
                  <td className="px-5 py-4 text-right">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${s.change >= 0 ? 'bg-success/10 text-success border-success/20' : 'bg-danger/10 text-danger border-danger/20'}`}>
                      <span className="material-symbols-outlined text-[14px] mr-1">{s.change >= 0 ? 'trending_up' : 'trending_down'}</span>
                      {s.change >= 0 ? '+' : ''}{s.changePercent.toFixed(2)}%
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right hidden md:table-cell font-mono text-text-regular">{s.volume}</td>
                  <td className="px-5 py-4 hidden lg:table-cell">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-border-light bg-white text-text-regular text-xs font-medium">
                      <span className={`size-1.5 rounded-full ${s.change >= 0 ? 'bg-success' : 'bg-danger'}`}></span>
                      {s.techSignal}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-center">
                    <span className={`inline-block px-3 py-1 rounded-sm text-[10px] font-bold border ${
                      s.signal === 'Strong Buy' ? 'bg-success/10 text-success border-success/20' :
                      s.signal === 'Accumulate' ? 'bg-primary/10 text-primary border-primary/20' :
                      s.signal === 'Sell' ? 'bg-danger/10 text-danger border-danger/20' : 'bg-warning/10 text-warning border-warning/20'
                    }`}>
                      {s.signal.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-5 py-4 hidden xl:table-cell min-w-[140px]">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between text-[10px] font-bold">
                        <span className="text-text-secondary uppercase">Score</span>
                        <span className="text-primary">{s.confidence}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-surface-accent rounded-full overflow-hidden border border-border-light">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${s.confidence}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <button className="text-text-secondary hover:text-primary transition-colors p-1 rounded hover:bg-primary/10">
                      <span className="material-symbols-outlined text-[20px]">more_horiz</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white border-t border-border-light px-5 py-4 flex items-center justify-between">
          <p className="text-xs text-text-secondary">
            Showing <span className="font-bold text-text-main">1</span> to <span className="font-bold text-text-main">5</span> of <span className="font-bold text-text-main">97</span> results
          </p>
          <div className="flex gap-1">
            {[1, 2, 3].map(p => (
              <button key={p} className={`size-8 rounded text-xs font-bold transition-all border ${p === 1 ? 'bg-primary border-primary text-white' : 'bg-white border-border-light text-text-regular hover:bg-surface-accent'}`}>
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketScanner;
