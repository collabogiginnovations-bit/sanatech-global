import React from 'react'
import ServiceTemplate from '../../components/mazi/ServicePageTemplate';

const Solar = () => {
    const items = [
        {
            subHeading: "Solar Inverter Power Supply",

        },
        {
            subHeading: "Solar Borehole System",

        },
        {
            subHeading: "Solar Borehole System",
 
        },
       

    ];

    const detailedCapabilities = [
  
    ]



    return (
        <ServiceTemplate
            service="Solar Renewable Energy Services"
            description="Delivering sustainable solar energy solutions for cleaner power."
            imgSrc="/service/solar.jpg"
            capabilities={items}
            link="#"
            subHeading={items}
            detailedCapabilities={detailedCapabilities}
        />
    );
}

export default Solar