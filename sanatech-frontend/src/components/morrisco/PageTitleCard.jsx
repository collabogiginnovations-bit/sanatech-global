import React from "react";
import { motion } from "framer-motion";

const PageTitleCard = ({
  firstImage = "spinninigGear2-removebg-preview.png",
  secondImage = "images.jpeg",
  cardTitle,
  cardText,
  textColor = "text-white",
}) => {
  return (
    <section className="h-96 px-4 border w-full border-none overflow-hidden relative">
      {/* First Image - spins in and then fades away */}
      <motion.div
        initial={{
          x: "100vw",
          y: "50%",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          scale: 0.2,
          rotate: 0,
          opacity: 1,
        }}
        animate={{
          x: "0vw",
          y: "0%",
          width: "100%",
          height: "100%",
          borderRadius: "0%",
          scale: 1,
          rotate: 720, // slower but full spin (2 rotations)
          opacity: 0,
        }}
        transition={{
          duration: 3,
          ease: [0.68, -0.55, 0.27, 1.55],
        }}
        style={{
          backgroundImage: `url('images/${firstImage}')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />

      {/* Second Image - pops in as first fades out, then opacity lowers */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
          rotate: -180,
        }}
        animate={{
          opacity: [0, 1, 0.6], // fades in, then reduces opacity
          scale: 1,
          rotate: 0,
        }}
        transition={{
          delay: 1.5, // starts after first image mid-animation
          duration: 3,
          ease: "easeOut",
          times: [0, 0.7, 1], // controls when opacity changes happen
        }}
        style={{
          backgroundImage: `url('images/${secondImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />

      {/* Text Content */}
      <div
        className={`relative z-10 pl-4 h-96 gap-3 rounded-xl flex justify-center flex-col ${textColor}`}
      >
        <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl">
          {cardTitle}
        </h1>
        <p className="text-lg flex flex-wrap w-80">{cardText}</p>
      </div>
    </section>
  );
};

export default PageTitleCard;
