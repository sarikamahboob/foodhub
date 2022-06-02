import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleRecipe = () => {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals);
        setRecipe(data.meals[0]);
      });
  }, []);
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src={recipe.strMealThumb}
            class="max-w-sm rounded-lg shadow-2xl"
            alt="recipe"
          />
          <div>
            <h1 class="text-5xl font-bold">{recipe.strMeal}</h1>
            <p class="py-6 text-justify">{recipe.strInstructions}</p>
            <p>
              <span className="text-orange-600 font-bold">Category:</span>{" "}
              {recipe.strCategory}
            </p>
            <p>
              <span className="text-orange-600 font-bold">Location: </span>{" "}
              {recipe.strArea}
            </p>
            <p>
              <span className="text-orange-600 font-bold">
                Main Ingredients:{" "}
              </span>{" "}
              {recipe.strIngredient1}, {recipe.strIngredient2},{" "}
              {recipe.strIngredient3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
