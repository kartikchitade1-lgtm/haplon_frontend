// components/IndustriesWeServe.tsx
export default function IndustriesWeServe() {
  const industryImages = [
    "/Industries 01.png",
    "/industries 02.png",
    "/industires 03.png",
    "/industries 04.png",
  ];

  const half = Math.ceil(industryImages.length / 2);
  const col1 = [...industryImages.slice(0, half), ...industryImages.slice(0, half)];
  const col2 = [...industryImages.slice(half), ...industryImages.slice(half)];

  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Badge */}
        <div className="mb-6">
          <span className="bg-[#D8FF36] text-black px-6 py-2 rounded-full text-sm font-medium">
            Industries We Serve
          </span>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Section */}
          <div className="flex flex-col justify-center flex-1">
            <h2 className="text-3xl md:text-7xl font-bold leading-tight text-black mb-4">
              We Designed & Developed <br /> Websites For
            </h2>

            <p className="text-gray-500 text-xl max-w-3xl mb-8">
              Our specialized expert professionals create, develop, and design
              responsive websites which will be displayed on any device
              according to its screen size.
            </p>

            <img
              src="/imagecom.png"
              alt="Main Visual"
              className="object-contain max-w-full h-auto"
            />
          </div>

          {/* Right Section - Vertically centered */}
          <div className="flex-1 flex justify-center">
            <div className="grid grid-cols-4 gap-6 h-96 overflow-hidden">
              {[col1, col2, col1, col2].map((col, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-6 ${
                    i % 2 === 0 ? "animate-up" : "animate-down"
                  }`}
                >
                  {col.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Industry ${idx}`}
                      className="object-contain w-full h-auto"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
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
