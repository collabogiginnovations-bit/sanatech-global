import React from 'react'
import ServiceTemplate from '../../components/mazi/ServicePageTemplate';

const Communication = () => {
  const items = [
    {
      subHeading: "PABX Installation and Configuration",

    },
    {
      subHeading: "Building management Systems",

    },
    {
      subHeading: "CCTV Surveillance Systems",

    },
    {
      subHeading: "Communication Systems",

    },
    {
      subHeading: "Computer Networking",

    },


  ];

  const detailedCapabilities = [

  ]



  return (
    <ServiceTemplate
      service="Communication Services"
      description="Ensuring seamless communication through modern, innovative connectivity solutions."
      imgSrc="/service/cctv.jpg"
      capabilities={items}
      link="#"
      subHeading={items}
      detailedCapabilities={detailedCapabilities}
    />
  );
}

export default Communication