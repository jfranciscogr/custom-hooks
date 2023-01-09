import React, { useState } from "react";
import { useCounter } from "../hook/useCounter";
import { useFetch } from "../hook/useFetch";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const [formState, setFormState] = useState("quotes");

  const { data, isLoading, hasError } = useFetch(
    `https://thesimpsonsquoteapi.glitch.me/${formState}`
  );

  const { character, quote } = !!data && data[0];
  const recargar = () => {
    setFormState("1");
  };
  return (
    <>
      <h1>BreakingBad Quotes</h1>

      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <>
          {hasError ? (
            <div>Hay error</div>
          ) : (
            <blockquote className="blockquote text-end">
              <p className="mb-1">{quote}</p>
              <footer className="blockquote-footer">{character}</footer>
            </blockquote>
          )}
        </>
      )}
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={recargar}
      >
        next quote
      </button>
    </>
  );
};
