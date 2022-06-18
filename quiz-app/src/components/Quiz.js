import React from "react";
import "./styles.css";

const Quiz = () => {
  return (
    <div className="container">
      <h1>Question</h1>
      <p className="question">What is...</p>
      <div className="container-options">
        <button className="btn btn-option">Option 1</button>
        <button className="btn btn-option">Option 2</button>
        <button className="btn btn-option">Option 3</button>
        <button className="btn btn-option">Option 4</button>
      </div>
      <div className="prev-next">
        <button className="btn btn-pn">Previous</button>
        <button className="btn btn-pn">Next</button>
      </div>
    </div>
  );
};

export default Quiz;
