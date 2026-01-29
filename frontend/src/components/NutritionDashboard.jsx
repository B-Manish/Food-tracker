import './NutritionDashboard.css';

function NutritionDashboard({ loggedFoods }) {
  const calculateTotals = () => {
    const totals = {
      calories: 0,
      protein: 0,
      fat: 0,
      fiber: 0,
      vitamin_b12: 0,
      vitamin_d: 0,
      vitamin_c: 0,
      folate: 0,
      iron: 0,
      calcium: 0,
      magnesium: 0,
      potassium: 0,
      zinc: 0,
    };

    loggedFoods.forEach((food) => {
      totals.calories += parseFloat(food.calculatedMacros.calories_kcal) || 0;
      totals.protein += parseFloat(food.calculatedMacros.protein_g) || 0;
      totals.fat += parseFloat(food.calculatedMacros.fat_g) || 0;
      totals.fiber += parseFloat(food.calculatedMacros.fiber_g) || 0;
      totals.vitamin_b12 += parseFloat(food.calculatedVitamins.vitamin_b12_mcg) || 0;
      totals.vitamin_d += parseFloat(food.calculatedVitamins.vitamin_d_mcg) || 0;
      totals.vitamin_c += parseFloat(food.calculatedVitamins.vitamin_c_mg) || 0;
      totals.folate += parseFloat(food.calculatedVitamins.folate_b9_mcg) || 0;
      totals.iron += parseFloat(food.calculatedMinerals.iron_mg) || 0;
      totals.calcium += parseFloat(food.calculatedMinerals.calcium_mg) || 0;
      totals.magnesium += parseFloat(food.calculatedMinerals.magnesium_mg) || 0;
      totals.potassium += parseFloat(food.calculatedMinerals.potassium_mg) || 0;
      totals.zinc += parseFloat(food.calculatedMinerals.zinc_mg) || 0;
    });

    return totals;
  };

  const totals = calculateTotals();

  // Default daily goals (can be customized)
  const goals = {
    calories: 2000,
    protein: 50,
    fat: 65,
    fiber: 25,
    // Vitamins (Daily Recommended Values)
    vitamin_b12: 2.4, // mcg
    vitamin_d: 15, // mcg
    vitamin_c: 90, // mg
    folate: 400, // mcg
    // Minerals (Daily Recommended Values)
    iron: 18, // mg
    calcium: 1000, // mg
    magnesium: 400, // mg
    potassium: 3500, // mg
    zinc: 11, // mg
  };

  const getPercentage = (current, goal) => {
    if (goal === 0) return 0;
    return Math.min((current / goal) * 100, 100);
  };

  return (
    <div className="nutrition-dashboard">
      <h2>Nutrition Summary</h2>
      
      <div className="macros-section">
        <h3>Macronutrients</h3>
        <div className="macros-grid">
          <div className="macro-card calories">
            <div className="macro-header">
              <span className="macro-label">Calories</span>
              <span className="macro-value">
                {totals.calories.toFixed(0)} / {goals.calories} kcal
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill calories"
                style={{ width: `${getPercentage(totals.calories, goals.calories)}%` }}
              ></div>
            </div>
            <div className="macro-percentage">
              {getPercentage(totals.calories, goals.calories).toFixed(0)}%
            </div>
          </div>

          <div className="macro-card protein">
            <div className="macro-header">
              <span className="macro-label">Protein</span>
              <span className="macro-value">
                {totals.protein.toFixed(1)}g / {goals.protein}g
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill protein"
                style={{ width: `${getPercentage(totals.protein, goals.protein)}%` }}
              ></div>
            </div>
            <div className="macro-percentage">
              {getPercentage(totals.protein, goals.protein).toFixed(0)}%
            </div>
          </div>

          <div className="macro-card fat">
            <div className="macro-header">
              <span className="macro-label">Fat</span>
              <span className="macro-value">
                {totals.fat.toFixed(1)}g / {goals.fat}g
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill fat"
                style={{ width: `${getPercentage(totals.fat, goals.fat)}%` }}
              ></div>
            </div>
            <div className="macro-percentage">
              {getPercentage(totals.fat, goals.fat).toFixed(0)}%
            </div>
          </div>

          <div className="macro-card fiber">
            <div className="macro-header">
              <span className="macro-label">Fiber</span>
              <span className="macro-value">
                {totals.fiber.toFixed(1)}g / {goals.fiber}g
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill fiber"
                style={{ width: `${getPercentage(totals.fiber, goals.fiber)}%` }}
              ></div>
            </div>
            <div className="macro-percentage">
              {getPercentage(totals.fiber, goals.fiber).toFixed(0)}%
            </div>
          </div>
        </div>
      </div>

      <div className="vitamins-section">
        <h3>Vitamins</h3>
        <div className="vitamins-grid">
          <div className="vitamin-card">
            <div className="vitamin-header">
              <span className="vitamin-label">Vitamin B12</span>
              <span className="vitamin-value">
                {totals.vitamin_b12.toFixed(2)} / {goals.vitamin_b12} mcg
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill vitamin"
                style={{ width: `${getPercentage(totals.vitamin_b12, goals.vitamin_b12)}%` }}
              ></div>
            </div>
            <div className="vitamin-percentage">
              {getPercentage(totals.vitamin_b12, goals.vitamin_b12).toFixed(0)}%
            </div>
          </div>
          <div className="vitamin-card">
            <div className="vitamin-header">
              <span className="vitamin-label">Vitamin D</span>
              <span className="vitamin-value">
                {totals.vitamin_d.toFixed(2)} / {goals.vitamin_d} mcg
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill vitamin"
                style={{ width: `${getPercentage(totals.vitamin_d, goals.vitamin_d)}%` }}
              ></div>
            </div>
            <div className="vitamin-percentage">
              {getPercentage(totals.vitamin_d, goals.vitamin_d).toFixed(0)}%
            </div>
          </div>
          <div className="vitamin-card">
            <div className="vitamin-header">
              <span className="vitamin-label">Vitamin C</span>
              <span className="vitamin-value">
                {totals.vitamin_c.toFixed(2)} / {goals.vitamin_c} mg
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill vitamin"
                style={{ width: `${getPercentage(totals.vitamin_c, goals.vitamin_c)}%` }}
              ></div>
            </div>
            <div className="vitamin-percentage">
              {getPercentage(totals.vitamin_c, goals.vitamin_c).toFixed(0)}%
            </div>
          </div>
          <div className="vitamin-card">
            <div className="vitamin-header">
              <span className="vitamin-label">Folate (B9)</span>
              <span className="vitamin-value">
                {totals.folate.toFixed(1)} / {goals.folate} mcg
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill vitamin"
                style={{ width: `${getPercentage(totals.folate, goals.folate)}%` }}
              ></div>
            </div>
            <div className="vitamin-percentage">
              {getPercentage(totals.folate, goals.folate).toFixed(0)}%
            </div>
          </div>
        </div>
      </div>

      <div className="minerals-section">
        <h3>Minerals</h3>
        <div className="minerals-grid">
          <div className="mineral-card">
            <div className="mineral-header">
              <span className="mineral-label">Iron</span>
              <span className="mineral-value">
                {totals.iron.toFixed(2)} / {goals.iron} mg
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill mineral"
                style={{ width: `${getPercentage(totals.iron, goals.iron)}%` }}
              ></div>
            </div>
            <div className="mineral-percentage">
              {getPercentage(totals.iron, goals.iron).toFixed(0)}%
            </div>
          </div>
          <div className="mineral-card">
            <div className="mineral-header">
              <span className="mineral-label">Calcium</span>
              <span className="mineral-value">
                {totals.calcium.toFixed(1)} / {goals.calcium} mg
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill mineral"
                style={{ width: `${getPercentage(totals.calcium, goals.calcium)}%` }}
              ></div>
            </div>
            <div className="mineral-percentage">
              {getPercentage(totals.calcium, goals.calcium).toFixed(0)}%
            </div>
          </div>
          <div className="mineral-card">
            <div className="mineral-header">
              <span className="mineral-label">Magnesium</span>
              <span className="mineral-value">
                {totals.magnesium.toFixed(1)} / {goals.magnesium} mg
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill mineral"
                style={{ width: `${getPercentage(totals.magnesium, goals.magnesium)}%` }}
              ></div>
            </div>
            <div className="mineral-percentage">
              {getPercentage(totals.magnesium, goals.magnesium).toFixed(0)}%
            </div>
          </div>
          <div className="mineral-card">
            <div className="mineral-header">
              <span className="mineral-label">Potassium</span>
              <span className="mineral-value">
                {totals.potassium.toFixed(1)} / {goals.potassium} mg
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill mineral"
                style={{ width: `${getPercentage(totals.potassium, goals.potassium)}%` }}
              ></div>
            </div>
            <div className="mineral-percentage">
              {getPercentage(totals.potassium, goals.potassium).toFixed(0)}%
            </div>
          </div>
          <div className="mineral-card">
            <div className="mineral-header">
              <span className="mineral-label">Zinc</span>
              <span className="mineral-value">
                {totals.zinc.toFixed(2)} / {goals.zinc} mg
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill mineral"
                style={{ width: `${getPercentage(totals.zinc, goals.zinc)}%` }}
              ></div>
            </div>
            <div className="mineral-percentage">
              {getPercentage(totals.zinc, goals.zinc).toFixed(0)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NutritionDashboard;

