import React from "react";
import styles from "./Button.module.css";

const TransparentBtn = ({ text }) => {
  return <button className={styles["transparent-btn"]}>{text}</button>;
};

export default TransparentBtn;
