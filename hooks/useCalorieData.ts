import { useState, useCallback } from 'react';
import { CalorieEntry } from '../types';

export interface CalorieData {
  entries: CalorieEntry[];
  addEntry: (entry: CalorieEntry) => void;
  removeEntry: (id: string) => void;
  getDailyTotal: (date: string) => number;
  getRemainingCalories: (dailyGoal: number) => number;
}

export function useCalorieData(): CalorieData {
  const [entries, setEntries] = useState<CalorieEntry[]>([
    {
      id: '1',
      foodName: 'Oatmeal with Berries',
      calories: 350,
      mealType: 'breakfast',
      date: new Date().toISOString().split('T')[0],
    },
    {
      id: '2',
      foodName: 'Chicken Breast with Rice',
      calories: 650,
      mealType: 'lunch',
      date: new Date().toISOString().split('T')[0],
    },
    {
      id: '3',
      foodName: 'Protein Shake',
      calories: 250,
      mealType: 'snack',
      date: new Date().toISOString().split('T')[0],
    },
  ]);

  const addEntry = useCallback((entry: CalorieEntry) => {
    setEntries((prev) => [...prev, entry]);
  }, []);

  const removeEntry = useCallback((id: string) => {
    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  }, []);

  const getDailyTotal = useCallback(
    (date: string) => {
      return entries
        .filter((entry) => entry.date === date)
        .reduce((total, entry) => total + entry.calories, 0);
    },
    [entries]
  );

  const getRemainingCalories = useCallback(
    (dailyGoal: number) => {
      const today = new Date().toISOString().split('T')[0];
      const dailyTotal = getDailyTotal(today);
      return Math.max(0, dailyGoal - dailyTotal);
    },
    [getDailyTotal]
  );

  return {
    entries,
    addEntry,
    removeEntry,
    getDailyTotal,
    getRemainingCalories,
  };
}