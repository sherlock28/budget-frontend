import { API_URL } from "services/settings";

/* Funcion que permite registrar en la base 
    de datos una operacion */
export default function saveOperation({
  concept,
  amount,
  date_registered,
  type_operation,
}) {
  const data = { concept, amount, date_registered, type_operation };

  return fetch(`${API_URL}/operations`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
