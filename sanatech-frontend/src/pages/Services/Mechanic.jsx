import React from 'react'
import ServiceTemplate from '../../components/mazi/ServicePageTemplate';

const Mechanic = () => {
  const items = [
    {
      subHeading: "Air Compressor Installation & Maintenance",

    },
    {
      subHeading: "Air Conditioning & Ventilation Systems",

    },
    {
      subHeading: "Fabrication of Simple Mechanism",

    },
    {
      subHeading: "Construction of Overheard Tanks",

    },
    {
      subHeading: "Sanitary & Plumbing Systems",

    },
    {
      subHeading: "Water Treatment Systems",

    },


  ];

  const detailedCapabilities = [

  ]



  return (
    <ServiceTemplate
      service="Mechanical Services"
      description="Delivering reliable mechanical engineering, repair, and maintenance services"
      imgSrc="/service/a1d9b08b62884d06b7c1198fea88ab80.jpg"
      capabilities={items}
      link="#"
      subHeading={items}
      detailedCapabilities={detailedCapabilities}
    />
  );
}

export default Mechanic