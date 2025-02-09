import React, { useState } from "react";

const NutritionPlanPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [mealPlan, setMealPlan] = useState(
    Array(7).fill().map(() => ({ breakfast: "", lunch: "", dinner: "" }))
  );
  const [showSummary, setShowSummary] = useState(false);

  const plans = {
    "Weight Loss": {
      breakfast: ["Oatmeal", "Greek Yogurt", "Smoothie Bowl", "Boiled Eggs", "Fruit Salad"],
      lunch: ["Grilled Chicken Salad", "Quinoa Bowl", "Veggie Wrap", "Soup", "Grilled Fish"],
      dinner: ["Steamed Veggies", "Zucchini Noodles", "Tofu Stir-Fry", "Salmon", "Mixed Greens"],
    },
    "Muscle Gain": {
      breakfast: ["Egg Whites", "Protein Shake", "Avocado Toast", "Banana Pancakes", "Cottage Cheese"],
      lunch: ["Brown Rice with Chicken", "Steak with Sweet Potato", "Lentil Curry", "Salmon Bowl", "Turkey Wrap"],
      dinner: ["Grilled Salmon", "Chicken Stir-Fry", "Beef Stew", "Veggie Pasta", "Shrimp Salad"],
    },
    Maintenance: {
      breakfast: ["Whole Wheat Toast", "Peanut Butter Smoothie", "Oats with Milk", "Scrambled Eggs", "Fruit Bowl"],
      lunch: ["Pasta", "Grilled Chicken Sandwich", "Quinoa Salad", "Veggie Burger", "Fish Tacos"],
      dinner: ["Mixed Veggies", "Grilled Chicken", "Paneer Curry", "Baked Fish", "Veggie Stir-Fry"],
    },
  };

  const handlePlanSelect = (e) => setSelectedPlan(e.target.value);

  const handleMealChange = (dayIndex, mealType, value) => {
    const updatedPlan = mealPlan.map((day, index) =>
      index === dayIndex ? { ...day, [mealType]: value } : day
    );
    setMealPlan(updatedPlan);
  };

  const handleShowSummary = () => {
    setShowSummary(true); // Show summary when button is clicked
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center p-6"
      style={{
        backgroundImage: "url('food.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="max-w-6xl mx-auto p-6 bg-pink-900 dark:bg-black bg-opacity-80 rounded-lg shadow-lg">
        <h1 className="mt-10 text-5xl font-bold text-center color- mb-6">Nutrition Plans</h1>
        <p className="text-center mb-4">
          Select a plan, customize meals for the week, and reach your fitness goals.
        </p>
        <div className="mb-6">
          <label htmlFor="plan" className="block font-semibold mb-2">
            Select a Plan:
          </label>
          <select
            id="plan"
            value={selectedPlan}
            onChange={handlePlanSelect}
            className="w-full p-3 border rounded-lg"
          >
            <option value="">-- Choose a Plan --</option>
            {Object.keys(plans).map((plan) => (
              <option key={plan} value={plan}>
                {plan}
              </option>
            ))}
          </select>
        </div>

        {selectedPlan && (
          <div>
            <h2 className="text-xl font-bold mb-4">Weekly Meal Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mealPlan.map((day, index) => (
                <div key={index} className="p-4 rounded-lg shadow">
                  <h3 className="font-semibold mb-3">Day {index + 1}</h3>
                  {["breakfast", "lunch", "dinner"].map((mealType) => (
                    <div key={mealType} className="mb-3">
                      <label htmlFor={`meal-${index}-${mealType}`} className="block mb-1 capitalize">
                        {mealType}:
                      </label>
                      <select
                        id={`meal-${index}-${mealType}`}
                        value={mealPlan[index][mealType]}
                        onChange={(e) => handleMealChange(index, mealType, e.target.value)}
                        className="w-full p-2 border rounded-lg"
                      >
                        <option value="">-- Select --</option>
                        {plans[selectedPlan][mealType].map((meal, idx) => (
                          <option key={idx} value={meal}>
                            {meal}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedPlan && !showSummary && (
          <div className="mt-8 text-center">
            <button
              onClick={handleShowSummary}
              className="px-6 py-3 bg-green-500 text-white rounded-lg text-xl font-semibold"
            >
              Weekly Routine is Ready! Click to See Your Plan
            </button>
          </div>
        )}

        {showSummary && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Your Weekly Routine</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mealPlan.map((day, index) => (
                <div
                  key={index}
                  className="p-4 bg-white dark:bg-black rounded-lg shadow-lg border border-gray-300 flex flex-col items-center"
                >
                  <h3 className="font-semibold text-lg mb-4">Day {index + 1}</h3>
                  <div className="w-full">
                    <div className="flex justify-between mb-2">
                      <strong>Breakfast:</strong>
                      <span>{day.breakfast || "Not Selected"}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <strong>Lunch:</strong>
                      <span>{day.lunch || "Not Selected"}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <strong>Dinner:</strong>
                      <span>{day.dinner || "Not Selected"}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NutritionPlanPage;

