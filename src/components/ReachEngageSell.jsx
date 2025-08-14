// components/ReachEngageSell.tsx
"use client";
import React from "react";

export default function ReachEngageSell() {
  return (
    <section className="w-full px-4 md:px-10 lg:px-16 py-12 bg-white">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="inline-block px-4 py-1 mb-3 text-sm border text-black border-gray-300 rounded-full">
          We can help you incline your conversion
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold leading-snug">
          Reach! Engage! Sell! Repeat!
        </h2>
        <p className="mt-3 text-gray-600 text-base md:text-lg">
          Grow Your Audience With Performance-Driven Social Media Marketing
          Strategies
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="bg-[#f6fbe9] p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="mb-3">
              {/* Replace with your icon */}
              <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center">
                📈
              </div>
            </div>
            <h3 className="font-bold text-lg mb-2 text-black">
              I’M LOOKING TO GENERATE TRAFFIC
            </h3>
            <p className="text-gray-600 text-sm">
              Our proven social media strategies of generating website traffic
              will surely inspire you.
            </p>
          </div>

          <div className="bg-[#f6fbe9] p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="mb-3">
              {/* Replace with your icon */}
              <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center">
                🤝
              </div>
            </div>
            <h3 className="font-bold text-lg mb-2 text-black">I WANT TO BUILD LOYALTY</h3>
            <p className="text-gray-600 text-sm">
              Our social media retargeting tactics and intriguing offer ideas
              always keep customers loyal and engaged.
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          {/* Replace with your actual center image */}
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
            <img
              src="/socialico.png"
              alt="Social Media Illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="bg-[#f6fbe9] p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="mb-3">
              {/* Replace with your icon */}
              <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center">
                📊
              </div>
            </div>
            <h3 className="font-bold text-lg mb-2 text-black">I’D LIKE MORE CONVERSIONS</h3>
            <p className="text-gray-600 text-sm">
              We can help you incline your conversion rate with our holistic
              social media management and analytical approach.
            </p>
          </div>

          <div className="bg-[#f6fbe9] p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="mb-3">
              {/* Replace with your icon */}
              <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center">
                🎯
              </div>
            </div>
            <h3 className="font-bold text-lg mb-2 text-black">DELIGHT & ENGAGE</h3>
            <p className="text-gray-600 text-sm">
              Let us inscribe the most eye catching and interesting content that
              would positively engage and delight your audience.
            </p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition">
          Talk To Our Expert
        </button>
        <button className="border border-black text-black px-6 py-3 rounded-full hover:bg-gray-100 transition">
          Get a Quote
        </button>
      </div>
    </section>
  );
}
