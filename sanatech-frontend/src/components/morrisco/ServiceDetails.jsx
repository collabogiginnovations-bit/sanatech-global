import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ServiceTemplate from "../components/templates/ServiceTemplate";
import base_url from "../components/morrisco/Base_url";

const ServiceDetails = () => {
  const { slug } = useParams(); 
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    const fetchSingleService = async () => {
      const res = await fetch(`${base_url}/fetch-service/${slug}`);
      const data = await res.json();
      if (data.success) {
        setServiceData(data.service);
      }
    };
    fetchSingleService();
  }, [slug]);

  if (!serviceData) return <p className="text-center">Loading...</p>;

  return (
    <ServiceTemplate
      service={serviceData.title}
      description={serviceData.description}
      imgSrc={`${base_url}/uploads/${serviceData.image}`}
      capabilities={serviceData.capabilities || []}
      detailedCapabilities={serviceData.features || []}
    />
  );
};

export default ServiceDetails;
