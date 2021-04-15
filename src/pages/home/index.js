import styles from "./Home.module.css";
import React from "react";

/* ------- HOOKS ------- */
import { useLocation } from "wouter";
import { useOperations } from "hooks/useOperations";
import { useBalance } from "hooks/useBalance";
import { useUser } from "hooks/useUser";

/* ------- COMPONENTS ------- */
import Balance from "components/Balance";
import ListOperations from "components/ListOperations";
import NoOperationsYet from "components/NoOperationsYet";

/* Esta es la pagina Home la cual se divide en dos 
    componentes prncipales, <Balance/> y >ListOperations/> */
export default function Home() {
  // eslint-disable-next-line
  const [_, pushLocation] = useLocation();
  const { isLogged } = useUser();

  /* Se obtiene las oparaciones y el balance usando los 
      hooks useOperations() y useBalance() */
  const [operations] = useOperations();
  const [balance] = useBalance();

  if (!isLogged) pushLocation("/login");

  return (
    <>
      <div className="container">
        <h1 className={styles.App_title}>Presupuesto personal</h1>
        <div className="row d-flex justify-content-around">
          <div className="col-lg-5">
            <Balance balance={balance} />
          </div>
          {operations.length === 0 ? (
            <div className="col-lg-5">
              <h3 className="text-center mb-3">Últimas operaciones</h3>
              <NoOperationsYet />
            </div>
          ) : (
            <div className="col-lg-5">
              <ListOperations operations={operations} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
