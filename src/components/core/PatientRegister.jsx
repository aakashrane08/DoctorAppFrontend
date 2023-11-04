import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { patientSignUp } from "../../services/operations/authAPI";
import { setSignupData } from "../../reducer/slices/authSlice";

export default function PatientRegister() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    bloodGroup: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signupData } = useSelector((state) => state.auth);

  const { firstName, lastName, email, password, bloodGroup } = formData;

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(setSignupData(formData));
    dispatch(
      patientSignUp(firstName, lastName, email, password, bloodGroup, navigate)
    );

    console.log(formData);
    console.log("sihgdccad");
    console.log(signupData);
    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      bloodGroup: "",
    });
  };
  return (
    <div>
      <form onSubmit={submitHandler} className=" mt-4 flex flex-col gap-4">
        <div className=" flex justify-between gap-2">
          <label htmlFor="firstName">
            <p>
              First Name<sup className="text-black">*</sup>
            </p>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              placeholder="First Name"
              onChange={changeHandler}
              className=" border border-slate-400 rounded-md w-full px-2 py-2 outline-none"
            />
          </label>
          <label htmlFor="lastName">
            <p>
              Last Name<sup className="text-black">*</sup>
            </p>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              placeholder="Last Name"
              onChange={changeHandler}
              className=" border border-slate-400 rounded-md w-full px-2 py-2 outline-none"
            />
          </label>
        </div>
        <label htmlFor="email">
          <p>
            Email<sup className="text-black">*</sup>
          </p>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="Enter Email"
            onChange={changeHandler}
            className=" border border-slate-400 rounded-md w-full px-2 py-2 outline-none"
          />
        </label>
        <label htmlFor="password">
          <p>
            Password<sup className="text-black">*</sup>
          </p>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="Enter Password"
            onChange={changeHandler}
            className=" border border-slate-400 rounded-md w-full px-2 py-2 outline-none"
          />
        </label>
        <div className=" flex justify-between items-end">
          <label htmlFor="bloodGroup">
            <p>
              Blood Group<sup className="text-black">*</sup>
            </p>
            <select
              name="bloodGroup"
              id="bloodGroup"
              value={bloodGroup}
              onChange={changeHandler}
              className=" border border-slate-400 rounded-md w-fit px-2 py-2 outline-none"
            >
              <option value="">Select</option>
              <option value="APLUS">A+</option>
              <option value="AMINUS">A-</option>
              <option value="BPLUS">B+</option>
              <option value="BMINUS">B-</option>
              <option value="OPLUS">O+</option>
              <option value="OMINUS">O-</option>
            </select>
          </label>
          <button className=" py-1 w-2/3 border rounded-md bg-blue-700 text-white text-lg font-medium">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
