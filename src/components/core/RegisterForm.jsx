import React, { useState } from "react";
import PatientRegister from "./PatientRegister";
import DoctorRegister from "./DoctorRegister";

export default function RegisterForm() {
  const [register, setRegister] = useState(true);

  const changeFormRegisterationPat = () => {
    setRegister(true);
  };
  const changeFormRegisterationDoc = () => {
    setRegister(false);
  };

  return (
    <div className="">
      <div className=" flex justify-between mx-4 mb-3 items-center">
        <h1 className=" text-2xl font-semibold text-indigo-600">Join Us</h1>
        {register ? (
          <p>
            Are you a Doctor ?{" "}
            <span
              className=" hover:cursor-pointer hover:text-blue-400 text-pink-400"
              onClick={changeFormRegisterationDoc}
            >
              Register Here
            </span>
          </p>
        ) : (
          <p
            className=" hover:cursor-pointer hover:text-blue-400 text-pink-400"
            onClick={changeFormRegisterationPat}
          >
            Not a Doctor?
          </p>
        )}
      </div>
      <div className=" w-full border border-gray-200"></div>
      {register ? <PatientRegister /> : <DoctorRegister />}
    </div>
  );
}
