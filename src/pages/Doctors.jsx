import React from "react";
import security1 from "../assets/security_1.png";
import security2 from "../assets/security_2.png";
import security3 from "../assets/security_3.png";
import security4 from "../assets/security_4.png";
import security5 from "../assets/security_5.png";
import check from "../assets/check-svgrepo-com.png";
import doc from "../assets/doctor_home.png";
import order from "../assets/order..svg";
import playStore from "../assets/google_badge..png"
import appStore from "../assets/appstore_badge..png"
import appImg from "../assets/app1.png"
import { Link } from "react-router-dom";

export default function Doctors() {
  return (
    <div className=" flex flex-col">
      <div className=" doctorpage text-white flex flex-col justify-around items-center py-24 gap-16">
        <h1 className=" text-5xl font-semibold">Your home for Health</h1>
        <div className=" flex flex-col gap-5 items-center">
          <h1 className=" text-2xl font-medium">Find and Book</h1>
          <input
            type="search"
            placeholder="Search Doctors"
            className=" h-11 pr-64 pl-3 rounded text-black"
          />
        </div>
      </div>

      {/* section 1 */}
      <div className=" flex flex-col gap-8 py-20 bg-slate-100">
        <div className=" flex justify-around items-center flex-col md:flex-row">
          <div className=" flex flex-col gap-4">
            <h1 className=" text-4xl">Safety of your data is our</h1>
            <h1 className=" text-4xl font-bold">top priority.</h1>
            <ul className=" text-lg opacity-90 space-y-1">
              <li className="flex gap-5">
                <img src={check} alt="" width={25} />
                Multi-level security checks
              </li>
              <li className="flex gap-5">
                <img src={check} alt="" width={25} />
                Multiple data backups
              </li>
              <li className="flex gap-5">
                <img src={check} alt="" width={25} />
                Stringent data privacy policies
              </li>
            </ul>
          </div>
          <div>
            <img src={security1} alt="" width={280} />
          </div>
        </div>

        <div className=" flex gap-24 justify-center flex-wrap">
          <div className=" flex flex-col gap-2 items-center ">
            <img src={security2} alt="" />
            <p>256-bit encryption</p>
          </div>
          <div className=" flex flex-col gap-2 items-center">
            <img src={security3} alt="" />
            <p>ISO 27001 certified</p>
          </div>
          <div className=" flex flex-col gap-2 items-center">
            <img src={security4} alt="" />
            <p>HIPAA compliant data centers</p>
          </div>
          <div className=" flex flex-col gap-2 items-center">
            <img src={security5} alt="" />
            <p>DSCI member</p>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className=" flex flex-col gap-8 py-20">
        <div className=" flex justify-evenly items-center flex-col md:flex-row">
          <div className=" flex flex-col gap-4">
            <h1 className=" text-4xl">Instant appointment with doctors.</h1>
            <h1 className=" text-4xl font-bold">Guaranted.</h1>
            <ul className=" text-lg opacity-90 space-y-1">
              <li className="flex gap-2">
                <img src={check} alt="" width={25} />
                <span className=" font-medium">1000+</span>Verified doctors
              </li>
              <li className="flex gap-2">
                <img src={check} alt="" width={25} />
                <span className=" font-medium">3M+</span>Patient recommendations
              </li>
              <li className="flex gap-2">
                <img src={check} alt="" width={25} />
                <span className=" font-medium">25M</span>Patients/year
              </li>
            </ul>
            <Link to="/alldoctors">
              <button className=" text-white rounded w-56 py-2 bg-blue-500">
                Find me the right doctor
              </button>
            </Link>
          </div>
          <div>
            <img
              src={doc}
              alt=""
              width={400}
              className=" filter drop-shadow-lg rounded-full"
            />
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className=" flex flex-col gap-8 py-20 bg-slate-100">
        <div className=" flex justify-evenly items-center flex-col md:flex-row">
          <div>
            <img
              src={order}
              alt=""
              width={400}
              className=" filter drop-shadow-lg rounded-full"
            />
          </div>
          <div className=" flex flex-col gap-4">
            <h1 className=" text-4xl">Get all your medicines.</h1>
            <h1 className=" text-4xl font-bold">Everytime. On time.</h1>
            <ul className=" text-lg opacity-90 space-y-1">
              <li className="flex gap-2">
                <img src={check} alt="" width={25} />
                Guaranteed availability
              </li>
              <li className="flex gap-2">
                <img src={check} alt="" width={25} />
                Over <span className=" font-medium">15,000+</span>genuine
                medicines
              </li>
              <li className="flex gap-2">
                <img src={check} alt="" width={25} />
                Home delivery in 24hrs
              </li>
            </ul>
            <Link to="/medicines">
              <button className=" text-white rounded w-56 py-2 bg-blue-500">
                Order Medicines
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* app download */}
      <div className="bg-gradient-to-b from-blue-500 to-slate-50">
        <div className=" flex flex-col items-center gap-12 md:gap-0 md:flex-row justify-evenly py-24">
          <div>
            <img src={appImg} alt="" width={450} />
          </div>

          <div className="flex flex-col gap-4">
            <h1 className=" text-4xl font-semibold">Download TheDoctors App</h1>
            <ul className=" text-lg space-y-1 pl-3">
              <li>Book appointments and lab tests</li>
              <li>Order medicines</li>
              <li>Consult doctors online</li>
              <li>Set medicine reminders</li>
              <li>Store health records</li>
              <li>Read health tips</li>
            </ul>
            <div className="flex gap-2 w-full mt-5">
              <input
                type="number"
                placeholder=" Enter phone number"
                className=" border border-black rounded w-2/3 py-2"
              />
              <button className=" w-1/3 px-3 py-2 bg-blue-700 border border-black rounded text-white hover:text-black transition-all duration-300 hover:bg-white">
                Send App Link
              </button>
            </div>
            <button className=" flex items-center gap-2 w-fit">
              <img src={playStore} alt="" width={150} />
              <img src={appStore} alt="" width={150}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
