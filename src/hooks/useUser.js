import { useCallback } from "react";
import UserContext from "context/UserContext";

export function useUser() {
  const { jwt, setJwt } = useContext(UserContext);

  const login = useCallback(({ email, password }) => {}, [jwt, setJwt]);
}
