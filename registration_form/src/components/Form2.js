import React, { useState } from "react";
import "./form.css";

const Form2 = () => {
  const [term, setTerm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submited, setSubmited] = useState(false);

  const [valid, setValid] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (term.firstName !== "" && term.lastName !== "" && term.email !== "") {
      setValid(true);
    }
    setSubmited(true);
  };

  return (
    <div>
      <h1>Second version of form</h1>

      <form className="container-second" onSubmit={onSubmitHandler}>
        {submited && valid ? <div className="success">Success!!</div> : null}
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={term.firstName}
            onChange={(e) => setTerm({ ...term, firstName: e.target.value })}
          />
          {submited && !term.firstName ? (
            <span>Please, fill your first name</span>
          ) : null}

          <input
            type="text"
            placeholder="Last Name"
            value={term.lastName}
            onChange={(e) => setTerm({ ...term, lastName: e.target.value })}
          />
          {submited && !term.lastName ? (
            <span>Please, fill your last name</span>
          ) : null}

          <input
            type="email"
            placeholder="Email"
            value={term.email}
            onChange={(e) => setTerm({ ...term, email: e.target.value })}
          />
          {submited && !term.email ? (
            <span>Please, fill your email</span>
          ) : null}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Form2;
