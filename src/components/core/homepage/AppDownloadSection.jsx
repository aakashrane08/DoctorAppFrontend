import React from "react";
import appImg from "../../../assets/footer-img.png";
import playStore from "../../../assets/playstore-svgrepo-com (1).png"

export default function AppDownloadSection() {
  return (
    <div className=" flex flex-col items-center gap-12 md:gap-0 md:flex-row justify-evenly py-24">
      <div>
        <img src={appImg} alt="" width={350} />
      </div>

      <div className="flex flex-col gap-4">
        <h1 className=" text-4xl font-semibold">Download TheDoctors App</h1>
        <h1 className=" text-lg">Book appointment & health checkups;</h1>
        <h1 className=" text-lg">Online lab test & consult doctor online</h1>
        <h1 className=" text-lg">Get the link to download the app</h1>
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
        <button className=" flex items-center gap-2 my-6 border border-black w-fit py-3 px-8 rounded-full hover:shadow-md hover:shadow-blue-400 transition-all duration-500">
          <img src={playStore} alt="" width={20}/>
          <p>Play Store</p>
        </button>
      </div>
    </div>
  );
}
