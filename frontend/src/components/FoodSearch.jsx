import { useState } from 'react';
import foodsData from '../data/foods.json';
import './FoodSearch.css';

function FoodSearch({ onAddFood }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFood, setSelectedFood] = useState(null);
  const [quantity, setQuantity] = useState(100);

  const filteredFoods = foodsData.filter(food =>
    food.food_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFoodSelect = (food) => {
    setSelectedFood(food);
    setSearchTerm(food.food_name);
  };

  const handleAdd = () => {
    if (selectedFood && quantity > 0) {
      const multiplier = quantity / 100; // Since all foods are per 100g
      onAddFood({
        ...selectedFood,
        quantity: quantity,
        calculatedMacros: {
          calories_kcal: (selectedFood.macros.calories_kcal * multiplier).toFixed(1),
          protein_g: (selectedFood.macros.protein_g * multiplier).toFixed(1),
          fat_g: (selectedFood.macros.fat_g * multiplier).toFixed(1),
          fiber_g: (selectedFood.macros.fiber_g * multiplier).toFixed(1),
        },
        calculatedVitamins: {
          vitamin_b12_mcg: (selectedFood.vitamins.vitamin_b12_mcg * multiplier).toFixed(2),
          vitamin_d_mcg: (selectedFood.vitamins.vitamin_d_mcg * multiplier).toFixed(2),
          vitamin_c_mg: (selectedFood.vitamins.vitamin_c_mg * multiplier).toFixed(2),
          folate_b9_mcg: (selectedFood.vitamins.folate_b9_mcg * multiplier).toFixed(1),
        },
        calculatedMinerals: {
          iron_mg: (selectedFood.minerals.iron_mg * multiplier).toFixed(2),
          calcium_mg: (selectedFood.minerals.calcium_mg * multiplier).toFixed(1),
          magnesium_mg: (selectedFood.minerals.magnesium_mg * multiplier).toFixed(1),
          potassium_mg: (selectedFood.minerals.potassium_mg * multiplier).toFixed(1),
          zinc_mg: (selectedFood.minerals.zinc_mg * multiplier).toFixed(2),
        },
      });
      setSelectedFood(null);
      setSearchTerm('');
      setQuantity(100);
    }
  };

  return (
    <div className="food-search">
      <h2>Add Food</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for food..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setSelectedFood(null);
          }}
          className="search-input"
        />
        {searchTerm && !selectedFood && filteredFoods.length > 0 && (
          <div className="search-results">
            {filteredFoods.map((food, index) => (
              <div
                key={index}
                className="search-result-item"
                onClick={() => handleFoodSelect(food)}
              >
                <span className="food-name">{food.food_name}</span>
                <span className="food-calories">
                  {food.macros.calories_kcal} kcal/100g
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedFood && (
        <div className="selected-food">
          <div className="selected-food-info">
            <h3>{selectedFood.food_name}</h3>
            <div className="quantity-input">
              <label>Quantity (grams):</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseFloat(e.target.value) || 0)}
                className="quantity-field"
              />
            </div>
            <div className="preview-nutrition">
              <div className="preview-item">
                <span>Calories:</span>
                <strong>
                  {((selectedFood.macros.calories_kcal * quantity) / 100).toFixed(1)} kcal
                </strong>
              </div>
              <div className="preview-item">
                <span>Protein:</span>
                <strong>
                  {((selectedFood.macros.protein_g * quantity) / 100).toFixed(1)}g
                </strong>
              </div>
              <div className="preview-item">
                <span>Fat:</span>
                <strong>
                  {((selectedFood.macros.fat_g * quantity) / 100).toFixed(1)}g
                </strong>
              </div>
            </div>
          </div>
          <button onClick={handleAdd} className="add-button">
            Add to Log
          </button>
        </div>
      )}
    </div>
  );
}

export default FoodSearch;

