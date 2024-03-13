// Imports
import Image from "next/image";
import React from "react";

// Images
import roofSolar from "../../../public/assets/images/roofSolar.jpg";

const Contact = () => {
  return (
    <div className=" flex flex-col items-center h-[500px]">
      <h4 className="text-3xl font-bold">Contact Us</h4>
      <hr className="w-[50%] my-6 border-[orange]" />
      <div className="flex items-center w-[90%]">
        <Image
          src={roofSolar}
          alt="solar panels on a roof"
          className="h-[500px] object-cover rounded-3xl"
        ></Image>
        <div className="flex flex-col items-center h-[450px] bg-slate-300 w-[600px] border-2 absolute right-[40px] rounded-lg">
          <h4>Get in touch with us</h4>
          <div className="flex flex-col items-center">
            {/* Name Field */}
            <label className="text-center">Name</label>
            <input
              className="w-[400px] p-1 rounded-md"
              placeholder="Enter your name"
            ></input>
            {/* -- */}
            {/* Email Field */}
            <label className="text-center">Email</label>
            <input
              className="w-[400px] p-1 rounded-md"
              placeholder="Enter your name"
            ></input>
            {/* -- */}
            {/* Message Field */}
            <label className="text-center">Message</label>
            <textarea
              className="w-[400px] p-1 rounded-md h-[200px] resize-none"
              placeholder="Enter your name"
            ></textarea>
            {/* -- */}
            <button className="bg-green-500 mt-2 p-3 rounded-2xl w-[130px] transition-all duration-300 text-center hover:border-[white] hover:w-[150px] border-green-500 border-2  cursor-pointer text-white font-semibold">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
