import React from "react";
import { formatMoney } from "accounting-js";
import styles from "./LIstOperations.module.css";

export default function ListOperations({ operations }) {
  return (
    <>
      <h3 className="text-center mb-3">Últimas operaciones</h3>
      <div className="container">
        <ul className="list-group">
          {operations.map(op => {
            return (
              <li
                key={op.id}
                className="list-group-item list-group-item-action py-2"
              >
                <div className="d-flex flex-row justify-content-between">
                  <div className="d-flex flex-column">
                    <p className="font-weight-bolder my-0">{op.concept}</p>
                    <p className="font-weight-normal my-0">{op.type}</p>
                    <p className="font-weight-lighter my-0">{op.date}</p>
                  </div>
                  <div>
                    <p className={styles.amount_list}>{formatMoney(op.amount, "€", 2, ".", ",")}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
