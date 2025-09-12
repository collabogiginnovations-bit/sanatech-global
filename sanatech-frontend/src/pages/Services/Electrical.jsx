import React from 'react'
import ServiceTemplate from '../../components/mazi/ServicePageTemplate';

const Electrical = () => {
  const items = [
    {
      subHeading: "Renewable Energy Solutions",

    },
    {
      subHeading: "Instrumentation and control",

    },
    {
      subHeading: "Mains Distribution Systems",

    },
    {
      subHeading: "Power & Lighting Systems",

    },
    {
      subHeading: "Automation and Control",

    },
    {
      subHeading: "Fire Detection Systems",

    },
    {
      subHeading: "Electrical Substation",

    },


  ];

  const detailedCapabilities = [

  ]



  return (
    <ServiceTemplate
      service="Electrical Services"
      description="Providing expert electrical installation, maintenance, and power solutions."
      imgSrc="/service/electrician.jpg"
      capabilities={items}
      link="#"
      subHeading={items}
      detailedCapabilities={detailedCapabilities}
    />
  );
}

export default Electrical