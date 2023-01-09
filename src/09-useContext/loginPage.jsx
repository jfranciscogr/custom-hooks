import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { usuario, setUsuario } = useContext(UserContext);
  const navigate = useNavigate();
  const handleUsuario = () => {
    setUsuario({
      id: "1",
      name: "Jose Francisco",
      email: "jfrancisogr@gmail.com",
    });
    navigate("/");
  };
  return (
    <>
      <h1>loginPage</h1>
      <hr />
      <pre>{JSON.stringify(usuario, null, 3)}</pre>
      <button className="brn btn-primary" onClick={handleUsuario}>
        Establecer usuario
      </button>
    </>
  );
};
