
import React from "react";

const TestimonialCard = ({ name, position, testimony }) => {
  return (
    <>
      <div className="drop-shadow relative">
        <img
          src="images/quotation.svg"
          alt="quotation mark"
          className="absolute right-0 top-0 scale-50 lg:scale-75"
        />
        <div className="bg-white text-black p-5 h-full w-full testimonial-clip">
          <div className="mb-10">
            <h4 className="font-bold text-lg text-[#29166F]">{name}</h4>
            <p className="text-gray-400 text-xs w-[60%]">{position}</p>
          </div>
          <p className="text-xs lg:text-base">{testimony}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
