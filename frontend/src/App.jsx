import { useState } from 'react';
import FoodSearch from './components/FoodSearch';
import FoodLog from './components/FoodLog';
import NutritionDashboard from './components/NutritionDashboard';
import './App.css';

function App() {
  const [loggedFoods, setLoggedFoods] = useState([]);

  const handleAddFood = (food) => {
    setLoggedFoods([...loggedFoods, food]);
  };

  const handleRemoveFood = (index) => {
    setLoggedFoods(loggedFoods.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🍎 Food Tracker</h1>
        <p className="app-subtitle">Track your daily nutrition and calories</p>
      </header>
      
      <main className="app-main">
        <div className="app-container">
          <FoodSearch onAddFood={handleAddFood} />
          <FoodLog loggedFoods={loggedFoods} onRemoveFood={handleRemoveFood} />
          <NutritionDashboard loggedFoods={loggedFoods} />
        </div>
      </main>
    </div>
  );
}

export default App;
