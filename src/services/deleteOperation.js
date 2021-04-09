import { API_URL } from "services/settings";

/* Funcion que permite eliminar una operacion 
    buscandola por su id */
export default function deleteOperation({ id, jwt }) {
  return fetch(`${API_URL}/operations/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: jwt,
    },
  });
}
