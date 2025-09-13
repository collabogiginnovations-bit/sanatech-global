import React from "react";

const AdminHome = () => {
  const messages = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      subject: "Service Inquiry",
      message: "I would like to know more about your solar installation service.",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      subject: "Job Application",
      message: "I am interested in applying for an engineering role at Sanatech.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael@example.com",
      subject: "Support Needed",
      message: "I’m having trouble accessing my account. Can you assist?",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael@example.com",
      subject: "Support Needed",
      message: "I’m having trouble accessing my account. Can you assist?",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael@example.com",
      subject: "Support Needed",
      message: "I’m having trouble accessing my account. Can you assist?",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael@example.com",
      subject: "Support Needed",
      message: "I’m having trouble accessing my account. Can you assist?",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael@example.com",
      subject: "Support Needed",
      message: "I’m having trouble accessing my account. Can you assist?",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael@example.com",
      subject: "Support Needed",
      message: "I’m having trouble accessing my account. Can you assist?",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael@example.com",
      subject: "Support Needed",
      message: "I’m having trouble accessing my account. Can you assist?",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael@example.com",
      subject: "Support Needed",
      message: "I’m having trouble accessing my account. Can you assist?",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael@example.com",
      subject: "Support Needed",
      message: "I’m having trouble accessing my account. Can you assist?",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael@example.com",
      subject: "Support Needed",
      message: "I’m having trouble accessing my account. Can you assist?",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael@example.com",
      subject: "Support Needed",
      message: "I’m having trouble accessing my account. Can you assist?",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael@example.com",
      subject: "Support Needed",
      message: "I’m having trouble accessing my account. Can you assist?",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael@example.com",
      subject: "Support Needed",
      message: "I’m having trouble accessing my account. Can you assist?",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael@example.com",
      subject: "Support Needed",
      message: "I’m having trouble accessing my account. Can you assist?",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael@example.com",
      subject: "Support Needed",
      message: "I’m having trouble accessing my account. Can you assist? ",
    },
  ];

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
              <tr key={msg.id} className="hover:bg-[#29166F] hover:text-white">
                <td className="p-3 border font-medium">{msg.name}</td>
                <td className="p-3 border text-[#29166F] hover:text-white">{msg.email}</td>
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
