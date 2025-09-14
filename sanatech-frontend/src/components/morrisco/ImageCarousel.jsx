"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const ImageCarousel = () => {
  useScrollAnimation();

  const images = [
    { src: "/images/companyImages/Equipmemt leasing 3.jpg", caption: "Equipmemt leasing" },
    { src: "/images/companyImages/Equipmemt leasing.jpg", caption: "Equipmemt leasing" },
    { src: "/images/companyImages/Water Treatment plant 3.jpg", caption: "Water Treatment plant" },
    { src: "/images/companyImages/IMG-20250527-WA0025.jpg", caption: "Equipmemt leasing" },
    { src: "/images/companyImages/IMG-20250527-WA0021.jpg", caption: "Equipmemt leasing" },
    { src: "/images/companyImages/Water Treatment plant 7.jpg", caption: "Water Treatement" },
    { src: "/images/companyImages/IMG-20250527-WA0027.jpg", caption: "Water Treatement" },
    { src: "/images/companyImages/Trouble Shooting Electrical system.jpg", caption: "Trouble Shooting Electrical system " },
    { src: "/images/companyImages/WhatsApp Image 2025-06-02 at 20.36.31_ea91d944.jpg", caption: "Trouble Shooting Electrical system" },
    { src: "/images/companyImages/Tank Support under bore hold.jpg", caption: "Tank Support under bore hold" },
    { src: "/images/companyImages/WhatsApp Image 2025-05-27 at 13.36.59_c3842973.jpg", caption: "Equipmemt leasing" },
    { src: "/images/companyImages/Tank Support under bore hold 2.jpg", caption: "Tank Support under bore hold" },
    { src: "/images/companyImages/Structure beginging finishing .jpg", caption: "Property Investment" },
    { src: "/images/companyImages/Valves control I&C.jpg", caption: "Valves control I&C" },
    { src: "/images/companyImages/Maintenance work 1.jpg", caption: "Maintenance work" },
    { src: "/images/companyImages/Solar Panel installation.jpg", caption: "Solar Panel installation" },
    { src: "/images/companyImages/Solar Inverter Installation.jpg", caption: "Solar Inverter Installation" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden section">
      {/* Carousel */}
      <div className="relative flex items-center justify-center w-full h-96">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-5 z-40 text-white bg-black/50 p-2 rounded-full"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Images */}
        <div className="relative w-full flex justify-center items-center">
          {images.map((item, index) => {
            const offset = index - activeIndex;

            // Wrap around logic
            const half = Math.floor(images.length / 2);
            let position = offset;
            if (offset > half) position -= images.length;
            if (offset < -half) position += images.length;

            const isActive = index === activeIndex;

            return (
              <img
                key={index}
                src={item.src}
                alt={`Gallery ${index}`}
                className={`absolute transition-all duration-500 rounded-xl shadow-lg
                  ${isActive ? "z-20 scale-100 opacity-100" : "z-10 scale-75 opacity-50"}
                `}
                style={{
                  transform: `translateX(${position * 220}px) scale(${isActive ? 1 : 0.75})`,
                  width: isActive ? "20rem" : "16rem",
                  height: isActive ? "20rem" : "16rem",
                }}
              />
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-5 z-40 text-white bg-black/50 p-2 rounded-full"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Caption */}
      <p className="mt-4 w-80 font-medium text-gray-700 text-center">
        {images[activeIndex].caption}
      </p>

      {/* Dots */}
      <div className="flex mt-4 gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300
              ${index === activeIndex ? "bg-[#29166F]" : "bg-gray-300"}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
