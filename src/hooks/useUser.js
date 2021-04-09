import { useCallback } from "react";
import UserContext from "context/UserContext";

export function useUser() {
  const { jwt, setJwt } = useContext(UserContext);

  const signIn = useCallback(({ email, password }) => {}, [jwt, setJwt]);
  const signOut = useCallback(() => {}, [setJwt]);
}
