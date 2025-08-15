"use client";
import React from "react";

export default function ClientsSection() {
  const clientLogos = [
    "/clients/logo-2.png",
    "/clients/logo-3.png",
    "/clients/logo-9.png",
    "/clients/logo-10.png",
    "/clients/logo-12.png",
    "/clients/logo-14.png",
    "/clients/logo-18.png",
    "/clients/logo-20.png",
    "/clients/logo-22.png",
    "/clients/logo-23.png",
    "/clients/logo-25 (1).png",
    "/clients/logo-28.png",
    "/clients/logo-31.png",
    "/clients/logo-32 2.png",
  ];

  const midIndex = Math.ceil(clientLogos.length / 2);
  const rows = [
    { logos: clientLogos.slice(0, midIndex), animation: "scrollLeft" },
    { logos: clientLogos.slice(midIndex), animation: "scrollRight" },
  ];

  return (
    <section className="w-full bg-white py-12 px-4 md:px-8 lg:px-16 text-center overflow-hidden pb-100px lg:pb-[200px]">
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

      {/* Logo Rows */}
      {rows.map((row, idx) => (
        <div
          key={idx}
          className={`relative ${idx === 0 ? "mt-10" : "mt-6"} overflow-hidden`}
        >
          <div className={`clients-row ${row.animation}`}>
            {[...row.logos, ...row.logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Client ${i + 1}`}
                className="shrink-0 px-8 py-2 rounded-full bg-[#F5F5F5] border border-[#F5F5F5] flex items-center justify-center w-40 md:w-48 h-24"
              />
            ))}
          </div>
        </div>
      ))}

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button className="px-6 py-3 cursor-pointer bg-black text-white border hover:bg-white hover:border-black hover:text-black border-[#D8FF36] rounded-full text-sm sm:text-base font-medium hover:opacity-90 transition">
          Talk To Our Expert
        </button>
        <button className="px-6 py-3 cursor-pointer border border-[#D8FF36] text-sm sm:text-base font-medium rounded-full bg-white text-black hover:bg-lime-50 hover:text-black transition">
          Get a Quote
        </button>
      </div>
    </section>
  );
}
