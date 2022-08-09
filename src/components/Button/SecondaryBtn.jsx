import React from "react";
import styles from "./Button.module.css";
import { HiArrowRight } from "react-icons/hi";

const index = ({ text }) => {
  return (
    <button className={`${styles.btn} ${styles["secondary-btn"]} fw-medium`}>
      {text} <HiArrowRight style={{ color: "#fff" }} />
    </button>
  );
};

export default index;
