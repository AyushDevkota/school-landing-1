import React from "react";
import {
  Section,
  Title,
  StudentCard,
  Grid,
  SectionBtn,
} from "../../../components";
import { STUDENTS } from "../../../constants";

const index = () => {
  return (
    <Section>
      <span className="text-green text-uppercase fs-13">our aluminis</span>
      <Title title="Meet Our Students" />
      <Grid>
        {STUDENTS.map((el, index) => (
          <StudentCard key={index} data={el} />
        ))}
      </Grid>
      <SectionBtn goTo="#" text="More Alumini Stories" />
    </Section>
  );
};

export default index;
