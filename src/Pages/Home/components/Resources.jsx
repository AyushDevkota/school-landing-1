import React from "react";
import { Section, Title, Grid, Card } from "../../../components";
import { RESOURCES_INFO } from "../../../constants";

const Resources = () => {
  return (
    <Section>
      <span className="text-green text-uppercase fs-13">our features</span>
      <Title title="Resources for Students Applying to Bucknell" />
      <Grid>
        {RESOURCES_INFO.map((el, index) => (
          <Card key={index} data={el} />
        ))}
      </Grid>
    </Section>
  );
};

export default Resources;
