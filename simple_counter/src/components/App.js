import React, { useState } from "react";
import Count from "./Count";

const App = () => {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1);
  };

  const decrement = () => {
    setNum(num - 1);
  };

  return (
    <div>
      <Count increment={increment} decrement={decrement} num={num} />
    </div>
  );
};

export default App;
