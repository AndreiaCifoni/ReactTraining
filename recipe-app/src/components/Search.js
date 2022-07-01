// import React, { useState } from "react";

// const Search = ({ getRecipe }) => {
//   const [search, setSearch] = useState("");
//   const [recipe, setRecipe] = useState("");
//   const [error, setError] = useState(false);

//   const onSearch = async () => {
//     const newRecipes = await getRecipe();
//     if (newRecipes) {
//       setRecipe(newRecipes);
//       setSearch("");
//       setError(false);
//     } else {
//       setError(true);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <button onClick={() => onSearch(search)}>Go</button>
//       <div>
//         <p>{error ? "Try again" : recipe}</p>
//       </div>
//     </div>
//   );
// };

// export default Search;
