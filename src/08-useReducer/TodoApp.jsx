import React, { useReducer } from "react";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getDate(),
    description: "Recoletar la piedra del alma",
    done: false,
  },
  {
    id: new Date().getDate() * 3,
    description: "Recoletar la piedra del alma",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  return (
    <>
      <h1>
        TodoApp (10), <span>pendiente: 2</span>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            // onDeleteTodo={handleDeleteTodo}
            // onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <form>
            <input
              type="text"
              placeholder="¿Que hay que hacer?"
              className="form-control"
            />
            <button type="submit" className="btn btn-outline-primary mt-1">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
