import React from "react";
import styles from "./NoOperationsYet.module.css";
import { Link } from "wouter";

export default function NoOperationsYet() {
  return (
    <>
      <h3 className="text-center mb-3">Últimas operaciones</h3>
      <div className="container">
        <div className={styles.container_card}>
          <h4 className="text-center">No hay operaciones aun</h4>
          <Link
            to="/agregar"
            className="btn btn-primary mx-5 btn-md mt-3"
          >
            Agrega una operación
          </Link>
        </div>
      </div>
    </>
  );
}
