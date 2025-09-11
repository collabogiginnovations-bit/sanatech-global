import { NavLink } from "react-router-dom";


const ServiceCard = ({ cardLink, cardTitle, paragraph, icon, index }) => {


  return (
    <>
      <NavLink to={cardLink} key={index} className="section">
        <div className="bg-[#E4DFF4] flex flex-col text-black rounded-2xl p-3 md:p-5 w-full h-full">
          <div className="bg-[#29166F] h-12 w-12 rounded-full flex items-center justify-center text-white text-2xl mb-2.5">
            {icon}
          </div>
          <h3 className="text-base font-bold mb-4 text-[#29166F]">
            {cardTitle}
          </h3>
          <p className="text-sm font-normal">{paragraph}</p>
        </div>
      </NavLink>
    </>
  );
};

export default ServiceCard;
