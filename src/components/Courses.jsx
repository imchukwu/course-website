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
          content="Unlock the power of Python with Cimspace - master versatile syntax 
        and unleash your creativity in software development and data analysis."
        />
        <CoursesCard
          img={appImg}
          title="Java Programming"
          content="At Cimspace, delve into the robust world of Java programming - from foundational 
        concepts to advanced application development, elevate your coding prowess."
        />
        <CoursesCard
          img={graphicImg}
          title="Go Programming"
          content="Explore the efficiency and simplicity of Go programming with Cimspace - 
        learn to build scalable and high-performance applications for the modern era."
        />
        <CoursesCard
          img={digitalImg}
          title="Web Design - HTML, CSS and JavaScript"
          content="Craft captivating web experiences with Cimspace - learn
         HTML, CSS, and JavaScript fundamentals, and unlock the secrets to stunning web design."
        />
        <CoursesCard
          img={graphicImg}
          title="Frontend Web Development - REACT"
          content="Elevate your frontend skills with Cimspace - master React 
        and learn to create responsive and engaging user interfaces that leave a lasting impression."
        />
        <CoursesCard
          img={digitalImg}
          title="Backend Web Development - Django | Spring"
          content="Unlock the potential of backend development with 
        Cimspace - delve into Django or Spring frameworks, and learn to build robust, scalable, and secure web applications."
        />
        <CoursesCard
          img={digitalImg}
          title="Fullstack Web Development - MERN"
          content="Join Cimspace to become a proficient MERN stack developer - 
        from database management to frontend design and server-side logic, gain the skills to develop comprehensive web applications."
        />
      </div>
    </div>
  );
};

export default Courses;
