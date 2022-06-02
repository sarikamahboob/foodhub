import React from "react";
import { useNavigate } from "react-router-dom";

const Recipe = ({ meal }) => {
  const { idMeal, strMeal, strMealThumb, strCategory, strArea } = meal;
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center ">
      <div
        onClick={() => navigate(`/recipe/${idMeal}`)}
        class="card w-96 bg-base-100 shadow-xl hover:bg-orange-200 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 "
      >
        <figure>
          <img src={strMealThumb} alt="Shoes" className="" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{strMeal}</h2>
          <p>
            <span className="text-orange-600 font-bold">Category:</span>{" "}
            {strCategory}
          </p>
          <p>
            <span className="text-orange-600 font-bold">Location: </span>
            {strArea}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
