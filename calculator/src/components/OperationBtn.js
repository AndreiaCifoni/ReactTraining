import React from "react";
import "../style.css";

const OperationBtn = ({ onOperatorBtn }) => {
  const operators = ["+", "-", "x", "/"];

  return (
    <div className="container-operator">
      {operators.map((operator) => {
        return (
          <button
            onClick={() => onOperatorBtn(operator)}
            className="btn-operator"
          >
            {operator}
          </button>
        );
      })}
    </div>
  );
};

export default OperationBtn;
