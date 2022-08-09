import React from "react";
import styles from "./Grid.module.css";

const index = (props) => {
  return (
    <div className={styles.grid} {...props}>
      {props.children}
    </div>
  );
};

export default index;
