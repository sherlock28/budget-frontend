import { API_URL } from "services/settings";

/* Funcion que permite obtener el balance. 
    El id del balance es siempre 1 porque la aplicacion es 
    para un solo usuario, eventualmente agregando un registro 
    y logueo de usuarios, el id del balance corresponderia al 
    del balance del usuario logueado*/
export default function getBalance({ jwt }) {

  const balanceInZero = 0;

  return fetch(`${API_URL}/balances/${1}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: jwt,
    },
  })
    .then(res => res.json())
    .then(resBalance => {
      if(resBalance.data.balance.length === 0) {
        return balanceInZero;
      } else {
        const { last_balance } = resBalance.data.balance[0];
        return last_balance;
      }
    });
}
