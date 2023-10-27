import React from "react";
import logo from "../../assets/doctors_logo2.png";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdOutlineDoubleArrow, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className=" bg-gray-900 text-white p-12">
      <div className="flex flex-col md:flex-row gap-5">
        <div className=" flex flex-col gap-5 flex-wrap flex-1">
          <img src={logo} alt="logo" width={200} />
          <p className="text-lg font-normal">
            TheDoctors is a registered start up company empanelled with 2000
            plus doctors and 5 lacs patients lives touched.
          </p>
          <div className=" flex gap-4">
            <FaFacebook className=" text-2xl hover:cursor-pointer hover:text-blue-600" />
            <FaTwitter className=" text-2xl hover:cursor-pointer hover:text-blue-600" />
            <FaLinkedinIn className=" text-2xl hover:cursor-pointer hover:text-blue-600" />
            <FaInstagram className=" text-2xl hover:cursor-pointer hover:text-blue-600" />
            <FaYoutube className=" text-2xl hover:cursor-pointer hover:text-blue-600" />
          </div>
        </div>

        <div className=" flex flex-col gap-5 flex-1">
          <h1 className=" text-3xl">For Information</h1>
          <div className=" h-1 w-20 bg-blue-800"></div>
          <ul className="flex flex-col gap-3 text-lg">
            <ul className=" flex gap-3 items-center">
              <MdOutlineDoubleArrow />
              <Link to='/about' className=" hover:transition-transform hover:duration-500 hover:cursor-pointer hover:translate-x-2">
                {" "}
                About Us
              </Link>{" "}
            </ul>
            <ul className=" flex gap-3 items-center">
              <MdOutlineDoubleArrow />
              <p className=" hover:transition-transform hover:duration-500 hover:cursor-pointer hover:translate-x-2">
                {" "}
                Booking Guide
              </p>{" "}
            </ul>
            <ul className=" flex gap-3 items-center">
              <MdOutlineDoubleArrow />
              <p className=" hover:transition-transform hover:duration-500 hover:cursor-pointer hover:translate-x-2">
                {" "}
                Pharmacy
              </p>{" "}
            </ul>
            <ul className=" flex gap-3 items-center">
              <MdOutlineDoubleArrow />
              <p className=" hover:transition-transform hover:duration-500 hover:cursor-pointer hover:translate-x-2">
                {" "}
                Careers
              </p>{" "}
            </ul>
            <ul className=" flex gap-3 items-center">
              <MdOutlineDoubleArrow />
              <p className=" hover:transition-transform hover:duration-500 hover:cursor-pointer hover:translate-x-2">
                {" "}
                Press Release
              </p>{" "}
            </ul>
            <ul className=" flex gap-3 items-center">
              <MdOutlineDoubleArrow />
              <p className=" hover:transition-transform hover:duration-500 hover:cursor-pointer hover:translate-x-2">
                {" "}
                FAQ'S
              </p>
            </ul>
          </ul>
        </div>

        <div className=" flex flex-col gap-5 flex-1">
          <h1 className=" text-3xl">Helpful Links</h1>
          <div className=" h-1 w-20 bg-blue-800"></div>
          <ul className="flex flex-col gap-3 text-lg">
            <ul className=" flex gap-3 items-center">
              <MdOutlineDoubleArrow />
              <p className=" hover:transition-transform hover:duration-500 hover:cursor-pointer hover:translate-x-2">
                {" "}
                Book Appointment
              </p>{" "}
            </ul>
            <ul className=" flex gap-3 items-center">
              <MdOutlineDoubleArrow />
              <p className=" hover:transition-transform hover:duration-500 hover:cursor-pointer hover:translate-x-2">
                {" "}
                Franchisee Register
              </p>
            </ul>
            <ul className=" flex gap-3 items-center">
              <MdOutlineDoubleArrow />
              <p className=" hover:transition-transform hover:duration-500 hover:cursor-pointer hover:translate-x-2">
                {" "}
                SMS Booking
              </p>{" "}
            </ul>
            <ul className=" flex gap-3 items-center">
              <MdOutlineDoubleArrow />
              <p className=" hover:transition-transform hover:duration-500 hover:cursor-pointer hover:translate-x-2">
                {" "}
                Services
              </p>{" "}
            </ul>
          </ul>
        </div>

        <div className=" flex flex-col gap-5 flex-1">
          <h1 className=" text-3xl">Contact Us</h1>
          <div className=" h-1 w-20 bg-blue-800"></div>
          <ul className="flex flex-col gap-3 text-lg">
            <ul className=" flex gap-3 items-center">
              <FaLocationDot />
              QWKPRO CONSULTANCY PVT LTD, Indore, Madhya Pradesh
            </ul>
            <ul className=" flex gap-3 items-center">
              <FaPhoneAlt /> +91 835804014
            </ul>
            <ul className=" flex gap-3 items-center">
              <MdEmail />
              Customer Support : support@thedoctors.com
            </ul>
            <ul className=" flex gap-3 items-center">
              <MdEmail />
              Official Queries : info@thedoctors.com
            </ul>
          </ul>
        </div>
      </div>

      <div className=" border w-full my-8 border-gray-700"></div>

      <div className=" flex md:flex-row md:justify-between flex-col gap-3 text-lg font-normal">
        <p>© 2023 TheDoctors. All rights reserved.</p>
        <div className=" flex">
          <p className=" hover:cursor-pointer hover:text-green-600">
            Terms and Conditions
          </p>
          <div className=" border border-white mx-3"></div>
          <p className=" hover:cursor-pointer hover:text-green-600">Policy</p>
        </div>
      </div>
    </div>
  );
}
