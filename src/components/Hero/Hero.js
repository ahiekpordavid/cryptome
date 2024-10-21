import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-row w-full justify-center items-center bg-slate-50  py-[150px]">
      <div className="flex flex-col w-[40%] gap-5">
        <p className="text-[54px] font-bold">
          A simple & <br />
          powerful Bitcoin wallet.
        </p>
        <p className="text-xl">
          Secure crypto transactions directly from the CyptoShell Wallet web
          app.
        </p>
        <p className="border-1 py-3 px-10 bg-blue-700 text-white rounded-3xl cursor-pointer hover:bg-blue-500 w-max">
            Get Started
          </p>
      </div>

      <div className="flex bg-slate-50">
        <img src="https://miro.medium.com/v2/resize:fit:600/1*AcniPl0wjNRnYddjVbLFdg.png" alt="phot" className="w-[100%] object-fit"/>
      </div>
    </div>
  );
};

export default Hero;
