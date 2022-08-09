import React from "react";
import styles from "./News.module.css";
import {
  Grid,
  Section,
  Title,
  SubTitle,
  TransparentBtn,
  NewsComp,
} from "../../../../components";

import { NEWS_INFO } from "../../../../constants";

const index = () => {
  return (
    <Section>
      <p className="text-green text-uppercase fs-13">news</p>
      <Title title="Our Latest News" />
      <Grid>
        <NewsComp />
        <div className={styles["news-info"]}>
          {NEWS_INFO.map((el) => (
            <>
              <div key={el.id}>
                <p className="text-uppercase text-dark">{el.date}</p>
                <SubTitle subTitle={el.heading} />
                <TransparentBtn text={el.btnText} goTo="#" />
              </div>
              <hr />
            </>
          ))}
        </div>
      </Grid>
    </Section>
  );
};

export default index;
