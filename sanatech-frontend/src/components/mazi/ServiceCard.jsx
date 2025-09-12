import { NavLink, useNavigate } from "react-router-dom";


const ServiceCard = ({ cardLink, cardTitle, paragraph, icon, index }) => {
  const navigator = useNavigate()


  return (
    <>
      <button  key={index} className="section" onClick={()=>navigator(`/services/${cardLink}`)}>
        <div className="bg-[#E4DFF4] flex flex-col items-start text-black rounded-2xl p-3 md:p-5 w-full h-full">
          <div className="bg-[#29166F] h-12 w-12 rounded-full flex items-center justify-center text-white text-2xl mb-2.5">
            {icon}
          </div>
          <h3 className="text-base font-bold mb-4 text-[#29166F]">
            {cardTitle}
          </h3>
          <p className="text-sm font-normal text-start">{paragraph}</p>
        </div>
      </button>
    </>
  );
};

export default ServiceCard;
