"use client";
import React from "react";
import { useRef, useState, useEffect } from "react";
import ClipboardJS from "clipboard";

type SectionType = {
  href: string;
  className: string;
  pContent: string;
  aContent: string;
  withEmail: boolean;
  emailContent: string;
};

const Section: React.FC<SectionType> = ({
  href,
  className,
  pContent,
  aContent,
  withEmail,
  emailContent,
}) => {
  return (
    <div id={className}>
      <p>
        {pContent}
        <>{withEmail ? <span>(Click to copy)</span> : <></>}</>
      </p>
      {!withEmail ? (
        <a href={href} className="font-[500] text-[1.375rem] pt-[30px] block">
          {aContent}
        </a>
      ) : (
        <div id="email">{emailContent}</div>
      )}
    </div>
  );
};

const Description: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div id="description" className="desktop:mt-[20rem] phone:mt-[20rem]">
      <p className="phone:font-[400] phone:leading-[1.8rem] leading-[160%] font-[300] text-[1.375rem]">
        I'm Duy, a sophomore computer engineering student at Hanoi, Vietnam
        National University with 1 year of learning web development and building
        projects based on that. My passionate is enormous in Computer Science
        and Software Development, thereby I'm keen on learning and diving deeper
        inner these fields.
      </p>
      <a
        href="/infor"
        className={`font-[500] text-[1.375rem] pt-[30px] block cursor-pointer ${
          isHovered ? "underline" : "no-underline"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        More about me
      </a>
    </div>
  );
};

const Contact: React.FC = () => {
  const textToCopyRef: any = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

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
    <div id="contact" className="mt-[12vw]">
      <p className="leading-[160%] font-[300] text-[1.375rem]">
        Get in touch
        <span className="leading-[160%] text-[#6666] font-[300]">
          (Click to copy)
        </span>
      </p>
      <div
        id="email"
        className="font-[600] text-[3.7vw] cursor-pointer"
        ref={textToCopyRef}
        data-clipboard-text="labaoduy419@gmail.com"
        onClick={handleCopy}
      >
        {isCopied ? "Email copied" : "labaoduy419@gmail.com"}
      </div>
    </div>
  );
};

const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="phone:max-w-[100%] phone:mt-0 phone:mb-0 phone:mr-[20px] phone:ml-[20px] phone:pt-[20vh] phone:pl-0 phone:pr-0 phone:pb-[20vh] mt-0 mr-auto mb-0 ml-auto desktop:max-w-[760px] desktop:mt-0 desktop:ml-auto desktop:mr-auto desktop:mb-0 pt-[12vw] pr-0 pb-[12vw] pl-0"
    >
      <Description />

      <Contact />
    </div>
  );
};

export default AboutMe;
