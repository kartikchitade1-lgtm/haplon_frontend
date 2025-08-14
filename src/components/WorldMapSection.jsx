// components/WorldMapSection.tsx
import React from "react";

const WorldMapSection = () => {
  return (
    <section className="relative">
      {/* Top Curve */}
      <svg
        className="absolute top-0 left-0 w-full text-black"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,64L48,74.7C96,85,192,107,288,101.3C384,96,480,64,576,69.3C672,75,768,117,864,128C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,0L0,0Z"
        ></path>
      </svg>

      {/* Black Section */}
      <div className="bg-black relative text-center px-4 py-16 md:py-24 z-10">
        {/* View Locations Button */}
        <div className="mb-6">
          <button className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded-full text-sm md:text-base hover:bg-yellow-400 hover:text-black transition">
            View Our Locations
          </button>
        </div>

        {/* Heading */}
        <h1 className="text-white font-bold text-2xl md:text-4xl leading-snug">
          Your Dream Website, <br /> Made Reality
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-sm md:text-base">
          We provide bespoke solutions that bridge the gap between commercial
          possibilities and creative resolution, while delivering effectiveness
          for our clients.
        </p>

        {/* World Map */}
        <div className="mt-12 flex justify-center relative">
          <img
            src="/Frame.png" // Replace with your map image
            alt="World Map"
            className="w-full max-w-4xl"
          />
        </div>
      </div>

      {/* Bottom Lime Section with curve */}
      <svg
        className="absolute bottom-0 left-0 w-full text-lime-400"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,96C672,64,768,32,864,21.3C960,11,1056,21,1152,42.7C1248,64,1344,96,1392,112L1440,128L1440,0L0,0Z"
        ></path>
      </svg>

      {/* Footer Section */}
      <div className="bg-lime-400 relative z-10 mt-[-1px] py-8 px-4 text-center text-black">
        <h2 className="font-semibold text-lg">hoplon & co.</h2>
        <p className="text-xs max-w-3xl mx-auto mt-2">
          All third-party company names, brand names, trademarks, and logos
          featured on this website are the property of their respective owners...
        </p>
        <p className="mt-4 text-xs">© 2025 Hoplon & Co. All rights reserved.</p>
      </div>
    </section>
  );
};

export default WorldMapSection;
