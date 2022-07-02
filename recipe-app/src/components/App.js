import React, { useState, useEffect } from "react";
import Search from "./Search";
import RecipeCard from "./RecipeCard";

const App = () => {
  const [recipes, setRecipes] = useState("");
  const [query, setQuery] = useState("");

  const APP_ID = "0efbaa87";
  const APP_KEY = "d37d678089c810647cbf47a86fb9770d";

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div>
      <h1>Search your recipe:</h1>
      <Search setQuery={setQuery} />
      <div>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
