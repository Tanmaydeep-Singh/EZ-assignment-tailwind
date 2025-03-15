import React, { useState } from "react";
import cards from "./cardData";
import EZLogo from "./assets/EZlogo.png";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");


  const handleSubmit = async () => {
    if (email.trim().length === 0) {
      toast.error("Email cannot be empty.");
      return;
    }
  
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
  
    if (email.includes("@ez.works")) {
      toast.error("Emails from '@ez.works' are not allowed.");
      return;
    }
  
    const body = { email };
  
    try {
      const { data } = await axios.post(`https://test.ezworks.ai/api`, body);
      console.log("Response data:", data);
      toast.success("Email sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };
    
  return (
    <div className="max-w-[1440px] h-screen mx-auto flex flex-col xl:flex-row items-center pr-4 py-10 gap-6 md:gap-10 text-center  xl:text-start">
    <div><Toaster/></div>

      <div className="mb-6 flex flex-col xl:w-1/2 md:w-4/6 ">
      
        <div className="flex items-center justify-center xl:justify-start xl:items-start space-x-2 py-2">
          <img src={EZLogo} alt="EZ Works Logo" className="w-64 h-24 md:w-80 md:h-28" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-2 pb-6 md:pb-10">
          Suite Of Business Support Services
        </h2>
        <p className="text-lg md:text-2xl text-gray-600 mb-6 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
        </p>
     
        <div className=" hidden sm:flex flex-col md:flex-row items-center gap-4 w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="flex-1 px-4 py-3 text-lg md:text-2xl border rounded-md shadow-sm focus:ring focus:ring-blue-200"
          />
          <button
            onClick={handleSubmit}
            className="bg-orange-500 text-white px-6 py-3 text-lg md:text-2xl rounded-md shadow-md hover:bg-orange-600"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-6  w-full md:w-[90vw]  xl:w-1/2 text-start ">
        {cards.map((card, index) => (
          <div key={index} className="bg-[#112949] text-white p-4 rounded-lg shadow-lg w-[234px] h-[208px] xl:w-[218px] xl:h-[192px]">
            <div className="flex items-center space-x-2">
              <img
                src={require(`./assets/Cards/${card.image}`)}
                alt="Card Icon"
                className=" w-8 h-8 md:w-10 md:h-10"
              />
              <h3 className=" text-[18px] xl:text-lg font-semibold text-[#3CC3F2]">{card.title}</h3>
            </div>
            <p className="mt-2  text-lg xl:text-base font-[#FFFFFF]">{card.description}</p>
          </div>
        ))}
      </div>


      {/* Mobile Mail */}
      <div className=" flex flex-col sm:hidden items-center w-[300px] pb-20">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="flex-1 px-4 py-3 text-lg md:text-2xl border rounded-md shadow-sm focus:ring focus:ring-blue-200 w-[300px] m-4"
        />
        <button
          onClick={handleSubmit}
          className="bg-orange-500 text-white px-6 py-3 text-lg md:text-2xl rounded-md shadow-md hover:bg-orange-600"
        >
          Contact Me
        </button>
      </div>
  
    </div>

  );
}

export default App;
