import { createUserWithEmailAndPassword } from "firebase/auth";
import React, {  useState } from "react";
import { auth, db } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { CircularProgress } from "@mui/material";

const Signup = () => {
  const [loading, setLoading] = useState(false);

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const role = "user";

  const [fullNameError, setFullNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  const signUp = (e) => {
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
    if (fullName === "") {
      setFullNameError(true);
      setLoading(false);
    } else {
      setFullNameError(false);
    }

    if (phoneNumber === "") {
      setPhoneNumberError(true);
      setLoading(false);
    } else {
      setPhoneNumberError(false);
    }

    if (email && password && fullName && phoneNumber) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const userId = userCredential.user.uid;
          const userData = {
            fullName: fullName,
            email: userCredential.user.email,
            phoneNumber: phoneNumber,
            role: role,
          };

          navigate("/dashboard");
          const usersCollectionRef = doc(db, "users", userId);
          await setDoc(usersCollectionRef, {
            ...userData,
            userId,
          });
          console.log("User registered successfully!");
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error registering user:", error);
          setLoading(false);
        });
    }
  };

  const redirectToSignIn = () => {
    navigate("/");
  };
  return (
    <div className="w-full flex items-center justify-center h-screen lg:h-[80vh]">
    <div className="flex flex-col justify-center  w-full md:w-[700px] items-center h-[80vh] lg:h-[80vh]">
      <form
        onSubmit={signUp}
        className="flex flex-col  w-[80%] p-5 md:p-[40px] "
      >
        <h1 className="text-2xl font-medium mb-10 text-center">Create a CryptoMe Account</h1>
        <input
          type="Full Name"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={
            "border-1 sm:p-6 p-4 rounded-md my-3" +
            (fullNameError ? "border-red-500" : "")
          }
        ></input>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={
            "border-1 sm:p-6 p-4 rounded-md my-3" +
            (emailError ? "border-red-500" : "")
          }
        ></input>
        <input
          type="Phone Number"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className={
            "border-1 sm:p-6 p-4 rounded-md my-3" +
            (phoneNumberError ? "border-red-500" : "")
          }
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={
            "border-1 sm:p-6 p-4 rounded-md my-3" +
            (passwordError ? "border-red-500" : "")
          }
        ></input>
        <div className="">
          <button
            type="submit"
            style={{ background: "#102B32" }}
            className=" sm:p-6 p-4 my-3 rounded-md w-full font-semibold text-white"
          >
            {loading ? <CircularProgress size={20} sx={{color:"white"}}/> : "Sign Up"}
          </button>
          <button
            type="button"
            className="  sm:p-6 p-4 my-3 rounded-full w-full font-semibold  "
            onClick={redirectToSignIn}
          >
            Log In
          </button>
        </div>
      </form>
    </div></div>
  );
};

export default Signup;
