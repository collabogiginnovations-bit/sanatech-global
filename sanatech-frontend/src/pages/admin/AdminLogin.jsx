import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



export default function AdminLogin() {
  const navigate = useNavigate()
  const [input, setinput] = useState({name:"", password:""});
  const [token, settoken] = useState("")

  const HandleChange = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setinput((prev)=>({...prev, [name]:value}))
  }

  const HandleSubmit = (event)=>{
    event.preventDefault();
    console.log("the input from the form is ", input);
    const newToken = `${input.name}morrisco`

     sessionStorage.setItem("token",newToken)

    navigate("/admin/hidedashboard")
    
  }

 

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={HandleSubmit} className="min-h-96 w-96 bg-amber-100 shadow-lg rounded-2xl py-10 px-10 flex flex-col gap-5">
        <legend className=" text-center text-2xl font-bold"> Admin Login</legend>

        <div className="flex flex-col">
          <label for="">email</label>
          <input required name='name' onChange={HandleChange} value={input.name} className=" py-1 outline-none bg-transparent border-b-2 border-black" type="text"
            placeholder="Admin Username" />
        </div>

        <div className="flex flex-col">
          <label for="">Password</label>
          <input required name='password' onChange={HandleChange} value={input.password} className=" py-1  outline-none bg-transparent border-b-2 border-black" type="password" placeholder="******" />
        </div>

        <div className="flex justify-center">
          <button type='submit' className="bg-amber-400 w-48 py-1 font-bold hover:bg-amber-300 hover:shadow-md transition-all duration-500 ease rounded-lg">Login</button>
        </div>

      </form>
    </div>
  );
}
