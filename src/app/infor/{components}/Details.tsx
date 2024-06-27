"use client";
import ClipboardJS from "clipboard";
import React from "react";
import { useState, useRef } from "react";

const Details = () => {
  return (
    <div
      id="about-detail"
      className="desktop:mt-0 desktop:ml-auto desktop:mr-auto desktop:mb-0 box-border desktop:max-w-[780px]
    desktop:pt-[4vh] desktop:pl-0 desktop:pb-[4vh] desktop:pr-0
    phone:mt-0 phone:ml-[20px] phone:mr-[20px] phone:mb-0"
    >
      <>
        <Heading4 content="Work Experience" />
        <MultiRowGridForWorkExperience />
      </>

      <>
        <Heading4 content="Education" />
        <EducationSection />
      </>

      <>
        <Heading4 content="Disciplines" />
        <MultiRowGridForDisciplines />
      </>

      <>
        <Heading4 content="Contact" />
        <CustomPTag content="Feel free to reach out for projects, collaborations, or merely to say hello! Currently seeking new opportunities" />
        <MultiRowForContactOptions />
      </>
    </div>
  );
};

export default Details;

const Heading4: React.FC<{ content: string }> = ({ content }) => {
  return (
    <>
      <h4
        className="text-[#11111] font-['Geist'] desktop:text-[2rem] desktop:leading-[140%]
  desktop:mt-[80px] desktop:ml-0 desktop:mr-0 desktop:mb-[20px]
  phone:font-[600] phone:text-[1.5rem] phone:mt-[40px] phone:ml-0 phone:mr-0 phone:mb-[20px]"
      >
        {content}
      </h4>
    </>
  );
};

const MultiRowGridForWorkExperience: React.FC = () => {
  return (
    <>
      <div
        id="multi-row-grid"
        className="grid grid-cols-[repeat(2, 1fr)]"
        style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
      >
        {/* <MultiRow
          title="Senior Product Designer"
          entity="@hotel"
          years="2021 - 2024"
        />
        <MultiRow
          title="Co-Founder and designer"
          entity="Achievo"
          years="2013 - 2015"
        />
        <MultiRow title="Graphic Designer" entity="iTatu" years="2010 - 2011" />
        <MultiRow
          title="Product Designer"
          entity="@Invision"
          years="2016 - 2020"
        />
        <MultiRow
          title="User Interface Designer"
          entity="Centralway"
          years="2013 - 2014"
        />
        <MultiRow
          title="Desginer and Director"
          entity="Freelance"
          years="2010 - Present"
        /> */}
      </div>
    </>
  );
};

const MultiRowGridForDisciplines: React.FC = () => {
  return (
    <>
      <div
        id="multi-row-grid"
        className="grid"
        style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
      >
        <CustomPTag content="Front-End" />
        <CustomPTag content="" />
        <CustomPTag content="" />
        <CustomPTag content="" />
      </div>
    </>
  );
};

const MultiRowForContactOptions: React.FC = () => {
  const textToCopyRef: any = useRef<string | any>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isHovered1, setIsHovered1] = useState<boolean>(false);
  const [isHovered2, setIsHovered2] = useState<boolean>(false);
  const handleCopy = () => {
    // Initialize ClipboardJS with the element reference
    new ClipboardJS(textToCopyRef.current);
    console.log(`Copied !`);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1666);
  };

  return (
    <>
      <div
        id="multi-row contact-options"
        className={`desktop:mt-[40px] desktop:mb-[20px] flex flex-col
            phone:mb-[40px] phone:mt-[40px]`}
      >
        <a
          id="copy_email"
          className={`${isHovered1 ? "underline" : "no-underline"}`}
          ref={textToCopyRef}
          data-clipboard-text="labaoduy419@gmail.com"
          onClick={handleCopy}
          onMouseEnter={() => {
            setIsHovered1(true);
          }}
          onMouseLeave={() => {
            setIsHovered1(false);
          }}
        >
          {isCopied ? "Email copied" : "labaoduy419@gmail.com"}
        </a>
        <a
          href="https://www.linkedin.com/in/duy-la-3b1582285"
          className={`${isHovered2 ? "underline" : "no-underline"}`}
          target="_blank"
          onMouseEnter={() => {
            setIsHovered2(true);
          }}
          onMouseLeave={() => {
            setIsHovered2(false);
          }}
        >
          LinkedIn
        </a>
      </div>
    </>
  );
};

const MultiRow: React.FC<{
  title: string;
  entity: string;
  years: string;
}> = ({ title, entity, years }) => {
  return (
    <>
      <div id="multi-row" className="desktop:mb-[20px] flex flex-col">
        <ParagraphInMultiGrow title={title} entity={entity} years={years} />
      </div>
    </>
  );
};

const ParagraphInMultiGrow: React.FC<{
  title: string;
  entity: string;
  years: string;
}> = ({ title, entity, years }) => {
  return (
    <>
      <p
        id="title"
        className="text-[#111111] desktop:font-[400] desktop:leading-[160%] font-['Geist'] desktop:text-[1.375rem]
        phone:font-[600] phone:text-[1.125rem] phone:"
      >
        {title}
      </p>
      <p
        id="entity"
        className="desktop:text-[1.1rem] desktop:leading-[160%] text-[#333333] font-[300]
        phone:text-[1.1rem] phone:leading-[160%] phone:font-[400]"
      >
        {entity}
      </p>
      <p
        id="years"
        className="text-[#666666] desktop:text-[1rem] font-[300] desktop:leading-[160%]
        phone:font-[400]"
      >
        {years}
      </p>
    </>
  );
};

const CustomPTag: React.FC<{ content: string }> = ({ content }) => {
  return (
    <>
      <p
        className="desktop:leading-[160%] font-['Geist'] text-[#333333] font-[300] desktop:text-[1.375rem]
      phone:font-[400] phone:text-[1.125rem]"
      >
        {content}
      </p>
    </>
  );
};

const EducationSection: React.FC = () => {
  return (
    <>
      <MultiRow
        title="Bachelor of Engineering"
        entity="
      Informatics and Computer Engineering"
        years="2022 - 2026 (Expected)"
      />
    </>
  );
};
