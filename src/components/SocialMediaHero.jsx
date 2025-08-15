"use client";

export default function SocialMediaHero() {
  return (
    <section
      className="relative text-white"
      style={{
        background: "linear-gradient(to bottom, black 65%, white 35%)",
      }}
    >
      {/* Hero Image */}
      <div className="relative w-full z-20">
        <img
          src="/Group 1321314844.png"
          alt="Social Media Dubai Statue"
          className="w-full lg:max-w-7xl mx-auto h-full"
        />

        {/* VR Glass Bottom Border Animation */}
        {/* <div
          className="absolute w-[100px] sm:w-[140px] md:w-[180px] h-[3px] bg-lime-400 animate-blink"
          style={{
            bottom: "41%",
            left: "50%",
            transform: "translateX(-50%) rotate(-5deg)",
            borderRadius: "99px",
            boxShadow: "0 0 10px #a6ff00, 0 0 20px #a6ff00, 0 0 40px #a6ff00",
          }}
        /> */}
      </div>

      {/* Text Content */}
      <div className="absolute top-0 left-0 w-full h-[65%] z-10 flex flex-col justify-center items-center px-4">
        <h1 className="text-2xl text-center sm:text-4xl md:text-5xl lg:text-8xl font-bold max-w-7xl">
          <span className="text-white">Top Rated Social</span>
          <br />
          <span className="text-lime-400">Media Marketing</span>
          <br />
          <span className="text-white"> Agency in Dubai UAE</span>
        </h1>

        <div className="mt-6 md:mt-10 hidden md:flex flex-col md:flex-row gap-6 w-full text-gray-300 max-w-5xl">
          <p className="text-lg lg:text-xl md:w-1/2 leading-relaxed">
            Do you want to improve <br /> your brand’s online social presence?
          </p>
          <p className="text-lg lg:text-xl md:w-1/2 leading-relaxed">
            Award Winning Social Media Marketing Agency in Dubai. Your Partner
            in Performance. Dubai’s 1st Digital Experiential Agency, Our Social
            Media Marketing Company will help you Grow Traffic, Leads, & Sales.
          </p>
        </div>
      </div>

      {/* Blinking Light at Gradient Border */}
      {/* <div
        className="absolute left-0 w-full h-[4px] bg-lime-400 animate-blink"
        style={{
          top: "65%",
          boxShadow: "0 0 10px #a6ff00, 0 0 20px #a6ff00, 0 0 40px #a6ff00",
        }}
      /> */}

      {/* Animation */}
      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
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
