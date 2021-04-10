import { API_URL } from "./settings";

export default function signOut({ jwt }) {
  let isLogOutOk = false;
  let resStatus = 0;

  return fetch(`${API_URL}/users/signout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: jwt,
    },
  })
    .then(response => {
      resStatus = response.status;
      return response.json();
    })
    .then(res => {
      resStatus === 500 || resStatus === 401 || resStatus === 400
        ? (isLogOutOk = false)
        : (isLogOutOk = true);

      return { message: res.message, isLogOutOk };
    });
}
