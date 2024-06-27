"use client";
import React from "react";
import { useState } from "react";

type LinkType = {
  href: string;
  className: string;
  content: string;
};

export const Link: React.FC<LinkType> = ({ href, className, content }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <a
        href={href}
        id={className ? className : ""}
        className={`${
          isHovered ? "underline" : "no-underline"
        } font-[400] text-[1.375rem] phone:font-[500] phone:text-[1.125rem]`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content}
      </a>
    </>
  );
};

export const HeaderSlideForAboutPage: React.FC = () => {
  return (
    <div
      id="header slide"
      className="phone:pt-[20px] phone:pr-[20px] phone:pb-[20px] phone:pl-[20px] w-full flex justify-between items-center fixed top-[0] z-[1000] p-[40px] box-border"
    >
      <Link href="/" className="logo" content="Duy La" />
      <Link href="/" className="" content="Work" />
    </div>
  );
};

const HeaderSlide = () => {
  return (
    <div
      id="header slide"
      className="phone:pt-[20px] phone:pr-[20px] phone:pb-[20px] phone:pl-[20px] w-full flex justify-between items-center fixed top-[0] z-[1000] p-[40px] box-border"
    >
      <Link href="/" className="logo" content="Duy La" />
      <Link href="/infor" className="" content="About" />
    </div>
  );
};

export default HeaderSlide;
