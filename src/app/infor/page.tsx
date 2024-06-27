import React from "react";
import { HeaderSlideForAboutPage } from "../{components}/HeaderSlide";
import AboutPageSlide from "./{components}/AboutPageSlide";
import Details from "./{components}/Details";

const page = () => {
  return (
    <>
      <HeaderSlideForAboutPage />

      <AboutPageSlide />

      <Details />
    </>
  );
};

export default page;
