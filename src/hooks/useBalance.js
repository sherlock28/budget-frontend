import { useState, useEffect } from "react";
import getBalance from "services/getBalance";
import { useUser } from "hooks/useUser";

/* Custom hook que define un estado con el balance y un
    useEffect que haciendo uso del servicio getBalance()
    obtiene el balance y lo carga en el estado */
export function useBalance() {
  const [balance, setBalance] = useState(0);
  const { jwt, isLogged } = useUser();

  useEffect(() => {
    if (isLogged) {
      getBalance({ jwt }).then(balance => {
        setBalance(balance);
      });
    }
  }, [jwt, isLogged]);

  /* El hook retorna el balance */
  return [balance];
}
