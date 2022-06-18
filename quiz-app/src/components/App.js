import React from "react";
import Quiz from "./Quiz";

const quiz = [
  {
    question: "What was the first pokemon that Ash received?",
    options: [
      {
        key: "Charmander",
        answer: false,
      },
      {
        key: "Bulbasaur",
        answer: false,
      },
      {
        key: "Pikachu",
        answer: true,
      },
      {
        key: "Squirtle",
        answer: false,
      },
    ],
  },
  {
    question: "Who was Ash's firts rival?",
    options: [
      {
        key: "Gary",
        answer: true,
      },
      {
        key: "Brock",
        answer: false,
      },
      {
        key: "Trevor",
        answer: false,
      },
      {
        key: "Serena",
        answer: false,
      },
    ],
  },
  {
    question: "What type of pokemon is Psyduck?",
    options: [
      {
        key: "Fire",
        answer: false,
      },
      {
        key: "Water",
        answer: false,
      },
      {
        key: "Earth",
        answer: false,
      },
      {
        key: "Psychic",
        answer: true,
      },
    ],
  },
  {
    question: "What is the evolution of Kadabra?",
    options: [
      {
        key: "Geodude",
        answer: false,
      },
      {
        key: "Haunter",
        answer: false,
      },
      {
        key: "Alakazan",
        answer: true,
      },
      {
        key: "Hypno",
        answer: false,
      },
    ],
  },
  {
    question: "Where does the pokemon Chansey works?",
    options: [
      {
        key: "Hospital",
        answer: true,
      },
      {
        key: "Aquarium",
        answer: false,
      },
      {
        key: "Gymnasium",
        answer: false,
      },
      {
        key: "Restaurant",
        answer: false,
      },
    ],
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
