import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSignupData } from '../../reducer/slices/authSlice';
import { doctorSignUp } from '../../services/operations/authAPI';

export default function DoctorRegister() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    specialization: "",
    qualification: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signupData } = useSelector((state) => state.auth);

  const { firstName, lastName, email, password, specialization, qualification } = formData;

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
      doctorSignUp(firstName, lastName, email, password, specialization, qualification, navigate)
    );

    // console.log(formData);
    console.log("sihgdccad");
    console.log(signupData);
    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      specialization: "",
      qualification: "",
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
              className=" border border-slate-400 rounded-md w-full px-2 py-2"
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
              className=" border border-slate-400 rounded-md w-full px-2 py-2"
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
            className=" border border-slate-400 rounded-md w-full px-2 py-2"
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
            className=" border border-slate-400 rounded-md w-full px-2 py-2"
          />
        </label>
        <div className=" flex flex-col justify-between gap-2">
          <label htmlFor="firstName">
            <p>
              Specialization<sup className="text-black">*</sup>
            </p>
            <select
              name="specialization"
              id="specialization"
              value={specialization}
              onChange={changeHandler}
              className=" border border-slate-400 rounded-md w-full px-2 py-2"
            >
              <option value="">Select</option>
              <option value="ENT">ENT</option>
              <option value="GYNO">GYNO</option>
              <option value="ORTHO">ORTHO</option>
              <option value="CARDIO">CARDIO</option>
              <option value="DENTAL">DENTAL</option>
            </select>
          </label>
          <label htmlFor="lastName">
            <p>
              Qualification<sup className="text-black">*</sup>
            </p>
            <select
              name="qualification"
              id="qualification"
              value={qualification}
              onChange={changeHandler}
              className=" border border-slate-400 rounded-md w-full px-2 py-2"
            >
              <option value="">Select</option>
              <option value="MBBS">MBBS</option>
              <option value="MD">MD</option>
              <option value="PGDMA">PGDMA</option>
            </select>
          </label>
        </div>
        <button className=" py-1 w-full border rounded-md bg-blue-700 text-white text-lg font-medium">
            Register
          </button>
      </form>
    </div>
  )
}
