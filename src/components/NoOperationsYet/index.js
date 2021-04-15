import React from "react";
import styles from "./NoOperationsYet.module.css";
import { Link } from "wouter";

export default function NoOperationsYet() {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div >
            <div className={styles.container_card}>
              <h4 className="text-center">No hay operaciones aun</h4>
              <Link to="/agregar" className="btn btn-primary mx-5 btn-md mt-3">
                Agrega una operación
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
