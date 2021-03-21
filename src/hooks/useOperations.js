import { useState, useEffect } from "react";
import getOperations from "services/getOperations";
import { convertTypeOperation, formatDate } from "libs/libs";

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

        const formatedDate = formatDate(date_registered);
        const formatedType = convertTypeOperation(type_operation_id);

        return { id, concept, amount, date: formatedDate, type: formatedType };
      });
      setOperations(formatedOperations);
    });
  }, []);

  return [operations, setOperations];
}
