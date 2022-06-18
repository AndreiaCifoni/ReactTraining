import React, { useState } from "react";
import "./form.css";

const Form = ({ onSuccess, onFail }) => {
  const [term, setTerm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (term.firstName !== "" && term.lastName !== "" && term.email !== "") {
      onSuccess();
    } else {
      onFail();
    }
  };

  return (
    <div className="container">
      <form onSubmit={onSubmitHandler}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={term.firstName}
            onChange={(e) => setTerm({ ...term, firstName: e.target.value })}
          />

          <input
            type="text"
            placeholder="Last Name"
            value={term.lastName}
            onChange={(e) => setTerm({ ...term, lastName: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={term.email}
            onChange={(e) => setTerm({ ...term, email: e.target.value })}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Form;
