import { useState, useEffect } from "react";

export function useBalance(operations) {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    let subBalance = 0;

    operations.forEach(op => {
      op.type === "Ingreso"
        ? (subBalance += op.amount)
        : (subBalance -= op.amount);
    });
    setBalance(subBalance);
  }, [operations]);

  return [balance];
}
