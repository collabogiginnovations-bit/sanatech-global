import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import base_url from "../../../components/morrisco/Base_url";

const IndividualServiceEditPage = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [image, setImage] = useState(null);
  const [features, setFeatures] = useState([""]);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await fetch(`${base_url}/individual-service-edit/${id}`);
        const data = await response.json();

        if (data.success) {
          setTitle(data.service.title);
          setDescription(data.service.description);
          setIcon(data.service.icon);
          setFeatures(data.service.features || [""]);
          setImage(data.service.image); // store filename for preview
        }
      } catch (err) {
        console.error("Error fetching service:", err);
      }
    };

    fetchService();
  }, [id]);

  const handleFeatureChange = (index, value) => {
    const updated = [...features];
    updated[index] = value;
    setFeatures(updated);
  };

  const addFeatureField = () => setFeatures([...features, ""]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("icon", icon);
    if (image instanceof File) formData.append("image", image);
    formData.append("features", JSON.stringify(features));

    const response = await fetch(`${base_url}/update-service/${id}`, {
      method: "PUT",
      body: formData,
    });

    const result = await response.json();
    console.log("Server response:", result);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-3xl bg-white/70 backdrop-blur-xl shadow-2xl rounded-2xl p-10 space-y-6">
        <h2 className="text-3xl font-extrabold text-center text-[#29166F]">Edit Service</h2>
        <p className="text-center text-gray-600">Find and replace the service information</p>

        {/* Title */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">Service Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-3 rounded-lg border border-gray-300" required />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-3 rounded-lg border border-gray-300" rows={4} required />
        </div>

        {/* Icon & Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold text-gray-700 mb-2">Card Icon</label>
            <input type="text" value={icon} onChange={(e) => setIcon(e.target.value)} className="w-full p-3 rounded-lg border border-gray-300" required />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-2">Service Image</label>
            {image && typeof image === "string" && (
              <div className="mb-3">
                <img src={`http://localhost:3000/uploads/${image}`} alt="Current Service" className="w-32 h-32 object-cover rounded" />
              </div>
            )}
            <input type="file" onChange={(e) => setImage(e.target.files[0])} className="w-full p-3 rounded-lg border border-gray-300" />
          </div>
        </div>

        {/* Features */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">Features</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <input key={index} type="text" value={feature} onChange={(e) => handleFeatureChange(index, e.target.value)} className="w-full p-3 rounded-lg border border-gray-300" placeholder={`Feature ${index + 1}`} />
            ))}
          </div>
          <button type="button" onClick={addFeatureField} className="mt-4 px-4 py-2 bg-amber-700 text-white rounded-lg">+ Add Feature</button>
        </div>

        <button type="submit" className="w-full py-3 mt-6 bg-[#29166F] text-white font-bold rounded-lg">Save Service</button>
      </form>
    </div>
  );
};

export default IndividualServiceEditPage;
