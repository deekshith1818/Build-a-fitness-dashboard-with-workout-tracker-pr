export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weight: number;
  duration: number;
}

export interface Workout {
  id: string;
  date: string;
  exercises: Exercise[];
  duration: number;
  caloriesBurned: number;
}

export interface CalorieEntry {
  id: string;
  foodName: string;
  calories: number;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  date: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  dailyCalorieGoal: number;
  dailyWorkoutGoal: number;
}

export interface DashboardMetrics {
  totalWorkouts: number;
  totalCaloriesBurned: number;
  totalCaloriesConsumed: number;
  currentStreak: number;
  weeklyAverage: number;
}