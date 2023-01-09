import React from "react";
import { useCounter } from "../hook/useCounter";

const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>Counter With Hook: {counter}</h1>;
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={decrement}>
        -1
      </button>
    </>
  );
};

export default CounterWithCustomHook;
