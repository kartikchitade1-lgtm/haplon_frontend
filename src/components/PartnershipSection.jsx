// components/PartnershipSection.tsx
import Image from "next/image";

export default function PartnershipSection() {
  return (
    <section className="bg-[#D8FF36] py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Tag */}
        <div className="flex justify-center mb-6">
          <span className="bg-white text-gray-700 px-8 py-4 rounded-full text-sm font-medium shadow">
            Trusted by Industry & Leaders Worldwide
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-7xl font-bold text-center text-black mb-6">
          Grateful for the Partnership <br className="hidden sm:block" /> with
          Our Esteemed Client
        </h2>

        {/* Description */}
        <p className="text-center text-gray-600 max-w-4xl mx-auto text-xl md:text-base">
          Enum Digital (Digits that Define Growth) - No matter we are building a
          website for our clients or boosting their business through our
          marketing strategies - We talk about facts like the website&apos;s
          health score, optimization score (website speed), no. of clicks, no.
          of leads, cost per lead, and more.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-10 items-stretch min-h-screen">
          {/* Left Image */}
          {/* Left Image */}
          <div className="flex items-center justify-center h-full">
            <div
              className="relative w-full flex items-center justify-center"
              style={{ height: "600px" }}
            >
              <img
                src="/hope_men_status.png"
                alt="Social Media Illustration"
                className="object-contain h-full w-auto"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center h-full">
            <p className="text-gray-800 mb-6 text-sm md:text-base">
              Social Media Brand Management is a tricky business. Some campaign
              works well, others provide us with learnings to improve. With try
              and experiment with social media best-practices like ad creatives,
              ad text targeting, and website landing pages for conversions. We
              take the guesswork out and save your time to help get results in
              cost-effective manner. Social media brand management is all about
              consistently implementing the right techniques to present your
              business and engage with your audience on social media platforms
            </p>

            <h3 className="font-bold text-lg mb-4 text-black">
              At ENUM Digital Agency:
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
              {[
                "Perform in-depth social media audits",
                "Establish your unique brand voice",
                "Ensure your social media posts align with your branding guidelines",
                "Adopt your brand tone in crafting content",
                "Participate in social discussions",
                "Measure the impact of your branding efforts",
                "Develop your marketing persona",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-black font-bold">✔</span>
                  <span className="text-black">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Years Stats */}
        <div className="flex flex-wrap justify-center gap-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="bg-black text-white rounded-full w-40 h-40 flex justify-center items-center p-2"
            >
              <div className="border border-[#D8FF36] rounded-full w-36 h-36 flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-bold text-[#D8FF36] leading-none">
                  13+
                </span>
                <span className="text-sm font-bold leading-tight">YEARS!</span>
                <span className="text-xs mt-1">The Splendid Journey</span>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition">
            Talk To Our Expert
          </button>
          <button className="bg-white text-black px-6 py-2 rounded-full border border-black hover:bg-gray-100 transition">
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
}
