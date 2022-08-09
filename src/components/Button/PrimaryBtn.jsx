import React from "react";
import styles from "./Button.module.css";
import { HiArrowRight } from "react-icons/hi";

const index = ({ text }) => {
  return (
    <button className={`${styles.btn} ${styles["primary-btn"]} fw-medium`}>
      {text} <HiArrowRight style={{ color: "#029A29" }} />
    </button>
  );
};

export default index;
