"use client";
import React, { useState } from "react";
import { useEffect } from "react";

const Bandwagon = () => {
  const [isRefreshed, setIsRefreshed] = useState(false);

  useEffect(() => {
    setIsRefreshed(true);
    console.log(`Refreshed !`);
  }, []);

  return (
    <div
      id="hero"
      className="phone:mt-0 phone:mr-[20px] phone:ml-[20px] phone:mb-0 mt-[0px] mr-[40px] mb-[0px] ml-[40px] max-w-[70vw] pt-[14vh] pb-[18vh]"
    >
      <h1
        // className="delay-[.4s] duration-[0.6s] ease-[cubic-bezier(0.2, 0.6, 0.2, 1)]"
        // className={
        //   isRefreshed && isHovered
        //     ? "animate-fly delay-[.4s] duration-[0.6s] ease-[cubic-bezier(0.2, 0.6, 0.2, 1)]"
        //     : ""
        // }
        // className={
        //   !isRefreshed
        //     ? "opacity-[0] translate-y-[10vh] delay-[.4s] ease-[cubic-bezier(0.2, 0.6, 0.2, 1)] duration-[0.6s]"
        //     : "opacity-[999] translate-y-[0%]"
        // }
        className={`phone:text-[2.2rem] phone:leading-[120%] desktop:text-[4.6vw] desktop:font-[600] text-[4.6vw] leading-[120%] font-[600] transition-transform delay-[.4s] ease-[cubic-bezier(0.2, 0.6, 0.2, 1)] duration-[0.6s] ${
          !isRefreshed
            ? "opacity-0 translate-y-[10vh]"
            : "opacity-100 translate-y-0"
        }`}

        // style={{ animationIterationCount: "1", animationFillMode: "backwards" }}
      >
        I'm Duy La - A computer engineering student.
      </h1>
    </div>
  );
};

export default Bandwagon;
