import React, { useCallback } from "react";
import { Hijo } from "./Hijo";
import { useState } from "react";
const Todos = [
  {
    id: 1,
    title: "Item 1",
  },
  {
    id: 2,
    title: "Item 2",
  },
  {
    id: 3,
    title: "Item 3",
  },
];

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);
  const [todo, setTodo] = useState(Todos);
  //   const incrementar = (num) => {
  //     setValor(valor + num);
  //   };
  const preuaba = () => {
    console.log(hola);
    const t = false;
  };
  const incrementar = useCallback((num) => {
    setValor((c) => c + num);
  }, []);

  const cambiarItem = () => {
    const temp = [...todo];
    const item = temp.find((item) => item.id === 1);
    if (!item) return;

    item.title = "New Valor";
    setTodo(temp);
    console.log(todo);
  };

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {valor} </p>

      <hr />

      {numeros.map((n) => (
        <Hijo key={n} numero={n} incrementar={incrementar} />
      ))}
      {/* <Hijo /> */}
      <br />
      <br />
      <button onClick={cambiarItem}>Cambiar items</button>
    </div>
  );
};
