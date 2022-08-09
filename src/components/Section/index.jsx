import React from "react";
import styles from "./Section.module.css";

const index = (props) => {
  return (
    <section className={styles.section} {...props}>
      <div className={styles.section__container}>{props.children}</div>
    </section>
  );
};

export default index;
