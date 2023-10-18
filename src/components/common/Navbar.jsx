import React from "react";
import logo from "../../assets/doctors_logo2.png";
import { Link, matchPath, useLocation } from "react-router-dom";
import { NavbarLinks } from "../../data/navbarLinks";
import { FaBarsStaggered } from "react-icons/fa6";
import { useSelector } from "react-redux";
import ProfileDropdown from "./ProfileDropdown";

export default function Navbar() {
  const location = useLocation();

  const { token } = useSelector((state) => state.auth);

  function matchRoute(route) {
    return matchPath({ path: route }, location.pathname);
  }

  return (
    <div className=" border border-b border-b-gray-400 shadow-md">
      <div className=" mx-32 my-3 flex justify-between items-center">
        <div className=" md:hidden text-2xl hover:cursor-pointer text-blue-400">
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
