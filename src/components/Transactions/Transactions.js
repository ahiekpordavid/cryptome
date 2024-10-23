import React from "react";

const Transactions = () => {
  return (
    <div className="w-[50%] flex flex-col p-10  bg-white rounded-xl gap-6">
      <p className="text-xl font-semibold text-blue-500">Recent Transactions</p>
      <div className="flex flex-col justify-between">



      <div className="flex flex-row justify-between border-b-1  pb-5  items-center">
          <div className="flex flex-row items-center gap-5">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Eo_circle_green_arrow-up.svg/800px-Eo_circle_green_arrow-up.svg.png"
              className="w-[30px] h-[30px] object-cover "
              alt="down"
            />
            <div>
              <p className="text-xl">Sent Bitcoin</p>
              <p className="text-slate-500 text-sm">To:509.....Plk3W</p>
            </div>
          </div>
          <div>
            <p className="text-xl">0.036 BTC</p>
            <p className="text-slate-500 text-sm">$2,400.02</p>
          </div>
          <p className="text-xl text-red-700">Failed</p>
        </div>

        <div className="flex flex-row justify-between border-b-1 py-5 items-center">
          <div className="flex flex-row items-center gap-5">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Eo_circle_green_arrow-up.svg/800px-Eo_circle_green_arrow-up.svg.png"
              className="w-[30px] h-[30px] object-cover"
              alt="up"
            />
            <div>
            <p className="text-xl">Sent Bitcoin</p>
            <p className="text-slate-500 text-sm">To:612.....WdkAv</p>
            </div>
          </div>
          <div className="items-start">
            <p className="text-xl">0.045 BTC</p>
            <p className="text-slate-500 text-sm">$3,000.00</p>
          </div>
          <p className="text-xl text-green-700">Completed</p>
        </div>

        <div className="flex flex-row justify-between border-b-1 py-5  items-center">
          <div className="flex flex-row items-center gap-5 ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF0h0LYCMehv5kF1tThxTzbocjXTD4rIWv5w&s"
              className="w-[30px] h-[30px] object-cover transform rotate-180"
              alt="up"
            />
            <div>
            <p className="text-xl">Recieved Bitcoin</p>
              <p className="text-slate-500 text-sm">From:542.....Cvk4e</p>
            </div>
          </div>
          <div>
            <p className="text-xl">1.74 BTC</p>
            <p className="text-slate-500 text-sm">$116,721.84</p>
          </div>
          <p className="text-xl text-green-700">Completed</p>
        </div>

        <div className="flex flex-row justify-between pt-5 items-center">
          <div className="flex flex-row items-center gap-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF0h0LYCMehv5kF1tThxTzbocjXTD4rIWv5w&s"
              className="w-[30px] h-[30px] object-cover transform rotate-180"
              alt="up"
            />
            <div>
            <p className="text-xl">Recieved Bitcoin</p>
              <p className="text-slate-500 text-sm">From:542.....Cvk4e</p>
            </div>
          </div>
          <div className="items-start">
            <p className="text-xl">1.16 BTC</p>
            <p className="text-slate-500 text-sm">$77,814.00</p>
          </div>
          <p className="text-xl text-green-700">Completed</p>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
