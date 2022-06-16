import React from "react";

const Count = ({ increment, decrement, num }) => {
  return (
    <div>
      <h1>This is a simple count</h1>
      <button onClick={decrement}>-</button>
      {num}
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Count;
