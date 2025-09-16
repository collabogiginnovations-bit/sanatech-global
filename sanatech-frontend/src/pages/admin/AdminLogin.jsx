import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import base_url from '../../components/morrisco/Base_url';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: "", password: "" });
  const [alert, setAlert] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!input.email || !input.password) {
      setAlert("⚠️ Please fill in all the fields");
      return;
    }

    try {
      const response = await fetch(`${base_url}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });

      const res = await response.json();
      console.log("API Response: ", res);
      if (response.ok) { 
        sessionStorage.setItem("token", res.token);
        setAlert("Login successful");
        navigate("/admin/hidedashboard");
      } else {
        setAlert(res.message || "❌ Access Denied: Invalid email or password");
      }

    } catch (error) {
      console.error("Error during login:", error);
      setAlert("❌ Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="min-h-96 w-96 bg-amber-100 shadow-lg rounded-2xl py-10 px-10 flex flex-col gap-5"
      >
        <legend className="text-center text-2xl font-bold">Admin Login</legend>

        {/* Alert Box */}
        {alert && (
          <div className="text-red-600 text-sm font-semibold text-center">
            {alert}
          </div>
        )}

        <div className="flex flex-col">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={input.email}
            onChange={handleChange}
            className="py-1 outline-none bg-transparent border-b-2 border-black"
            placeholder="Admin email"
          />
        </div>

        <div className="flex flex-col">
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={input.password}
            onChange={handleChange}
            className="py-1 outline-none bg-transparent border-b-2 border-black"
            placeholder="******"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-amber-400 w-48 py-1 font-bold hover:bg-amber-300 hover:shadow-md transition-all duration-500 ease rounded-lg"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
