import React from 'react'
import PageTitleCard from '../components/morrisco/PageTitleCard'
import ServiceCard from '../components/mazi/ServiceCard'
import {
    FaHardHat,
    FaBolt,
    FaTruckMoving,
    FaCogs,
    FaSatelliteDish,
    FaSolarPanel
} from "react-icons/fa";
import { GiOilDrum, GiCargoCrate, GiCrane } from "react-icons/gi";
import CTASection from '../components/morrisco/CTASection';

const Services = () => {
    const cycleImages = [
        "service/cranes.jpg",
        "service/mechanical.jpg",
        "service/solar.jpg",
    ];

    const services = [
        {
            icon: <FaHardHat />,
            title: "Civil Engineering Services",
            description:
                "Providing quality civil works, construction, and infrastructure development.",
            link: "civil",
        },
        {
            icon: <FaSolarPanel />,
            title: "Solar Renewable Energy Services",
            description:
                "Delivering sustainable solar energy solutions for cleaner power.",
            link: "solar",
        },
        {
            icon: <FaSatelliteDish />,
            title: "Communication Services",
            description:
                "Ensuring seamless communication through modern, innovative connectivity solutions.",
            link: "communication",
        },
        {
            icon: <FaTruckMoving />,
            title: "Leasing/Ancillary Services",
            description:
                "Offering equipment leasing and support services for diverse projects.",
            link: "Leasing&Ancillary",
        },
        {
            icon: <FaCogs />,
            title: "Mechanical Services",
            description:
                "Delivering reliable mechanical engineering, repair, and maintenance services",
            link: "mechanical",
        },
        {
            icon: <FaBolt />,
            title: "Electrical Services",
            description:
                "Providing expert electrical installation, maintenance, and power solutions.",
            link: "electrical",
        },

    ];
    return (
        <section>
            <div className='bg-blue-900'>
                <PageTitleCard cardTitle={"Our Services"} cycleImages={cycleImages} />
            </div>
            <div>
                <section className="my-24 text-center px-10 sm:px-10 md:px-16 lg:px-32 section">
                    <p className="align-middle">
                        At Sanatech Global, we provide innovative solutions across electrical, mechanical, civil engineering, communications, leasing, and renewable energy. Our services are designed to power progress, strengthen infrastructure, and connect communities. With a commitment to quality, reliability, and sustainable practices, we deliver projects that not only meet today’s needs but also anticipate tomorrow’s challenges — making us a trusted partner for growth and development.
                    </p>
                </section>

                <section className="mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-2" >
                        {services.map((service, index) => {
                            return (
                                <ServiceCard
                                    index={index}
                                    cardLink={service.link}
                                    cardTitle={service.title}
                                    paragraph={service.description}
                                    icon={service.icon}
                                />
                            );
                        })}
                    </div>
                </section>
                <CTASection />
            </div>
        </section>
    )
}

export default Services