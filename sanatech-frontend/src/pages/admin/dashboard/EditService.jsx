import React, { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import base_url from "../../../components/morrisco/Base_url";

const EditService = () => {
  const navigate = useNavigate();
  const [service, setservice] = useState([])

  const services = [
    {
      id: 1,
      name: "Solar Installation",
      description: "Efficient and affordable solar energy solutions.",
    },
    {
      id: 2,
      name: "Civil Engineering",
      description: "High-quality infrastructure and construction services.",
    },
    {
      id: 3,
      name: "IT Support",
      description: "Professional IT consulting and support services.",
    },
  ];


  useEffect(() => {
    const fetchServices = async () => {
      try {
        const request = await fetch(`${base_url}/fetch-service`, {
          method: "GET",
          headers: {
            "content-Type": "application/json"
          }
        });


        const response = await request.json();
        if (response.success === true) {
          setservice(response.services);

          console.log( `printing`, service);
          
        }

        console.log("services are ", response);


      } catch (error) {
        console.log("error fetching services ", error);

      }


    }

    fetchServices()

  }, [])


  console.log("printing service outside of my function ", service);
  

  return (
    <div className="p-6 mt">
      <h1 className="text-2xl font-bold mb-6 flex justify-center text-[#29166F]">
        Edit Services
      </h1>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Services</h1>
          {/* Navigate to Add Service Page */}
          <button
            onClick={() => navigate("/admin/hidedashboard/edit/add")}
            className="flex items-center gap-2 px-4 py-2 bg-[#29166F] text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            <FaPlus /> Add Service
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.map((service) => (
            <div
              key={service.id}
              className="bg-gray-200 shadow-md rounded-lg p-5 flex flex-col justify-between hover:shadow-lg transition"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h2>
                <p className="text-gray-600 mt-2 text-sm">
                  {service.description}
                </p>
              </div>

              <div className="flex justify-start gap-3 mt-4">
                <button
                  onClick={() => navigate(`/admin/hidedashboard/edit/edit/${service.id}`)}
                  className="p-3 text-white bg-[#29166F] cursor-pointer hover:bg-blue-800 rounded-full transition"
                >
                  <FaEdit />
                </button>

                <button
                  onClick={() => navigate(`/admin/hidedashboard/edit/delete/${service.id}`)}
                  className="p-3 bg-red-600 text-white cursor-pointer hover:bg-red-700 rounded-full transition"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditService;
