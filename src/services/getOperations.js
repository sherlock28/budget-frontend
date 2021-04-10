import { API_URL } from "services/settings";
import { formatOperations } from "libs/libs";

/* Funcion que permite obtener las ultimas 
    10 operaciones ordenadas por fecha */
export default function getOperations({jwt, userId}) {
  return fetch(`${API_URL}/operations/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': jwt
    }
  })
    .then(res => res.json())
    .then(response => {
      const { operations } = response.data;
      return formatOperations(operations);
    });
}
