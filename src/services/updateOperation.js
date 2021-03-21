import { API_URL } from "services/settings";

export default function updateOperation({
  id,
  concept,
  amount,
  date_registered,
}) {
  const data = { concept, amount, date_registered };
  return fetch(`${API_URL}/operations/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(res => res.json())
    .then(resJSON => resJSON.data);
}
