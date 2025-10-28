"use client";

import { useEffect, useRef, useState } from "react";
import Button from "./Button";

export default function OurJourneySection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const timelineTop = rect.top;
      const timelineHeight = rect.height;
      const scrollProgress = Math.max(
        0,
        Math.min(
          1,
          (windowHeight - timelineTop) / (windowHeight + timelineHeight)
        )
      );
      setLineProgress(scrollProgress);

      const timelineItems =
        timelineRef.current.querySelectorAll(".timeline-item");
      const newVisibleItems: number[] = [];

      timelineItems.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const itemTop = itemRect.top;
        const itemBottom = itemRect.bottom;

        if (itemTop <= windowHeight * 0.8 && itemBottom >= windowHeight * 0.2) {
          newVisibleItems.push(index);
        }
      });

      setVisibleItems(newVisibleItems);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const milestones = [
    {
      year: "2008",
      title: "Foundation & Vision",
      description:
        "Founded with a bold vision to transform manufacturing through precision engineering and innovative solutions. Our first project set the standard for excellence.",
      stats: { value: "1st", label: "Project" },
      achievements: ["Company Founded", "First Client", "Vision Established"],
    },
    {
      year: "2014",
      title: "Strategic Expansion",
      description:
        "Reached our 100th client milestone and established key partnerships with leading technology providers, expanding our service portfolio across multiple industries.",
      stats: { value: "100+", label: "Clients" },
      achievements: ["100th Client", "Tech Partnerships", "Service Expansion"],
    },
    {
      year: "2018",
      title: "Digital Transformation",
      description:
        "Launched our digital innovation division, integrating AI, IoT, and automation technologies. Successfully completed over 500 complex manufacturing projects.",
      stats: { value: "500+", label: "Projects" },
      achievements: ["Digital Division", "AI Integration", "IoT Solutions"],
    },
    {
      year: "2022",
      title: "Global Leadership",
      description:
        "Achieved global expansion serving clients across 25 countries. Celebrated 15 years of manufacturing excellence with industry-leading innovations.",
      stats: { value: "25", label: "Countries" },
      achievements: ["Global Reach", "15 Years", "Industry Leader"],
    },
    {
      year: "2024",
      title: "AI-Powered Future",
      description:
        "Leading the industry with cutting-edge AI solutions and sustainable practices. Pioneering the future of intelligent manufacturing with 99.8% client satisfaction.",
      stats: { value: "99.8%", label: "Satisfaction" },
      achievements: ["AI Leadership", "Sustainability", "Innovation"],
    },
  ];

  return (
    <section className="relative bg-white py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <p className="text-brand-primary uppercase tracking-wide text-sm font-bold mb-6 bg-brand-light/40 px-8 py-3 rounded-full border border-brand-light/50">
              ✨ OUR JOURNEY
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
            Excellence Through Innovation
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From visionary beginnings to industry leadership, discover the
            milestones that define our commitment to transforming manufacturing
            through cutting-edge solutions.
          </p>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-brand-primary mb-2">
                16+
              </div>
              <div className="text-gray-600 font-medium">Years Excellence</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-brand-primary mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium">
                Projects Delivered
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-brand-primary mb-2">
                25+
              </div>
              <div className="text-gray-600 font-medium">Countries Served</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-brand-primary mb-2">
                99.8%
              </div>
              <div className="text-gray-600 font-medium">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white border border-gray-200 rounded-3xl p-3 sm:p-6 md:p-10 lg:p-16 shadow-lg relative">
          <div className="grid lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-16 items-start relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hero Visual */}
              <div className="relative overflow-hidden rounded-3xl group">
                <img
                  src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop"
                  alt="XMB Manufacturing Excellence"
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-2xl font-bold mb-2">Industry Pioneer</h4>
                  <p className="text-sm opacity-90">Since 2008</p>
                </div>
                <div className="absolute top-6 right-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Transforming Manufacturing, One Innovation at a Time
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Our journey represents more than growth—it's a testament to
                  our unwavering commitment to pushing the boundaries of what's
                  possible in manufacturing excellence.
                </p>
              </div>

              {/* Enhanced Achievements Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 group hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    500+
                  </div>
                  <div className="text-gray-600 font-medium">
                    Successful Projects
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 group hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                      />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    25+
                  </div>
                  <div className="text-gray-600 font-medium">
                    Countries Served
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 group hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    99.8%
                  </div>
                  <div className="text-gray-600 font-medium">
                    Client Satisfaction
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 group hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    Leader
                  </div>
                  <div className="text-gray-600 font-medium">
                    Industry Recognition
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <Button
                  variant="primary"
                  size="xl"
                  showArrow={true}
                  href="/about"
                  className="w-full sm:w-auto"
                >
                  Discover Our Story
                </Button>
              </div>
            </div>

            {/* Right Content - Enhanced Timeline */}
            <div className="lg:col-span-3 relative" ref={timelineRef}>
              {/* Background Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 rounded-full"></div>

              {/* Animated Timeline Line */}
              <div
                className="absolute left-8 top-0 w-1 bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-primary rounded-full transition-all duration-1000 ease-out shadow-lg"
                style={{
                  height: `${lineProgress * 100}%`,
                  boxShadow: "0 0 20px rgba(255, 74, 116, 0.5)",
                }}
              ></div>

              {/* Timeline Items */}
              <div className="space-y-20">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`timeline-item relative flex items-start transition-all duration-1000 ease-out ${
                      visibleItems.includes(index)
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-12"
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`absolute left-6 w-6 h-6 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full transform -translate-x-3 border-4 border-white shadow-xl transition-all duration-700 ease-out z-10 ${
                        visibleItems.includes(index) ? "scale-100" : "scale-0"
                      }`}
                    >
                      <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="ml-12 sm:ml-16 md:ml-20 bg-white border border-gray-200 rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
                      <div className="relative z-10">
                        {/* Year Badge & Stats */}
                        <div className="flex justify-between items-start mb-6">
                          <div
                            className={`text-5xl font-bold text-brand-primary transition-all duration-700 ease-out ${
                              visibleItems.includes(index)
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                            }`}
                          >
                            {milestone.year}
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-gray-900">
                              {milestone.stats.value}
                            </div>
                            <div className="text-sm text-gray-600 font-medium">
                              {milestone.stats.label}
                            </div>
                          </div>
                        </div>

                        {/* Title */}
                        <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-primary transition-colors duration-300">
                          {milestone.title}
                        </h4>

                        {/* Description */}
                        <p
                          className={`text-gray-600 leading-relaxed mb-6 transition-all duration-700 ease-out delay-200 ${
                            visibleItems.includes(index)
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-4"
                          }`}
                        >
                          {milestone.description}
                        </p>

                        {/* Achievements */}
                        <div className="flex flex-wrap gap-3">
                          {milestone.achievements.map((achievement, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 bg-brand-primary text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:opacity-90"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        {/* <div className="text-center mt-20">
          <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies who have transformed their operations
              with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button
                variant="primary"
                size="xl"
                showArrow={true}
                href="/contact"
                className="w-full sm:w-auto min-w-0"
              >
                Start Your Journey
              </Button>
              <Button
                variant="outline"
                size="xl"
                showArrow={true}
                href="/case-studies"
                className="w-full sm:w-auto min-w-0"
              >
                View Success Stories
              </Button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
