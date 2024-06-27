import React from "react";

const AboutPageSlide = () => {
  return (
    <div
      id="about-page"
      className="desktop:pt-[16vh] desktop:pr-[0px] desktop:pb-[16vh] desktop:pl-[0px]"
    >
      <About />
    </div>
  );
};

export default AboutPageSlide;

const Paragraph: React.FC<{
  context: string;
}> = ({ context }) => {
  return (
    <>
      <p
        id="text"
        className="desktop:mb-[40px] desktop:leading-[160%] font-['Geist'] text-[#333333] font-[300] desktop:text-[1.375rem]"
      >
        {context}
      </p>
    </>
  );
};

const About: React.FC = () => {
  return (
    <>
      <div
        id="about"
        className="desktop:mt-0 desktop:mr-auto desktop:mb-0 desktop:ml-auto box-border desktop:max-w-[780px] desktop:pt-[4vh] desktop:pr-0 desktop:pb-[4vh] desktop:pl-0"
      >
        <h2 className="text-[#111111] font-['Geist'] font-[600] desktop:text-[2.75rem] desktop:leading-[120%] desktop:mt-[60px] desktop:ml-0 desktop:mr-0 desktop:mb-[40px]">
          Computer Engineering Student specializing in Software Development and
          Data Science evolution.
        </h2>

        <Paragraph context="I'm Duy, a junior year Computer Engineering student at Hanoi, VNU with more than 1 year of learning and practicing Software Development all by myself. Throughout my learning year, I've led some projects from small to remarkable size in my university courseworks, specialzing in designing and implementing front-end and UI side of projects. I enage in problem-solving, prioritizing UI-UX needs as a view to deliver high-quality designs and UI infrastructures that elevate user satisfaction." />
        <Paragraph
          context="
            In previous roles inner the team at uni I have taken part in for the coursework project, I've learnt about how to guid and colaborate with other team members to erect the medium sophisticated front-end infrastructure, implanting the comprehensive design into our client-side.
            With a strong foundation in methodical design thinking and front-end side development, I leverage the radiantion of a software product to archieve impactful outcomes. 
        "
        />
        <Paragraph
          context="
                My expertise lies on developing intutitive user interfaces and fostering collaborative environment that integrate design, engineering. 
                Moreover, I am dedicated to be pushing boundaries and delivering innovative solutions that align with UI-UX team's expectations in order to acquire business goals.
            "
        />
      </div>
    </>
  );
};
