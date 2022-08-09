import React from "react";
import { Section, Title, Grid, Card } from "../../../components";
import { FEATURES_INFO } from "../../../constants";

const Features = () => {
  return (
    <Section>
      <Title title="What Features" />
      <Grid>
        {FEATURES_INFO.map((el, index) => (
          <Card data={el} key={index} />
        ))}
      </Grid>
    </Section>
  );
};

export default Features;
