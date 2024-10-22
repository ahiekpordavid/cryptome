import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(true);
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate("/login");
  };
  const redirectToHome = () => {
    navigate("/");
  };
  const redirectToSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="w-full h-max bg-white flex justify-between text-black md:py-10 py-5 lg:px-[150px] md:px-[80px] px-[20px] items-center ">
      <div className="flex gap-6">
        <p
          className="md:text-3xl text-xl font-extrabold cursor-pointer"
          onClick={redirectToHome}
        >
          CryptoMe
        </p>
      </div>
      <div className="md:flex  gap-[50px] items-center hidden relative">
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
          <p
            className="border-1 py-3 px-10 bg-blue-700 text-white rounded-3xl cursor-pointer hover:bg-blue-500"
            onClick={redirectToSignup}
          >
            Sign Up
          </p>
        </div>
      </div>
      <div className="md:hidden flex">
        {isToggle ? (
          <MenuIcon onClick={() => setIsToggle(!isToggle)} />
        ) : (
          <>
            <CloseIcon onClick={() => setIsToggle(!isToggle)} />
            <div className="md:hidden  gap-[50px] items-center flex absolute top-[60px] right-2 bg-white p-5 rounded-xl shadow-md">
              <div className="flex gap-4  items-center font-bold flex-col">
                <p>Features</p>
                <p>Support</p>

                <p
                  className="border-1 py-2 px-8  text-black rounded-3xl cursor-pointer border-blue-700 hover:border-blue-500"
                  onClick={redirectToLogin}
                >
                  Log In
                </p>
                <p
                  className="border-1 py-2 px-8 bg-blue-700 text-white rounded-3xl cursor-pointer hover:bg-blue-500"
                  onClick={redirectToSignup}
                >
                  Sign Up
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
