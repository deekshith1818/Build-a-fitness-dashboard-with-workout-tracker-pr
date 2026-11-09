import React from 'react';
import { Zap, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-slate-900 border-b border-cyan-500/30 shadow-lg shadow-cyan-500/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              FitPulse
            </h1>
            <p className="text-xs text-cyan-400/70">Fitness Dashboard</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-slate-800 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/20">
            <User className="w-5 h-5 text-cyan-400" />
          </button>
        </div>
      </div>
    </header>
  );
}