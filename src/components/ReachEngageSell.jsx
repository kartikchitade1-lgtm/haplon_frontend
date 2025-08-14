// components/ReachEngageSell.tsx
"use client";
import React from "react";

export default function ReachEngageSell() {
  return (
    <section className="w-full px-4 md:px-10 lg:px-16 py-12 bg-white">
      {/* Heading */}
      <div className="text-center mb-6">
        <span className="inline-block px-4 py-1 mb-3 text-sm border text-black border-gray-300 border-dotted rounded-full">
          We can help you incline your conversion
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-6xl text-black font-bold leading-snug">
          Reach! Engage! Sell! Repeat!
        </h2>
        <p className="mt-2 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Grow Your Audience With Performance-Driven Social Media Marketing Strategies
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-10">
        {/* Left Column */}
        <div className="space-y-6 flex flex-col justify-center">
          {[
            {
              img: "/web-traffic 1.png",
              title: "I’M LOOKING TO GENERATE TRAFFIC",
              text: "Our proven social media strategies of generating website traffic will surely inspire you.",
            },
            {
              img: "/website.png",
              title: "I WANT TO BUILD LOYALTY",
              text: "Our social media retargeting tactics and intriguing offer ideas always keep customers loyal and engaged.",
            },
          ].map((card, idx) => (
            <div key={idx} className="bg-[#F8FAF2] p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="mb-3">
                <div className="w-20 h-20 bg-[#D8FF36] rounded-full flex items-center justify-center">
                  <img src={card.img} alt={card.title} className="w-12 h-12 object-contain" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.text}</p>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="flex flex-col justify-center items-center">
          <img
            src="/socialico.png"
            alt="Social Media Illustration"
            className="w-3/4 sm:w-2/3 md:w-full max-w-md object-contain h-[600px]"
          />
        </div>

        {/* Right Column */}
        <div className="space-y-6 flex flex-col justify-center">
          {[
            {
              img: "/loyal-customer.png",
              title: "I’D LIKE MORE CONVERSIONS",
              text: "We can help you incline your conversion rate with our holistic social media management and analytical approach.",
            },
            {
              img: "/website-visitors.png",
              title: "DELIGHT & ENGAGE",
              text: "Let us inscribe the most eye-catching and interesting content that would positively engage and delight your audience.",
            },
          ].map((card, idx) => (
            <div key={idx} className="bg-[#F8FAF2] p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="mb-3">
                <div className="w-20 h-20 bg-[#D8FF36] rounded-full flex items-center justify-center">
                  <img src={card.img} alt={card.title} className="w-12 h-12 object-contain" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.text}</p>
            </div>
          ))}
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
