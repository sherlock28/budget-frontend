import React from "react";
import styles from "./Balance.module.css";

export default function Balance({ balance }) {
  return (
    <>
      <h3 className="text-center mb-3">Balance</h3>
      <div className="container">
        <div className={styles.container_card}>
          <p className={styles.balance_number}>{"$" + balance}</p>
        </div>
      </div>
    </>
  );
}
