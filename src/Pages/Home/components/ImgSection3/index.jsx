import React from "react";
import styles from "./ImgSection3.module.css";
import { Grid } from "../../../../components";
import { GRADUATION_INFO } from "../../../../constants";

const index = () => {
  return (
    <main className={`${styles.main3} text-center`}>
      <div className={styles.overlay3}></div>
      <div className={styles.info3}>
        <span className="text-uppercase">virtual welcome center</span>
        <p className={`${styles.info3__heading} fw-semi-bold`}>
          One of the Best College in Nepal
        </p>
        <p className={`${styles.info3__text} fw-light`}>
          At our Virtual Welcome Center, you'll find the Admissions materials
          available in our actual lobby, digitized for your convenience.
        </p>
        {/* <PrimaryBtn text="discover more" /> */}
      </div>
      <div className={styles.rank__container}>
        <Grid>
          {GRADUATION_INFO.map((el) => (
            <div key={el.id}>
              <h3 className={styles.ranking__rank}>{el.title}</h3>
              <p className={styles.ranking__info}>{el.description}</p>
            </div>
          ))}
        </Grid>
        <div className={styles.graduation__link__container}>
          <a href="#" className={styles.graduation__link}>
            See more Rankings and information
          </a>
        </div>
      </div>
    </main>
  );
};

export default index;
