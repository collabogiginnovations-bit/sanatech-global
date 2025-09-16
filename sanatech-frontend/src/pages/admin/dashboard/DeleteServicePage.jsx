import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import base_url from "../../../components/morrisco/Base_url";

const DeleteServicePage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams(); // get id from URL

  const handleConfirm = async () => {
    setIsOpen(false);

    try {
      const request = await fetch(`${base_url}/delete-service/${id}`, {
        method: "DELETE",
      });

      const response = await request.json();
      if (response.success) {
        setAlert({ type: "success", message: "Service deleted successfully!" });
      } else {
        setAlert({ type: "cancel", message: response.error || "Failed to delete service" });
      }
    } catch (error) {
      console.error("Error deleting service:", error);
      setAlert({ type: "cancel", message: "Server error" });
    }
  };

  const handleCancel = () => {
    setIsOpen(false);
    setAlert({ type: "cancel", message: "Deletion cancelled." });
  };

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(null);
        navigate("/admin/hidedashboard/edit");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [alert, navigate]);

  return (
    <div className="p-6">
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-96 p-6 text-center animate-fadeIn">
            <h3 className="text-xl font-bold text-gray-800">Are you sure?</h3>
            <p className="text-gray-600 mt-2">
              This action cannot be undone. Do you really want to delete this service?
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={handleCancel}
                className="px-5 py-2 bg-gray-300 text-gray-800 rounded-lg shadow hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-5 py-2 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Alert */}
      {alert && (
        <div
          className={`fixed top-6 right-6 px-5 py-3 rounded-lg shadow-lg text-white font-medium z-50 transition-opacity duration-500 ${
            alert.type === "success" ? "bg-green-600" : "bg-yellow-600"
          }`}
        >
          {alert.message}
        </div>
      )}
    </div>
  );
};

export default DeleteServicePage;
