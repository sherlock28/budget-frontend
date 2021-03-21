import { useState, useEffect } from "react";
import getOperations from "services/getOperations";

export function useOperations() {
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    getOperations().then(resOperations => {
      setOperations(resOperations);
    });
  }, []);

  return [operations, setOperations];
}
