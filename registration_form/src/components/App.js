import React, { useState } from "react";
import Form from "./Form";

const App = () => {
  const [isSuccess, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const onSuccess = () => {
    setSuccess(true);
    setErrorMessage(false);
  };

  const onFail = () => {
    setSuccess(false);
    setErrorMessage(true);
  };

  return (
    <div>
      <div>
        {isSuccess ? <p>Success</p> : errorMessage ? <p>Try again</p> : null}
      </div>
      <Form onSuccess={onSuccess} onFail={onFail} />
    </div>
  );
};

export default App;
