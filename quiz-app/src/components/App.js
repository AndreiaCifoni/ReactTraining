import React from "react";
import Quiz from "./Quiz";

const quiz = [
  {
    question: "What was the first pokemon that Ash received?",
    option1: {
      key: "Charmander",
      answer: false,
    },
    option2: {
      key: "Bulbasaur",
      answer: false,
    },
    option3: {
      key: "Pikachu",
      answer: true,
    },
    option4: {
      key: "Squirtle",
      answer: false,
    },
  },
  {
    question: "Who was Ash's firts rival?",
    option1: {
      key: "Gary",
      answer: true,
    },
    option2: {
      key: "Brock",
      answer: false,
    },
    option3: {
      key: "Trevor",
      answer: false,
    },
    option4: {
      key: "Serena",
      answer: false,
    },
  },
  {
    question: "What type of pokemon is Psyduck?",
    option1: {
      key: "Fire",
      answer: false,
    },
    option2: {
      key: "Water",
      answer: false,
    },
    option3: {
      key: "Earth",
      answer: false,
    },
    option4: {
      key: "Psychic",
      answer: true,
    },
  },
  {
    question: "What is the evolution of Kadabra?",
    option1: {
      key: "Geodude",
      answer: false,
    },
    option2: {
      key: "Haunter",
      answer: false,
    },
    option3: {
      key: "Alakazan",
      answer: true,
    },
    option4: {
      key: "Hypno",
      answer: false,
    },
  },
  {
    question: "Where does the pokemon Chansey works?",
    option1: {
      key: "Hospital",
      answer: true,
    },
    option2: {
      key: "Aquarium",
      answer: false,
    },
    option3: {
      key: "Gymnasium",
      answer: false,
    },
    option4: {
      key: "Restaurant",
      answer: false,
    },
  },
];

const App = () => {
  return (
    <div>
      <Quiz quiz={quiz} />
    </div>
  );
};

export default App;
