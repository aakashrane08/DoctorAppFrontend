import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchSection() {
  return (
    <div className=" flex justify-center  px-10 py-24">
      <div className=" flex flex-col items-center gap-6">
        <h1 className=" text-3xl md:text-4xl font-bold">
          View Doctors, Book an Appointment
        </h1>
        <h1 className=" text-xl">
          Find the best doctors, clinics & hospitals in the city nearest to you.
        </h1>
        <div className=" flex gap-4 ">
          <label htmlFor="text">
            <input
              type="text"
              id="text"
              placeholder="Search"
              className=" border text-black border-black rounded py-3 pl-3 pr-24 w-full"
            />
          </label>
          <button className=" bg-blue-600 text-white py-3 px-4 rounded">
            <FaMagnifyingGlass />
          </button>
        </div>
      </div>
    </div>
  );
}
