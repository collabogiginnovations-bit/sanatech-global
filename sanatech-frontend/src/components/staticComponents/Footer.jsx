import { NavLink } from "react-router-dom";
import React from "react";
import { FaArrowRight, FaAt, FaPhone, FaRegEnvelope } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[rgb(15,8,43)] px-3 md:px-15">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  p-5  text-white">
                <div className="col-span-2 flex flex-col justify-between pr-20 pb-4 ">
                    <div className="mb-3 ">
                        <div className="bg-gray-300 w-20 p-2 rounded-full h-20 flex justify-between items-center">
                            <img
                                src="/images/logo.png"
                                alt="logo"
                                className="w-20"
                            />
                        </div>
                    </div>
                    <div className="mt-4 sm:mt-4 sm:mb-6 md:mb-6 lg:mb-0 md:mt-4 lg:mt-0 ">
                        <b>Our Motto:</b>
                        <p className="text-gray-400 text-sm">
                            <small>
                                {" "}
                                We strive to build long term client relationships based  on
                                mutual trust and respect
                            </small>
                        </p>
                    </div>
                </div>
                <div className="col-span-2 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                    <div className="mb-6 sm:mb-6 md:mb-6 lg:mb-0">
                        <b>About Us</b>
                        <ul className="mt-2 flex flex-col gap-1 text-sm text-gray-400">
                            <li>
                                <NavLink
                                    to="/about"
                                    className="hover:text-gray-300 transition duration-200 ease-in"
                                >
                                    <small>About Us</small>
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                    <div className="pr-1 mb-6 sm:mb-6 md:mb-6 lg:mb-0">
                        <b className="">Services</b>
                        <ul className="mt-2 text-sm flex flex-col gap-1 text-gray-400">
                            <li>
                                <NavLink
                                    to="/services"
                                    className="hover:text-gray-300 transition duration-200 ease-in"
                                >
                                    <small>Services</small>{" "}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/policies"
                                    className="hover:text-gray-300 transition duration-200 ease-in"
                                >
                                    <small>policies</small>
                                </NavLink>
                            </li>


                        </ul>
                    </div>
                    <div className="mb-6 sm:mb-6 md:mb-6 lg:mb-0">
                        <b>Contact Us <FaAt className="inline ml-1 " /></b>
                        <div className="mt-2 text-sm flex flex-col gap-1 text-gray-400">
                            <p>
                                <small><FaPhone className="inline mr-1 " /> +234 8037 977 510, 8022 453 196</small>
                            </p>
                            <p>
                                <small><FaRegEnvelope className="inline mr-1 " /> sanatechglobal@gmail.com </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center border-t-2 border-gray-400 mt-3 py-3 ">
                <p className="text-gray-400 text-sm ">© SANATECH GLOBAL NIG. LTD. 2025</p>
            </div>
        </footer>
    );
};

export default Footer;
