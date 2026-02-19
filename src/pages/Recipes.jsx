import React, { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

const Recipes = () => {
  const { recipes } = useContext(RecipeContext);

  const renderRecipes = recipes.map((recipe) => (
    <div key={recipe.id} className="border p-3 mb-3 rounded">
      <h1 className="text-xl font-bold">{recipe.title}</h1>
      <img src={recipe.image} alt="" className="w-40 mt-2" />
      <p className="mt-2">{recipe.description}</p>
    </div>
  ));

  return <div>{renderRecipes}</div>;
};

export default Recipes;
