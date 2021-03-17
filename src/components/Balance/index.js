import React from "react";
import styles from "./Balance.module.css";

export default function Balance({ balance }) {
  return (
    <div className="container">
      <h3 className="text-center">Balance</h3>
      <div className={styles.container_card}>
        <p className={styles.balance_number}>{'$'+ balance}</p>
      </div>
    </div>
  );
}
