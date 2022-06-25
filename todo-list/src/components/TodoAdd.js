import React, { useState } from "react";
import { PlusIcon, CheckCircleIcon, TrashIcon } from "@heroicons/react/solid";
import { v4 as uuidv4 } from "uuid";
import ".././layout/layout.css";

const TodoAdd = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const onChangeInput = (e) => {
    setTodoInput(e.target.value);
  };

  const onClickAddTodo = () => {
    setTodos([...todos, { task: todoInput, id: uuidv4() }]);
  };

  return (
    <div>
      <input type="text" value={todoInput} onChange={onChangeInput} />
      <button onClick={onClickAddTodo}>
        <PlusIcon className="icon" />
      </button>
      <ul>
        {todos.map((todo) => (
          <li>
            {todo.task}
            <CheckCircleIcon className="icon" />
            <TrashIcon className="icon" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoAdd;

// uuidv4()
