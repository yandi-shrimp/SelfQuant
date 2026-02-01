
import React, { useState } from 'react';
import { AppView } from './types';
import Login from './views/Login';
import Register from './views/Register';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './views/Dashboard';
import MarketScanner from './views/MarketScanner';
import TaskManager from './views/TaskManager';
import Reports from './views/Reports';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.LOGIN);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const navigate = (view: AppView) => {
    setCurrentView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case AppView.LOGIN:
        return <Login onLogin={() => navigate(AppView.DASHBOARD)} onRegister={() => navigate(AppView.REGISTER)} />;
      case AppView.REGISTER:
        return <Register onBack={() => navigate(AppView.LOGIN)} />;
      default:
        return (
          <div className="flex h-screen w-full overflow-hidden bg-background">
            <Sidebar currentView={currentView} onNavigate={navigate} />
            <div className="flex flex-col flex-1 h-full overflow-hidden">
              <Header currentView={currentView} />
              <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-background">
                {currentView === AppView.DASHBOARD && <Dashboard />}
                {currentView === AppView.MARKET_SCANNER && <MarketScanner />}
                {currentView === AppView.TASK_MANAGER && <TaskManager />}
                {currentView === AppView.REPORTS && <Reports />}
                {currentView === AppView.SETTINGS && (
                  <div className="p-8 text-center text-text-secondary">
                    <span className="material-symbols-outlined text-6xl mb-4">settings</span>
                    <h2 className="text-2xl font-bold text-text-main">Settings</h2>
                    <p>System configuration coming soon.</p>
                  </div>
                )}
              </main>
            </div>
          </div>
        );
    }
  };

  return <>{renderView()}</>;
};

export default App;
