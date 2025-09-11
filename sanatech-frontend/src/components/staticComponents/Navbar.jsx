"use client";
import { Link, NavLink } from "react-router-dom"; // fixed import
import React, { useEffect, useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed grid w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 top-0 px-2.5 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className={` md:px-10 p-1 w-38 rounded-lg mt-1  `}>
        <img src="/images/logo.png" alt="logo" className={`w-20  rounded-2xl ${isScrolled?'':"bg-gray-200"}`} />
      </div>

      <div className="flex justify-end items-center px-5 sm:flex md:hidden lg:hidden xl:hidden">
        <span onClick={handleClick} className="text-3xl font-extrabold">
          {clicked ? <FaXmark /> : <FaBars />}
        </span>
      </div>

      {/* Nav Links */}
      <div
        className={`col-span-2 flex sm:justify-start md:justify-end lg:justify-end items-center transition-all duration-500 ease-in-out 
        ${
          clicked
            ? "max-h-screen opacity-100 translate-y-0 bg-white"
            : "max-h-0 opacity-0 -translate-y-5"
        } 
        overflow-hidden md:max-h-none md:opacity-100 md:translate-y-0`}
      >
        <ul className="flex flex-col px-5 py-5 sm:px-5 sm:py-5 md:justify-between lg:justify-between md:items-center lg:items-center gap-2 sm:flex-col md:flex-row lg:flex-row">
          <li>
            <NavLink
              to="/"
              className={`${isScrolled?"text-black":"text-white hover:text-blue-800"} px-4 py-2 rounded-3xl transition-colors duration-300 ease-in lg:hover:bg-blue-200`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={`${isScrolled?"text-black":"text-white hover:text-blue-800"} px-4 py-2 rounded-3xl transition-colors duration-300 ease-in lg:hover:bg-blue-200`}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={`${isScrolled?"text-black":"text-white hover:text-blue-800"} px-4 py-2 rounded-3xl transition-colors duration-300 ease-in lg:hover:bg-blue-200`}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/policies"
              className={`${isScrolled?"text-black":"text-white hover:text-blue-800"} px-4 py-2 rounded-3xl transition-colors duration-300 ease-in lg:hover:bg-blue-200`}
            >
              Policies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={`${isScrolled?"text-black":"text-white hover:text-blue-800"} px-4 py-2 rounded-3xl transition-colors duration-300 ease-in lg:hover:bg-blue-200`}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
