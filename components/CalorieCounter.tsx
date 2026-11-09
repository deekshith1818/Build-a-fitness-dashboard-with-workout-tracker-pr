import React, { useState } from 'react';
import { Plus, Trash2, Apple } from 'lucide-react';
import { CalorieData } from '../types';

interface CalorieCounterProps {
  calorieData: CalorieData;
}

export default function CalorieCounter({ calorieData }: CalorieCounterProps) {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const [mealType, setMealType] = useState('lunch');

  const handleAddEntry = () => {
    if (foodName && calories) {
      calorieData.addEntry({
        id: Date.now().toString(),
        foodName,
        calories: parseInt(calories),
        mealType: mealType as 'breakfast' | 'lunch' | 'dinner' | 'snack',
        date: new Date().toISOString().split('T')[0],
      });
      setFoodName('');
      setCalories('');
      setMealType('lunch');
    }
  };

  const dailyTotal = calorieData.entries.reduce((sum, entry) => sum + entry.calories, 0);
  const dailyGoal = 2500;
  const remaining = Math.max(0, dailyGoal - dailyTotal);

  const mealBreakdown = {
    breakfast: calorieData.entries.filter(e => e.mealType === 'breakfast').reduce((sum, e) => sum + e.calories, 0),
    lunch: calorieData.entries.filter(e => e.mealType === 'lunch').reduce((sum, e) => sum + e.calories, 0),
    dinner: calorieData.entries.filter(e => e.mealType === 'dinner').reduce((sum, e) => sum + e.calories, 0),
    snack: calorieData.entries.filter(e => e.mealType === 'snack').reduce((sum, e) => sum + e.calories, 0),
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Calorie Counter
        </h2>
        <p className="text-slate-400">Track your daily nutrition and calorie intake.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
              <Apple className="w-5 h-5" />
              Add Food Entry
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Food Name</label>
                <input
                  type="text"
                  value={foodName}
                  onChange={(e) => setFoodName(e.target.value)}
                  placeholder="e.g., Chicken Breast"
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Calories</label>
                <input
                  type="number"
                  value={calories}
                  onChange={(e) => setCalories(e.target.value)}
                  placeholder="350"
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Meal Type</label>
                <select
                  value={mealType}
                  onChange={(e) => setMealType(e.target.value)}
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500/50 transition-all"
                >
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                  <option value="snack">Snack</option>
                </select>
              </div>
              <button
                onClick={handleAddEntry}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <Plus className="w-5 h-5" />
                Add Entry
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-6 backdrop-blur-sm mb-6">
            <h3 className="text-lg font-semibold text-purple-400 mb-6">Daily Summary</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300">Total Consumed</span>
                  <span className="text-2xl font-bold text-cyan-400">{dailyTotal}</span>
                </div>
                <div className="flex justify-between mb-3">
                  <span className="text-slate-400 text-sm">Daily Goal: {dailyGoal}</span>
                  <span className={`text-sm font-semibold ${
                    remaining > 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {remaining > 0 ? `${remaining} remaining` : `${Math.abs(remaining)} over`}
                  </span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 h-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (dailyTotal / dailyGoal) * 100)}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-orange-500/20 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-orange-400 mb-4">Meal Breakdown</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Breakfast', value: mealBreakdown.breakfast, color: 'text-yellow-400' },
                { label: 'Lunch', value: mealBreakdown.lunch, color: 'text-orange-400' },
                { label: 'Dinner', value: mealBreakdown.dinner, color: 'text-red-400' },
                { label: 'Snacks', value: mealBreakdown.snack, color: 'text-pink-400' },
              ].map((meal, idx) => (
                <div key={idx} className="bg-slate-700/30 border border-slate-600/30 rounded-lg p-4">
                  <p className="text-sm text-slate-400 mb-1">{meal.label}</p>
                  <p className={`text-xl font-bold ${meal.color}`}>{meal.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-slate-800/50 border border-pink-500/20 rounded-lg p-6 backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-pink-400 mb-4">Today's Entries</h3>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {calorieData.entries.length === 0 ? (
            <p className="text-slate-400 text-center py-8">No entries yet. Add your first meal!</p>
          ) : (
            calorieData.entries.map((entry, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-slate-700/30 border border-slate-600/30 rounded-lg hover:border-pink-500/30 transition-all">
                <div>
                  <p className="font-medium text-white">{entry.foodName}</p>
                  <p className="text-xs text-slate-400 capitalize">{entry.mealType}</p>
                </div>
                <span className="text-pink-400 font-semibold">{entry.calories} cal</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}