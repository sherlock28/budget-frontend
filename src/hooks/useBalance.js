import { useState, useEffect } from "react";
import getBalance from "services/getBalance";

export function useBalance(operations) {
  const [balance, setBalance] = useState(0);

  useEffect(() => {

    getBalance().then(balance => {
      setBalance(balance);
    });

  }, [operations]);

  return [balance];
}
