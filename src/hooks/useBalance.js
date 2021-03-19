import { useState, useEffect } from "react";
import getBalance from "services/getBalance";

export function useBalance() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {

    getBalance().then(balance => {
      setBalance(balance);
    });

  }, []);

  return [balance];
}
