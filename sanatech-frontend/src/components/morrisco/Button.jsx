import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import {NavLink, replace} from "react-router-dom";

const Button = ({ text, arrow, link="/contact" }) => {
  return (
    <NavLink
      to={link} 
      replace
      className={`w-fit px-6 py-2 rounded-3xl flex font-normal items-center justify-center gap-2 text-xs md:text-sm ${
        !arrow
          ? "bg-white hover:bg-gray-200 text-blue-800 transition duration-200 ease-in"
          : "bg-amber-500 hover:bg-amber-600 text-white transition duration-200 ease-in"
      }`}
    >
      {text}
      {arrow && (
        <span className="bg-white text-amber-500 rounded-full p-1 flex items-center justify-center">
          <FaArrowRight size={14} />
        </span>
      )}
    </NavLink>
  );
};

export default Button;
