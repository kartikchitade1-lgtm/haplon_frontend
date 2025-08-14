// components/SocialMediaHero.tsx
"use client";
import Image from "next/image";

export default function SocialMediaHero() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Top Rated </span>
            <span className="text-lime-400">Social Media</span>
            <span className="text-white"> Marketing Agency in Dubai UAE</span>
          </h1>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Text */}
          <div className="flex-1 text-left lg:text-right max-w-sm relative z-20">
            <p className="text-sm sm:text-base md:text-lg text-gray-300">
              Do you want to improve your brand’s online social presence?
            </p>
          </div>

          {/* Image with VR Glass Animation */}
          <div className="relative flex-1 flex justify-center">
            <Image
              src="/Group 1321314844.png"
              alt="Social Media Dubai Statue"
              width={900}
              height={900}
              className="object-contain max-w-7xl mx-auto relative z-10"
              priority
            />

            {/* VR Glass Bottom Border */}
            <div className="absolute w-[180px] h-[2px] bg-lime-400 blur-[20px] animate-blink"
              style={{
                bottom: "84%",
                zIndex:99, // adjust this to match mask position
                left: "44%",
                transform: "translateX(-50%) rotate(-5deg)",
                borderRadius: "99px",
              }}
            />
          </div>

          {/* Right Text */}
          <div className="flex-1 text-left max-w-sm relative z-20">
            <p className="text-sm sm:text-base md:text-lg text-gray-300">
              Award Winning Social Media Marketing Agency in Dubai. <br />
              Your Partner in Performance. Dubai’s 1st Digital Experiential Agency, Our Social Media Marketing Company will help you Grow Traffic, Leads, & Sales.
            </p>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 10px #a6ff00, 0 0 20px #a6ff00, 0 0 40px #a6ff00;
          }
          50% {
            opacity: 0.3;
            box-shadow: 0 0 5px #a6ff00, 0 0 10px #a6ff00, 0 0 20px #a6ff00;
          }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
}
