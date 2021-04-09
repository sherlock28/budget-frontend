import { useState, useEffect } from "react";
import getOperations from "services/getOperations";
import { useUser } from "hooks/useUser";

/* Custom hook que define un estado con las operaciones y un
    useEffect que haciendo uso del servicio getOperations()
    obtiene las operaciones y las carga en el estado */
export function useOperations() {
  const [operations, setOperations] = useState([]);
  const { jwt } = useUser();

  useEffect(() => {
    getOperations({jwt}).then(resOperations => {
      setOperations(resOperations);
    });
  }, [jwt]);

  /* El hook retorna el array de operaciones 
      y el metodo para modificar el estado*/
  return [operations, setOperations];
}
