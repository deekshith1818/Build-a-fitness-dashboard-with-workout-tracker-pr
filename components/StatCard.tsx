import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  trend?: number;
  color?: 'cyan' | 'orange' | 'purple' | 'pink';
}

const colorMap = {
  cyan: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 shadow-cyan-500/10',
  orange: 'from-orange-500/20 to-orange-500/5 border-orange-500/30 shadow-orange-500/10',
  purple: 'from-purple-500/20 to-purple-500/5 border-purple-500/30 shadow-purple-500/10',
  pink: 'from-pink-500/20 to-pink-500/5 border-pink-500/30 shadow-pink-500/10',
};

const iconColorMap = {
  cyan: 'text-cyan-400',
  orange: 'text-orange-400',
  purple: 'text-purple-400',
  pink: 'text-pink-400',
};

export default function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  color = 'cyan',
}: StatCardProps) {
  return (
    <div
      className={`bg-gradient-to-br ${colorMap[color]} border rounded-lg p-6 backdrop-blur-sm hover:shadow-lg transition-all duration-200 hover:scale-105`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-slate-400 text-sm font-medium mb-2">{title}</p>
          <p className="text-3xl font-bold text-white">{value}</p>
          {trend !== undefined && (
            <div className="flex items-center gap-1 mt-2">
              {trend >= 0 ? (
                <TrendingUp className="w-4 h-4 text-green-400" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-400" />
              )}
              <span className={`text-sm font-semibold ${
                trend >= 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                {Math.abs(trend)}%
              </span>
            </div>
          )}
        </div>
        <div className={`p-3 bg-slate-800/50 rounded-lg ${iconColorMap[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}