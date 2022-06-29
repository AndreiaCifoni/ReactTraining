import React, { useState } from "react";
import NumericBtn from "./NumericBtn";
import OperationBtn from "./OperationBtn";
import "../style.css";

const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

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

  const onClear = () => {
    setNum1("");
    setNum2("");
    setOperator("");
    setResult("");
  };

  const onResult = () => {
    switch (operator) {
      case "+":
        setResult(parseInt(num1) + parseInt(num2));
        break;
      case "-":
        setResult(parseInt(num1) - parseInt(num2));
        break;
      case "x":
        setResult(parseInt(num1) * parseInt(num2));
        break;
      case "/":
        setResult(parseInt(num1) / parseInt(num2));
        break;
      default:
        setResult("");
    }
  };

  const math = num1 + operator + num2;

  return (
    <div className="container">
      <div className="display">
        <p>{result ? result : math}</p>
      </div>
      <div className="numeric">
        <NumericBtn onNumBtn={onNumBtn} onResult={onResult} />
      </div>
      <div className="operation">
        <OperationBtn onOperatorBtn={onOperatorBtn} />
      </div>
      <button className="clear" onClick={onClear}>
        Clear
      </button>
    </div>
  );
};

export default App;
