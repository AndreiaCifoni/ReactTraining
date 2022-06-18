import React, { useState } from "react";
import "./styles.css";

const Quiz = ({ quiz }) => {
  const [num, setNum] = useState(0);

  const onClickPrevious = () => {
    setNum(num - 1);
  };

  const onClickNext = () => {
    setNum(num + 1);
  };

  return (
    <div className="container">
      <h1>Question</h1>
      <p>{quiz[num].question}</p>
      <div className="container-options">
        <button className="btn btn-option">{quiz[num].option1}</button>
        <button className="btn btn-option">{quiz[num].option2}</button>
        <button className="btn btn-option">{quiz[num].option3}</button>
        <button className="btn btn-option">{quiz[num].option4}</button>
      </div>
      <div className="prev-next">
        <button className="btn btn-pn" onClick={onClickPrevious}>
          Previous
        </button>
        <button className="btn btn-pn" onClick={onClickNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
