# FitPulse - Fitness Dashboard

A comprehensive fitness tracking dashboard built with React and TypeScript. FitPulse helps you monitor your workouts, track calories, visualize progress, and achieve your fitness goals with a modern dark neon aesthetic.

## Features

- **Dashboard Overview**: Quick view of key metrics including total workouts, calories burned, calories consumed, and current streak
- **Workout Tracker**: Log exercises with sets, reps, weight, and duration. View complete workout history
- **Progress Charts**: Visualize your fitness journey with charts showing:
  - Workouts per day (last 7 days)
  - Daily calorie intake trends
  - Weight progression
  - Strength gains
  - Consistency metrics
- **Calorie Counter**: Track daily nutrition with:
  - Food entry logging
  - Meal type categorization (breakfast, lunch, dinner, snacks)
  - Daily goal progress
  - Meal breakdown visualization
- **Dark Neon Theme**: Modern UI with cyan, purple, and pink neon accents on dark backgrounds
- **Responsive Design**: Works seamlessly on desktop and tablet devices
- **Real-time Updates**: Instant feedback when adding workouts and food entries

## Tech Stack

- **React 18**: Modern React with hooks for state management
- **TypeScript**: Full type safety across the application
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Beautiful, consistent icon library
- **Vite**: Fast build tool and development server

## Project Structure

```
src/
├── App.tsx                 # Root application component
├── main.tsx               # React entry point
├── types/
│   └── index.ts          # TypeScript type definitions
├── hooks/
│   ├── useWorkoutData.ts # Workout state management
│   └── useCalorieData.ts # Calorie tracking state
└── components/
    ├── Header.tsx        # Navigation header
    ├── Sidebar.tsx       # Navigation sidebar
    ├── Dashboard.tsx     # Main dashboard overview
    ├── WorkoutTracker.tsx # Workout logging interface
    ├── ProgressCharts.tsx # Data visualization
    ├── CalorieCounter.tsx # Calorie tracking
    └── StatCard.tsx      # Reusable metric card
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fitpulse-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Dashboard
The main dashboard displays your key fitness metrics at a glance:
- Total workouts completed
- Calories burned from workouts
- Calories consumed today
- Current workout streak
- Recent workouts list
- Daily goal progress bars

### Workout Tracker
1. Navigate to "Workout Tracker" from the sidebar
2. Fill in the exercise details:
   - Exercise name (e.g., "Bench Press")
   - Sets and reps
   - Weight lifted
   - Duration in minutes
3. Click "Add Exercise" to log the workout
4. View your complete workout history below

### Progress Charts
View your fitness progress over time:
- **Workouts Per Day**: Bar chart showing workout frequency
- **Daily Calories**: Calorie intake trends
- **Weight Progress**: Track weight changes toward your goal
- **Strength Gains**: Monitor increases in lifting capacity
- **Consistency**: View your workout streaks and monthly totals

### Calorie Counter
1. Navigate to "Calorie Counter" from the sidebar
2. Add food entries:
   - Food name
   - Calorie amount
   - Meal type (breakfast, lunch, dinner, snack)
3. View your daily summary:
   - Total calories consumed
   - Remaining calories for the day
   - Progress toward daily goal
   - Meal breakdown by type

## Component Architecture

### StatCard
Reusable component for displaying metrics with:
- Icon from Lucide React
- Metric value
- Trend indicator (up/down percentage)
- Color-coded styling

### Custom Hooks

**useWorkoutData**
- Manages workout sessions and exercises
- Provides methods to add/remove exercises
- Calculates total volume and duration
- Maintains workout history

**useCalorieData**
- Manages calorie entries
- Tracks daily totals
- Calculates remaining calories
- Maintains entry history

## Styling

The application uses Tailwind CSS with a custom dark neon color scheme:
- **Primary**: Cyan (#06B6D4)
- **Secondary**: Purple (#A855F7)
- **Accent**: Pink (#EC4899)
- **Background**: Slate-950 to Slate-900

All components use:
- Gradient backgrounds for visual depth
- Neon glowing effects on borders and shadows
- Smooth transitions and hover effects
- Responsive grid layouts

## Development

### Adding New Features

1. **New Component**: Create a new file in `/src/components/`
2. **New Hook**: Create a new file in `/src/hooks/`
3. **New Types**: Add to `/src/types/index.ts`
4. **Import in App.tsx**: Add the component to the main App component

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## Future Enhancements

- User authentication and profiles
- Data persistence with local storage or backend
- Advanced analytics and insights
- Social features (friend challenges, leaderboards)
- Mobile app version
- Integration with fitness trackers
- Meal planning and recipe suggestions
- Workout program templates

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For issues, questions, or suggestions, please open an issue on the repository.

---

**FitPulse** - Your personal fitness companion. Track, analyze, and achieve your fitness goals! 💪⚡