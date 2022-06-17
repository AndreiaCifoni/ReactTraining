import React, { useState } from "react";

const Form = () => {
  const [term, setTerm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={term.firstName}
            onChange={(e) => setTerm({ ...term, firstName: e.target.value })}
          />
          {onSubmitHandler && term.firstName !== "" ? null : (
            <span>This field is mandatory</span>
          )}
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
