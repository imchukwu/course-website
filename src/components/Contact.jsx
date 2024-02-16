import React, { useState }  from "react";
import img from "../assets/contact.svg";
import Heading from "../layout/Heading";
import Button from "../layout/Button";
import axios from "axios";

const Contact = () => {

  const openGoogleForm = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfG2eba7XhrHyI0t9HmutO97LNEOvLt-e7m8OhyDLallwAGqA/viewform", "_blank");
  };
  

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <Heading title1="Contact" title2="Us" />
      
      <div className="justify-between w-full text-2xl p-1">
        <p>Phone: 09051702777</p>
        <p>Address: 23 Yaounde Street, Wuse zone 6, Abuja.</p>
        <p>
          Feel free to reach out anytime with any inquiries or questions you may
          have. Our team is here to assist you promptly and efficiently.
        </p>
      </div>
          <div className=" flex flex-row justify-center">
          <button 
            onClick={openGoogleForm}
            style={{ display: 'block', margin: '0 auto' }}
            className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Select Preferred Courses
        </button>
            </div>
         
    </div>
  );
};

export default Contact;
