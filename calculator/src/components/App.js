import React, { useState } from "react";
import NumericBtn from "./NumericBtn";
import OperationBtn from "./OperationBtn";

const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");

  const onNumBtn = (num) => {
    if (operator) {
      setNum2(num2 + num);
    } else {
      setNum1(num1 + num);
    }
  };

  const onOperatorBtn = (operator) => {
    if (num1 && !num2) {
      setOperator(operator);
    }
  };

  //onClear
  //onResult

  return (
    <div>
      <div>
        <p>{num1 + operator + num2}</p>
      </div>
      <NumericBtn onNumBtn={onNumBtn} />
      <OperationBtn onOperatorBtn={onOperatorBtn} />
      <button>Clear</button>
    </div>
  );
};

export default App;
