import React, { useState } from "react";
import { Message } from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "francisco",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <div className="container">
        <h1>Formulario Simple</h1>
        <hr />
        <input
          type="text"
          className="form-control"
          placeholder="username"
          name="username"
          onChange={onInputChange}
          value={username}
        />
        <input
          type="email"
          className="form-control mt-2"
          placeholder="example@gmail.com"
          name="email"
          onChange={onInputChange}
          value={email}
        />
        {username === "strider2" && <Message />}
      </div>
    </>
  );
};

export default SimpleForm;
