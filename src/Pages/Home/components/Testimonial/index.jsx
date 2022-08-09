import React from "react";
import styles from "./Testimonial.module.css";
import {
  Grid,
  Section,
  SectionBtn,
  StudentCard,
  SubTitle,
  Title,
} from "../../../../components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { STUDENTS } from "../../../../constants";

const index = () => {
  return (
    <Section>
      <div className="text-green text-uppercase fs-13">testimonials</div>
      <Title title="Alumini Spotlight" />
      <Carousel showIndicators={false} infiniteLoop autoPlay>
        {STUDENTS.map((el, index) => (
          <Grid key={index} style={{ width: "80%", margin: "0 auto" }}>
            <StudentCard data={el} />
            <div className={styles["carousel-info"]}>
              <SubTitle subTitle="Maths gives Street Cred" />
              <p className="text-dark fs-13">
                “Being rooted through my M.A. in the methodology and history of
                how God has used evangelism has been so helpful...Evangelism is
                deliberate, it must be fought for and practiced, and my M.A.
                showed me that.”
              </p>
            </div>
          </Grid>
        ))}
      </Carousel>
      <SectionBtn goTo="#" text="More Events" />
    </Section>
  );
};

export default index;
