import React from "react";
import styles from "./SubTitle.module.css";

const index = (props) => {
  return <h3 className={`${styles.subTitle} fw-medium`}>{props.subTitle}</h3>;
};

export default index;
