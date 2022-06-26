import React from "react";

const NumericBtn = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div>
      {nums.map((num) => {
        return <button className="btn-num">{num}</button>;
      })}
    </div>
  );
};

export default NumericBtn;
