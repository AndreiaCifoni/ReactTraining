import React from "react";
import TodoAdd from "./TodoAdd";
import ".././layout/layout.css";

const App = () => {
  return (
    <div className="container1">
      <h1 className="title">ToDo List</h1>
      <TodoAdd />
    </div>
  );
};

export default App;
