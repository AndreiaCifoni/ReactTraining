import React from "react";

const RecipeCard = ({ key, title, image, ingredients }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <img src={image} alt="" />
    </div>
  );
};

export default RecipeCard;
