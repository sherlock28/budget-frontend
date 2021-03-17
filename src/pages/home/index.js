import styles from "./Home.module.css";
import React from "react";
import { useOperations } from 'hooks/useOperations';

export default function Home() {

  const [operations] = useOperations();
  console.log(operations)

  return (
    <>
      <div className="container">
        <h1 className={styles.App_title}>Presupuesto personal</h1>
        <div className="row">
          <div className="col-sm-6">Aquí el balance total</div>
          <div className="col-sm-6">Aquí la lista de operaciones</div>
        </div>
      </div>
    </>
  );
}
