import React, { useState } from "react";
import login from "../assets/login.webp";
import LoginForm from "../components/core/LoginForm";
import RegisterForm from "../components/core/RegisterForm";

export default function Login() {
  const [splitForm, setSplitForm] = useState(true);

  const changeFormToLogin = () => {
    setSplitForm(true);
  };
  const changeFormToRegister = () => {
    setSplitForm(false);
  };

  return (
    <div className=" flex flex-col mt-6">
      <div>
        <div className=" flex flex-row justify-center items-center gap-7">
          <h1
            className={`hover:cursor-pointer font-medium text-lg ${splitForm ? " scale-110 text-cyan-500" : ""}`} 
            onClick={changeFormToLogin}
          >
            Login
          </h1>
          <h1
            className={`hover:cursor-pointer font-medium text-lg ${splitForm ? "" : " scale-110 text-cyan-500"}`}
            onClick={changeFormToRegister}
          >
            Register
          </h1>
        </div>
        <div className=" w-[60%] border border-slate-200 m-auto mt-3"></div>
      </div>

      <div className=" flex flex-col justify-center items-center gap-16 my-20 md:flex-row">
        <div>
          <img src={login} width={400} alt="Login"></img>
        </div>
        <div className=" md:w-[30%] border border-black rounded-md p-8 ">{splitForm ? <LoginForm /> : <RegisterForm />}</div>
      </div>
    </div>
  );
}
