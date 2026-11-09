import React from 'react';
import { LayoutDashboard, Dumbbell, TrendingUp, Apple } from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: 'dashboard' | 'workout' | 'progress' | 'calories') => void;
}

export default function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'workout', label: 'Workout Tracker', icon: Dumbbell },
    { id: 'progress', label: 'Progress Charts', icon: TrendingUp },
    { id: 'calories', label: 'Calorie Counter', icon: Apple },
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r border-cyan-500/30 p-6 h-screen sticky top-0 overflow-y-auto">
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as any)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 shadow-lg shadow-cyan-500/20'
                  : 'hover:bg-slate-800 text-slate-300 hover:text-cyan-400'
              }`}
            >
              <Icon className={`w-5 h-5 ${
                isActive ? 'text-cyan-400' : 'text-slate-400'
              }`} />
              <span className={`font-medium ${
                isActive ? 'text-cyan-400' : ''
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}