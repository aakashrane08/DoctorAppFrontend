import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { healthCondition } from "../data/medicines";
import { Link } from "react-router-dom";
import hto from "../assets/Medicines/sample.jpg";
import { FcCheckmark } from "react-icons/fc";
import kym from '../assets/Medicines/full-width-4.2a2a16cc.png'

export default function Medicines() {
  return (
    <div className=" ">
      {/* search section  */}
      <div className=" flex justify-between my-3 mx-36">
        <input
          type="search"
          id=""
          placeholder="Search for Medicines, Health products and more"
          className=" outline-none border shadow-xl md:w-[40%] w-full p-3 rounded-md border-slate-300"
        />
        <button className=" hidden md:flex justify-center items-center gap-3 bg-sky-400 py-3 px-6 text-lg rounded font-medium">
          <FaCartPlus /> <span>View Cart</span>
        </button>
      </div>

      {/* main section  */}
      <div className=" medicineBg flex items-center px-44 py-32 ">
        <div className=" flex flex-col gap-8 border border-slate-400 px-24 py-20 rounded backdrop-blur-sm">
          <h1 className=" text-5xl font-semibold">One stop Pharmacy</h1>
          <h1 className=" text-xl opacity-80">for all your health needs...</h1>
        </div>
      </div>

      {/*health condition section  */}
      <div className=" flex flex-col gap-8 my-16 mx-32">
        <h1 className=" font-semibold text-2xl">
          Browse medicines & health products
        </h1>
        <div className=" flex justify-center flex-wrap gap-4">
          {healthCondition.map((item) => (
            <Link className="">
              <img
                src={item.image}
                alt=""
                width={275}
                className=" rounded-md hover:scale-105 transition-all duration-300"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* img section  */}
          <div className=" bg-slate-200 pt-5 px-14 md:px-36">
          <img src={kym} alt="" />
          </div>

      {/* how to order  */}
      <div className=" flex flex-col md:flex-row gap-32 justify-center items-center my-24 mx-32">
        <div className=" flex flex-col gap-5">
          <div>
            <h1 className=" font-medium text-5xl">How to order medicines</h1>
            <h1 className=" font-light text-5xl">on TheDoctors?</h1>
          </div>
          <div>
            <p className=" text-lg flex items-center gap-4"><FcCheckmark /> Upload valid Prescription</p>
            <p className=" text-lg flex items-center gap-4"><FcCheckmark />Receive a confirmation call</p>
            <p className=" text-lg flex items-center gap-4"><FcCheckmark />Delivery at your door step</p>
          </div>
          <div>
            <h1 className=" font-light text-5xl">Don't have Prescription?</h1>
            <h1 className=" font-light text-5xl">Don't worry!</h1>
          </div>
          <p className=" text-lg opacity-90">Simply search & add the medicines OR get consultation from Us</p>
        </div>
        <div>
          <img src={hto} alt="" width={500} className=" rounded-md"/>
        </div>
      </div>
    </div>
  );
}
