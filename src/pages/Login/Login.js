import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { useStateContext } from "../../constants/ContextProvider";

const Login = () => {
//   const { setActiveProfile } = useStateContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    setLoading(true);
    if (email === "") {
      setEmailError(true);
      setLoading(false);
    } else {
      setEmailError(false);
    }
    if (password === "") {
      setPasswordError(true);
      setLoading(false);
    } else {
      setPasswordError(false);
    }
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigate("/dashboard");
          setLoading(false);
        //   setActiveProfile(false)
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log("Sign In Error:", errorMessage);
          toast.error("Invalid email or password");
          setLoading(false);
        });
    }
  };

  const redirectToRegister = () => {
    navigate("/signup");
  };

  return (
      <div className="flex flex-col items-center justify-center h-screen lg:h-[80vh]">
        <div className="xl:w-[700px] w-full flex flex-col items-center justify-center ">
          <p className=" md:text-3xl text-xl" style={{ color: "#102B32" }}>
            Welcome to CryptoMe
          </p>
          <form onSubmit={signIn} className="flex flex-col  lg:w-[80%] w-full lg:p-5  md:p-[100px] p-5 lg:gap-5 gap-1 ">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={
                "border-1 sm:p-6 p-4 rounded-md lg:my-3 my-1" +
                (emailError ? "border-red-500" : "")
              }
            ></input>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={
                "border-1 sm:p-6 p-4 rounded-md lg:my-3 my-1" +
                (passwordError ? "border-red-500" : "")
              }
            ></input>
            <div className="flex w-full justify-end">
              <Link to="/" className="mt-2 mb-6 underline text-green-700">
                Forgot Password?
              </Link>
            </div>
            <div className="">
              <button
                type="submit"
                style={{ background: "#102B32" }}
                className=" sm:p-6 p-4 my-3 rounded-md w-full font-semibold text-white"
              >
                {loading ? <CircularProgress size={20} sx={{color:"white"}}/> : " Log In"}
              </button>
            </div>
            <button
              type="button"
              className=" sm:p-6 p-4 lg:my-3 my-1 rounded-full  font-semibold "
              onClick={redirectToRegister}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

  );
};

export default Login;
