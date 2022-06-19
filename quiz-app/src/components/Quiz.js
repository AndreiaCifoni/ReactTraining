import React, { useState } from "react";
import ShowScore from "./ShowScore";
import "./styles.css";

const Quiz = ({ quiz }) => {
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);

  const onNext = () => {
    if (quizIndex < quiz.length) {
      setQuizIndex(quizIndex + 1);
    }
  };

  const handleAddScore = (option) => {
    if (option.answer === true) {
      setScore(score + 1);
    }
  };

  const onAnswerSelected = (option) => {
    //1- sum score if answer true
    handleAddScore(option);
    //2- when clicked, go to next question
    onNext();
  };

  const onStartAgain = () => {
    setQuizIndex(0);
    setScore(0);
  };

  return (
    <div className="container">
      {quizIndex === quiz.length ? (
        <ShowScore score={score} onStartAgain={onStartAgain} />
      ) : (
        <div>
          <h1>Question {quizIndex + 1}</h1>
          <p>{quiz[quizIndex].question}</p>
          <div className="container-options">
            {quiz[quizIndex].options.map((option) => {
              return (
                <button
                  onClick={() => onAnswerSelected(option)}
                  className="btn btn-option"
                >
                  {option.key}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
