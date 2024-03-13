import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-orange-600 h-[150px] mt-[100px]">
      <div className="flex justify-around items-center mt-[20px] w-[100%] h-full">
        <div className="w-[45%] h-[70px] ">
          <h4 className="text-2xl font-bold text-white">
            Bathel Projects (PTY) LTD
          </h4>
          <p>Cosmo City, Johannesburg, South Africa</p>
        </div>
        <div className="w-[45%] h-[70px] ">
          <div className="flex justify-around">
            <a className={navStyle}>Home</a>
            <a className={navStyle}>About Us</a>
            <a className={navStyle}>Our Services</a>
            <a className={navStyle}>Contact Us</a>
          </div>{" "}
        </div>
      </div>
      <hr className="w-[50%]" />
      <div className="flex justify-between mx-[20px] w-[90%]">
        <p className="text-center text-white">© 2022 Bathel Projects.</p>
        <div className="flex justify-between w-[250px] ">
          <p className="text-white">Tearms of use</p>
          <p className="text-white">Privacy Policy </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const navStyle = ` transition duration-200 hover:text-white cursor-pointer  `;
