import Image from "next/image";
import HeaderSlide from "./{components}/HeaderSlide";
import Bandwagon from "./{components}/Bandwagon";
import SlideDelay from "./{components}/SlideDelay";
import Collections from "./{components}/Collections";
import AboutMe from "./{components}/AboutMe";
import Footer from "./{components}/Footer";

export default function Home() {
  return (
    <>
      <HeaderSlide />
      <Bandwagon />
      <SlideDelay />
      <Collections />
      <AboutMe />
      <Footer />
    </>
  );
}
