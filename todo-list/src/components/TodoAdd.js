import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import ".././layout/layout.css";

const TodoAdd = () => {
  const [todo, setTodo] = useState("");

  const onChangeAddTodo = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div>
      <input type="text" value={todo} onChange={onChangeAddTodo} />
      <button>
        <PlusIcon className="icon" />
      </button>
    </div>
  );
};

export default TodoAdd;
