import React from "react";
import Heading from "../layout/Heading";
import CoursesCard from "../layout/CoursesCard";
import webImg from "../assets/web-dev.svg";
import appImg from "../assets/App-dev.svg";
import graphicImg from "../assets/graphic.svg";
import digitalImg from "../assets/digital.svg";

const Courses = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center md:px-32 px-5 my-10">
      <Heading title1="Our" title2="Courses" />

      <div className=" flex flex-wrap justify-center gap-6 mt-6">
        <CoursesCard
          img={webImg}
          title="Python Programming"
          price="₦100,000"
          content="Unlock the power of Python with Cimspace - master versatile syntax 
        and unleash your creativity in software development and data analysis."
          url="https://docs.google.com/document/d/1DKiU2Y73SafRn2Uku0XTUlMPXEmY4g2c7wiGs14cwPc/edit?usp=drive_link"
        />
        <CoursesCard
          img={appImg}
          title="Java Programming"
          price="₦100,000"
          content="At Cimspace, delve into the robust world of Java programming - from foundational 
        concepts to advanced application development, elevate your coding prowess."
          url="https://docs.google.com/document/d/1EQzj8ftciDA8qEIpZgrFI1SamlQef0S7F5tc24XTp-4/edit?usp=drive_link"
        />
        <CoursesCard
          img={graphicImg}
          title="Go Programming"
          price="₦100,000"
          content="Explore the efficiency and simplicity of Go programming with Cimspace - 
        learn to build scalable and high-performance applications for the modern era."
          url="https://docs.google.com/document/d/1vdZjWmqg9ys_BU82RqD-VM9dsmeZ5j-pK9Qpz_2oDb0/edit?usp=drive_link"
        />
        <CoursesCard
          img={digitalImg}
          title="Web Design - HTML, CSS and JavaScript"
          price="₦100,000"
          content="Craft captivating web experiences with Cimspace - learn
         HTML, CSS, and JavaScript fundamentals, and unlock the secrets to stunning web design."
          url="https://docs.google.com/document/d/1J_1-hnF8Y5Mh29wZIAKfDoO7G7eofVxsTcnOW3wTf4E/edit?usp=drive_link"
        />
        <CoursesCard
          img={graphicImg}
          title="Frontend Web Development - REACT"
          price="₦150,000"
          content="Elevate your frontend skills with Cimspace - master React 
        and learn to create responsive and engaging user interfaces that leave a lasting impression."
          url="https://docs.google.com/document/d/1KXRviTNx8MYeoumFEIQwyKg1OmoVlfNa8g9CFaWy9ZE/edit?usp=drive_link"
        />
        <CoursesCard
          img={digitalImg}
          title="Backend Web Development - Django | Spring"
          price="₦150,000"
          content="Unlock the potential of backend development with 
        Cimspace - delve into Django or Spring frameworks, and learn to build robust, scalable, and secure web applications."
          url="https://docs.google.com/document/d/1YFTYiTKbcEkZY-baGBW4X0BptgGUX231WUBPEEnezK8/edit?usp=drive_link"
        />
        <CoursesCard
          img={digitalImg}
          title="Fullstack Web Development - MERN"
          price="₦200,000"
          content="Join Cimspace to become a proficient MERN stack developer - 
        from database management to frontend design and server-side logic, gain the skills to develop comprehensive web applications."
          url="https://docs.google.com/document/d/11vKPr3lguNBKnAy9Jif4KuG8yMcYIbaX2dH2lrBicNA/edit?usp=drive_link"
        />
      </div>
    </div>
  );
};

export default Courses;
