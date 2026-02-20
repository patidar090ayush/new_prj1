import React, { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { recipes } = useContext(RecipeContext);

  const renderRecipes = recipes.map((recipe) => (
     <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return <div className="flex flex-wrap justify-center gap-8 p-8 text-white">{recipes.length > 0 ? renderRecipes : <p className="text-red-400">No recipes available</p>}</div>;
};

export default Recipes;
