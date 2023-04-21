import { useState } from "react";
import styles from "./Square.scss";
function Square({ value, onSquareClick }) {
  return (
    <div className={styles.wrapper}>
      <button className={styles.square} onClick={onSquareClick}>
        {value}
      </button>
    </div>
  );
}
