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

        const formatedDate = formatDate(date_registered);
        const formatedType = convertTypeOperation(type_operation_id);

        return { id, concept, amount, date: formatedDate, type: formatedType };
      });
      setOperations(formatedOperations);
    });
  }, []);

  return [operations, setOperations];
}

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}


function convertTypeOperation(type_id) {
  const formatedType = type_id === 1 ? "Ingreso" : "Egreso";
  return formatedType;
}
