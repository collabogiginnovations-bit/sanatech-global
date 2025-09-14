import React from 'react'
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const EditService = () => {
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
        {
            id: 3,
            name: "IT Support",
            description: "Professional IT consulting and support services.",
        },
        {
            id: 3,
            name: "IT Support",
            description: "Professional IT consulting and support services.",
        },
    ];
    return (
        <div className="p-6 mt-20">
            <h1 className="text-2xl font-bold mb-6  flex justify-center text-[#29166F]">Edit Services</h1>
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Services</h1>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#29166F] text-white rounded-lg shadow hover:bg-indigo-700 transition">
                        <FaPlus /> Add Service
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-gray-200 shadow-md rounded-lg p-5 flex flex-col justify-between hover:shadow-lg transition"
                        >
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">{service.name}</h2>
                                <p className="text-gray-600 mt-2 text-sm">{service.description}</p>
                            </div>

                            <div className="flex justify-start gap-3 mt-4 ">
                                <button className="p-3 text-white bg-[#29166F] cursor-pointer hover:bg-blue-800 rounded-full transition">
                                    <span className=' text-xl font-semibold'><FaEdit /></span>
                                </button>
                                <button className="p-3 bg-red-600 text-white cursor-pointer  hover:bg-red-700 rounded-full transition">
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white  rounded-lg flex gap-5">
                {/* <button className='cursor-pointer'>
                    <div className='bg-amber-100 shadow-md rounded-2xl h-32 py-3 px-5 gap-3 flex flex-col justify-center items-center '>
                        <span className='bg-[#29166F] rounded-full p-2 font-semibold text-2xl text-white'><FaPlus /></span>
                        <p className='font-semibold text-lg'>Add Service</p>
                    </div>
                </button> */}
                

            </div>
        </div>
    )
}

export default EditService