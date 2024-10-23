import React from "react";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import Balance from "../../components/Balance/Balance";
import Transactions from "../../components/Transactions/Transactions";
import Charts from "../../components/Charts/Charts";

const Dashboard = () => {
  return (
    <div className="bg-slate-100 h-max">
      <DashboardNavbar />
      <div className="m-10 ">
        <Balance />
        <div className="flex flex-row w-full gap-10 h-max">
            <div className="w-[50%] h-full">
                <Charts/>
            </div>
            <Transactions/>
           
        </div>
        <div className="h-[100px] bg-slate-100"></div>
      </div>
    </div>
  );
};

export default Dashboard;
