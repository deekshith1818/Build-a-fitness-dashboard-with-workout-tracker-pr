import React from 'react';
import StatCard from './StatCard';
import { Activity, Flame, Zap, Target } from 'lucide-react';
import { WorkoutData } from '../types';
import { CalorieData } from '../types';

interface DashboardProps {
  workoutData: WorkoutData;
  calorieData: CalorieData;
}

export default function Dashboard({ workoutData, calorieData }: DashboardProps) {
  const totalWorkouts = workoutData.sessions.length;
  const totalCaloriesBurned = workoutData.sessions.reduce((sum, session) => sum + (session.caloriesBurned || 0), 0);
  const totalCaloriesConsumed = calorieData.entries.reduce((sum, entry) => sum + entry.calories, 0);
  const currentStreak = 5; // Mock data

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Dashboard
        </h2>
        <p className="text-slate-400">Welcome back! Here's your fitness overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Workouts"
          value={totalWorkouts}
          icon={Activity}
          trend={12}
          color="cyan"
        />
        <StatCard
          title="Calories Burned"
          value={totalCaloriesBurned}
          icon={Flame}
          trend={8}
          color="orange"
        />
        <StatCard
          title="Calories Consumed"
          value={totalCaloriesConsumed}
          icon={Zap}
          trend={-5}
          color="purple"
        />
        <StatCard
          title="Current Streak"
          value={currentStreak}
          icon={Target}
          trend={2}
          color="pink"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">Recent Workouts</h3>
          <div className="space-y-3">
            {workoutData.sessions.slice(0, 3).map((session, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg border border-slate-600/30 hover:border-cyan-500/30 transition-all">
                <div>
                  <p className="font-medium text-white">{session.exercises[0]?.name || 'Workout'}</p>
                  <p className="text-sm text-slate-400">{session.exercises.length} exercises</p>
                </div>
                <span className="text-cyan-400 font-semibold">{session.duration} min</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-6 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">Daily Goal Progress</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-slate-300">Calories Remaining</span>
                <span className="text-sm font-semibold text-cyan-400">{Math.max(0, 2500 - totalCaloriesConsumed)} / 2500</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 h-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (totalCaloriesConsumed / 2500) * 100)}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-slate-300">Workout Goal</span>
                <span className="text-sm font-semibold text-orange-400">{totalWorkouts} / 5</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-orange-500 to-red-500 h-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (totalWorkouts / 5) * 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}