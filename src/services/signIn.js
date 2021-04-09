import { API_URL } from "./settings";

export function signIn({ email, password }) {
  return fetch(`${API_URL}/users/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(res => {
    if (!res.ok) throw new Error("Response is NOT ok");
    console.log(res.headers);
    return res.json();
  });
}
