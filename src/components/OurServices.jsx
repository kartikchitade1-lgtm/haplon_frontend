"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TopEllipse from "./TopEllipse";

export default function OurServices() {
  const services = [
    {
      title: "Social Media Marketing",
      description:
        "At Enum Digital, we confidently deliver the stunning website design & development service in a very discounted price. Our Best and Affordable Web Design",
    },
    {
      title: "UX/UI Design",
      description:
        "At Enum Digital, we confidently deliver the stunning website design & development service in a very discounted price. Our Best and Affordable Web Design",
    },
    {
      title: "Mobile App Development",
      description:
        "At Enum Digital, we confidently deliver the stunning website design & development service in a very discounted price. Our Best and Affordable Web Design",
    },
    {
      title: "Digital Marketing Strategy",
      description:
        "At Enum Digital, we confidently deliver the stunning website design & development service in a very discounted price. Our Best and Affordable Web Design",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-black to-gray-100 text-white py-16 px-4">
      <TopEllipse color="#000000" height={200} />

      <div className="max-w-7xl mx-auto text-center">
        {/* Tag */}
        <span className="inline-block px-6 py-1 border border-dashed border-[#D8FF36] text-[#D8FF36] text-sm rounded-full mb-6">
          Other services
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4">
          Your Dream Website, <br className="hidden sm:block" /> Made Reality
        </h2>
        <p className="text-gray-300 max-w-2xl text-xl mx-auto mb-12">
          We provide bespoke solutions that bridge the gap between commercial
          possibilities and creative resolution, while delivering effectiveness
          for our clients.
        </p>

        {/* Services Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {services.map((service, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white text-black rounded-2xl shadow p-6 flex flex-col items-start text-left mx-2 h-full">
                {/* Icon Placeholder */}
                <div className="mb-4">
                  <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
                    {/* Add icon/image here */}
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-700">{service.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 bg-black text-white border border-[#D8FF36] rounded-full text-sm sm:text-base font-medium hover:opacity-90 transition">
            Talk To Our Expert
          </button>
          <button className="px-6 py-3 border border-[#D8FF36] text-sm sm:text-base font-medium bg-white rounded-full text-black hover:bg-lime-50 transition">
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
}
