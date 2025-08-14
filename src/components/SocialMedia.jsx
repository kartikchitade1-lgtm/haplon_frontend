import { SOCIAL_MEDIA_CARDS } from "@/constants/socialMediaData";

export default function SocialMedia() {
  return (
    <section className="bg-black py-12 px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
          Our Social Media Marketing
          <br />
          Service Deliverables
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          We deliver effective, efficient & innovative digital services
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 max-w-7xl mx-auto">
        {SOCIAL_MEDIA_CARDS.map(({ id, title, description, icon: Icon }) => (
          <div
            key={id}
            className="bg-white border border-black shadow-lg relative hover:scale-105 transition-transform duration-300 p-4 pt-16"
            style={{ borderRadius: "var(--radius-xl)" }}
          >
            {/* Icon */}
            <div
              className="bg-black flex items-center justify-center absolute top-0 left-0"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "8px",
                padding: "8px",
                transform: "translate(0, 0)",
              }}
            >
              <Icon className="text-white" style={{ width: 20, height: 20 }} />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">{title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}