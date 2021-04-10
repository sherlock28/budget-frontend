import { API_URL } from "services/settings";
import { formatOperations } from "libs/libs";

/* Funcion que permite obtener las 
    operaciones de acuerdo a su tipo */
export default function getOperationsByType({ typeOperation, jwt, userId }) {
  if (typeOperation === "Ingreso") {
    return fetch(`${API_URL}/operations/${userId}/entries`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: jwt,
      },
    })
      .then(res => res.json())
      .then(resJSON => {
        const { operations } = resJSON.data;
        return formatOperations(operations);
      });
  } else {
    return fetch(`${API_URL}/operations/${userId}/outputs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: jwt,
      },
    })
      .then(res => res.json())
      .then(resJSON => {
        const { operations } = resJSON.data;
        return formatOperations(operations);
      });
  }
}
