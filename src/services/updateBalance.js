import { API_URL } from "services/settings";

export default function updateBalance({ id, amount, type_operation }) {
  const data = { amount, type_operation };

  return fetch(`${API_URL}/balances/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(res => res.json())
    .then(resJSON => console.log(resJSON));
}
