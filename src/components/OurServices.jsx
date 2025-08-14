// components/OurServices.tsx
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
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Tag */}
          <span className="inline-block px-6 py-1 border border-dashed border-yellow-400 text-yellow-400 text-sm rounded-full mb-6">
            Other services
          </span>
  
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Your Dream Website, <br className="hidden sm:block" /> Made Reality
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12">
            We provide bespoke solutions that bridge the gap between commercial
            possibilities and creative resolution, while delivering effectiveness
            for our clients.
          </p>
  
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white text-black rounded-2xl shadow p-6 flex flex-col items-start text-left"
              >
                {/* Icon Placeholder */}
                <div className="mb-4">
                  <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
                    {/* Add icon/image here */}
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
  
          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
              Talk To Our Expert
            </button>
            <button className="px-6 py-3 bg-white text-black border border-gray-300 rounded-full hover:bg-gray-100 transition">
              Get a Quote
            </button>
          </div>
        </div>
      </section>
    );
  }
  