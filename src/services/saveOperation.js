import { API_URL } from "services/settings";

/* Funcion que permite registrar en la base 
    de datos una operacion */
export default function saveOperation({
  concept,
  amount,
  date_registered,
  type_operation,
  jwt,
  userId,
}) {
  const data = { concept, amount, date_registered, type_operation };

  return fetch(`${API_URL}/operations/${userId}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      authorization: jwt,
    },
  });
}
