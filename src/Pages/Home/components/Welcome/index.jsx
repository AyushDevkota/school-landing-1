import React from "react";
import styles from "./Welcome.module.css";
import { Grid, Section, Title, SecondaryBtn } from "../../../../components";
import SchoolImg from "../../../../Assets/school.png";

const index = () => {
  return (
    <>
      <Section className="text-center">
        <Title
          title={
            <>
              Welcome to <br /> Anand Jyoti Boarding school
            </>
          }
        />
        <p className={styles.desc}>
          At Ankuram, we impart a well-balanced, concept focused and
          research-oriented education through progressive curricular practices.
        </p>
      </Section>
      <Section>
        <Grid>
          <img src={SchoolImg} alt="school" className={styles.welcome__img} />
          <div className={styles["text-area"]}>
            <span className="text-uppercase text-green">about Anand jyoti</span>
            <Title title="Why Anand Jyoti?" />
            <p className={`${styles.desc} ${styles.welcome__light}`}>
              Our faculty lead students to reach further, to achieve their goals
              and to effect change in the professions and passions they pursue.
            </p>
            <SecondaryBtn text="discover more" />
          </div>
        </Grid>
      </Section>
    </>
  );
};

export default index;
