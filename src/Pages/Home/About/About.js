import React from "react";
import part from "../../../assets/images/about_us/parts.jpg";
import person from "../../../assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div className="hero bg-white my-24 ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative w-1/2">
          <img src={person} alt="" className=" w-4/5 rounded-lg shadow-2xl" />
          <img
            src={part}
            alt=""
            className="w-3/5 right-5 top-1/2 border-8 absolute max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-1/2">
          <p className="text-orange-600 text-2xl font-bold mb-5">About Us</p>
          <h1 className="text-5xl font-bold ">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-primary bg-[#FF3811] text-white border-0">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
