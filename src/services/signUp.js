import { API_URL } from "./settings";

export default function signIn({ email, password, confirmpass }) {
  return fetch(`${API_URL}/users/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, confirmpass }),
  })
    .then(res => {
      if (!res.ok) throw new Error("Response is NOT ok");
      return res.json();
    })
    .then(resJSON => resJSON.message);
}
