import React from "react";
import recommended from "../assets/labtests/recommended.png";
import { categories, howItWorks, weDoGreat, whyWithUs } from "../data/labTests";
import user from "../assets/labtests/user-img1.png";
import playStore from "../assets/google_badge..png";
import appStore from "../assets/appstore_badge..png";
import appImg from "../assets/app1.png";

export default function LabTests() {
  return (
    <div>
      {/* search section  */}
      <div className="bg-gradient-to-b from-sky-200 to-white p-24">
        <div className=" flex flex-col items-center gap-10 ">
          <h1 className=" text-5xl font-semibold">Book Diagnostic Tests</h1>
          <h4 className=" text-lg opacity-75 text-center">
            Choose from the list of top-selling packages tailored for you. We
            care for your health!
          </h4>
          <div className=" flex">
            <input
              type="search"
              placeholder="eg: Blood, Urine..."
              className=" outline-none w-96 p-3 rounded-l-md"
            />
            <button className=" rounded-r-md border px-10 bg-blue-500 text-white text-lg">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* upload prescription section  */}
      <div className=" bg-sky-200 mx-28 my-6 rounded-3xl flex justify-between px-14 py-10 relative">
        <div className="flex flex-col gap-6">
          <h4 className=" px-3 py-1 bg-white rounded-md w-fit">Recommended</h4>
          <h1 className=" text-4xl font-medium">Now Book lab tests at home</h1>
          <h4 className=" text-lg opacity-90">
            Book lab tests online for all diagnostic procedures from the most
            trusted pathology lab
          </h4>
          <button className=" px-10 w-fit py-2 bg-blue-600 border-2 border-blue-600 text-white text-lg rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all duration-500">
            Upload Prescription
          </button>
        </div>
        <img
          src={recommended}
          alt=""
          width={400}
          className=" md:absolute md:right-24 md:bottom-0"
        />
      </div>

      {/* categories section  */}
      <div className="  mx-28 my-14">
        <h4 className=" text-lg tracking-widest opacity-75">CATEGORIES</h4>
        <h1 className=" text-3xl font-medium mt-2">Popular Tests</h1>
        <div className=" p-10 flex justify-center items-center gap-24 flex-wrap">
          {categories.map((item) => (
            <div className=" flex flex-col justify-center items-center gap-3 cursor-pointer">
              <div className=" bg-sky-100 rounded-full w-fit">
                <img src={item.image} alt="" width={50} className=" m-8" />
              </div>
              <h3 className=" text-lg">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* need help section  */}
      <div className=" flex justify-between items-center bg-sky-100  py-1 px-6 rounded-xl mx-24 my-6">
        <img src={user} alt="" width={80} className=" rounded-full" />
        <p className=" text-lg">
          Need help with booking your test? Our experts are here to help you
        </p>
        <p className=" text-xl font-semibold">+91 835804014</p>
      </div>

      {/* how it works */}
      <div className=" my-24 mx-32">
        <h1 className=" text-center my-10 text-3xl font-medium uppercase">How it Works</h1>
        <div className=" flex justify-center items-center md:flex-row flex-col gap-32">
          {howItWorks.map((item) => (
            <div className=" flex flex-col justify-center items-center gap-3">
              <div className=" bg-pink-200 rounded-full w-32 h-32 flex justify-center items-center">
                <img src={item.image} alt="" width={50} className=""/>
              </div>
              <h3 className=" text-xl font-medium">{item.title}</h3>
              <p className=" text-lg text-center ">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* why book us */}
      <div className=" my-24 mx-32">
        <h1 className=" text-center my-10 text-3xl font-medium ">Why Book With Us ?</h1>
        <div className=" flex justify-center items-center md:flex-row flex-col gap-32">
          {whyWithUs.map((item) => (
            <div className=" flex flex-col justify-center items-center gap-3">
              <div className=" bg-blue-200 rounded-full w-32 h-32 flex justify-center items-center">
                <img src={item.image} alt="" width={50} className=""/>
              </div>
              <h3 className=" text-xl font-medium">{item.title}</h3>
              <p className=" text-lg text-center ">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* we do great */}
      <div className=" my-24  mx-32">
        <h1 className=" text-center my-10 text-3xl font-medium">We do Great</h1>
        <div className=" flex justify-center items-center flex-col md:flex-row flex-wrap gap-32">
          {weDoGreat.map((item) => (
            <div className=" flex flex-col justify-center items-center gap-3">
              <div className=" bg-pink-200 rounded-full w-32 h-32 flex justify-center items-center">
                <img src={item.image} alt="" width={50} className=""/>
              </div>
              <h3 className=" text-xl font-medium">{item.description}</h3>
            </div>
          ))}
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
                className=" border border-black rounded w-2/3 py-2 outline-none"
              />
              <button className=" w-1/3 px-3 py-2 bg-blue-700 border border-black rounded text-white hover:text-black transition-all duration-300 hover:bg-white">
                Send App Link
              </button>
            </div>
            <button className=" flex items-center gap-2 w-fit">
              <img src={playStore} alt="" width={150} />
              <img src={appStore} alt="" width={150} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
