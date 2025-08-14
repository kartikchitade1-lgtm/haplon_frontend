// components/IndustriesWeServe.tsx
export default function IndustriesWeServe() {
    return (
      <section className="w-full bg-white py-12">
        <div className="container mx-auto px-4">
          {/* Top Badge */}
          <div className="mb-4">
            <span className="bg-lime-300 text-black px-6 py-2 rounded-full text-sm font-medium">
              Industries We Serve
            </span>
          </div>
  
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            We Designed & Developed Websites For
          </h2>
  
          {/* Subtext */}
          <p className="text-gray-500 max-w-3xl mb-8">
            Our specialized expert professionals create, develop, and design responsive websites which will be
            displayed on any device according to its screen size.
          </p>
  
          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Section */}
            <div className="flex justify-center">
              <img
                src="/imagecom.png"
                alt="Main Visual"
                className="object-contain max-w-full"
              />
            </div>
  
            {/* Right Section - 4 grouped column images */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <img src="/industries 01.png" alt="Industries 0 1" className="object-contain w-full" />
              <img src="/industries 02.png" alt="Industries 0 2" className="object-contain w-full" />
              <img src="/industires 03.png" alt="Industries 0 3" className="object-contain w-full" />
              <img src="/industries 04.png" alt="Industries 0 4" className="object-contain w-full" />
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
  