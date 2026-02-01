
import React from 'react';

interface LoginProps {
  onLogin: () => void;
  onRegister: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onRegister }) => {
  return (
    <div className="font-display bg-background-light text-text-primary antialiased min-h-screen flex flex-col overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5eaf3_1px,transparent_1px),linear-gradient(to_bottom,#e5eaf3_1px,transparent_1px)] [background-size:40px_40px] opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-blue-50/30"></div>
      </div>
      
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-[480px] bg-white rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-border-light overflow-hidden">
          <div className="flex flex-col items-center pt-10 pb-2 px-8 text-center">
            <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
              <span className="material-symbols-outlined text-4xl">ssid_chart</span>
            </div>
            <h2 className="text-text-primary text-xl font-bold leading-tight tracking-tight">QuantPlatform</h2>
            <h1 className="text-text-regular text-2xl font-normal leading-tight mt-2">Welcome Back</h1>
          </div>
          
          <form className="flex flex-col gap-5 px-8 pb-10 pt-4" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <label className="flex flex-col flex-1 group">
              <p className="text-text-primary text-sm font-medium leading-normal pb-2">Username or Email</p>
              <input 
                className="form-input flex w-full rounded border border-border-light bg-white focus:border-primary focus:ring-0 h-10 px-3 text-sm transition-all hover:border-border-hover" 
                placeholder="Enter your username" 
                type="text" 
                required
              />
            </label>
            
            <label className="flex flex-col flex-1">
              <p className="text-text-primary text-sm font-medium leading-normal pb-2">Password</p>
              <div className="flex w-full items-stretch rounded border border-border-light bg-white focus-within:border-primary transition-all">
                <input 
                  className="flex w-full border-none bg-transparent h-10 px-3 text-sm focus:ring-0" 
                  placeholder="Enter your password" 
                  type="password" 
                  required
                />
                <button type="button" className="text-text-secondary flex items-center px-3 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[18px]">visibility</span>
                </button>
              </div>
            </label>
            
            <div className="flex items-center justify-between mt-1">
              <label className="flex gap-x-2 items-center cursor-pointer group">
                <input type="checkbox" className="h-4 w-4 rounded border-border-light text-primary focus:ring-0 cursor-pointer" />
                <p className="text-text-regular text-sm group-hover:text-primary transition-colors">Remember me</p>
              </label>
              <a className="text-sm text-primary hover:underline" href="#">Forgot Password?</a>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-primary text-white rounded h-10 text-sm font-medium hover:bg-primary-hover active:scale-[0.99] transition-all"
            >
              Log In
            </button>
            
            <div className="flex items-center gap-4 py-2">
              <div className="h-px bg-border-light flex-1"></div>
              <span className="text-text-secondary text-xs uppercase tracking-wider">or</span>
              <div className="h-px bg-border-light flex-1"></div>
            </div>
            
            <p className="text-text-regular text-sm text-center">
              Don't have an account? 
              <button type="button" onClick={onRegister} className="text-primary font-medium hover:underline ml-1">Contact Support</button>
            </p>
          </form>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-text-secondary text-xs">© 2024 QuantPlatform Inc. All rights reserved.</p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <a className="text-text-secondary text-xs hover:text-primary" href="#">Privacy Policy</a>
            <a className="text-text-secondary text-xs hover:text-primary" href="#">Terms of Service</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
