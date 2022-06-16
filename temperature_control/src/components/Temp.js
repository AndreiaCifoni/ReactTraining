import React, { useState } from "react";
import "./style.css";

const Temp = () => {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1);
  };

  const decrement = () => {
    setNum(num - 1);
  };

  return (
    <div className={num < 11 ? "blue" : num < 23 ? "green" : "red"}>
      <h1>Temperature control</h1>
      <button onClick={decrement}>-</button>
      {num}
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Temp;
