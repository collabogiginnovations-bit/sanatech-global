import React from "react";
import ServiceTemplate from "../../components/mazi/ServicePageTemplate";

const CivilWorks = () => {
  const items = [
    {
      subHeading: "Water Treatment/Traetment plant",

    },
    {
      subHeading: "Structural Architectural Design",

    },
    {
      subHeading: "Building Construction",

    },
    {
      subHeading: "Overhead Bridges",

    },
    {
      subHeading: "Drainages",
 
    },
   

  ];

  const detailedCapabilities = [

  ]



  return (
    <ServiceTemplate
      service="Civil Engineering Services"
      description="Providing quality civil works, construction, and infrastructure development."
      imgSrc="/service/Structure beginging finishing .jpg"
      capabilities={items}
      link="#"
      subHeading={items}
      detailedCapabilities={detailedCapabilities}
    />
  );
};

export default CivilWorks;
