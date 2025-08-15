"use client";
import React from "react";

export default function Footer() {
  return (
    <div>
      <section className="relative">
        <div className="relative bg-[#D8FF36] text-black">


          <div className="relative z-10 mt-[120px] px-4 py-8 text-center">
            <h2 className="font-semibold text-3xl">Hoplon & Co.</h2>

            <p className="text-sm font-gray-400 font-semibold max-w-5xl mx-auto mt-2">
              DISCLAIMER
            </p>

            <p className="text-sm font-gray-400 max-w-5xl mx-auto mt-2">
              All third-party company names, brand names, trademarks, and logos
              featured on this website are the property of their respective
              owners. Hoplon & Co. does not claim any ownership or association
              with these third-party assets and has no control over the content
              or materials they represent. Any resemblance to content found
              elsewhere on the internet is purely coincidental.
            </p>

            <p className="text-sm font-gray-400 max-w-5xl mx-auto mt-2">
              All logos, trademarks, designs, layouts, content, service marks,
              photos, and related materials mentioned or displayed on this
              website and in any associated proposals are the property of their
              respective copyright holders. These items are used solely for
              reference, demonstration, or to reflect the collective experience
              of our team, collaborators, contractors, or affiliates.
            </p>

            <p className="text-sm font-gray-400 max-w-5xl mx-auto mt-2">
              Hoplon & Co. is an independent entity and is not affiliated with
              any third-party brands unless explicitly stated.
            </p>

            <button className="mt-6 bg-black w-full rounded-4xl text-xl text-white px-6 py-2 hover:bg-gray-800 transition">
              © 2025 Hoplon & Co. All rights reserved.
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
