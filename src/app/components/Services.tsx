// Imports
import React from "react";

// Images
import breakerimg from "../../../public/assets/images/breakers.jpg";
import Image from "next/image";
import ServiceTile from "../modules/ServiceTile";

const Services = () => {
  return (
    <div className=" flex flex-col items-center h-[800px] ">
      <div className="flex flex-col items-center w-[90%]">
        <h4 className="text-3xl font-bold text-center">Our Services</h4>
        <hr className="w-[50%] my-6 border-[orange]" />
      </div>
      <div className="">
        <Image
          src={breakerimg}
          alt="circuit breaker"
          className="h-[700px] object-cover"
        ></Image>
        <div className=" flex flex-col items-center h-[680px] rounded-lg w-[1200px] left-[80px] bg-[rgba(0,0,0,0.7)] absolute top-[1110px] ">
          <h3 className="text-3xl mt-[20px] font-bold text-center text-white">
            Services We Provide
          </h3>
          <p className="text-white">
            Our services include , but not limited to:
          </p>
          <div className="grid grid-cols-3 gap-[40px] mt-[20px]">
            <ServiceTile />
            <ServiceTile />
            <ServiceTile />
            <ServiceTile />
            <ServiceTile />
            <ServiceTile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
