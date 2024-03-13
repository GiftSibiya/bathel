// Imports
import React from "react";

import sunsync1 from "../../../public/assets/images/sunsync1.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="h-[600px] mt-[20px]">
      <div className="flex flex-col items-center">
        <h4 className="text-3xl font-bold">About Us</h4>
        <hr className="w-[50%] my-6 border-[orange]" />
        <div className="flex items-center w-[90%]">
          <Image
            src={sunsync1}
            alt="Sunsync installation header"
            className="h-[500px] w-[800px] object-cover rounded-xl"
          ></Image>
          <div className=" flex flex-col items-center h-[400px] w-[600px] absolute bg-[orange] shadow-2xl rounded-3xl right-10 hover:translate-y-[-10px] hover:border-2 border-[orange] ease-in-out hover:border-white transition duration-[500ms] ">
            <p className="text-3xl text-center text-white font-bold mt-[20px]">
              We Are custom <br /> Installation Sollutions
            </p>
            <p className="p-3 mt-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis iusto laborum adipisci tenetur cum quisquam ipsum
              voluptatibus modi consequatur! Accusantium.
            </p>
            <div className="bg-green-500 p-3 rounded-2xl w-[130px] transition-all duration-300 text-center hover:border-[white] hover:w-[150px] border-[orange] border-2  cursor-pointer text-white font-semibold">
              Get a Quote
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
