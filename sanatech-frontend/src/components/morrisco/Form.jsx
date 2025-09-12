"use client";
import React, { useEffect, useState } from "react";
import FormButton from "./FormButton";

const Form = () => {
  const BASE_URL = "http://localhost:3001";
  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("");
  const [responesSMS, setResponesSMS] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("the form data is ", input);
    setSubmitted(true);
    setResponesSMS("Sending...");
    setStatus("sending");
  };

  useEffect(() => {
    if (!submitted) return;

    const sendMessage = async () => {
      try {
        const respones = await fetch(`${BASE_URL}/send-message`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(input),
        });
        
        const res = await respones.json();
        if (res.status === 200) {
          setResponesSMS("Message Sent");
          setStatus("sent");
          setInput({ name: "", email: "", subject: "", message: "" });
        } else {
          setResponesSMS("Failed! Network Error");
          setStatus("failed");
        }
      } catch (error) {
        console.log("error sending message: ", error);
        setResponesSMS("Failed! Server Error");
        setStatus("failed");
      } finally {
        setSubmitted(false);
      }
    };

    sendMessage();
  }, [submitted, input]);

  const handleDismiss = () => {
    setResponesSMS("");
    setStatus("");
  };

  return (
    <div className="flex justify-center lg:justify-end w-full my-3 ">
      <form
        onSubmit={handleSubmit}
        className="bg-[#E4DFF4] flex flex-col gap-4 rounded-2xl w-96  py-6 px-9 "
      >
        <legend className="text-lg font-bold text-[#29166F] ">
          Send Us a Message
        </legend>

        {responesSMS && (
          <div
            className={`flex items-center justify-between px-3 rounded-md py-1 text-sm font-medium
                            ${
                              status === "sending"
                                ? "bg-yellow-300 text-black"
                                : ""
                            }
                            ${
                              status === "sent" ? "bg-green-600 text-white" : ""
                            }
                            ${
                              status === "failed" ? "bg-red-600 text-white" : ""
                            }
                        `}
          >
            <span>{responesSMS}</span>
            {status !== "sending" && (
              <button
                type="button"
                onClick={handleDismiss}
                className="ml-3 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>
        )}

        <div>
          <input
            required
            onChange={handleChange}
            name="name"
            value={input.name}
            type="text"
            className="w-full h-9 text-sm bg-transparent outline-none border-b-2 border-gray-500 transition duration-100 ease-in hover:border-[#29166F]"
            placeholder="Full Name"
          />
        </div>
        <div>
          <input
            required
            type="email"
            onChange={handleChange}
            name="email"
            value={input.email}
            className="w-full h-9 text-sm bg-transparent outline-none border-b-2 border-gray-500 transition duration-100 ease-in hover:border-[#29166F]"
            placeholder="Email Address"
          />
        </div>
        <div>
          <input
            required
            type="text"
            onChange={handleChange}
            name="subject"
            value={input.subject}
            className="w-full h-9 text-sm bg-transparent outline-none border-b-2 border-gray-500 transition duration-100 ease-in hover:border-[#29166F]"
            placeholder="Subject"
          />
        </div>
        <div>
          <textarea
            required
            onChange={handleChange}
            name="message"
            value={input.message}
            rows={3}
            className="w-full text-sm flex bg-transparent placeholder:items-center outline-none border-b-2 border-gray-500 transition duration-100 ease-in hover:border-[#29166F]"
            placeholder="Message"
          />
        </div>
        <div className="text-sm pt-3">
          <FormButton text="Send Message" arrow={true} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
