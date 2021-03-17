import styles from "./Home.module.css";
import React from "react";
import { useOperations } from "hooks/useOperations";
import { useBalance } from "hooks/useBalance";

import Balance from "components/Balance";
import ListOperations from "components/ListOperations";

export default function Home() {
  const [operations] = useOperations();
  const [balance] = useBalance(operations);

  return (
    <>
      <div className="container">
        <h1 className={styles.App_title}>Presupuesto personal</h1>
        <div className="row d-flex justify-content-around">
          <div className="col-md-5">
            <Balance balance={balance} />
          </div>
          <div className="col-md-5">
            <h3 className="text-center mb-3">Últimas operaciones</h3>
            <ListOperations operations={operations} />
          </div>
        </div>
      </div>
    </>
  );
}
