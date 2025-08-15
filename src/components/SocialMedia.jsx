"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { SOCIAL_MEDIA_CARDS } from "@/constants/socialMediaData";
import TopEllipse from "./TopEllipse";

export default function SocialMedia() {
  return (
    <section className="w-full pb-[100px] lg:pb-[200px] bg-black">
      <TopEllipse color="#000000" height={200} />

      <div className="relative z-10">
        {/* Tag */}
        <div className="relative flex justify-center mb-6">
          <div className="inline-block px-3 sm:px-4 py-1 border border-[#D8FF36] border-dotted rounded-full text-[#989898] text-xs sm:text-sm">
            We provide quality services
          </div>
        </div>

        {/* Heading */}
        <div className="relative text-center mb-12 sm:mb-16 px-2">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            Our Social Media Marketing
            <br className="hidden sm:block" />
            Service Deliverables
          </h2>
          <p className="text-[#979595] mt-4 text-base sm:text-lg md:text-xl">
            We deliver effective, efficient & innovative digital services
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="relative w-full mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={16}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="pt-12"
          >
            {SOCIAL_MEDIA_CARDS.map(
              ({ id, title, description, icon: Icon }) => (
                <SwiperSlide key={id}>
                  <div
                    className="group relative h-auto min-h-[280px] sm:min-h-[320px] md:min-h-[340px] bg-white rounded-[20px] sm:rounded-[30px] md:rounded-[44px] ring-1 ring-black/10 
                           shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-4 sm:p-6 md:p-8 overflow-hidden flex flex-col"
                  >
                    {/* Icon & Title */}
                    <div className="relative min-h-[64px] flex items-center">
                      <div className="absolute -top-5 -left-5 transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)] group-hover:top-1 group-hover:left-1">
                        <div
                          className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-black
                                 transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]
                                 group-hover:bg-[#D9FF3D] group-hover:rounded-full"
                        >
                          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white transition-colors duration-500 ease-[cubic-bezier(.4,0,.2,1)] group-hover:text-black" />
                        </div>
                      </div>
                      <h3 className="pl-16 sm:pl-20 text-lg sm:text-[22px] md:text-[28px] lg:text-xl font-extrabold leading-snug tracking-tight text-[#15181E]">
                        {title}
                      </h3>
                    </div>
                    <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-6 sm:leading-8 text-[#6B6B6B] flex-1">
                      {description}
                    </p>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>

        {/* Buttons */}
        <div className="relative mt-12 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 bg-black text-white border border-[#D8FF36] rounded-full text-sm sm:text-base font-medium hover:opacity-90 transition">
            Talk To Our Expert
          </button>
          <button className="px-6 py-3 border border-[#D8FF36] text-sm sm:text-base font-medium rounded-full bg-white text-black hover:bg-lime-50 hover:text-black transition">
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
}
