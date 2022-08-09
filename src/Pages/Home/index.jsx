import React from "react";
import {
  ImgSection1,
  Welcome,
  Header,
  Features,
  Counseling,
  Resources,
  ImgSection2,
  ImgSection3,
  Students,
  News,
  Events,
  Testimonial,
  Footer,
} from "./components";

const Home = () => {
  return (
    <>
      <Header />
      <ImgSection1 />
      <Features />
      <Welcome />
      <Counseling />
      <Resources />
      <ImgSection2 />
      <Students />
      <ImgSection3 />
      <News />
      <Events />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
