import React from "react";
import ServiceTemplate from "../../components/mazi/ServicePageTemplate";

const CivilWorks = () => {
  const items = [
    {
      subHeading: "Road Construction & Rehabilitation:",
      item: " From greenfield road construction to the rehabilitation and maintenance of existing networks, we deliver efficient and sustainable transportation infrastructure."
    },
    {
      subHeading: "Bridges & Flyovers:",
      item: " Our experienced structural engineers and construction teams are proficient in the design and construction of various types of bridges and flyovers, addressing critical transportation bottlenecks and enhancing connectivity."
    },
    {
      subHeading: "Drainage Systems:",
      item: " We design and construct comprehensive drainage solutions, including surface and subsurface drainage, culverts, and flood control measures, to mitigate water-related challenges and ensure the longevity of infrastructure."
    },
    {
      subHeading: "Water Infrastructure:",
      item: " We are involved in the development of essential water infrastructure, including the construction of dams, reservoirs, water treatment plants, pipelines, and distribution networks, contributing to access to clean and reliable water resources."
    },
    {
      subHeading: "Marine Works:",
      item: " Our capabilities extend to coastal and marine infrastructure projects such as jetties, quay walls, and shore protection works."
    },
    {
      subHeading: "Earthworks & Land Development: ",
      item: "We undertake large-scale earthmoving operations, including excavation, filling, grading, and land reclamation, preparing sites for various development purposes."
    }

  ];

  const detailedCapabilities = [
    "Road Construction and Rehabilitation",
    "Bridges and Flyovers",
    "Drainage Systems",
    "Water Infrastructure",
    "Marine Works",
    "Earthworks and Land Development"
  ]



  return (
    <ServiceTemplate
      service="Civil Works"
      description="We undertake a wide spectrum of civil engineering projects, including road construction and rehabilitation,  bridges, drainage systems, water infrastructure, and other essential infrastructure development. Our  experienced team ensures projects are executed efficiently, safely, and to the highest standards. Our Capabilities Include:"
      imgSrc="/images/Civil Works.png"
      capabilities={items}
      link="#"
      subHeading={items}
      detailedCapabilities={detailedCapabilities}
    />
  );
};

export default CivilWorks;
