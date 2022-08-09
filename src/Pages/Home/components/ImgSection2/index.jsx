import React from "react";
import styles from "./ImgSection2.module.css";
import { PrimaryBtn } from "../../../../components";

const index = () => {
  return (
    <main className={styles.main2}>
      <div className={styles.overlay2}></div>
      <div className={styles.info2}>
        <span className="text-uppercase">virtual welcome center</span>
        <p className={`${styles.info2__heading} fw-semi-bold`}>
          Discover your Future
        </p>
        <p className={`${styles.info2__text} fw-light`}>
          At our Virtual Welcome Center, you'll find the Admissions materials
          available in our actual lobby, digitized for your convenience.
        </p>
        <PrimaryBtn text="discover more" />
      </div>
    </main>
  );
};

export default index;
