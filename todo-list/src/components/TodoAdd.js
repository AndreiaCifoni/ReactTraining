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

  const onAddTodo = () => {
    setTodos([...todos, { task: todoInput, id: uuidv4() }]);
    setTodoInput("");
  };

  const onDeleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div>
      <input type="text" value={todoInput} onChange={onChangeInput} />
      <button onClick={onAddTodo}>
        <PlusIcon className="icon" />
      </button>
      <ul>
        {todos.map((todo) => (
          <li>
            {todo.task}
            <CheckCircleIcon className="icon" />
            <TrashIcon onClick={() => onDeleteTodo(todo.id)} className="icon" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoAdd;

// uuidv4()
