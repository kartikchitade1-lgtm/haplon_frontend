"use client";
import { SOCIAL_MEDIA_CARDS } from "@/constants/socialMediaData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SocialMedia() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      { breakpoint: 1536, settings: { slidesToShow: 4 } }, // 2xl
      { breakpoint: 1280, settings: { slidesToShow: 3 } }, // xl
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // lg
      { breakpoint: 640, settings: { slidesToShow: 1 } }, // sm & xs
    ],
  };

  return (
    <section className="bg-black py-8 sm:py-12 px-2 sm:px-4">
      {/* Tag */}
      <div className="flex justify-center mb-4">
        <div className="inline-block px-3 sm:px-4 py-1 border border-[#D8FF36] border-dotted rounded-full text-[#989898] text-xs sm:text-sm">
          We provide quality services
        </div>
      </div>

      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10 px-2">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight">
          Our Social Media Marketing
          <br className="hidden sm:block" />
          Service Deliverables
        </h2>
        <p className="text-[#979595] mt-2 text-base sm:text-lg md:text-xl">
          We deliver effective, efficient & innovative digital services
        </p>
      </div>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {SOCIAL_MEDIA_CARDS.map(({ id, title, description, icon: Icon }) => (
            <div key={id} className="px-1 sm:px-2">
              <div
                className="group relative h-auto min-h-[280px] sm:min-h-[320px] md:min-h-[340px] bg-white rounded-[20px] sm:rounded-[30px] md:rounded-[44px] ring-1 ring-black/10 
                           shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-4 sm:p-6 md:p-8 overflow-hidden flex flex-col"
              >
                {/* Top section: Icon + Title */}
                <div className="relative min-h-[64px] flex items-center">
                  {/* Icon box */}
                  <div
                    className="absolute -top-5 -left-5 
                               md:transition-all md:duration-500 md:ease-[cubic-bezier(.4,0,.2,1)]
                               md:group-hover:top-1 md:group-hover:left-1"
                  >
                    <div
                      className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-black
                                 md:transition-all md:duration-500 md:ease-[cubic-bezier(.4,0,.2,1)]
                                 md:group-hover:bg-[#D9FF3D] md:group-hover:rounded-full"
                    >
                      <Icon
                        className="w-6 h-6 sm:w-8 sm:h-8 text-white 
                                   md:transition-colors md:duration-500 md:ease-[cubic-bezier(.4,0,.2,1)] 
                                   md:group-hover:text-black"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="pl-16 sm:pl-20 text-lg sm:text-[22px] md:text-[28px] lg:text-xl font-extrabold leading-snug tracking-tight text-[#15181E]">
                    {title}
                  </h3>
                </div>

                {/* Body */}
                <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-6 sm:leading-8 text-[#6B6B6B] flex-1">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
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
