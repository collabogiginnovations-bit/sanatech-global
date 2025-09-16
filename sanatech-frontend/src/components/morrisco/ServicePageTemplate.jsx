import { useState } from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import CTASection from "../morrisco/CTASection";

const ServiceTemplate = ({
  service,
  description,
  imgSrc,
  features = [], // ✅ coming from DB
}) => {
  useScrollAnimation();
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <>
      <div className="flex flex-col gap-10 md:gap-20 p-5 md:px-10 py-20">
        {/* === TOP SECTION === */}
        <section className="flex flex-col md:flex-row gap-5 items-center section">
          <div className="w-full md:w-1/2 flex flex-col gap-5 text-[#29166F]">
            <h1 className="text-3xl md:text-5xl font-bold">{service}</h1>
            <p>{description}</p>
          </div>

          <div className="w-full md:w-1/2 rounded-[20px] overflow-hidden">
            <img src={imgSrc} alt={service} className="w-full" />
          </div>
        </section>

        {/* === FEATURES LIST CENTERED BELOW IMAGE === */}
        {features.length > 0 && (
          <section className="flex flex-col items-center px-5 section">
            <div className="w-fit">
              <ul
                className={`flex flex-col gap-5 max-w-[600px] pl-5 transition-all duration-500 ease-in-out overflow-hidden list-disc ${
                  collapse ? "max-h-none" : "max-h-60"
                }`}
              >
                {features.map((feature, index) => (
                  <li key={index} className="font-semibold text-xl">{feature}</li>
                ))}
              </ul>

              {features.length > 5 && (
                <div className="justify-center mt-3 flex">
                  <button
                    className="bg-transparent text-[#009A3C]"
                    onClick={handleCollapse}
                  >
                    {collapse ? "Collapse" : "Read More"}
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  );
};

export default ServiceTemplate;
