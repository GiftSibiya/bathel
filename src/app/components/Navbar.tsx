import React from "react";

const Navbar = () => {
  return (
    <div className="flex mt-[10px] fixed justify-center w-[100%] ">
      <div className="flex items-center rounded-xl bg-[orange] w-[80%] justify-between h-[60px]">
        <div className="flex w-full justify-between mx-10">
          <div className=""> Bathel Projects</div>
          <div className="flex justify-between border-2 w-[400px]">
            <a className={navStyle}>Home</a>
            <a className={navStyle}>About Us</a>
            <a className={navStyle}>Our Services</a>
            <a className={navStyle}>Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const navStyle = ` transition duration-200 hover:text-white cursor-pointer  `;
