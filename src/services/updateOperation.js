import { API_URL } from "services/settings";

/* Funcion que permite actualizar en la base 
    de datos los datos de una operacion */
export default function updateOperation({
  id,
  concept,
  amount,
  date_registered,
  jwt,
}) {
  const data = { concept, amount, date_registered };

  return fetch(`${API_URL}/operations/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      authorization: jwt,
    },
  })
    .then(res => res.json())
    .then(resJSON => resJSON.data);
}
