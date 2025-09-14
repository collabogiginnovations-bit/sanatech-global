import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PageTitleCard = ({
  firstImage = "spinninigGear2-removebg-preview.png",
  secondImage = "images.jpeg",
  cardTitle,
  cardText,
  textColor = "text-white",
  cycleImages
}) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [startCycle, setStartCycle] = useState(false);

  // Start cycling 6s after mount (3s first + 3s second animation)
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartCycle(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  // Handle background change every 10s
  useEffect(() => {
    if (!startCycle) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cycleImages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [startCycle]);

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
          rotate: 720,
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

      {/* Second Image - only visible before cycle starts */}
      {!startCycle && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
            rotate: -180,
          }}
          animate={{
            opacity: [0, 1, 0.6],
            scale: 1,
            rotate: 0,
          }}
          transition={{
            delay: 1.5,
            duration: 3,
            ease: "easeOut",
            times: [0, 0.7, 1],
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
      )}

      {/* Dynamic Background after animations */}
      {startCycle && (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 0.5 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              backgroundImage: `url('${cycleImages[currentIndex]}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
              opacity:"0.7"
            }}
          />
        </AnimatePresence>
      )}
      {/*  */}

      {/* Text Content */}
      <div
        className={`relative z-10 pl-4 h-96 gap-3 rounded-xl flex justify-center flex-col ${textColor}`}
      >
        <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl">
          {cardTitle}
        </h1>
        <p className="text-lg flex flex-wrap  pr-5">{cardText}</p>
      </div>
    </section>
  );
};

export default PageTitleCard;
