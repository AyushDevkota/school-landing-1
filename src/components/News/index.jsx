import React from "react";
import styles from "./News.module.css";
import { NewsImg } from "../../Assets";
import { SubTitle, TransparentBtn } from "..";

const index = () => {
  return (
    <div className={styles["news-container"]}>
      <img src={NewsImg} alt="people picking up garbage" />
      <p className="text-uppercase text-dark">December 12, 2020</p>
      <SubTitle subTitle="Can I Make Money Recycling  Catalytic Converters?" />
      <p className="text-dark fs-13">
        In this article, we’re going to take a closer look at how you can make
        money recycling catalytic converters.In this article, we’re going to
        take a closer look at how you can make money recycling catalytic
        converters.
      </p>
      <TransparentBtn text="Learn More" goTo="#" />
    </div>
  );
};

export default index;
