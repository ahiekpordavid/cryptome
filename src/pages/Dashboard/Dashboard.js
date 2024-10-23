import React, { useState, useEffect } from "react";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import Balance from "../../components/Balance/Balance";
import Transactions from "../../components/Transactions/Transactions";
import Charts from "../../components/Charts/Charts";

const Dashboard = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const overlayTimer = setTimeout(() => {
      setShowOverlay(true);
      const loaderTimer = setTimeout(() => {
        setShowLoader(false);
      }, 2000);
      return () => clearTimeout(loaderTimer);
    }, 5000);
    return () => clearTimeout(overlayTimer);
  }, []);

  return (
    <div className="bg-slate-100 h-[100vh] relative">
      <DashboardNavbar />
      <div className="m-10 ">
        <Balance />
        <div className="flex flex-row w-full gap-10 ">
          <div className="w-[50%] h-full">
            <Charts />
          </div>
          <Transactions />
        </div>
        <div className="h-[100px] bg-slate-100"></div>
      </div>

      {showOverlay && (
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-70 h-screen z-10 flex justify-center items-center">
          {showLoader ? (
            <div className="loader">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : (
            <div className="bg-white p-5 rounded shadow-lg ">
              <p className="text-black text-center">
                Hello Monica, Please be informed that a tax payment of <strong className="font-bold text-lg">$12,984</strong> is due.<br />
                Kindly make the payment to regain access to your account.<br />
                For assistance, contact{" "}
                <a href="tel:+18329108146" className="text-blue-600 underline">
                  +1 (832) 910-8146
                </a>.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
