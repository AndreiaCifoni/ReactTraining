import React from "react";
import "./styles.css";

const ShowScore = ({ score, onStartAgain }) => {
  return (
    <div className="container">
      <h1>Your score was:</h1>
      <h3>{score}</h3>
      <div>
        <button onClick={onStartAgain} className="btn btn-start-again">
          Start Again
        </button>
      </div>
    </div>
  );
};

export default ShowScore;
