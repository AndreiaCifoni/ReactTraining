// import React, { useEffect, useState } from "react";
// import Recipe from "./Recipe-video";

// const App2 = () => {
//   const APP_ID = "0efbaa87";
//   const APP_KEY = "d37d678089c810647cbf47a86fb9770d";

//   const [recipes, setRecipes] = useState([]);
//   const [search, setSearch] = useState("");
//   const [query, setQuery] = useState("banana");

//   useEffect(() => {
//     getRecipes();
//   }, [query]);

//   const getRecipes = async () => {
//     const response = await fetch(
//       `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
//     );
//     const data = await response.json();
//     setRecipes(data.hits);
//     console.log(data.hits);
//   };

//   const updateSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   const getSearch = (e) => {
//     e.preventDefault();
//     setQuery(search);
//     setSearch("");
//   };

//   return (
//     <div>
//       <form onSubmit={getSearch}>
//         <input type="text" value={search} onChange={updateSearch} />
//         <button type="submit">Search</button>
//       </form>
//       {recipes.map((recipe) => (
//         <Recipe
//           key={recipe.recipe.label}
//           title={recipe.recipe.label}
//           calories={recipe.recipe.calories}
//           image={recipe.recipe.image}
//           ingredients={recipe.recipe.ingredients}
//         />
//       ))}
//     </div>
//   );
// };

// export default App2;
