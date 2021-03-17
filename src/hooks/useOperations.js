import { useState, useEffect } from "react";
import getOperations from "services/getOperations";

export function useOperations() {
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    getOperations().then(resOperations => {
      const formatedOperations = resOperations.map(operation => {
        const {
          id,
          concept,
          amount,
          date_registered,
          type_operation_id,
        } = operation;

        const formatedDate = convertDate(date_registered);
        const formatedType = convertTypeOperation(type_operation_id);

        return { id, concept, amount, date: formatedDate, type: formatedType };
      });
      setOperations(formatedOperations);
    });
  }, []);

  return [operations];
}

function convertDate(date) {
  const f = new Date(date);
  return `${f.getDay()}/${f.getMonth()}/${f.getFullYear()}`;
}

function convertTypeOperation(type_id) {
  const formatedType = type_id === 1 ? "Ingreso" : "Egreso";
  return formatedType;
}
