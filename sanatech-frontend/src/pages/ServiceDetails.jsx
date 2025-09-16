import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import base_url from "../components/morrisco/Base_url";
import ServiceTemplate from "../components/morrisco/ServicePageTemplate";

const ServiceDetails = () => {
  const { slug } = useParams();
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    const fetchSingleService = async () => {
      try {
        const res = await fetch(`${base_url}/fetch-service/${slug}`);
        const data = await res.json();

        if (data.success) {
          setServiceData(data.service);
        }
      } catch (error) {
        console.error("Error fetching single service:", error);
      }
    };
    fetchSingleService();
  }, [slug]);

  if (!serviceData) return <p className="text-center">Loading...</p>;

  return (
    <ServiceTemplate
      service={serviceData.title}
      description={serviceData.description}
      imgSrc={`http://localhost:3000/uploads/${serviceData.image}`}// I have to replace the actual url here cus of my backend image logic
      features={serviceData.features || []} // ✅ backend features
    />
  );
};

export default ServiceDetails;
