// components/ClientsScroller.tsx
import React from "react";

export default function ClientsSection() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-8 lg:px-16 text-center overflow-hidden">
      {/* Small Top Tag */}
      <div className="inline-block px-4 py-1 border border-gray-300 rounded-full text-sm mb-4">
        Trusted by Industry & Leaders Worldwide
      </div>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        Grateful for the Partnership <br className="hidden sm:block" />
        with Our Esteemed Client
      </h2>

      {/* Subheading */}
      <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
        We are proud to partner with a valued client whose trust and collaboration
        drive us to deliver excellence. Their vision and commitment inspire us to
        continuously improve and provide top-quality solutions.
      </p>

      {/* Horizontal Scroll Row 1 */}
      <div className="relative mt-10 overflow-hidden">
        <div className="flex animate-scrollLeft">
          <img
            src="/Component 163.png"
            alt="Row 1 logos"
            className="h-16 object-contain mx-4"
          />
          <img
            src="/Component 163.png"
            alt="Row 1 logos duplicate"
            className="h-16 object-contain mx-4"
          />
        </div>
      </div>

      {/* Horizontal Scroll Row 2 */}
      <div className="relative mt-6 overflow-hidden">
        <div className="flex animate-scrollRight">
          <img
            src="/clients logo bottom bar.png"
            alt="Row 2 logos"
            className="h-16 object-contain mx-4"
          />
          <img
            src="/clients logo bottom bar.png"
            alt="Row 2 logos duplicate"
            className="h-16 object-contain mx-4"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <button className="px-6 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition">
          Talk To Our Expert
        </button>
        <button className="px-6 py-3 rounded-full border border-gray-300 text-black font-semibold hover:bg-gray-100 transition">
          Get a Quote
        </button>
      </div>
    </section>
  );
}
