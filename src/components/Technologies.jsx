// components/Technologies.tsx
"use client";
import React, { useState } from "react";
import TopEllipse from "./TopEllipse";

const categories = [
  "Mobile",
  "Front End",
  "Database",
  "Backend",
  "CMS",
  "Infra And Devops",
];

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState("Front End");

  return (
    <section className="relative bg-gradient-to-b from-[#f5ffd7] to-white py-12 px-4 sm:px-6 lg:px-8 text-center pb-[100px] lg:pb-[200px]">
      <TopEllipse color="#f5ffd7" height={200} />

      {/* Top Label */}
      <div className="">
        <div className="inline-block px-4 py-1 mb-4 border rounded-full text-sm text-gray-700 mt-14">
          Technologies we work with
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-7xl font-bold text-gray-900">
          Trusted By Industry & <br /> Leaders Worldwide
        </h2>

        {/* Categories */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 border-b border-lime-200">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative pb-2 text-sm sm:text-base font-medium transition-colors ${
                activeCategory === category
                  ? "text-gray-900 border-b-2 border-lime-400"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Icon/Image */}
        {/* Icon/Image */}
        <div className="mt-10 flex justify-center">
          <div className="max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] w-full">
            <img
              src="/frontend.png"
              alt="Tech Icon"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 cursor-pointer bg-black text-white border hover:bg-white hover:border-black hover:text-black border-[#D8FF36] rounded-full text-sm sm:text-base font-medium hover:opacity-90 transition">
            Talk To Our Expert
          </button>
          <button className="px-6 py-3 cursor-pointer border border-[#D8FF36] text-sm sm:text-base font-medium rounded-full bg-white text-black hover:bg-lime-50 hover:text-black transition">
            Get a Quote
          </button>
        </div>
      </div>
      {/* Bottom Background Image */}
    </section>
  );
}
