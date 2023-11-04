import React, { useState } from "react";
import logo from "../../assets/doctors_logo2.png";
import { Link, matchPath, useLocation } from "react-router-dom";
import { NavbarLinks } from "../../data/navbarLinks";
import { FaBarsStaggered } from "react-icons/fa6";
import {CgMathPlus} from "react-icons/cg"
import { useSelector } from "react-redux";
import ProfileDropdown from "./ProfileDropdown";

export default function Navbar() {
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const { token } = useSelector((state) => state.auth);

  function matchRoute(route) {
    return matchPath({ path: route }, location.pathname);
  }

  function menuHandler() {
    setOpen((prev) => !prev)
  }

  return (
    <div className=" border border-b border-b-gray-400 shadow-md">
      {open === true && (
        <div  className=" px-2 shadow-lg space-y-2 shadow-black bg-sky-400 border-black absolute w-[35%] h-full block md:hidden overflow-x-hidden overflow-y-auto transition-all duration-300">
          <Link to='/'  className=" flex justify-center  gap-4">
            <img src={logo} alt="" width={200}/>
            <CgMathPlus className=" text-3xl rotate-45" onClick={() => setOpen(false)}/>
          </Link>
          <div className=" w-full border border-slate-300"></div>
          <ul className="space-y-3 p-5">
        {NavbarLinks.map((link, index) => (
          <li key={index} className=" text-2xl">
            <Link to={link?.path}>
              <div
                className={`${
                  matchRoute(link?.path)
                    ? "  font-bold block md:hidden"
                    : "  font-semibold block md:hidden"
                } hover:`}
              >
                {link.title}
              </div>
              
              <div
                className={`${
                  matchRoute(link.path)
                    ? "  h-1 mt-1 w-24 bg-black"
                    : "w-full border border-black"
                }  transition-all duration-300`}
              />

            </Link>
          </li>
        ))}
      </ul>
        </div>
      )}

      <div className=" mx-32  flex justify-between items-center h-20">
        <div
          className=" md:hidden text-2xl hover:cursor-pointer text-blue-400"
          onClick={menuHandler}
        >
          <FaBarsStaggered />
        </div>
        <Link to="/">
          <img src={logo} alt="logo" width={120} />
        </Link>

        <div>
          <ul className="flex gap-8 text-xl">
            {NavbarLinks.map((link, index) => (
              <li key={index} className="">
                <Link to={link?.path}>
                  <div
                    className={`${
                      matchRoute(link?.path)
                        ? "  font-bold text-blue-600 hidden md:block"
                        : "  font-semibold hidden md:block"
                    } hover:`}
                  >
                    {link.title}
                  </div>
                  <div
                    className={`${
                      matchRoute(link.path)
                        ? "  h-1 mb-[-10px] mt-2 w-full bg-blue-600"
                        : ""
                    }  transition-all duration-300`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {token === null && (
            <Link to="/login">
              <button className=" border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md text-lg transition-all duration-300">
                Login / Signup
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropdown />}
        </div>
      </div>
    </div>
  );
}
