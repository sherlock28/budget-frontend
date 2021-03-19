import { API_URL } from "services/settings";

export default function getBalance() {
  return fetch(`${API_URL}/balances/${1}`)
    .then(res => res.json())
    .then(resBalance => {
      const { last_balance } = resBalance.data.balance;
      return last_balance;
    });
}
