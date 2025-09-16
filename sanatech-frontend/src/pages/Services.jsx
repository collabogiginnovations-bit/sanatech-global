import React, { useEffect, useState } from "react";
import PageTitleCard from "../components/morrisco/PageTitleCard";
import ServiceCard from "../components/mazi/ServiceCard";
import {
  FaHardHat,
  FaBolt,
  FaTruckMoving,
  FaCogs,
  FaSatelliteDish,
  FaSolarPanel,
} from "react-icons/fa";
import CTASection from "../components/morrisco/CTASection";
import base_url from "../components/morrisco/Base_url";

const Services = () => {
  const [dbServices, setDbServices] = useState([]); // store only DB services

  const cycleImages = [
    "service/Equipmemt leasing 3.jpg",
    "service/Structure beginging finishing .jpg",
    "service/Solar Inverter Installation.jpg",
    "service/WhatsApp Image 2025-06-02 at 20.36.31_ea91d944.jpg",
  ];

  // ✅ Static services remain hardcoded
  const staticServices = [
    {
      icon: <FaBolt />,
      title: "Electrical Services",
      description:
        "Providing expert electrical installation, maintenance, and power solutions.",
      link: "electrical",
    },
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
      link: "leasing-ancillary",
    },
    {
      icon: <FaCogs />,
      title: "Mechanical Services",
      description:
        "Delivering reliable mechanical engineering, repair, and maintenance services",
      link: "mechanical",
    },
  ];

  // ✅ Fetch services from DB only
  useEffect(() => {
    const fetchService = async () => {
      try {
        const request = await fetch(`${base_url}/fetch-service`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        });

        const response = await request.json();
        console.log("Fetched services:", response);

        if (response.success) {
          const incomingServices = response.services.map((srv) => ({
            title: srv.title,
            description: srv.description,
            icon: (
              <img
                src={`http://localhost:3000/uploads/${srv.icon}`} // I have to replace the actual url here cus of my backend image logic
                alt={srv.title}
                className="w-8 h-8 object-contain"
              />
            ),
            link: srv.title.toLowerCase().replace(/\s+/g, "-"), // auto-generate link slug
          }));

          setDbServices(incomingServices); // only DB services go here
        }
      } catch (err) {
        console.error("Error fetching services:", err);
      }
    };

    fetchService();
  }, []);

  return (
    <section>
      <div className="bg-blue-900">
        <PageTitleCard cardTitle={"Our Services"} cycleImages={cycleImages} />
      </div>
      <div>
        <section className="my-24 text-center px-15 sm:px-10 md:px-16 lg:px-32 section">
          <p className="align-middle">
            At Sanatech Global, we provide innovative solutions across
            electrical, mechanical, civil engineering, communications, leasing,
            and renewable energy. Our services are designed to power progress,
            strengthen infrastructure, and connect communities. With a
            commitment to quality, reliability, and sustainable practices, we
            deliver projects that not only meet today’s needs but also
            anticipate tomorrow’s challenges — making us a trusted partner for
            growth and development.
          </p>
        </section>

        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-15 gap-6">
            {/* Render static services first */}
            {staticServices.map((service, index) => (
              <ServiceCard
                key={`static-${index}`}
                index={index}
                cardLink={service.link}
                cardTitle={service.title}
                paragraph={service.description}
                icon={service.icon}
              />
            ))}

            {/* Render DB services after */}
            {dbServices.map((service, index) => (
              <ServiceCard
                key={`db-${index}`}
                index={index + staticServices.length} // avoid key clashes
                cardLink={service.link}
                cardTitle={service.title}
                paragraph={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </section>

        <CTASection />
      </div>
    </section>
  );
};

export default Services;
