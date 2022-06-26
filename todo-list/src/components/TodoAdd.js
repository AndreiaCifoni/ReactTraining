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
    setTodos([...todos, { task: todoInput, id: uuidv4(), completed: false }]);
    setTodoInput("");
  };

  const onCompletedTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const onDeleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="container2">
      <input type="text" value={todoInput} onChange={onChangeInput} />
      <button onClick={onAddTodo}>
        <PlusIcon className="icon-plus" />
      </button>
      <ul className="list">
        {todos.map((todo) => (
          <li className={todo.completed ? "done" : ""}>
            {todo.task}
            <CheckCircleIcon
              onClick={() => onCompletedTodo(todo.id)}
              className={todo.completed ? "icon-check done" : "icon-check"}
            />
            <TrashIcon
              onClick={() => onDeleteTodo(todo.id)}
              className={todo.completed ? "icon-trash done" : "icon-trash"}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoAdd;
