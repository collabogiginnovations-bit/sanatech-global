import { useState } from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import CTASection from "../morrisco/CTASection";

const ServiceTemplate = ({
  service,
  description,
  imgSrc,
  capabilities,
  detailedCapabilities,
}) => {
  useScrollAnimation()
  const [collapse, setCollapse] = useState(false)
  const handleCollapse = () => {
    setCollapse(!collapse)
  }

  //skill training nested list
    const nestedList = [
      {
        subHeading: "Classroom-based training: ",
        item: "Traditional instructor-led sessions for theoretical, and practical knowledge and interactive learning."
      },
      {
        subHeading: "On-the-job training: ",
        item: "Practical training conducted at the workplace, allowing participants to apply skills in a real-world setting."
      },
      {
        subHeading: "Workshop and seminars: ",
        item: "Focused sessions on specific skills or topics, ideal for upskilling and knowledge enhancement."
      },
      {
        subHeading: "Blended learning: ",
        item: "Combining online resources with in-person sessions for a flexible and comprehensive learning experience."
      },
      {
        subHeading: "Mobile training units: ",
        item: "Deployable training facilities to reach remote locations and address specific community needs."
      },
  
    ]


  const nameMap = {
    services: "Services",
    "civil-works": "Civil Works",
  };

  const hiddenSegments = "service-description";



  return (
    <>
      <div className="flex flex-col gap-10 md:gap-20 p-5 md:px-10 py-20">
        <ol className="flex text-[12px] text-gray-400">
          
        </ol>

        <section className="flex flex-col md:flex-row gap-5 items-center section">
          <div className="w-full md:w-1/2 flex flex-col gap-5 text-[#29166F]">
            <h1 className="text-3xl md:text-5xl font-bold ">
              {service}
            </h1>
            <p className=" ">{description}</p>
            <ul className="flex flex-col gap-2 list-disc ml-5">
              {detailedCapabilities.map((capability, index) => {
                return (
                  <li key={index}>{capability}</li>
                )
              })}

            </ul>

          </div>

          <div className="w-full md:w-1/2 rounded-[20px] overflow-hidden">
            <img src={imgSrc} alt="" className="w-full" />
          </div>
        </section>

        <section className="flex flex-col items-center px-5 section">
          <div className="w-fit">
           
            <ul className={`flex flex-col gap-5 max-w-[600px] pl-5 transition-all duration-500 ease-in-out overflow-hidden list-disc ${collapse ? "min-h-screen" : "max-h-screen"}`}>
              {capabilities.map((item, index) => (
                <li key={index}><p className="font-semibold inline text-xl">{item.subHeading}</p>
                  {item.item}
                  <div className={`justify-center mt-3 ${service === "Skill Training" ? "flex" : "hidden"}`}>
                    <ul className={`flex-col list-disc ml-5 ${item.subHeading === "Flexible Delivery Options: " ? "flex" : "hidden"}`}>
                      {
                        nestedList.map((list, index) => {
                          return (
                            <li key={index}><p className="font-semibold inline ">{list.subHeading}</p>{list.item}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </li>
              ))}

            </ul>
            <div className={`justify-center mt-3 ${service === "Skill Training" ? "flex" : "hidden"}`}>
              <button className='bg-transparent text-[#009A3C]' onClick={handleCollapse} >{collapse ? "Collapse" : "Read More"}</button>
            </div>
          </div>
        </section>

        {/* <section className="flex flex-col md:flex-row items-start justify-between px-5 section">
          <h2 className="text-2xl md:text-3xl font-bold text-[#29166F] mb-5">
            Why Choose ECPROD?
          </h2>
          <ul className="flex flex-col gap-5 max-w-[600px] list-disc">
            <li>
              Proven Expertise – Decades of hands-on experience delivering
              infrastructure nationwide.
            </li>
            <li>
              Advanced Technology – Modern equipment and techniques for
              efficient execution.
            </li>
            <li>
              Safety First – Compliance with local and international safety
              standards.
            </li>
            <li>
              Sustainable Practices – Designs and processes that minimize
              environmental impact.
            </li>
          </ul>
        </section> */}

        <CTASection />
      </div>
    </>
  );
};

export default ServiceTemplate;
