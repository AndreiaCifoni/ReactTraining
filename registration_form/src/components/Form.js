import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Form;
