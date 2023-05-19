import React, { Fragment } from "react";
import Hero from "./Hero/hero";
import Features from "./Features/features";
import Aboutus from "./AboutUs/aboutus";
import Cta from "./Cta/cta";
import Footer from "../../components/molecules/footer";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Features />
      <Aboutus />
      <Cta />
      <Footer />
    </Fragment>
  );
};

export default Home;
