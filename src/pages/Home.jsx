import React from "react";
import SearchSection from "../components/core/homepage/SearchSection";
import CardSection from "../components/core/homepage/CardSection";
import AppDownloadSection from "../components/core/homepage/AppDownloadSection";
import { cardData } from "../data/cardSectiondata";
import {MdDiscount} from "react-icons/md"

export default function Home() {
  return (
    <div className=" flex flex-col gap-16">
      {/* section 1 */}
      <section className="homepage">
        {/* <img src={homeLogo} alt="home" className=' w-full mix-blend-darken'/> */}
        <SearchSection />
      </section>

      <div className=" text-center space-y-2">
        <h1 className=" text-3xl font-semibold">
          Largest Healthcare Network Across India
        </h1>
        <h1 className=" text-lg opacity-75">
          Find best doctors across specialities or hospitals in your city.
        </h1>
      </div>

      {/* Section 2 */}
      <div className="">
        <div className=" flex flex-col md:flex-row md:justify-center items-center flex-wrap gap-5">
          {cardData.map((item, index) => (
            <div className=" shadow-sm shadow-slate-500 rounded-md flex gap-4 p-8 md:w-[38%] w-[70%] h-60">
              <img src={item.image} alt="" width={200} className=" rounded-xl"/>
              <div className=" flex flex-col gap-3 items-start">
                <h1 className=" text-xl font-medium">{item.title}</h1>
                <p className=" text">{item.description}</p>
                <button className=" px-6 py-2 bg-blue-500 border border-blue-500 text-white text-sm font-medium rounded-md hover:text-blue-500 hover:bg-white transition-all duration-200">{item.button}</button>
                <div className="flex items-center gap-2 text-red-600"><MdDiscount/>
                {item.discount}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 */}
      <div className="">
        <CardSection/>
      </div>


      {/* last section */}
      <div>
        <AppDownloadSection/>
      </div>
    </div>
  );
}
