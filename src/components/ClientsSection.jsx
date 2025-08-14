// components/ClientsScroller.tsx
import React from "react";

export default function ClientsSection() {
  // Array of client logo image paths
  const clientLogos = [
    "/logo-25 (1).png",
    "/logo-25 (1).png",
    "/logo-25 (1).png",
    "/logo-25 (1).png",
    "/logo-25 (1).png",
    "/logo-25 (1).png",
    "/logo-25 (1).png",
    "/logo-25 (1).png",
    "/logo-25 (1).png",
    "/logo-25 (1).png",
    "/logo-25 (1).png",
    "/logo-25 (1).png",
    "/logo-25 (1).png",
    "/logo-25 (1).png",
    "/logo-25 (1).png",
    "/logo-25 (1).png",
    "/logo-25 (1).png",
    "/logo-25 (1).png",
    "/logo-25 (1).png",
    "/logo-25 (1).png",
    "/logo-25 (1).png",
    "/logo-25 (1).png",
    "/logo-25 (1).png",
    "/logo-25 (1).png",
    "/logo-25 (1).png",
  ];

  return (
    <section className="w-full bg-white py-12 px-4 md:px-8 lg:px-16 text-center overflow-hidden">
      {/* Small Top Tag */}
      <div className="inline-block px-4 py-1 border border-gray-300 border-dotted rounded-full text-gray-400 text-sm mb-4">
        Trusted by Industry & Leaders Worldwide
      </div>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-7xl font-bold text-gray-900">
        Grateful for the <br className="hidden sm:block" />
        Partnership with Our <br className="hidden sm:block" /> Esteemed Client
      </h2>

      {/* Subheading */}
      <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-xl sm:text-base">
        We are proud to partner with a valued client whose trust and
        collaboration drive us to deliver excellence. Their vision and
        commitment inspire us to continuously improve and provide top-quality
        solutions.
      </p>

      <div className="relative mt-10 overflow-hidden">
        <div className="flex animate-scrollLeft gap-x-6">
          {clientLogos.map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`Client ${idx + 1}`}
              className="shrink-0 px-8 py-2 rounded-full bg-gray-200 border border-[#F5F5F5] flex items-center justify-center w-40 md:w-48 h-24"
            />
          ))}
        </div>
      </div>

      {/* Horizontal Scroll Row 2 */}
      <div className="relative mt-6 overflow-hidden">
        <div className="flex animate-scrollRight gap-x-6">
          {clientLogos.map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`Client ${idx + 1}`}
              className="shrink-0 px-8 py-2 rounded-full bg-gray-200 border border-[#F5F5F5] flex items-center justify-center w-40 md:w-48 h-24"
            />
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button className="px-6 py-3 bg-black text-white border border-[#D8FF36] rounded-full text-sm sm:text-base font-medium hover:opacity-90 transition">
          Talk To Our Expert
        </button>
        <button className="px-6 py-3 border border-[#D8FF36] text-sm sm:text-base font-medium rounded-full bg-white text-black hover:bg-lime-50 hover:text-black transition">
          Get a Quote
        </button>
      </div>
    </section>
  );
}
