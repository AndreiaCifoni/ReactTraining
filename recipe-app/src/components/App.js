// import React from "react";
// import Search from "./Search";
// import axios from "axios";

// const App = () => {
//   const getRecipe = async (search) => {
//     try {
//       const response = await axios.get(
//         "https://api.edamam.com/api/recipes/v2",
//         {
//           type: "public",
//           q: { search },
//           app_id: "0efbaa87",
//           app_key: "d37d678089c810647cbf47a86fb9770d",
//         }
//       );
//       console.log(response);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <div>
//       <h1>Search your recipe:</h1>
//       <Search getRecipe={getRecipe} />
//     </div>
//   );
// };

// export default App;
