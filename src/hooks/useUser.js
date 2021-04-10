import { useCallback, useContext, useState } from "react";
/* ------- HOOKS ------- */
import UserContext from "context/UserContext";
/* ------- SERVICES ------- */
import signInService from "services/signIn";
import signOutService from "services/signOut";
/* ------- LIBS ------- */
import { getUserFromToken } from "libs/libs";

export function useUser() {
  const { jwt, setJwt, userId, setUserId } = useContext(UserContext);

  const [state, setState] = useState({
    loading: false,
    error: false,
    message: null,
  });

  const signIn = useCallback(
    ({ email, password }) => {
      setState({ loading: true, error: false });
      signInService({ email, password })
        .then(res => {
          window.sessionStorage.setItem("jwt", res.jwt);
          const jwtDecode = getUserFromToken(res.jwt);
          window.sessionStorage.setItem("user_id", jwtDecode.user_id);
          setUserId(jwtDecode.user_id);
          window.sessionStorage.setItem("email", jwtDecode.email);
          setState({ loading: false, error: false, message: res.message });
          setJwt(res.jwt);
        })
        .catch(err => {
          window.sessionStorage.removeItem("jwt");
          window.sessionStorage.removeItem("user_id");
          window.sessionStorage.removeItem("email");
          setState({ loading: false, error: true, message: "Has login error" });
          console.error(err);
        });
    },
    // eslint-disable-next-line
    [setJwt]
  );

  const signOut = useCallback(({ jwt }) => {
    signOutService({ jwt }).then(res => {
      if (res.isLogOutOk) {
        setJwt(null);
        window.sessionStorage.removeItem("jwt");
        window.sessionStorage.removeItem("user_id");
        window.sessionStorage.removeItem("email");
      }
    });
  }, [setJwt]);

  return {
    signIn,
    signOut,
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    message: state.message,
    isLogged: Boolean(jwt),
    jwt,
    userId,
  };
}
