import React from "react";
import Form from "../components/Morrisco/Form";
import PageTitleCard from "../components/morrisco/PageTitleCard";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { FaPhone, FaRegEnvelope } from "react-icons/fa6";

const Contact = () => {
  useScrollAnimation()

  const cycleImages = [
    "images/companyImages/Solar Inverter Installation.jpg",
    "images/companyImages/control Panels.jpg",
    "images/contact.png",
  ];
  return (
    <div>
      <div className="bg-[#29166F]">
        <PageTitleCard cycleImages={cycleImages} imageName="contact.png" cardTitle="Contact Us" />

      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2  my-24 px-15 section ">
        <div className="pl-5 pr-5 mb-6 justify-center text-center md:text-start lg:pr-56 lg:mb-0 flex flex-col pt-5 ">

          <div className="mb-6">
            <p className="text-[#29166F] font-bold">Get in Touch</p>
            <div>
              <small><FaRegEnvelope className="inline mr-1 " /> sanatechglobal@gmail.com</small>
            </div>
            <div>
              <small><FaPhone className="inline mr-1 " /> +234 8037 977 510, 8022 453 196</small>
            </div>

          </div>
          <div>
            <p className="text-[#29166F] font-bold">Our Office</p>
            <div>
              <small>
                Suite 25, Second Floor Hilltop Plaza,
                Trans Woji Road By Elitor junction,
                Woji, Port Harcourt,
                Rivers State,
                Nigeria.
              </small>
            </div>
          </div>
        </div>
        <div className="flex justify-start px-5">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
