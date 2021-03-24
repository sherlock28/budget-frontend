import styles from "./Home.module.css";
import React from "react";

/* ------- HOOKS ------- */
import { useOperations } from "hooks/useOperations";
import { useBalance } from "hooks/useBalance";

/* ------- COMPONENTS ------- */
import Balance from "components/Balance";
import ListOperations from "components/ListOperations";

/* Esta es la pagina Home la cual se divide en dos 
    componentes prncipales, <Balance/> y >ListOperations/> */
export default function Home() {
  /* Se obtiene las oparaciones y el balance usando los 
      hooks useOperations() y useBalance() */
  const [operations] = useOperations();
  const [balance] = useBalance();

  return (
    <>
      <div className="container">
        <h1 className={styles.App_title}>Presupuesto personal</h1>
        <div className="row d-flex justify-content-around">
          <div className="col-lg-5">
            <Balance balance={balance} />
          </div>
          <div className="col-lg-5">
            <ListOperations operations={operations} />
          </div>
        </div>
      </div>
    </>
  );
}
