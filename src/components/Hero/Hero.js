import React from "react";

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col w-full justify-center items-center bg-slate-50  lg:py-[150px] py-[60px] md:gap-0 gap-10">
      <div className="flex flex-col w-full lg:w-[40%] gap-5 lg:p-0 md:p-[80px] px-[20px] lg:items-start lg:text-start items-center text-center">
        <p className="lg:text-[54px] md:text-[48px] text-[32px] font-bold">
          A simple & <br />
          powerful Bitcoin wallet.
        </p>
        <p className="md:text-xl text-md">
          Secure crypto transactions directly from the CriptoMa Wallet web
          app.
        </p>
        <p className="border-1 py-2 md:py-3 md:px-10 px-6 bg-blue-700 text-white rounded-3xl cursor-pointer hover:bg-blue-500 w-max">
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
