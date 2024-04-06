"use client";
import React from "react";
import { useEffect, useState } from "react";

const SlideDelay = () => {
  const [isRefreshed, setIsRefreshed] = useState(false);

  useEffect(() => {
    setIsRefreshed(true);
  }, []);

  return (
    <>
      <h2
        className="phone:font-[500] phone:text-[1.125rem] phone:mt-0 phone:ml-[20px] phone:mr-[20px] phone:mb-0 block desktop:leading-[120%] desktop:font-[400] desktop:text-[1.375rem] desktop:mt-[0px] desktop:mr-[40px] desktop:ml-[40px] desktop:mb-[0px]"
        style={{
          marginBlockStart: "0.83em",
          marginBlockEnd: "0.83em",
          //   marginInlineStart: "0px",
          //   marginInlineEnd: "0px",
          unicodeBidi: "isolate",
        }}
      >
        A collection of work
      </h2>
    </>
  );
};

export default SlideDelay;
