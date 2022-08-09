import React from "react";
import styles from "./Title.module.css";

const index = (props) => {
  return <h2 className={`${styles.title} fw-semi-bold`}>{props.title}</h2>;
};

export default index;
