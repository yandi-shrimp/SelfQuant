
import React from 'react';
import { AppView } from '../types';

interface SidebarProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate }) => {
  const menuItems = [
    { view: AppView.DASHBOARD, icon: 'dashboard', label: 'Dashboard' },
    { view: AppView.MARKET_SCANNER, icon: 'radar', label: 'Market Scanner' },
    { view: AppView.TASK_MANAGER, icon: 'task_alt', label: 'Task Manager' },
    { view: AppView.REPORTS, icon: 'bar_chart', label: 'Reports' },
  ];

  return (
    <aside className="hidden md:flex w-64 flex-col border-r border-border-light bg-sidebar flex-shrink-0">
      <div className="flex h-16 items-center gap-3 px-6 border-b border-border-light cursor-pointer" onClick={() => onNavigate(AppView.DASHBOARD)}>
        <div className="bg-primary-light rounded-lg p-1.5">
          <span className="material-symbols-outlined text-primary text-2xl">ssid_chart</span>
        </div>
        <h1 className="text-lg font-bold tracking-tight text-text-main">QuantAlpha</h1>
      </div>
      
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.view}
            onClick={() => onNavigate(item.view)}
            className={`flex items-center w-full gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              currentView === item.view 
              ? 'bg-primary-light text-primary' 
              : 'text-text-regular hover:bg-surface-accent hover:text-primary'
            }`}
          >
            <span className={`material-symbols-outlined ${currentView === item.view ? 'filled' : ''}`}>
              {item.icon}
            </span>
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}

        <div className="pt-4 mt-4 border-t border-border-light">
          <p className="px-3 text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">System</p>
          <button
            onClick={() => onNavigate(AppView.SETTINGS)}
            className={`flex items-center w-full gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              currentView === AppView.SETTINGS 
              ? 'bg-primary-light text-primary' 
              : 'text-text-regular hover:bg-surface-accent hover:text-primary'
            }`}
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Settings</span>
          </button>
        </div>
      </nav>

      <div className="p-4 border-t border-border-light">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/user1/40/40" 
              className="size-10 rounded-full border border-border-light object-cover" 
              alt="User" 
            />
            <div className="absolute bottom-0 right-0 size-3 bg-success rounded-full border-2 border-white"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-text-main">Alex Morgan</span>
            <span className="text-xs text-text-secondary">Senior Analyst</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
