import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-900 flex flex-row px-[220px] text-white font-bold py-[50px] justify-between "> 
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
