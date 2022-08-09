import React from "react";
import { Grid, Section, SectionBtn, Title } from "../../../../components";
import { EVENTS_INFO } from "../../../../constants";
import EventCard from "./EventCard";

const index = () => {
  return (
    <Section>
      <p className="text-green text-uppercase fs-13">events</p>
      <Title title="Upcoming Events" />
      <Grid>
        {EVENTS_INFO.map((el) => (
          <EventCard key={el.id} data={el} />
        ))}
      </Grid>
      <SectionBtn goTo="#" text="More Events" />
    </Section>
  );
};

export default index;
