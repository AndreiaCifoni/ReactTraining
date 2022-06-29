import React from "react";
import "../style.css";

const NumericBtn = ({ onNumBtn }) => {
  const nums = [".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <div className="container-num">
      {nums.map((num) => {
        return (
          <button onClick={() => onNumBtn(num)} className="btn-num">
            {num}
          </button>
        );
      })}
    </div>
  );
};

export default NumericBtn;
