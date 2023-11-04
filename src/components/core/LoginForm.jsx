import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/operations/authAPI";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password } = formData;

  const changeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));

    setFormData({
      email: "",
      password: "",
    })
  };

  return (
    <div className=" w-full ">
      <form onSubmit={submitHandler} className=" flex flex-col gap-4">
        <label htmlFor="email">
          <p className=" mb-2">Email ID</p>
          <input
            type="email"
            required
            name="email"
            value={email}
            placeholder="Enter your Email"
            onChange={changeHandler}
            className=" border border-slate-400 rounded-md w-full px-4 py-2 outline-none"
          />
        </label>
        <label htmlFor="password">
          <p className=" mb-2">Password</p>
          <input
            type="password"
            required
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={changeHandler}
            className=" border border-slate-400 rounded-md w-full px-4 py-2 outline-none"
          />
        </label>
        <Link to="/forgotPassword">
        <p className=" text-end text-sm  text-blue-400">
          Forgot Password?
        </p></Link>
        <button className=" w-full py-2 border rounded-md bg-blue-700 text-white text-lg font-medium">
          LOGIN
        </button>
      </form>
    </div>
  );
}
