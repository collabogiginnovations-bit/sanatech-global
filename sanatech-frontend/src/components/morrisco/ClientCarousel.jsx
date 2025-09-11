import React, { useState, useEffect } from "react";
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

// Logo width for animation step
const LOGO_WIDTH = 200;

const ClientCarousel = () => {
    useScrollAnimation()
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-update index every 5s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % logos.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full overflow-hidden py-10 bg-gray-50 flex flex-col items-center section">
        
            {/* Carousel */}
            <motion.div
                className="flex gap-10"
                animate={{ x: -currentIndex * LOGO_WIDTH }}
                transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                }}
            >
                {/* Duplicate logos to ensure seamless looping */}
                {[...logos, ...logos].map((logo, index) => (
                    <div
                        key={index}
                        className="w-40 h-72 bg-center bg-contain bg-no-repeat"
                        style={{ backgroundImage: `url(${logo})` }}
                    />
                ))}
            </motion.div>

            {/* Dots navigation */}
            <div className="flex gap-2 mt-6">
                {logos.map((_, i) => (
                    <div
                        key={i}
                        className={`w-3 h-3 rounded-full transition-colors ${i === currentIndex ? "bg-gray-800" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ClientCarousel;
