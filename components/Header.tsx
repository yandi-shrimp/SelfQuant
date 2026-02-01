
import React from 'react';
import { AppView } from '../types';

interface HeaderProps {
  currentView: AppView;
}

const Header: React.FC<HeaderProps> = ({ currentView }) => {
  const getViewTitle = () => {
    switch (currentView) {
      case AppView.DASHBOARD: return 'Dashboard';
      case AppView.MARKET_SCANNER: return 'Market Scanner';
      case AppView.TASK_MANAGER: return 'Task Management';
      case AppView.REPORTS: return 'Analysis Reports';
      default: return 'QuantAlpha';
    }
  };

  return (
    <header className="h-16 flex items-center justify-between px-4 md:px-8 bg-surface border-b border-border-light flex-shrink-0 z-10">
      <div className="flex items-center text-text-secondary text-sm">
        <span className="hidden sm:inline">QuantAlpha</span>
        <span className="material-symbols-outlined text-base mx-2 hidden sm:inline">chevron_right</span>
        <span className="text-text-main font-medium">{getViewTitle()}</span>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4">
        <div className="relative hidden lg:block group">
          <span className="material-symbols-outlined absolute left-3 top-1.5 text-text-placeholder text-lg">search</span>
          <input 
            type="text" 
            placeholder="Search platform..." 
            className="pl-10 pr-4 py-1.5 bg-surface-accent border-none rounded-full text-xs w-64 focus:ring-1 focus:ring-primary focus:bg-white transition-all"
          />
        </div>
        <button className="relative p-2 text-text-secondary hover:text-primary transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-1.5 right-1.5 size-2 bg-danger rounded-full"></span>
        </button>
        <button className="p-2 text-text-secondary hover:text-primary transition-colors">
          <span className="material-symbols-outlined">help</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
