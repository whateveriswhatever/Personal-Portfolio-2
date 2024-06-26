"use client";
import React from "react";
import { useState, useEffect } from "react";

type FlexMasonryItemType = {
  imgSrc: string;
  // phoneWidth: string;
  // desktopWidth: string;
  order: number;
};

const FlexMasonryItem: React.FC<FlexMasonryItemType> = ({ imgSrc, order }) => {
  return (
    <div
      id="flexmasonry-item"
      // className={`phone:w-[${phoneWidth}] desktop:w-[${desktopWidth}]`}
      // className={`phone:w-[50%] desktop:w-[33.333%]`}
      className={
        order === 1
          ? "phone:w-[50%] desktop:w-[33.333%]"
          : order === 2
          ? "phone:w-[50%] desktop:w-[33.333%]"
          : "phone:w-[50%] desktop:w-[33.333%]"
      }
    >
      <div
        id="item"
        className="phone:pt-[10px] phone:pl-[10px] phone:pb-[10px] phone:pr-[10px] desktop:pt-[20px] desktop:pl-[20px] desktop:pb-[20px] desktop:pr-[20px]"
      >
        <img
          src={imgSrc}
          className="block max-w-[100%] h-auto pointer-events-none"
        />
      </div>
    </div>
  );
};

const FlexMansoryItem2: React.FC<{
  hrefStr: string;
  imgSrc: string;
  workItemCompany: string;
  workItemDescription: string;
  tailwindCSSStyling: string;
}> = ({
  hrefStr,
  imgSrc,
  workItemCompany,
  workItemDescription,
  tailwindCSSStyling,
}) => {
  return (
    <>
      <a href={hrefStr} className={`${tailwindCSSStyling}`}>
        <>
          <div className="rounded-[24px] overflow-hidden  transition-transform delay-[.8s] ease-[cubic-bezier(0.2, 0.6, 0.2, 1)] duration-[0.69s]">
            <img src={imgSrc} />
          </div>
        </>

        <>
          <div className="text-center desktop:mt-[24px]">
            <div className="text-[#111111] font-['Geist'] font-[500] desktop:text-[1.375rem] desktop:leading-[160%] block no-underline">
              {workItemCompany}
            </div>

            <div className="text-[#666666] font-['Geist'] font-[300] desktop:text-[1.125rem] block no-underline">
              {workItemDescription}
            </div>
          </div>
        </>
      </a>
    </>
  );
};

const Collections: React.FC = () => {
  const [isRefreshed, setIsRefreshed] = useState(false);

  useEffect(() => {
    setIsRefreshed(true);
    console.log(`Refreshed !`);
  }, []);

  return (
    <div
      id="grid"
      className={`desktop:max-w-[1200px] desktop:h-fit phone:h-[5970px] flex flex-wrap content-between phone:pt-[10px] phone:pl-[10px] phone:pr-[10px] phone:pb-[10px] desktop:pt-[20px] desktop:pl-[20px] desktop:pr-[20px] desktop:pb-[20px] transition-transform delay-[.9s] ease-[cubic-bezier(0.2, 0.6, 0.2, 1)] duration-[0.6s] ${
        !isRefreshed
          ? "opacity-0 translate-y-[10vh]"
          : "opacity-100 translate-y-0"
      }`}
    >
      <FlexMansoryItem2
        tailwindCSSStyling="desktop:w-[491px] desktop:mb-[100px] text-center box-border inline-block"
        hrefStr="https://github.com/whateveriswhatever/Music_App"
        imgSrc="https://cdn.dribbble.com/userupload/8697539/file/original-ebac84bc7fe4fb6edd4d97ff3d1d63f7.png?resize=1024x768"
        workItemCompany="@music"
        workItemDescription="Music Web App"
      />

      <FlexMansoryItem2
        tailwindCSSStyling="desktop:w-[491px] desktop:mb-[200px] text-center box-border inline-block relative desktop:top-[100px] desktop:mt-[20rem] desktop:ml-[10rem]"
        hrefStr="https://github.com/whateveriswhatever/Vietnam-Starbucks-Clone"
        imgSrc="https://cdn.dribbble.com/userupload/8409348/file/original-66bd1641135091364848b4eaa8f1ee27.png?resize=1024x576"
        workItemCompany="@food"
        workItemDescription="Vietnam Starbuck Clone Web"
      />

      <FlexMansoryItem2
        tailwindCSSStyling="desktop:w-[491px] desktop:mb-[100px] text-center box-border inline-block absolute desktop:mt-[48rem]"
        hrefStr="https://codepen.io/whateveriswhatever/details/VwVyoLx"
        imgSrc="https://cdn.dribbble.com/users/2842121/screenshots/19762210/media/cd60a05c10effe763cc669a4d54e8d4a.png?resize=1000x750&vertical=center"
        workItemCompany="@note"
        workItemDescription="Blank Page Clone"
      />
    </div>
  );
};

export default Collections;
