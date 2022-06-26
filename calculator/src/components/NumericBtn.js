import React from "react";

const NumericBtn = ({ onNumBtn }) => {
  const nums = [".", "0", "=", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <div>
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
