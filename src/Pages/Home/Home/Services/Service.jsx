import React from "react";
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id,title, img, price } = service;
  return (
    <div className="">
      <div class=" flex items-center cursor-pointer">
        <div class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 ">
          <img class="rounded-xl h-[184px] w-[312px]" src={img} alt={title} />
          <div>
            <h1 class="mt-5 text-2xl font-semibold">{title}</h1>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p class="mt-2 font-bold text-[#FF3811]">Price : ${price}</p>
              <Link to={`/checkout/${_id}`}>
              <div className="border-2 p-2 rounded-full border-[#FF3811] hover:bg-[#FF3811] hover:scale-110 transition duration-500">
                   <FaLongArrowAltRight></FaLongArrowAltRight>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
