import React from "react";
import img_1 from "../../../../assets/images/banner/1.jpg";
import img_2 from "../../../../assets/images/banner/2.jpg";
import img_3 from "../../../../assets/images/banner/3.jpg";
import img_4 from "../../../../assets/images/banner/4.jpg";
import img_5 from "../../../../assets/images/banner/5.jpg";
import img_6 from "../../../../assets/images/banner/6.jpg";

import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img_1} className="w-full md:h-[740px] rounded-md "/>
          <div>
          <div className="absolute rounded-md rounded-md left-0 bottom-[0px] top-0 py-44  pl-14 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
            <div>
            <p className="text-6xl font-semibold text-white w-2/5">Affordable Price For Car Servicing</p>
            <p className="text-white text-lg w-1/2 my-8">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <a href="#slide4">
              <button className="text-white font-semibold py-2 px-4 border-2 rounded-md hover:bg-[#FF3811] hover:border-[#FF3811] cursor-pointer mr-4">Discover More</button>
            </a>
            <a
              href="#slide2" className="">
              <button className="text-white font-semibold py-2 px-4 border-2 rounded-md hover:bg-[#FF3811] hover:border-[#FF3811] cursor-pointer">Latest Project</button>
            </a>
            </div>
          </div>
          </div>
          <div className="absolute rounded-md flex gap-4 justify-end transform -translate-y-1/2 left-5 right-24 bottom-20">
            <a
              href="#slide4"
              className="bg-black bg-opacity-40 p-4 rounded-full hover:bg-[#FF3811]"
            >
              <FaLongArrowAltLeft className="text-white text-3xl"></FaLongArrowAltLeft>
            </a>
            <a
              href="#slide2"
              className="bg-black bg-opacity-40 p-4 rounded-full hover:bg-[#FF3811]"
            >
              <FaLongArrowAltRight className="text-white text-3xl"></FaLongArrowAltRight>
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img_2} className="w-full md:h-[740px] rounded-md "/>
          <div>
          <div className="absolute rounded-md  left-0 bottom-[0px] top-0 py-44  pl-14 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
            <div>
            <p className="text-6xl font-semibold text-white w-2/5">Affordable Price For Car Servicing</p>
            <p className="text-white text-lg w-1/2 my-8">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <a href="#slide4">
              <button className="text-white font-semibold py-2 px-4 border-2 rounded-md hover:bg-[#FF3811] hover:border-[#FF3811] cursor-pointer mr-4">Discover More</button>
            </a>
            <a
              href="#slide2" className="">
              <button className="text-white font-semibold py-2 px-4 border-2 rounded-md hover:bg-[#FF3811] hover:border-[#FF3811] cursor-pointer">Latest Project</button>
            </a>
            </div>
          </div>
          </div>
          <div className="absolute rounded-md flex gap-4 justify-end transform -translate-y-1/2 left-5 right-24 bottom-20">
            <a
              href="#slide1"
              className="bg-black bg-opacity-40 p-4 rounded-full hover:bg-[#FF3811]"
            >
              <FaLongArrowAltLeft className="text-white text-3xl"></FaLongArrowAltLeft>
            </a>
            <a
              href="#slide3"
              className="bg-black bg-opacity-40 p-4 rounded-full hover:bg-[#FF3811]"
            >
              <FaLongArrowAltRight className="text-white text-3xl"></FaLongArrowAltRight>
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img_3} className="w-full md:h-[740px] rounded-md" />
          <div>
          <div className="absolute rounded-md  left-0 bottom-[0px] top-0 py-44  pl-14 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
            <div>
            <p className="text-6xl font-semibold text-white w-2/5">Affordable Price For Car Servicing</p>
            <p className="text-white text-lg w-1/2 my-8">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <a href="#slide2">
              <button className="text-white font-semibold py-2 px-4 border-2 rounded-md hover:bg-[#FF3811] hover:border-[#FF3811] cursor-pointer mr-4">Discover More</button>
            </a>
            <a
              href="#slide4" className="">
              <button className="text-white font-semibold py-2 px-4 border-2 rounded-md hover:bg-[#FF3811] hover:border-[#FF3811] cursor-pointer">Latest Project</button>
            </a>
            </div>
          </div>
          </div>
          <div className="absolute rounded-md flex gap-4 justify-end transform -translate-y-1/2 left-5 right-24 bottom-20">
            <a
              href="#slide2"
              className="bg-black bg-opacity-40 p-4 rounded-full hover:bg-[#FF3811]"
            >
              <FaLongArrowAltLeft className="text-white text-3xl"></FaLongArrowAltLeft>
            </a>
            <a
              href="#slide4"
              className="bg-black bg-opacity-40 p-4 rounded-full hover:bg-[#FF3811]"
            >
              <FaLongArrowAltRight className="text-white text-3xl"></FaLongArrowAltRight>
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img_4} className="w-full md:h-[740px] rounded-md" />
          <div>
          <div className="absolute rounded-md  left-0 bottom-[0px] top-0 py-44  pl-14 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
            <div>
            <p className="text-6xl font-semibold text-white w-2/5">Affordable Price For Car Servicing</p>
            <p className="text-white text-lg w-1/2 my-8">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <a href="#slide4">
              <button className="text-white font-semibold py-2 px-4 border-2 rounded-md hover:bg-[#FF3811] hover:border-[#FF3811] cursor-pointer mr-4">Discover More</button>
            </a>
            <a
              href="#slide2" className="">
              <button className="text-white font-semibold py-2 px-4 border-2 rounded-md hover:bg-[#FF3811] hover:border-[#FF3811] cursor-pointer">Latest Project</button>
            </a>
            </div>
          </div>
          </div>
          <div className="absolute rounded-md flex gap-4 justify-end transform -translate-y-1/2 left-5 right-24 bottom-20">
            <a
              href="#slide3"
              className="bg-black bg-opacity-40 p-4 rounded-full hover:bg-[#FF3811]"
            >
              <FaLongArrowAltLeft className="text-white text-3xl"></FaLongArrowAltLeft>
            </a>
            <a
              href="#slide1"
              className="bg-black bg-opacity-40 p-4 rounded-full hover:bg-[#FF3811]"
            >
              <FaLongArrowAltRight className="text-white text-3xl"></FaLongArrowAltRight>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
