import React from "react";
import Heading from "../layout/Heading";
import ReviewCard from "../layout/ReviewCard";
import img1 from "../assets/images/pic1.png";
import img2 from "../assets/images/pic2.png";
import img3 from "../assets/images/pic3.png";

const Reviews = () => {
  return (
    <div className=" min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5">
      <Heading title1="Our" title2="Reviews" />

      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard
          img={img1}
          content="Cimspace's Python Programming course was an eye-opener! The instructors broke down complex concepts into manageable chunks, and the hands-on projects really solidified my understanding. Highly recommended for anyone looking to dive into Python development!"
        />
        <ReviewCard
          img={img2}
          content="I enrolled in Cimspace's Fullstack Web Development - MERN stack course, and it exceeded my expectations! The curriculum covered everything from frontend design to backend logic, and the instructors were incredibly knowledgeable and supportive. Thanks to Cimspace, I now feel confident tackling real-world web projects!"
        />
        <ReviewCard
          img={img3}
          content="As someone new to programming, Cimspace's Java Programming course provided the perfect foundation. The instructors were patient and provided clear explanations, making the learning process enjoyable. I now feel equipped to pursue my dream of becoming a Java developer, all thanks to Cimspace!"
        />
      </div>
    </div>
  );
};

export default Reviews;
