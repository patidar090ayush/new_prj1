import { useState, createContext } from "react";

// context object
export const RecipeContext = createContext(null);

// provider component
const RecipeProvider = ({ children }) => {

  const [recipes, setRecipes] = useState([]);
  console.log(recipes);

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
