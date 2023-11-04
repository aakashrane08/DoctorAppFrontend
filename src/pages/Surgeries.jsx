import React from "react";
import icon1 from "../assets/surgeries/care-list-icon1.png";
import icon2 from "../assets/surgeries/care-list-icon2.png";
import icon3 from "../assets/surgeries/care-list-icon3.png";
import clinic from "../assets/clinic.png";

import { surgeries, surgeries1 } from "../data/surgeries";
import AppDownloadSection from "../components/core/homepage/AppDownloadSection";

export default function Surgeries() {
  return (
    <div>
      {/* search section  */}
      <div className="bg-gradient-to-b from-cyan-200 to-white p-24">
        <div className=" flex flex-col gap-5 justify-center items-center border bg-white rounded-3xl px-10 py-7 shadow-md">
          <h1 className=" text-xl font-medium">
            Let’s schedule your appointment
          </h1>
          <div className=" flex flex-col md:flex-row gap-5 w-full">
            <input
              type="text"
              placeholder="Name*"
              className=" border rounded border-blue-600 w-full py-3 pl-3 outline-none"
            />
            <input
              type="text"
              placeholder="Phone number*"
              className=" border rounded border-blue-600 w-full py-3 pl-3 outline-none overflow-auto"
            />
            <input
              type="text"
              placeholder="Location*"
              className=" border rounded border-blue-600 w-full py-3 pl-3 outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Write Your Query*"
            className=" border rounded border-blue-600 w-full pb-20 pl-3 pt-3 outline-none"
          />
          <button className=" px-5 py-2 border-2 rounded-md border-blue-500 bg-blue-500 hover:bg-white hover:text-blue-500 text-lg font-medium text-white transition-all duration-500">
            Book Appointment
          </button>
        </div>

        <div className=" flex flex-col md:flex-row mt-24 mx-16 px-5 py-5 justify-center items-start gap-5">
          <div className=" flex flex-col gap-8 justify-center items-center w-full">
            <img
              src={icon1}
              alt=""
              width={50}
              className="rounded-full bg-slate-200 p-2"
            />
            <p className=" text-lg text-center">
              Expert surgeons with 10+ years of experience
            </p>
          </div>
          <div className=" flex flex-col gap-8 justify-center items-center w-full">
            <img
              src={icon2}
              alt=""
              width={50}
              className="rounded-full bg-slate-200 p-2"
            />
            <p className=" text-lg text-center">
              Advanced Surgical Technologies
            </p>
          </div>
          <div className=" flex flex-col gap-8 justify-center items-center w-full">
            <img
              src={icon3}
              alt=""
              width={50}
              className="rounded-full bg-slate-200 p-2"
            />
            <p className=" text-lg text-center">Personal Care Assistants</p>
          </div>
          <div className=" flex flex-col gap-8 justify-center items-center w-full">
            <img
              src={icon2}
              alt=""
              width={50}
              className="rounded-full bg-slate-200 p-2"
            />
            <p className=" text-lg text-center">
              High quality, affordable surgical procedures
            </p>
          </div>
        </div>
      </div>

      {/* section  */}
      <div className="mx-32 flex flex-col md:flex-row justify-between items-center gap-24 border-y-2 py-10">
        <div className=" flex justify-evenly gap-64">
          <div className=" flex flex-col justify-center items-center">
            <h1 className=" text-2xl font-medium">100+</h1>
            <p className=" text-lg">Surgeons</p>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <h1 className=" text-2xl font-medium">30+</h1>
            <p className=" text-lg">Clinics</p>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <h1 className=" text-2xl font-medium">50+</h1>
            <p className=" text-lg">Procedures</p>
          </div>
        </div>
        <div className=" flex flex-col gap-2 items-center border rounded-xl bg-cyan-200 w-full py-5">
          <img src={clinic} alt="" width={75} />
          <p className=" text-lg">10+ Locations</p>
        </div>
      </div>

      {/* Surgeries section  */}
      <div className=" md:mx-24 mx-5 my-10 space-y-5">
        <h1 className=" text-3xl font-medium">Surgeries we provide</h1>
        <div className="border border-slate-300 rounded-md flex flex-wrap gap-x-40 py-9  px-16 md:px-24 md:gap-x-64 md:gap-y-10 gap-y-10">
          {surgeries.map((item, index) => (
            <div className=" flex flex-col justify-center items-center gap-3 cursor-pointer">
              <div className=" rounded-full bg-slate-100 w-fit p-3">
                <img src={item.image} alt="" width={60} className="" />
              </div>
              <p className=" text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* why theDoctors  */}
      <div className=" md:mx-20 mx-5 my-10 space-y-14 border-y-2 py-4">
        <h1 className=" text-3xl font-medium text-center">
          Why TheDoctors Healthcare ?
        </h1>
        <div className=" flex flex-wrap gap-14 justify-center">
          {surgeries1.map((item) => (
            <div className=" flex flex-col gap-3 items-center md:w-[28%] w-[80%] ">
              <div className=" rounded-full bg-blue-100 w-fit p-5">
                <img src={item.image} alt="" width={40} className="" />
              </div>
              <h1 className=" text-xl text-center">{item.heading}</h1>
              <p className=" text-center">{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>

      <AppDownloadSection/>
    </div>
  );
}
