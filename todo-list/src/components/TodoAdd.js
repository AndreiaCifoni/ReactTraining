import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";

const TodoAdd = () => {
  const [todo, setTodo] = useState("");

  const onChangeAddTodo = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div>
      <input type="text" value={todo} onChange={onChangeAddTodo} />
      <button>
        <HiPlus />
      </button>
    </div>
  );
};

export default TodoAdd;
