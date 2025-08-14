// components/Technologies.js
"use client";
import React, { useState } from "react";

const categories = [
  "Mobile",
  "Front End",
  "Database",
  "Backend",
  "CMS",
  "Infra And Devops",
];

// Mapping categories to their respective icons/images
const techIcons = {
  Mobile: "/mobile.png",
  "Front End": "/frontend.png",
  Database: "/database.png",
  Backend: "/backend.png",
  CMS: "/cms.png",
  "Infra And Devops": "/infra-devops.png",
};

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState("Front End");

  return (
    <section
      className="py-12 px-4 sm:px-6 lg:px-8 text-center bg-cover bg-center"
      style={{ backgroundImage: `url('/Group 1321314847.png')` }}
    >
      {/* Top Label */}
      <div className="inline-block px-4 py-1 mb-4 border rounded-full text-sm text-black bg-white border-dotted">
        Technologies we work with
      </div>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-7xl font-bold text-gray-900">
        Trusted By Industry & Leaders Worldwide
      </h2>

      {/* Categories */}
      <div className="mt-6 flex flex-wrap justify-center gap-4 border-b border-lime-200">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`relative pb-2 text-xl cursor-pointer sm:text-base font-medium transition-colors ${
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
      <div className="flex justify-center items-center mt-8">
        <div className="w-full max-w-md h-80 flex items-center justify-center">
          <img
            src={techIcons[activeCategory]}
            alt={`${activeCategory} Icon`}
            className="w-auto h-auto object-contain"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button className="px-6 py-3 bg-black text-white border border-[#D8FF36] rounded-full text-sm sm:text-base font-medium hover:opacity-90 transition">
          Talk To Our Expert
        </button>
        <button className="px-6 py-3 border border-[#D8FF36] text-sm sm:text-base font-medium rounded-full text-black hover:bg-lime-50 transition">
          Get a Quote
        </button>
      </div>
    </section>
  );
}
