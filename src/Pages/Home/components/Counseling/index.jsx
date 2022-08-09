import React from "react";
import { Section, Grid, PrimaryBtn } from "../../../../components";
import styles from "./Counseling.module.css";

const index = () => {
  return (
    <Section>
      <div className={styles.counsel}>
        <Grid>
          <div>
            <h3 className={`${styles.counsel__title} "fw-semi-bold"`}>
              Need Admission Counselling?
            </h3>
            <p className={styles.counsel__desc}>
              Contact us today by filling up the contact form, and we will
              contact you shortly.
            </p>
          </div>
          <div className={styles["btn-container"]}>
            <PrimaryBtn text="discover more" />
          </div>
        </Grid>
      </div>
    </Section>
  );
};

export default index;
