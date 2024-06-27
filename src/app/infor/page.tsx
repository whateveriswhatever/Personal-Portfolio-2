import React from "react";
import { HeaderSlideForAboutPage } from "../{components}/HeaderSlide";
import AboutPageSlide from "./{components}/AboutPageSlide";
import Details from "./{components}/Details";
import Footer from "../{components}/Footer";

const page = () => {
  return (
    <>
      <HeaderSlideForAboutPage />

      <AboutPageSlide />

      <Details />

      <Footer />
    </>
  );
};

export default page;
