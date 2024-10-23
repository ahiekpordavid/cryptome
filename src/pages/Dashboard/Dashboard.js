import React from "react";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import Balance from "../../components/Balance/Balance";

const Dashboard = () => {
  return (
    <div className="bg-slate-100 h-[100vh]">
      <DashboardNavbar />
      <div className="m-10">
        <Balance />
      </div>
    </div>
  );
};

export default Dashboard;
