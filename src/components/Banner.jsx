import React from "react";
import Count from "./Count";
import {  FaBook, FaUsers } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-[#EEEDFE] min-h-screen">
      <div className="flex flex-col lg:flex-row-reverse items-center px-4 lg:gap-20 justify-center space-y-4 pt-10 lg:pt-20 relative">
        <img
          src="https://templatekit.jegtheme.com/verbalizer/wp-content/uploads/sites/117/2021/06/image-JA74V7F.png"
          className="h-[620px] object-cover"
        />
       
       <div className="flex justify-start items-center gap-4 bg-white rounded-sm px-6 py-2 lg:absolute lg:top-[70%] lg:translate-y-1/2 lg:translate-x-[25%] z-10 backdrop-blur-sm shadow-lg">
        <div className="p-6 rounded-full bg-blue-100">
            <FaUsers className="text-blue-400 text-2xl"></FaUsers>
        </div>
          <div className="flex flex-col gap-2 justify-center items-center">
          <Count countEnd={1250}></Count>
          <p className="text-gray-500">Active Students</p>
          </div>
       </div>
       <div className="flex justify-center items-center gap-4 bg-white rounded-sm px-6 py-2 lg:absolute lg:top-[20%] lg:translate-y-1/4 lg:-right-10 z-10 backdrop-blur-sm shadow-lg">
        <div className="p-6 rounded-full bg-orange-100">
            <FaBook className="text-orange-400 text-2xl"></FaBook>
        </div>
          <div className="flex flex-col gap-2 justify-center items-center">
          <Count countEnd={10} ></Count>
          <p className="text-gray-500 text-center">Interactive Lessons</p>
          </div>
       </div>
        <div className="lg:w-[40%] flex flex-col justify-center items-center lg:justify-start lg:items-start">
          <h1 className="lg:text-6xl text-2xl text-[#172566] font-bold text-center lg:text-left ">Learn New <br /> Languages and Move Forward</h1>
          <p className="py-6 text-gray-500 text-center lg:text-left">
          Discover the joy of language learning with Lingo Bingo, your ultimate vocabulary-building companion! Dive into an engaging, interactive journey to expand your knowledge of a new language, one word at a time
          </p>
          <button className="px-6 py-5 rounded-sm bg-[#5754F7] text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
