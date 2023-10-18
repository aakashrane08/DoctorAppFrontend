import React from "react";
import SearchSection from "../components/core/homepage/SearchSection";
import CardSection from "../components/core/homepage/CardSection";
import AppDownloadSection from "../components/core/homepage/AppDownloadSection";

export default function Home() {
  return (
    <div className=" flex flex-col gap-16">
      {/* section 1 */}
      <section className="homelogo homecolor">
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
        <CardSection/>
      </div>


      {/* last section */}
      <div className="bg-gradient-to-b from-blue-500 to-slate-50">
        <AppDownloadSection/>
      </div>
    </div>
  );
}
