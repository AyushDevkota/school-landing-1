import React from "react";
import styles from "./ImgSection1.module.css";
import { PrimaryBtn } from "../../../../components";

const index = () => {
  return (
    <main className={styles.main1}>
      <div className={styles.overlay1}></div>
      <div className={styles.info1}>
        <p className={`${styles.info1__heading} fw-bold`}>
          Congratulations, graduates!
        </p>
        <p className={`${styles.info1__text} fw-light`}>
          Bucknell marked a historic Commencement weekend on May 21 and 22,
          2022, celebrating Commencement for the Class of 2020 and Class of
          2022. Relive the events in photos, videos, speeches and more
        </p>
        <PrimaryBtn text="Start Tour" />
      </div>
    </main>
  );
};

export default index;
