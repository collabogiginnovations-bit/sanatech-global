"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const ImageCarousel = () => {
  useScrollAnimation()
  const images = [
    { src: "/images/test/civil work.jpeg", caption: "Installation of CCTV Security System at Kilimanjaro Fast Food, Woji Port Harcourt." },
    { src: "/images/test/building.avif", caption: "Air Compressor Maintenance at ELCREST Exploration ltd. & NNPC. at Otumara, Delta State." },
    { src: "/images/test/Environmental Management3.jpeg", caption: "Installation of 500KVA Substation at AirLiquide Nig. PLC. Lagos." },
    { src: "/images/test/Skill Training.jpg", caption: "Installation/Commissioning of ARGON Refilling Plant at NLNG Train 7 Bonny Island" },
    { src: "/images/test/Project Management.webp", caption: "Construction of 5 Bed Room Duplex at Umuahia, Abia State." },
    { src: "/images/test/Petroleum Products2.jpeg", caption: "Installation of 20KVA Solar Inverter Power Supply at D-Villa Hotel, Port Harcourt " },
    { src: "/images/test/Property Investment.jpeg", caption: "Property Investment" },
    { src: "/images/test/Import & Export.jpeg", caption: "Import and Export" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden section">
      {/* Image Carousel */}
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
            const isActive = index === activeIndex;

            return (
              <img
                key={index}
                src={item.src}
                alt={`Gallery ${index}`}
                className={`absolute transition-all duration-500 rounded-xl shadow-lg
                  ${isActive
                    ? "w-80 h-80 z-20 scale-100"
                    : "w-64 h-64 z-10 scale-75 opacity-50"
                  }`}
                style={{
                  transform: `translateX(${(index - activeIndex) * 100}px)`,
                }}
              />
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-5 z-20 text-white bg-black/50 p-2 rounded-full"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Caption */}
      <p className="mt-4 w-80  font-medium text-gray-700 text-center">
        {images[activeIndex].caption}
      </p>

      {/* Dots Indicator */}
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
