import { useState, useCallback } from 'react';
import { Workout, Exercise } from '../types';

export interface WorkoutData {
  sessions: Workout[];
  addExercise: (exercise: Exercise) => void;
  removeExercise: (id: string) => void;
  getTotalVolume: () => number;
  getTotalDuration: () => number;
}

export function useWorkoutData(): WorkoutData {
  const [sessions, setSessions] = useState<Workout[]>([
    {
      id: '1',
      date: new Date().toISOString().split('T')[0],
      exercises: [
        { id: '1', name: 'Bench Press', sets: 4, reps: 8, weight: 225, duration: 0 },
        { id: '2', name: 'Incline Dumbbell Press', sets: 3, reps: 10, weight: 85, duration: 0 },
      ],
      duration: 45,
      caloriesBurned: 350,
    },
    {
      id: '2',
      date: new Date(Date.now() - 86400000).toISOString().split('T')[0],
      exercises: [
        { id: '3', name: 'Squats', sets: 4, reps: 6, weight: 315, duration: 0 },
        { id: '4', name: 'Leg Press', sets: 3, reps: 10, weight: 450, duration: 0 },
      ],
      duration: 50,
      caloriesBurned: 420,
    },
  ]);

  const addExercise = useCallback((exercise: Exercise) => {
    setSessions((prev) => {
      const lastSession = prev[prev.length - 1];
      if (lastSession && lastSession.date === new Date().toISOString().split('T')[0]) {
        return prev.map((session, idx) =>
          idx === prev.length - 1
            ? { ...session, exercises: [...session.exercises, exercise] }
            : session
        );
      } else {
        return [
          ...prev,
          {
            id: Date.now().toString(),
            date: new Date().toISOString().split('T')[0],
            exercises: [exercise],
            duration: exercise.duration || 30,
            caloriesBurned: 300,
          },
        ];
      }
    });
  }, []);

  const removeExercise = useCallback((id: string) => {
    setSessions((prev) =>
      prev.map((session) => ({
        ...session,
        exercises: session.exercises.filter((ex) => ex.id !== id),
      }))
    );
  }, []);

  const getTotalVolume = useCallback(() => {
    return sessions.reduce((total, session) => {
      return (
        total +
        session.exercises.reduce((sum, ex) => sum + ex.sets * ex.reps * ex.weight, 0)
      );
    }, 0);
  }, [sessions]);

  const getTotalDuration = useCallback(() => {
    return sessions.reduce((total, session) => total + session.duration, 0);
  }, [sessions]);

  return {
    sessions,
    addExercise,
    removeExercise,
    getTotalVolume,
    getTotalDuration,
  };
}