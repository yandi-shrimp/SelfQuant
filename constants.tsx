
import { StockData, AnalysisTask, ReportItem } from './types';

export const MOCK_STOCKS: StockData[] = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 182.63,
    change: 1.24,
    changePercent: 0.68,
    volume: '45.2M',
    marketCap: '2.84T',
    peRatio: 28.4,
    eps: 6.42,
    signal: 'Strong Buy',
    techSignal: 'Bullish Div',
    confidence: 85,
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWy6zCTZM_ZWnIO-0sClUofow71eTSHsW68_4uiAH20a8czP1Gu7dtzH-mdCpK_l20hZ5Ae9iYvkIVZCW9-K271Uoe-JIaVlVnPyqhgJnJVmGDviSVC9b38uq6ZHwq5itiirMNiXUYKD6hBIeXWIz4PH3gnK2EgJmHjz1OqXMSeNy5b6zSFV0RlAlLvzkXqCb4dIxqb7yir1ChP1QDzsJp2ZGPCCg2-_VRfVefwigOWEg_2gqFFsNCOqYyWG9qVRsbKO7Q4thp5S0'
  },
  {
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    price: 205.60,
    change: -4.51,
    changePercent: -2.15,
    volume: '98.5M',
    marketCap: '650.2B',
    peRatio: 72.1,
    eps: 3.12,
    signal: 'Accumulate',
    techSignal: 'Oversold',
    confidence: 60,
    logo: 'https://picsum.photos/seed/tsla/48/48'
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corp.',
    price: 890.00,
    change: 30.12,
    changePercent: 3.50,
    volume: '32.1M',
    marketCap: '2.21T',
    peRatio: 78.4,
    eps: 12.45,
    signal: 'Strong Buy',
    techSignal: 'Breakout',
    confidence: 92,
    logo: 'https://picsum.photos/seed/nvda/48/48'
  },
  {
    symbol: 'INTC',
    name: 'Intel Corp.',
    price: 42.10,
    change: 0.00,
    changePercent: 0.00,
    volume: '15.8M',
    marketCap: '178.4B',
    peRatio: 24.1,
    eps: 1.24,
    signal: 'Sell',
    techSignal: 'Bearish Cross',
    confidence: 75,
    logo: 'https://picsum.photos/seed/intc/48/48'
  },
  {
    symbol: 'AMD',
    name: 'Advanced Micro Dev.',
    price: 180.25,
    change: 1.45,
    changePercent: 0.81,
    volume: '28.4M',
    marketCap: '290.1B',
    peRatio: 65.2,
    eps: 2.76,
    signal: 'Hold',
    techSignal: 'Neutral',
    confidence: 50,
    logo: 'https://picsum.photos/seed/amd/48/48'
  }
];

export const MOCK_TASKS: AnalysisTask[] = [
  {
    id: '1',
    name: 'NVDA Sentiment Analysis',
    agent: 'NLP Sentinel v4',
    progress: 45,
    status: 'Running',
    timestamp: '12 mins ago',
    type: 'analytics'
  },
  {
    id: '2',
    name: 'Mean Reversion Backtest',
    agent: 'Backtester v2',
    progress: 100,
    status: 'Completed',
    timestamp: '1 hour ago',
    type: 'candlestick_chart'
  },
  {
    id: '3',
    name: 'Macro Correlation Scan',
    agent: 'Global Macro',
    progress: 0,
    status: 'Pending',
    timestamp: 'Queued',
    type: 'public'
  },
  {
    id: '4',
    name: 'Crypto Volatility Forecast',
    agent: 'Volatility Bot',
    progress: 78,
    status: 'Failed',
    timestamp: 'Error: Rate Limit',
    type: 'currency_bitcoin'
  },
  {
    id: '5',
    name: 'Q3 Earnings Alpha Seek',
    agent: 'Alpha Hunter',
    progress: 12,
    status: 'Running',
    timestamp: '5 mins ago',
    type: 'query_stats'
  }
];

export const MOCK_REPORTS: ReportItem[] = [
  { id: '1', symbol: 'AAPL', title: 'Q3 2023 Earnings Analysis', date: 'Oct 24, 2023 • 2:30 PM', sentiment: 'Bullish', tag: 'Confidential' },
  { id: '2', symbol: 'TSLA', title: 'Volatility Alert', date: 'Oct 23, 2023 • 10:15 AM', sentiment: 'Bearish', tag: 'High Vol' },
  { id: '3', symbol: 'NVDA', title: 'Sector Analysis', date: 'Oct 22, 2023 • 4:00 PM', sentiment: 'Bullish' },
  { id: '4', symbol: 'MSFT', title: 'Copilot Impact', date: 'Oct 20, 2023 • 9:30 AM', sentiment: 'Bullish', tag: 'Buy' },
  { id: '5', symbol: 'AMZN', title: 'Logistics Rpt', date: 'Oct 18, 2023 • 11:45 AM', sentiment: 'Neutral' }
];
