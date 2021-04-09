import { useCallback, useContext, useState } from "react";
import UserContext from "context/UserContext";
import signInService from "services/signIn";

export function useUser() {
  const { jwt, setJwt } = useContext(UserContext);
  const [state, setState] = useState({ loading: false, error: false, message: null });

  const signIn = useCallback(
    ({ email, password }) => {
      setState({ loading: true, error: false });
      signInService({ email, password })
        .then(res => {
          window.sessionStorage.setItem("jwt", res.jwt);
          setState({ loading: false, error: false, message: res.message });
          setJwt(res.jwt);
        })
        .catch(err => {
          window.sessionStorage.removeItem("jwt");
          setState({ loading: false, error: true, message: "Has login error" });
          console.error(err);
        });
    },
    [setJwt]
  );

  const signOut = useCallback(() => {}, []);

  return {
    signIn,
    signOut,
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    message: state.message,
    isLogged: Boolean(jwt),
    jwt
  };
}
