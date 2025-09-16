import React, { useState } from "react";
import base_url from "../../../components/morrisco/Base_url";



const AddServices = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [icon, setIcon] = useState("");
    const [image, setImage] = useState(null);
    const [features, setFeatures] = useState([""]);

    const [status, setStatus] = useState("");
    const [responesSMS, setResponesSMS] = useState("");

    const handleFeatureChange = (index, value) => {
        const updated = [...features];
        updated[index] = value;
        setFeatures(updated);
    };

    const addFeatureField = () => {
        setFeatures([...features, ""]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        setResponesSMS("Saving Service")
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("icon", icon);   // now stores image instead of string
        formData.append("image", image);
        formData.append("features", JSON.stringify(features));

        try {
            const response = await fetch(`${base_url}/add-service`, {
                method: "POST",
                body: formData,
            });

            const result = await response.json();
            console.log("Server response:", result);
            if (result.success === true) {
                setResponesSMS("Service saved")
                setStatus("sent")
                
            } else {
                setResponesSMS("Server error")
                setStatus("failed")
            }

        } catch (error) {
            console.log("error saving server ", error);
            setResponesSMS("Network error")

        }
    };

    const handleDismiss = () => {
        setResponesSMS("");
        setStatus("");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-3xl bg-white/70 backdrop-blur-xl shadow-2xl rounded-2xl p-10 space-y-6"
            >

                {responesSMS && (
                    <div className={`flex items-center justify-between px-3 rounded-md py-1 text-sm font-medium 
                            ${status === "sending" ? "bg-yellow-300 text-black" : ""}
                            ${status === "sent" ? "bg-green-600 text-white" : ""}
                            ${status === "failed" ? "bg-red-600 text-white" : ""}`}>

                        <span>{responesSMS}</span>

                        {status !== "sending" && (
                            <button type="button" onClick={handleDismiss} className="ml-3 text-xs font-bold">
                                ✕
                            </button>
                        )}
                    </div>
                )}

                <h2 className="text-3xl font-extrabold text-center text-[#29166F]">
                    Add New Service
                </h2>
                <p className="text-center text-gray-600">
                    Fill in the details below to create a new service
                </p>

                {/* Service Title */}
                <div>
                    <label className="block font-semibold text-gray-700 mb-2">
                        Service Title
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none transition"
                        placeholder="Enter service title"
                        required
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block font-semibold text-gray-700 mb-2">
                        Description
                    </label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none transition"
                        placeholder="Write a short description..."
                        rows={4}
                        required
                    ></textarea>
                </div>

                {/* Icon & Image side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block font-semibold text-gray-700 mb-2">
                            Service Card Icon (Image)
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setIcon(e.target.files[0])}
                            className="w-full p-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none transition"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-semibold text-gray-700 mb-2">
                            Service Image
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                            className="w-full p-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none transition"
                            required
                        />
                    </div>
                </div>

                {/* Features */}
                <div>
                    <label className="block font-semibold text-gray-700 mb-2">
                        Features (What They Do)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                            <input
                                key={index}
                                type="text"
                                value={feature}
                                onChange={(e) => handleFeatureChange(index, e.target.value)}
                                className="w-full p-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none transition"
                                placeholder={`Feature ${index + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={addFeatureField}
                        className="mt-4 px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-lg shadow-md  transition"
                    >
                        + Add Feature
                    </button>
                </div>

                {/* Save Button */}
                <button
                    type="submit"
                    className="w-full py-3 mt-6 bg-[#29166F] hover:bg-[#1d0c5c]  text-white font-bold rounded-lg shadow-lg  transition transform hover:scale-[1.02]"
                >
                    Save Service
                </button>
            </form>
        </div>
    );
};

export default AddServices;
