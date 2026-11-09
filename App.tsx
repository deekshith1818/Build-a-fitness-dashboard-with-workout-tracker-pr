import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import WorkoutTracker from './components/WorkoutTracker';
import ProgressCharts from './components/ProgressCharts';
import CalorieCounter from './components/CalorieCounter';
import { useWorkoutData } from './hooks/useWorkoutData';
import { useCalorieData } from './hooks/useCalorieData';

type Page = 'dashboard' | 'workout' | 'progress' | 'calories';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const workoutData = useWorkoutData();
  const calorieData = useCalorieData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Header />
      <div className="flex">
        <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
        <main className="flex-1 overflow-auto">
          {currentPage === 'dashboard' && (
            <Dashboard workoutData={workoutData} calorieData={calorieData} />
          )}
          {currentPage === 'workout' && (
            <WorkoutTracker workoutData={workoutData} />
          )}
          {currentPage === 'progress' && (
            <ProgressCharts workoutData={workoutData} calorieData={calorieData} />
          )}
          {currentPage === 'calories' && (
            <CalorieCounter calorieData={calorieData} />
          )}
        </main>
      </div>
    </div>
  );
}