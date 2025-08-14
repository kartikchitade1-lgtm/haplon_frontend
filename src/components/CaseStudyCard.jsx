// components/CaseStudyCard.tsx
import Image from "next/image";

export default function CaseStudyCard() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f5fddc] to-white py-12 px-4">
      {/* Tag */}
      <div className="flex justify-center">
        <span className="px-4 py-1 text-sm rounded-full border border-gray-200 text-black bg-white shadow-sm">
          Case Studies
        </span>
      </div>

      {/* Title */}
      <h2 className="text-center text-3xl text-black sm:text-4xl font-bold mt-4 leading-tight">
        Behind The Scenes <br /> Our Projects
      </h2>

      {/* Content Section */}
      <div className="mt-10 flex flex-col items-center">
        <div className="relative w-full max-w-5xl flex flex-col items-center">
          {/* Background image */}
          <div className="relative w-full h-72 sm:h-96 overflow-hidden rounded-b-[100px]">
            <Image
              src="/casestudycard.png"
              alt="Background"
              fill
              className="object-cover"
            />
          </div>

       

          {/* Text overlay */}
          <h3 className="absolute top-[20%] left-[10%] text-white text-3xl font-bold drop-shadow-lg">
            MAGRABi
          </h3>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-4 mt-6">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white">
            &lt;
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white">
            &gt;
          </button>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="px-6 py-3 rounded-full bg-black text-white text-sm font-semibold">
            Talk To Our Expert
          </button>
          <button className="px-6 py-3 rounded-full border border-black text-black text-sm font-semibold hover:bg-black hover:text-white transition">
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
}
