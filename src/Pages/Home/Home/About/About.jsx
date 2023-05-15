import React from "react";
import person from "../../../../assets/images/about_us/person.jpg";
import parts from "../../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="my-20 ">
      <div className="hero h-content ">
        <div className="hero-content flex-col  lg:flex-row gap-[16rem]">
          <div className="relative ">
            <img src={person} className="lg:w-[500px] rounded-lg shadow-2xl" />
            <img className="lg:w-[350px] border-8 border-white rounded-lg absolute top-[190px] left-[227px]" src={parts} alt="" />
          </div>
          <div>
            <p className="text-[#FF3811] font-bold text-xl pb-4">About Us</p>
            <h1 className="text-5xl font-bold w-[376px]">We are qualified & of experience in this field</h1>
            <div className="py-6 w-[489px]">
            <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <p>
            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            </div>
            <button className="px-4 py-2 rounded-md text-white font-semibold hover:scale-105 duration-300 bg-[#FF3811] my-4">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
