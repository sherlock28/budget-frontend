import { API_URL } from "services/settings";
import { formatOperations } from "libs/libs";

export default function getOperationsByType({ typeOperation }) {
  if (typeOperation === "Ingreso") {
    return fetch(`${API_URL}/operations/entries`)
      .then(res => res.json())
      .then(resJSON => {
        const { operations } = resJSON.data;
        return formatOperations(operations);
      });
  } else {
    return fetch(`${API_URL}/operations/outputs`)
      .then(res => res.json())
      .then(resJSON => {
        const { operations } = resJSON.data;
        return formatOperations(operations);
      });
  }
}
