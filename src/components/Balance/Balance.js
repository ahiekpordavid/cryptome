import { Divider } from "@mui/material";
import React from "react";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Balance = () => {
  const data = {
    labels: ["BTC","Others"], 
    datasets: [
      {
        label: "Assets Distribution",
        data: [100,0], 
        backgroundColor: ["blue","grey"],
        borderColor: ["#ffffff"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
    responsive: true,
  };
  return (
    <div className="w-full flex flex-col p-10 mb-10 bg-white rounded-xl gap-6">
      <p className="text-xl font-semibold">Balance Details</p>

      <div className="flex flex-row justify-between gap-10">
        <div className="p-8 flex flex-col gap-6 bg-slate-100 pr-[100px] rounded-xl">
          <div className="flex flex-col gap-2">
            <p>Total assets</p>
            <p className="text-2xl font-bold">$93,391.49</p>
          </div>
          <div className="flex flex-col gap-2">
            <p>Wallet Balance</p>
            <p className="text-xl font-medium">$43,391.49</p>
          </div>
          <div className="flex flex-col gap-2">
            <p>Invested Assets</p>
            <p className="text-xl font-medium">$3,391.49</p>
          </div>
        </div>

        <div className="p-8 flex flex-col gap-6 bg-slate-100  rounded-xl">
          <div className="flex justify-center items-center">
            <p className="text-center">Assets Distribution</p>
            <div className="w-[250px]">
              <Pie data={data} options={options} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4   rounded-xl w-full">
          <div className="flex flex-col bg-slate-100 rounded-xl w-full justify-between">
            <div className="flex flex-row justify-between px-8 pt-4 w-full">
              <div className="flex gap-2 items-center">
                <img
                  src="https://e7.pngegg.com/pngimages/447/88/png-clipart-bitcoin-cash-cryptocurrency-exchange-trade-bitcoin-orange-logo.png"
                  alt="BTC"
                  className="w-[40px] h-[40px] object-cover"
                />
                <div className="flex flex-col">
                  <p>BTC</p>
                  <p className="text-xs">Bitcoin</p>
                </div>
              </div>
              <div>
                <ImportExportIcon className=" text-green-600" />
                <p className="positive-change">+27%</p>
              </div>
            </div>
            <Divider />
            <div className="flex flex-row justify-between px-8 pb-4">
              <div>
                <p className="text-xs">Coins</p>
                <p className="text-xl">0.5468</p>
              </div>
              <div>
                <p className="text-xs">Value In USD</p>
                <p className="text-xl text-right">93,384</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-slate-100 rounded-xl w-full justify-between">
            <div className="flex flex-row justify-between px-8 pt-4 w-full">
              <div className="flex gap-2 items-center">
                <img
                  src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Ethereum-ETH-icon.png"
                  alt="BTC"
                  className="w-[40px] h-[40px] object-cover"
                />
                <div className="flex flex-col">
                  <p>EYH</p>
                  <p className="text-xs">Ethereum</p>
                </div>
              </div>
              <div>
                <ImportExportIcon className=" text-red-600" />
                <p className="negative-change">-0.7%</p>
              </div>
            </div>
            <Divider />
            <div className="flex flex-row justify-between px-8 pb-4">
              <div>
                <p className="text-xs">Coins</p>
                <p className="text-xl">0.5468</p>
              </div>
              <div>
                <p className="text-xs">Value In USD</p>
                <p className="text-xl text-right">93,384</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-slate-100 rounded-xl w-full justify-between">
            <div className="flex flex-row justify-between px-8 pt-4 w-full">
              <div className="flex gap-2 items-center">
                <img
                  src="https://cryptologos.cc/logos/litecoin-ltc-logo.png"
                  alt="BTC"
                  className="w-[40px] h-[40px] object-cover"
                />
                <div className="flex flex-col">
                  <p>BTC</p>
                  <p className="text-xs">Bitcoin</p>
                </div>
              </div>
              <div>
                <ImportExportIcon className=" text-red-600" />
                <p className="negative-change">-27%</p>
              </div>
            </div>
            <Divider />
            <div className="flex flex-row justify-between px-8 pb-4">
              <div>
                <p className="text-xs">Coins</p>
                <p className="text-xl">0.5468</p>
              </div>
              <div>
                <p className="text-xs">Value In USD</p>
                <p className="text-xl text-right">93,384</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-slate-100 rounded-xl w-full justify-between">
            <div className="flex flex-row justify-between px-8 pt-4 w-full">
              <div className="flex gap-2 items-center">
                <img
                  src="https://logowik.com/content/uploads/images/tron-trx-icon3386.logowik.com.webp"
                  alt="BTC"
                  className="w-[40px] h-[40px] object-cover"
                />
                <div className="flex flex-col">
                  <p>BTC</p>
                  <p className="text-xs">Bitcoin</p>
                </div>
              </div>
              <div>
                <ImportExportIcon className=" text-green-600" />
                <p className="positive-change">+27%</p>
              </div>
            </div>
            <Divider />
            <div className="flex flex-row justify-between px-8 pb-4">
              <div>
                <p className="text-xs">Coins</p>
                <p className="text-xl">0.5468</p>
              </div>
              <div>
                <p className="text-xs">Value In USD</p>
                <p className="text-xl text-right">93,384</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;