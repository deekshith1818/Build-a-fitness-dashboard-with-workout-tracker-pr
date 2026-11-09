import React, { useState } from 'react';
import { Plus, Trash2, Dumbbell } from 'lucide-react';
import { WorkoutData, Exercise } from '../types';

interface WorkoutTrackerProps {
  workoutData: WorkoutData;
}

export default function WorkoutTracker({ workoutData }: WorkoutTrackerProps) {
  const [exerciseName, setExerciseName] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [duration, setDuration] = useState('');

  const handleAddExercise = () => {
    if (exerciseName && (sets || duration)) {
      const newExercise: Exercise = {
        id: Date.now().toString(),
        name: exerciseName,
        sets: sets ? parseInt(sets) : 0,
        reps: reps ? parseInt(reps) : 0,
        weight: weight ? parseFloat(weight) : 0,
        duration: duration ? parseInt(duration) : 0,
      };
      workoutData.addExercise(newExercise);
      setExerciseName('');
      setSets('');
      setReps('');
      setWeight('');
      setDuration('');
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Workout Tracker
        </h2>
        <p className="text-slate-400">Log your exercises and track your progress.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
              <Dumbbell className="w-5 h-5" />
              Add Exercise
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Exercise Name</label>
                <input
                  type="text"
                  value={exerciseName}
                  onChange={(e) => setExerciseName(e.target.value)}
                  placeholder="e.g., Bench Press"
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Sets</label>
                  <input
                    type="number"
                    value={sets}
                    onChange={(e) => setSets(e.target.value)}
                    placeholder="3"
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Reps</label>
                  <input
                    type="number"
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}
                    placeholder="10"
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-all"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Weight (lbs)</label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="185"
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Duration (min)</label>
                  <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="30"
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-all"
                  />
                </div>
              </div>
              <button
                onClick={handleAddExercise}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <Plus className="w-5 h-5" />
                Add Exercise
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-purple-400 mb-4">Workout History</h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {workoutData.sessions.length === 0 ? (
                <p className="text-slate-400 text-center py-8">No workouts logged yet. Start by adding an exercise!</p>
              ) : (
                workoutData.sessions.map((session, idx) => (
                  <div key={idx} className="bg-slate-700/30 border border-slate-600/30 rounded-lg p-4 hover:border-purple-500/30 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-semibold text-white">{session.date}</p>
                        <p className="text-sm text-slate-400">{session.exercises.length} exercises</p>
                      </div>
                      <span className="text-purple-400 font-semibold">{session.duration} min</span>
                    </div>
                    <div className="space-y-2">
                      {session.exercises.map((ex, exIdx) => (
                        <div key={exIdx} className="text-sm text-slate-300 flex items-center justify-between">
                          <span>{ex.name}</span>
                          <span className="text-slate-500">
                            {ex.sets > 0 && `${ex.sets}x${ex.reps}`}
                            {ex.weight > 0 && ` @ ${ex.weight}lbs`}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}