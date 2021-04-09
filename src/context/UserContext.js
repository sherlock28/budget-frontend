import React, { useState } from "react";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [jwt, setJwt] = useState(() => window.sessionStorage.getItem("jwt"));

  const [userId, setUserId] = useState(() =>
    window.sessionStorage.getItem("user_id")
  );

  return (
    <Context.Provider value={{ jwt, setJwt, userId, setUserId }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
