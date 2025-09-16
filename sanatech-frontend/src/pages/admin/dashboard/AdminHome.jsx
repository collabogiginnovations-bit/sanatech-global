import React, { useEffect, useState } from "react";
import base_url from "../../../components/morrisco/Base_url";

const AdminHome = () => {
  const [messages, setmessage] = useState([])



  console.log("the array of all messages are ", messages);
  

  useEffect(()=>{
    const fetchMessages = async ()=>{
      const request = await fetch(`${base_url}/fetch-messages`, {
        method: "GET",
        headers:{
          "content-Type":"application/json"
        }
      });

      const response = await request.json();
      
      if (response.message ==="message available") {
        const incomingMessages = response.messages
        console.log("the incoming message variable value is", incomingMessages);
        
        setmessage(incomingMessages)
        console.log("the fetch message respones ", messages);
      }
      

    };

    fetchMessages()
  }, [])

  return (
    <div className="p-6 mt-20">
      <h1 className="text-2xl font-bold mb-6  flex justify-center text-[#29166F]">User Messages</h1>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Subject</th>
              <th className="p-3 border">Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg.id} className="hover:bg-[#29166F] hover:text-white ">
                <td className="p-3 border font-medium">{msg.name}</td>
                <td className="p-3 border">{msg.email}</td>
                <td className="p-3 border">{msg.subject}</td>
                <td className="p-3 border ">{msg.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHome;
