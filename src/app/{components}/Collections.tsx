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

const Collections: React.FC = () => {
  const [isRefreshed, setIsRefreshed] = useState(false);

  useEffect(() => {
    setIsRefreshed(true);
    console.log(`Refreshed !`);
  }, []);

  return (
    <div
      id="grid"
      className={`desktop:h-[8412px] phone:h-[5970px] flex flex-col content-between phone:pt-[10px] phone:pl-[10px] phone:pr-[10px] phone:pb-[10px] desktop:pt-[20px] desktop:pl-[20px] desktop:pr-[20px] desktop:pb-[20px] transition-transform delay-[.9s] ease-[cubic-bezier(0.2, 0.6, 0.2, 1)] duration-[0.6s] ${
        !isRefreshed
          ? "opacity-0 translate-y-[10vh]"
          : "opacity-100 translate-y-0"
      }`}
    >
      <FlexMasonryItem
        imgSrc="https://dejan.works/work/AthotelDestkop.webp"
        order={1}
      />
    </div>
  );
};

export default Collections;
