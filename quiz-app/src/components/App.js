import React from "react";
import Quiz from "./Quiz";

const quiz = [
  {
    question: "What was the first pokemon that Ash received?",
    option1: "Charmander",
    option2: "Bulbasaur",
    option3: "Pikachu",
    option4: "Squirtle",
  },
  {
    question: "Who was Ash's firts rival?",
    option1: "Gary",
    option2: "Brock",
    option3: "Trevor",
    option4: "Serena",
  },
  {
    question: "What type of pokemon is Psyduck?",
    option1: "Fire",
    option2: "Water",
    option3: "Earth",
    option4: "Psychic",
  },
  {
    question: "What is the evolution of Kadabra?",
    option1: "Geodude",
    option2: "Haunter",
    option3: "Alakazan",
    option4: "Hypno",
  },
  {
    question: "Where does the pokemon Chansey works?",
    option1: "Hospital",
    option2: "Aquarium",
    option3: "Gymnasium",
    option4: "Restaurant",
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
