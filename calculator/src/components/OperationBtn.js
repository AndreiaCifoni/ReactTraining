import React from "react";

const OperationBtn = () => {
  const operators = ["+", "-", "*", "/", "="];

  return (
    <div>
      {operators.map((operator) => {
        return <button className="btn-operator">{operator}</button>;
      })}
    </div>
  );
};

export default OperationBtn;
