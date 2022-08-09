import React from "react";
import styles from "./Student.module.css";

const index = ({ data: { name, date, degree, img } }) => {
  return (
    <div
      className={styles["student-card"]}
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className={styles["student-card__top"]}></div>
      <div className={`${styles["student-card__bottom"]} text-center`}>
        <h3 className={`${styles["student-card__name"]} text-semi-bold`}>
          {name}
        </h3>
        <div className={styles["student-card__bottom__info"]}>
          <p>{date}</p>
          <p>{degree}</p>
        </div>
      </div>
    </div>
  );
};

export default index;
