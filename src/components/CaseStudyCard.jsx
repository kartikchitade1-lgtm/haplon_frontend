"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function CaseStudyCard() {
  const caseStudies = [
    {
      title: "MAGRABi",
      image: "/casestudycard.png",
    },
    {
      title: "Brand Redesign",
      image: "/casestudycard.png",
    },
    {
      title: "E-Commerce Boost",
      image: "/casestudycard.png",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#F6FFD2] to-white py-12 px-4 pb-[100px] lg:pb-[200px]">
      {/* Tag */}
      <div className="flex justify-center z-10">
        <span className="px-4 py-1 text-sm rounded-full border border-gray-200 text-black bg-white mt-10 shadow-sm">
          Case Studies
        </span>
      </div>

      {/* Title */}
      <h2 className="text-center text-3xl text-black sm:text-7xl font-bold mt-4 leading-tight">
        Behind The Scenes <br /> Our Projects
      </h2>

      {/* Swiper Section */}
      <div className="mt-10 flex flex-col items-center">
        <div className="relative w-full max-w-5xl flex flex-col items-center">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
            className="w-full"
          >
            {caseStudies.map((study, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative w-full h-72 sm:h-96 overflow-hidden rounded-b-[100px]">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                  <h3 className="absolute top-[20%] left-[10%] text-white text-3xl font-bold drop-shadow-lg">
                    {study.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-4 mt-6 z-10">
          <button className="custom-prev w-10 h-10 flex items-center justify-center rounded-full bg-black text-white cursor-pointer">
            &lt;
          </button>
          <button className="custom-next w-10 h-10 flex items-center justify-center rounded-full bg-black text-white cursor-pointer">
            &gt;
          </button>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium">
            Talk To Our Expert
          </button>
          <button className="border border-lime-300 text-black px-6 py-3 rounded-full text-sm font-medium">
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
}
