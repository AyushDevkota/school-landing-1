import React from "react";
import styles from "./Card.module.css";
import { TransparentBtn } from "../";

const index = ({ data: { img, text, title, description, btnText } }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="" className={styles.card__img} />
      {text && <p className={`${styles.card__text} fw-light`}>{text}</p>}
      <h3 className={`${styles.card__title} fw-semi-bold`}>{title}</h3>
      <p className={`${styles.card__description} fw-light`}>{description}</p>
      <TransparentBtn text={btnText} />
    </div>
  );
};

export default index;
