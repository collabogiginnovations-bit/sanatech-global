import React from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const logos = [
  "images/client-logos/NNPC-Logo.png",
  "images/client-logos/eni.png",
  "images/client-logos/shell.png",
  "images/client-logos/seplat.png",
  "images/client-logos/pe-energy.jpeg",
  "images/client-logos/exonmobil.png",
  "images/client-logos/elcrest.jpg",
  "images/client-logos/chevron.png",
  "images/client-logos/totalenergies.webp",
  "images/client-logos/lng.png",
  "images/client-logos/air-liquide.png",
  "images/client-logos/saipem.png",
];

const ClientCarousel = () => {
  useScrollAnimation();

  // Duplicate logos to make the loop seamless
  const loopedLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-10 bg-gray-50 flex flex-col items-center section">
      {/* Carousel */}
      <motion.div
        className="flex gap-10"
        animate={{ x: ["0%", "-50%"] }} // move continuously
        transition={{
          repeat: Infinity,
          duration: 20, // adjust speed: lower = faster
          ease: "linear",
        }}
      >
        {loopedLogos.map((logo, index) => (
          <div
            key={index}
            className="w-40 h-40 bg-center bg-contain bg-no-repeat"
            style={{ backgroundImage: `url(${logo})` }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ClientCarousel;
