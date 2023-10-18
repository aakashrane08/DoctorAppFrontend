import React from "react";
import { cardSectionData } from "../../../data/cardSectiondata";
import { Link } from "react-router-dom";

export default function CardSection() {
  return (
    <div>
      <div className=" flex flex-wrap justify-center gap-10">
        {cardSectionData.map((data, index) => (
          <div key={index} className=" shadow-md shadow-gray-400 rounded-3xl w-[210px]">
            <Link to={data.path}>
              <div className="">
              <img src={data.image} alt="" className=" bg-cyan-500 rounded-t-3xl h-[200px] scale- w-full"/>
              </div>
              <div className=" p-4">
              <p className=" text-xl font-semibold">{data.title}</p>
              <p className=" opacity-75 text-sm">{data.discription}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
