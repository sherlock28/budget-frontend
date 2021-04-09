import { API_URL } from "./settings";

export default function signIn({ email, password }) {
  let isLoggedOk = false;
  let resStatus = 0;
  let jwt = "";

  return fetch(`${API_URL}/users/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(response => {
      resStatus = response.status;
      jwt = response.headers.get("authorization");
      return response.json();
    })
    .then(res => {
      resStatus === 500 || resStatus === 400
        ? (isLoggedOk = false)
        : (isLoggedOk = true);

      return { message: res.message, isLoggedOk, jwt };
    });
}
