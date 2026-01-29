import './FoodLog.css';

function FoodLog({ loggedFoods, onRemoveFood }) {
  if (loggedFoods.length === 0) {
    return (
      <div className="food-log">
        <h2>Today's Food Log</h2>
        <div className="empty-log">
          <p>No foods logged yet. Add some foods to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="food-log">
      <h2>Today's Food Log</h2>
      <div className="log-items">
        {loggedFoods.map((food, index) => (
          <div key={index} className="log-item">
            <div className="log-item-header">
              <div className="log-item-name">
                <h3>{food.food_name}</h3>
                <span className="log-item-quantity">{food.quantity}g</span>
              </div>
              <button
                onClick={() => onRemoveFood(index)}
                className="remove-button"
                aria-label="Remove food"
              >
                ×
              </button>
            </div>
            <div className="log-item-nutrition">
              <div className="nutrition-badge calories">
                <span className="nutrition-label">Calories</span>
                <span className="nutrition-value">
                  {parseFloat(food.calculatedMacros.calories_kcal).toFixed(0)} kcal
                </span>
              </div>
              <div className="nutrition-badge protein">
                <span className="nutrition-label">Protein</span>
                <span className="nutrition-value">
                  {parseFloat(food.calculatedMacros.protein_g).toFixed(1)}g
                </span>
              </div>
              <div className="nutrition-badge fat">
                <span className="nutrition-label">Fat</span>
                <span className="nutrition-value">
                  {parseFloat(food.calculatedMacros.fat_g).toFixed(1)}g
                </span>
              </div>
              <div className="nutrition-badge fiber">
                <span className="nutrition-label">Fiber</span>
                <span className="nutrition-value">
                  {parseFloat(food.calculatedMacros.fiber_g).toFixed(1)}g
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodLog;

