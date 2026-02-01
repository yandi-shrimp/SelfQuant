
import React from 'react';
import { MOCK_TASKS } from '../constants';

const TaskManager: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col pb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-text-main">Active Analysis Tasks</h1>
          <p className="text-text-secondary mt-2">Monitor real-time progress of your quantitative agents.</p>
        </div>
        <div className="flex gap-3">
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-border-light text-text-regular hover:bg-surface-accent hover:text-primary text-sm font-medium rounded-xl transition-all shadow-sm">
            <span className="material-symbols-outlined text-[20px]">refresh</span>
            Refresh
          </button>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-xl transition-all shadow-lg shadow-primary/25">
            <span className="material-symbols-outlined text-[20px]">add</span>
            New Analysis
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-6">
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-text-main text-white text-sm font-medium shadow-lg">
          <span className="material-symbols-outlined text-[18px]">tune</span>
          All Agents
        </button>
        {['Running', 'Pending', 'Failed'].map((status) => (
          <button key={status} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border-light text-text-regular hover:text-primary shadow-sm text-sm font-medium transition-all">
            <span className={`size-2 rounded-full ${status === 'Running' ? 'bg-primary' : status === 'Pending' ? 'bg-warning' : 'bg-danger'}`}></span>
            {status}
          </button>
        ))}
        <div className="ml-auto flex bg-white rounded-lg p-1 border border-border-light shadow-sm">
          <button className="p-2 rounded-md text-primary bg-primary-light">
            <span className="material-symbols-outlined text-[20px]">view_list</span>
          </button>
          <button className="p-2 rounded-md text-text-secondary hover:text-text-main">
            <span className="material-symbols-outlined text-[20px]">grid_view</span>
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {MOCK_TASKS.map((task) => (
          <div key={task.id} className="bg-white rounded-2xl border border-border-light p-5 shadow-soft hover:shadow-md transition-all group flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-4 flex-1">
              <div className={`size-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner ${
                task.status === 'Completed' ? 'bg-success/10 text-success' : 
                task.status === 'Failed' ? 'bg-danger/10 text-danger' : 
                'bg-primary-light text-primary'
              }`}>
                <span className="material-symbols-outlined">{task.type}</span>
              </div>
              <div>
                <div className="font-bold text-text-main text-sm">{task.name}</div>
                <div className="text-xs text-text-secondary mt-0.5 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  {task.timestamp}
                </div>
              </div>
            </div>

            <div className="w-full md:w-48">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-accent text-text-regular text-xs font-medium border border-border-lighter">
                <span className="material-symbols-outlined text-[16px] text-text-placeholder">psychology</span>
                {task.agent}
              </span>
            </div>

            <div className="w-full md:w-64">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-text-secondary">Progress</span>
                  <span className={task.status === 'Failed' ? 'text-danger' : 'text-primary'}>{task.progress}%</span>
                </div>
                <div className="h-2 w-full bg-surface-accent rounded-full overflow-hidden border border-border-lighter">
                  <div 
                    className={`h-full transition-all duration-1000 ${
                      task.status === 'Failed' ? 'bg-danger' : 
                      task.status === 'Completed' ? 'bg-success' : 'bg-primary'
                    } ${task.status === 'Running' ? 'animate-pulse' : ''}`}
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-32 flex justify-center">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                task.status === 'Running' ? 'bg-primary/10 text-primary border-primary/20' :
                task.status === 'Completed' ? 'bg-success/10 text-success border-success/20' :
                task.status === 'Failed' ? 'bg-danger/10 text-danger border-danger/20' :
                'bg-warning/10 text-warning border-warning/20'
              }`}>
                <span className={`size-1.5 rounded-full ${
                  task.status === 'Running' ? 'bg-primary animate-ping' :
                  task.status === 'Completed' ? 'bg-success' :
                  task.status === 'Failed' ? 'bg-danger' : 'bg-warning'
                }`}></span>
                {task.status}
              </span>
            </div>

            <div className="flex justify-end gap-2 w-full md:w-auto">
              {task.status === 'Completed' ? (
                <button className="inline-flex items-center gap-1 px-4 py-2 bg-primary-light text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition-all">
                  Result <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              ) : task.status === 'Failed' ? (
                <button className="p-2 text-danger hover:bg-danger/10 rounded-lg">
                  <span className="material-symbols-outlined text-[20px]">refresh</span>
                </button>
              ) : (
                <button className="p-2 text-text-placeholder hover:text-danger hover:bg-danger/5 rounded-lg">
                  <span className="material-symbols-outlined text-[20px]">cancel</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
