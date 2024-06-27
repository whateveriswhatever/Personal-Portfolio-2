import React from "react";

const AboutPageSlide = () => {
  return (
    <div
      id="about-page"
      className="desktop:pt-[16vh] desktop:pr-[0px] desktop:pb-[16vh] desktop:pl-[0px]
       phone:pt-[12vh] phone:pl-0 phone:pr-0 phone:pb-[12vh] phone:text-[#4954]
       tablet:pt-[12vh] tablet:pl-0 tablet:pr-0 tablet:pb-[12vh]"
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
        className="desktop:mb-[40px] desktop:leading-[160%] font-['Geist'] text-[#333333] font-[300] desktop:text-[1.375rem]
        phone:mb-[20px] phone:font-[400] phone:text-[1.125rem]"
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
        className="desktop:mt-0 desktop:mr-auto desktop:mb-0 desktop:ml-auto box-border desktop:max-w-[780px] desktop:pt-[4vh] desktop:pr-0 desktop:pb-[4vh] desktop:pl-0
        phone:mt-0 phone:ml-[20px] phone:mr-[20px] phone:mb-0 phone:text-[1.8rem] phone:max-w-[100%] phone:pt-[4vh] phone:pr-0 phone:pb-[4vh] phone:pl-0"
      >
        <h2
          className="text-[#111111] font-['Geist'] font-[600] desktop:text-[2.75rem] desktop:leading-[120%] desktop:mt-[60px] desktop:ml-0 desktop:mr-0 desktop:mb-[40px]
        phone:font-[600] phone:text-[2rem] phone:mt-[40px] phone:ml-0 phone:mr-0 phone:mb-[20px]"
        >
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
