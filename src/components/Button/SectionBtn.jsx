import React from "react";
import styles from "./Button.module.css";

const SectionBtn = ({ goTo, text }) => {
  return (
    <div className={styles["section-btn"]}>
      <a href={goTo} className={styles["section-btn__link"]}>
        {text}
      </a>
    </div>
  );
};

export default SectionBtn;
