import React from 'react';
import { TrendingUp, Calendar, Target } from 'lucide-react';
import { WorkoutData, CalorieData } from '../types';

interface ProgressChartsProps {
  workoutData: WorkoutData;
  calorieData: CalorieData;
}

export default function ProgressCharts({ workoutData, calorieData }: ProgressChartsProps) {
  const workoutsByDay = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    return {
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      count: Math.floor(Math.random() * 3) + 1,
    };
  });

  const caloriesByDay = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    return {
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      calories: Math.floor(Math.random() * 1000) + 1500,
    };
  });

  const maxWorkouts = Math.max(...workoutsByDay.map(d => d.count), 1);
  const maxCalories = Math.max(...caloriesByDay.map(d => d.calories), 1);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Progress Charts
        </h2>
        <p className="text-slate-400">Track your fitness journey over time.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-cyan-400 mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Workouts Per Day (Last 7 Days)
          </h3>
          <div className="flex items-end justify-between h-64 gap-2">
            {workoutsByDay.map((day, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t-lg transition-all hover:from-cyan-600 hover:to-cyan-500" 
                  style={{ height: `${(day.count / maxWorkouts) * 100}%` }}
                />
                <span className="text-xs text-slate-400">{day.day}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
            <p className="text-sm text-slate-300">Average: <span className="text-cyan-400 font-semibold">1.8 workouts/day</span></p>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-6 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-purple-400 mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Daily Calories (Last 7 Days)
          </h3>
          <div className="flex items-end justify-between h-64 gap-2">
            {caloriesByDay.map((day, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-lg transition-all hover:from-purple-600 hover:to-purple-500" 
                  style={{ height: `${(day.calories / maxCalories) * 100}%` }}
                />
                <span className="text-xs text-slate-400">{day.day}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
            <p className="text-sm text-slate-300">Average: <span className="text-purple-400 font-semibold">1,850 cal/day</span></p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-slate-800/50 border border-orange-500/20 rounded-lg p-6 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-orange-400 mb-4 flex items-center gap-2">
            <Target className="w-5 h-5" />
            Weight Progress
          </h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-slate-300">Current</span>
                <span className="text-sm font-semibold text-orange-400">185 lbs</span>
              </div>
              <div className="text-xs text-slate-500">Goal: 175 lbs</div>
            </div>
            <div className="text-center py-4">
              <p className="text-2xl font-bold text-orange-400">10 lbs</p>
              <p className="text-xs text-slate-400">to goal</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-pink-500/20 rounded-lg p-6 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-pink-400 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Strength Gains
          </h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-slate-300 mb-1">Bench Press</p>
              <p className="text-xl font-bold text-pink-400">225 lbs</p>
              <p className="text-xs text-green-400">+15 lbs this month</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-green-500/20 rounded-lg p-6 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-green-400 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Consistency
          </h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-slate-300 mb-1">This Month</p>
              <p className="text-xl font-bold text-green-400">18 workouts</p>
              <p className="text-xs text-slate-400">5 day average streak</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}