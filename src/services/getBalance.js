import { API_URL } from "services/settings";

/* Funcion que permite obtener el balance. 
    El id del balance es siempre 1 porque la aplicacion es 
    para un solo usuario, eventualmente agregando un registro 
    y logueo de usuarios, el id del balance corresponderia al 
    del balance del usuario logueado*/
export default function getBalance() {
  return fetch(`${API_URL}/balances/${1}`)
    .then(res => res.json())
    .then(resBalance => {
      const { last_balance } = resBalance.data.balance;
      return last_balance;
    });
}
