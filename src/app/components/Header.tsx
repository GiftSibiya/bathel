"use client";
/// Imports

import React from "react";
import Image from "next/image";

// Files
import sunsync1 from "../../../public/assets/images/sunsync1.jpg";
import inv1 from "../../../public/assets/images/inv1.jpg";
import emi_sky from "../../../public/assets/images/emi-sky.jpg";

const Header = () => {
  return (
    <div className=" h-[400px]">
      <div className="absolute p-5 rounded-md h-[150px] w-[600px] ml-4 mt-[220px] z-10 bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.8)] transition duration-200 ">
        <h3 className="font-bold text-5xl text-gray-200 ">Bathel Projects.</h3>
        <p className="text-gray-200 text-lg">
          Engineering experts to make turn your dream project
          <br />
          <span className="uppercase text-orange-500 font-bold">
            {" "}
            into a reality.
          </span>
        </p>
      </div>
      <Image
        src={emi_sky}
        alt="Sunsync installation header"
        className="w-full h-[400px] object-cover absolute top-0"
      ></Image>
    </div>
  );
};

export default Header;
