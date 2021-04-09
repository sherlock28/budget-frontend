import { API_URL } from "./settings";

export default function signIn({ email, password, confirmpass }) {
  let resStatus = 0;
  let isResgisteredOk = false;

  return fetch(`${API_URL}/users/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, confirmpass }),
  })
    .then(response => {
      resStatus = response.status;
      return response.json();
    })
    .then(res => {

      resStatus === 500 || resStatus === 400
        ? (isResgisteredOk = false)
        : (isResgisteredOk = true);

      return { message: res.message, isResgisteredOk };
    });
}
