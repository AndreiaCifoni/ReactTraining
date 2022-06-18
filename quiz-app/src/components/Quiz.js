import React, { useState } from "react";
import "./styles.css";

const Quiz = ({ quiz }) => {
  const [num, setNum] = useState(0);

  const onClickPrevious = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  const onClickNext = () => {
    if (num < quiz.length - 1) {
      setNum(num + 1);
    }
  };

  return (
    <div className="container">
      <h1>Question</h1>
      <p>{quiz[num].question}</p>
      <div className="container-options">
        <button className="btn btn-option">{quiz[num].option1.key}</button>
        <button className="btn btn-option">{quiz[num].option2.key}</button>
        <button className="btn btn-option">{quiz[num].option3.key}</button>
        <button className="btn btn-option">{quiz[num].option4.key}</button>
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
