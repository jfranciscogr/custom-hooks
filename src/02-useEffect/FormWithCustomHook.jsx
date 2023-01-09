import React, { useState } from "react";
import { useForm } from "../hook/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
  const { formState, onResetForm, onInputChange } = useForm({
    username: "",
    email: "francisco",
  });

  const { username, email } = formState;

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
