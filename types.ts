
export enum AppView {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  DASHBOARD = 'DASHBOARD',
  MARKET_SCANNER = 'MARKET_SCANNER',
  TASK_MANAGER = 'TASK_MANAGER',
  REPORTS = 'REPORTS',
  SETTINGS = 'SETTINGS'
}

export interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string;
  marketCap: string;
  peRatio: number;
  eps: number;
  signal: 'Strong Buy' | 'Buy' | 'Hold' | 'Accumulate' | 'Sell';
  techSignal: string;
  confidence: number;
  logo: string;
}

export interface AnalysisTask {
  id: string;
  name: string;
  agent: string;
  progress: number;
  status: 'Running' | 'Pending' | 'Completed' | 'Failed';
  timestamp: string;
  type: 'analytics' | 'candlestick_chart' | 'public' | 'currency_bitcoin' | 'query_stats';
}

export interface ReportItem {
  id: string;
  symbol: string;
  title: string;
  date: string;
  sentiment: 'Bullish' | 'Neutral' | 'Bearish';
  tag?: string;
}
