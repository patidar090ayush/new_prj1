import { useState, createContext, useEffect } from "react";

export const RecipeContext = createContext(null);

const RecipeProvider = ({ children }) => {

  // state ALWAYS empty array se start hogi
  const [recipes, setRecipes] = useState([]);

  // localStorage se data load hoga yaha
  useEffect(() => {
    const storedRecipes = localStorage.getItem("recipes");

    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    }
  }, []);

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;


//  {
//       id: 1,
//       title: "Classic Margherita Pizza",
//       ingredients: [
//         "Pizza dough",
//         "Tomato sauce",
//         "Fresh mozzarella cheese",
//         "Fresh basil leaves",
//         "Olive oil",
//         "Salt and pepper to taste",
//       ],
//       instructions: [
//         "Preheat the oven to 475°F (245°C).",
//         "Roll out the pizza dough and spread tomato sauce evenly.",
//         "Top with slices of fresh mozzarella and fresh basil leaves.",
//         "Drizzle with olive oil and season with salt and pepper.",
//         "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
//         "Slice and serve hot.",
//       ],

//       image: "https://cdn.dummyjson.com/recipe-images/1.webp",
//       chef :"Raja Pizza",
//       cateogory: "Dinner",
//       desc:"Roll out the pizza dough and spread tomato sauce evenlyBake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
//     },
