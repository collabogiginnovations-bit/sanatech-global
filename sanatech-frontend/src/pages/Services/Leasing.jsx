import React from 'react'
import ServiceTemplate from '../../components/mazi/ServicePageTemplate';

const Leasing = () => {
  const items = [
    {
      subHeading: "Rigmoveandleasingofheavydutyequipment",

    },
    {
      subHeading: "Cranesofdifferentsizes",

    },
    {
      subHeading: "Forkliftandheavydutytrucks",

    },
    {
      subHeading: "Filtrationandchemicalsupply",

    },
    {
      subHeading: "AllAncillaryservicesforwellinterventionjobs",

    },
    {
      subHeading: "Pipeinspection",

    },


  ];

  const detailedCapabilities = [

  ]



  return (
    <ServiceTemplate
      service="Leasing/Ancillary Services"
      description="Offering equipment leasing and support services for diverse projects."
      imgSrc="/service/cranes.jpg"
      capabilities={items}
      link="#"
      subHeading={items}
      detailedCapabilities={detailedCapabilities}
    />
  );
}

export default Leasing