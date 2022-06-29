import React from "react";
import "../style.css";

const NumericBtn = ({ onNumBtn, onResult }) => {
  const nums = ["7", "8", "9", "4", "5", "6", "1", "2", "3", ".", "0"];

  return (
    <div className="container-num">
      {nums.map((num) => {
        return (
          <button onClick={() => onNumBtn(num)} className="btn-num">
            {num}
          </button>
        );
      })}
      <button className="btn-result" onClick={onResult}>
        =
      </button>
    </div>
  );
};

export default NumericBtn;
