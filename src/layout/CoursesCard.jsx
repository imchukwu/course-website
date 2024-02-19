import React from "react";
import webImg from "../assets/web-dev.svg";

const CoursesCard = (props) => {
  const handleDownload = () => {
    // Replace "path/to/your/file.pdf" with the actual path to your file
    window.open(props.url, "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-between bg-white border-2 border-lightText md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
      <div className="w-3/5">
        <img src={props.img} alt="img" />
      </div>
      <div>
        <h3 className="font-semibold text-lg text-center my-5">
          {props.title} ({props.discount_price}{" "}
          <i>
            <s>{props.price}</s>
          </i>
          ) - {props.duration}
        </h3>
        <p className="text-lightText text-center md:text-start">
          {props.content}
        </p>

        <button
          onClick={handleDownload}
          style={{ display: "block", margin: "0 auto" }}
          className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          View Curriculum
        </button>
      </div>
    </div>
  );
};

export default CoursesCard;
