"use client";

export default function OurJourneySection() {
  const milestones = [
    {
      year: "2008",
      title: "Foundation & Vision",
      description:
        "Founded with a bold vision to transform manufacturing through precision engineering and innovative solutions. Our first project set the standard for excellence.",
    },
    {
      year: "2014",
      title: "Strategic Expansion",
      description:
        "Reached our 100th client milestone and established key partnerships with leading technology providers, expanding our service portfolio across multiple industries.",
    },
    {
      year: "2018",
      title: "Digital Transformation",
      description:
        "Launched our digital innovation division, integrating AI, IoT, and automation technologies. Successfully completed over 500 complex manufacturing projects.",
    },
    {
      year: "2022",
      title: "Global Leadership",
      description:
        "Achieved global expansion serving clients across 25 countries. Celebrated 15 years of manufacturing excellence with industry-leading innovations.",
    },
    {
      year: "2024",
      title: "AI-Powered Future",
      description:
        "Leading the industry with cutting-edge AI solutions and sustainable practices. Pioneering the future of intelligent manufacturing with 99.8% client satisfaction.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <p className="text-brand-primary uppercase tracking-wide text-sm font-bold mb-6 bg-brand-light/40 px-8 py-3 rounded-full border border-brand-light/50">
              ✨ OUR JOURNEY
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Section - Our Journey Intro */}
            <div>
              <p className="text-gray-500 uppercase tracking-wide text-sm font-medium mb-4">
                OUR JOURNEY
              </p>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Excellence Through Innovation
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                From visionary beginnings to industry leadership, discover the
                milestones that define our commitment to transforming manufacturing
                through cutting-edge solutions.
              </p>
            </div>

            {/* Right Section - Numbered Milestones */}
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={index < milestones.length - 1 ? "pb-8 border-b border-gray-200" : ""}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-gray-400 text-2xl font-normal">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-2xl md:text-3xl font-bold text-gray-900">
                          {milestone.title}
                        </h4>
                        <span className="text-brand-primary font-semibold text-lg">
                          {milestone.year}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
