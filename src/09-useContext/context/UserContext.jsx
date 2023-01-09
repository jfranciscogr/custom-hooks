import { createContext, useState } from "react";

export const UserContext = createContext();

const user = {
  id: "",
  name: "",
  email: "",
};

export const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState();
  return (
    <UserContext.Provider value={{ hola: "Mundo", usuario, setUsuario }}>
      {children}
    </UserContext.Provider>
  );
};
