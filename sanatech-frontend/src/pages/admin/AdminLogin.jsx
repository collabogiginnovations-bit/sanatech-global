import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditService from './dashboard/EditService';
import { FaEnvelope, FaEye } from 'react-icons/fa6';

const API = import.meta.env.VITE_API_URL || 'http://localhost:4000';
const adminPath = import.meta.env.VITE_ADMIN_PATH?.replace(/^\//, '') || 'admin-very-secret';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setErr('');
    try {
      const res = await fetch(`${API}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', 
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed');
      navigate(`/${adminPath}`);
    } catch (error) {
      setErr(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form action="./dashboard/clientDashboard.html" className="min-h-96 w-96 bg-amber-100 shadow-lg rounded-2xl py-10 px-10 flex flex-col gap-5">
        <legend className=" text-center text-2xl font-bold"> Admin Login</legend>

        <div className="flex flex-col">
          <label for="">email</label>
          <input className=" py-1 outline-none bg-transparent border-b-2 border-black" type="text"
            placeholder="Admin Username" />
        </div>

        <div className="flex flex-col">
          <label for="">Password</label>
          <input className=" py-1  outline-none bg-transparent border-b-2 border-black" type="password" placeholder="******" />
        </div>

        <div className="flex justify-center">
          <button className="bg-amber-400 w-48 py-1 font-bold hover:bg-amber-300 hover:shadow-md transition-all duration-500 ease rounded-lg">Login</button>
        </div>

      </form>
    </div>
  );
}
