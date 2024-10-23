import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";

const DashboardNavbar = () => {
  const navigate = useNavigate();

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="w-full h-max bg-white flex justify-between text-black  py-5 md:px-[60px] px-[20px] items-center shadow-md">
      <div className="flex gap-6">
        <p className="text-2xl font-extrabold">CriptoMa</p>
      </div>
      <div className="flex  items-center">
        <div className="flex items-center ">
          <SupervisedUserCircleIcon className="text-slate-400" fontSize="large"/>
          <p
            className=" py-3 px-3 text-black rounded-3xl cursor-pointer "
          >
            Monica Willson
          </p>
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
