import { useState, useEffect } from "react";
import getBalance from "services/getBalance";


/* Custom hook que define un estado con el balance y un
    useEffect que haciendo uso del servicio getBalance()
    obtiene el balance y lo carga en el estado */
export function useBalance() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {

    getBalance().then(balance => {
      setBalance(balance);
    });

  }, []);
  
  /* El hook retorna el balance */
  return [balance];
}
