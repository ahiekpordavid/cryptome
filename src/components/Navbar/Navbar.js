import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate("/login");
  };
  const redirectToSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="w-full h-max bg-white flex justify-between text-black py-10 px-[150px] items-center">
      <div className="flex gap-6">
        <p className="text-3xl font-extrabold">CyrpoMe</p>
      </div>
      <div className="flex  gap-[50px] items-center">
        <div className="flex gap-8  items-center font-bold">
          <p>Features</p>
          <p>Support</p>
        </div>
        <div className="flex  gap-8 items-center ">
          <p
            className="border-1 py-3 px-10  text-black rounded-3xl cursor-pointer border-blue-700 hover:border-blue-500"
            onClick={redirectToLogin}
          >
            Log In
          </p>
          <p className="border-1 py-3 px-10 bg-blue-700 text-white rounded-3xl cursor-pointer hover:bg-blue-500"    onClick={redirectToSignup}>
            Sign Up
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
