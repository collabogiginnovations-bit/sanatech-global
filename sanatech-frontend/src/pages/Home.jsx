import React from 'react'
import PageTitleCard from '../components/morrisco/PageTitleCard'
import Button from '../components/morrisco/Button'
import { motion } from "framer-motion";
import CoreValueCard from '../components/morrisco/CoreValueCard';
import ClientCarousel from '../components/morrisco/ClientCarousel';
import ImageCarousel from '../components/morrisco/ImageCarousel';
import CTASection from '../components/morrisco/CTASection';
import useScrollAnimation from '../hooks/useScrollAnimation';


const Home = ({
    firstImage = "spinninigGear2-removebg-preview.png",
    secondImage = "images.jpeg"
}) => {
    useScrollAnimation()
    return (
        <>
            <div
                className={`px-5 drop-shadow-sm mb-24 div min-h-96 pb-5 pt-14 bg-amber-900 overflow-hidden`}
            >
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
                <div
                    className="hero-clip relative z-10  md:bg-transparent h-fit bg-img items-center px-5 pt-20 flex flex-col md:flex-row justify-between bg-no-repeat bg-right-bottom bg-contain"
                    style={{}}
                >
                    <div className="w-full px-10 text-center md:w-1/2 md:text-start md:px-2">
                        <h1 className="text-3xl z-20 md:text-3xl lg:text-5xl text-white font-bold mb-2">
                            Quality Workmanship and Service Excellence
                        </h1>
                        <p className="text-white mb-10 z-20">
                            We strive to build long term client relationships based on mutual trust and respect
                        </p>

                    </div>

                    <div className="h-full  items-end flex gap-5">
                        <div className="flex gap-5">
                            <Button text={"Learn More"} arrow={true} />
                        </div>
                        <div className="flex gap-5">
                            <Button text={"Contact Us"} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-5 flex flex-col items-center text-center mb-24 section">
                <h3 className="text-[#29166F] text-xl md:text-2xl font-bold">
                    Our Mission
                </h3>
                <p className="text-[#808080] md:w-4/5 lg:w-3/5">
                    We regard our work ethics in highest nature, to be productive and pro-active in our
                    projects to be accountable for all work undertaken
                    by Sanatech global. we pride ourselves in quality
                    that speaks for itself without compromising safety
                    and reliability. we respect that each project
                    deserves our attention to detail attitude.
                </p>
            </div>

            <div className='bg-[rgb(15,8,43)] flex flex-wrap justify-center min-h-96 py-5 mb-24 section'>
                <div>
                    <h3 className="text-white text-xl md:text-2xl font-bold">
                        Our Core Values
                    </h3>
                </div>
                <CoreValueCard />
            </div>
            <div className=' flex flex-wrap justify-center min-h-96 py-5 mb-24'>
                <h3 className="text-[#29166F] text-xl md:text-2xl font-bold">
                    Our Clients
                </h3>
                <ClientCarousel />
            </div>
            <div className=' flex flex-wrap justify-center min-h-96 py-5 mb-24'>
                <h3 className="text-[#29166F] text-xl md:text-2xl font-bold">
                    Our Gallery
                </h3>
                <ImageCarousel />
            </div>

            <div>
                <CTASection />
            </div>
        </>
    )
}

export default Home