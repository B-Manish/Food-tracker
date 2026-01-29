# Food Tracker 🍎

A Healthify-like calorie and nutrition tracking application built with React and Vite.

## Features

- 🔍 **Food Search**: Search and select foods from the database
- 📊 **Nutrition Tracking**: Track calories, macros (protein, fat, fiber), vitamins, and minerals
- 📝 **Daily Food Log**: Add and remove foods from your daily log
- 📈 **Nutrition Dashboard**: View your daily totals with progress bars and detailed breakdowns
- 🎨 **Modern UI**: Beautiful, responsive design inspired by Healthify

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`)

## Usage

1. **Add Food**: Use the search bar to find foods from the database. Select a food and enter the quantity in grams, then click "Add to Log".

2. **View Log**: See all the foods you've added today in the "Today's Food Log" section. Click the × button to remove any food.

3. **Track Nutrition**: The Nutrition Dashboard shows:
   - **Macronutrients**: Calories, Protein, Fat, and Fiber with progress bars
   - **Vitamins**: Vitamin B12, D, C, and Folate (B9)
   - **Minerals**: Iron, Calcium, Magnesium, Potassium, and Zinc

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── FoodSearch.jsx      # Food search and selection
│   │   ├── FoodLog.jsx          # Daily food log display
│   │   └── NutritionDashboard.jsx # Nutrition summary
│   ├── data/
│   │   └── foods.json           # Food database
│   ├── App.jsx                  # Main app component
│   └── main.jsx                 # Entry point
└── package.json
```

## Food Data

The app uses food data from `src/data/foods.json`. Each food entry includes:
- Basic information (name, basis)
- Macronutrients (calories, protein, fat, fiber)
- Vitamins (B12, D, C, Folate)
- Minerals (Iron, Calcium, Magnesium, Potassium, Zinc)

All values are per 100g, and the app automatically calculates values based on the quantity you enter.

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features

## Future Enhancements

- User authentication
- Persistent storage (localStorage or database)
- Customizable daily goals
- Meal planning
- Food history and analytics
- More food items in the database
