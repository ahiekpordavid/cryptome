import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-900 flex flex-row lg:px-[150px] md:px-[80px] px-[20px] text-white text-xs font-bold md:py-[50px] py-[30px] justify-between gap-8 md:gap-0"> 
      <div className="flex gap-8 cursor-pointer">
        <p>Terms of use</p>
        <p>Privacy policy</p>
        <p>About</p>
      </div>
      <div className="flex gap-8 cursor-pointer">
        <p>Features</p>
        <p>Support</p>
      </div>
    </div>
  );
};

export default Footer;
