"use client";
import React from "react";
import TopEllipse from "./TopEllipse";

const WorldMapSection = () => {
  return (
    <>
      <section className="">
        <TopEllipse color="#000000" height={200} />
        {/* Black Section */}
        <div className="bg-black relative text-center px-4 py-16 md:py-24 z-10">
          {/* View Locations Button */}
          <div className="mb-6">
            <button className="border border-[#D8FF36] border-dashed text-[#D8FF36] px-14 py-2 rounded-full text-sm md:text-base hover:bg-yellow-400 hover:text-black transition">
              View Our Locations
            </button>
          </div>

          {/* Heading */}
          <h1 className="text-white font-bold text-2xl md:text-7xl leading-snug">
            Your Dream Website, <br /> Made Reality
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-xl md:text-base">
            We provide bespoke solutions that bridge the gap between commercial
            possibilities and creative resolution, while delivering
            effectiveness for our clients.
          </p>

          {/* World Map */}
          <div className="mt-12 flex justify-center relative">
            <img src="/Frame.png" alt="World Map" className="w-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default WorldMapSection;
