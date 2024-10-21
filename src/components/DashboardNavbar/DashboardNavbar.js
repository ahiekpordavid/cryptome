import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

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
    <div className="w-full h-max bg-blue-700 flex justify-between text-white py-5 px-[150px] items-center">
      <div className="flex gap-6">
        <p className="text-3xl font-extrabold">CyrpoMe</p>
      </div>
      <div className="flex  gap-[50px] items-center">
        <div className="flex  gap-8 items-center ">
          <p
            className=" py-3 px-10 bg-blue-700 text-white rounded-3xl cursor-pointer "
            onClick={userSignOut}
          >
           Monica Willson
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
