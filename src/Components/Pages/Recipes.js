import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Recipe from "./Recipe";

const Recipes = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);

  const searchFood = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="container mx-auto my-24">
      <h1 className="text-orange-500 text-4xl text-center font-bold ">
        Our Recipes
      </h1>
      <div className="flex items-center justify-center mt-10">
        <input
          className="border border-orange-500 w-[500px] p-2"
          onChange={searchFood}
          type="text"
          placeholder="Search Recipes By Name ...."
          name=""
          id=""
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 my-10">
        {meals.map((meal) => (
          <Recipe key={meal.idMeal} meal={meal}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
