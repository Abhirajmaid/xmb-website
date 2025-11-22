"use client";

import { useState, useEffect, useRef } from "react";

export default function ManufacturingFlowSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const flowStages = [
    {
      id: 1,
      title: "Ideation",
      description:
        "Transform innovative concepts into viable product ideas that create real value for your business and customers.",
      isXMB: false,
    },
    {
      id: 2,
      title: "Designing",
      description:
        "Comprehensive design services from initial sketches to production-ready manufacturing designs.",

      isXMB: true,
    },
    {
      id: 3,
      title: "Prototype & Validation",
      description:
        "Develop and validate prototypes with expert vendor support and comprehensive testing lab facilities.",

      isXMB: true,
    },
    {
      id: 4,
      title: "Certification",
      description:
        "Navigate regulatory requirements with pre-certification audits and comprehensive certification support.",

      isXMB: true,
    },
    {
      id: 5,
      title: "Manufacturing",
      description:
        "Scale production with precision manufacturing capabilities and state-of-the-art facilities.",

      isXMB: true,
    },
    {
      id: 6,
      title: "Quality Assurance",
      description:
        "Ensure consistent quality standards through rigorous quality control processes and inspections.",

      isXMB: true,
    },
    {
      id: 7,
      title: "Testing",
      description:
        "Comprehensive testing protocols to validate product performance, safety, and compliance standards.",

      isXMB: true,
    },
    {
      id: 8,
      title: "Warehousing & Logistics",
      description:
        "Efficient storage and distribution solutions to optimize inventory management and delivery.",

      isXMB: true,
    },
    {
      id: 9,
      title: "Sales & Dealer Development",
      description:
        "Build and expand your sales network with strategic dealer development and market penetration strategies.",

      isXMB: true,
    },
    {
      id: 10,
      title: "Financing / Fund Raising",
      description:
        "Access financing solutions and fundraising support to fuel growth and scale operations effectively.",

      isXMB: true,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-full mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block px-4 sm:px-6 py-2 bg-brand-light/40 rounded-full mb-4 sm:mb-6 border border-brand-light/50">
            <span className="text-brand-primary font-semibold text-xs sm:text-sm uppercase tracking-wide">
              Our Process
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900 px-4 sm:px-0">
            Manufacturing Flow
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            From ideation to market, we guide your product through every stage
            of the manufacturing journey
          </p>
        </div>

        {/* Flow Container */}
        <div className="relative">
          {/* Flow Stages - Desktop Two Row Layout */}
          <div className="hidden lg:block relative z-10 px-4">
            {/* First Row - Stages 1-5 */}
            <div className="flex items-center justify-center gap-4 mb-8">
              {flowStages.slice(0, 5).map((stage, index) => (
                <div key={stage.id} className="flex items-center">
                  <div
                    className={`flex flex-col items-center ${
                      isVisible ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    {/* Stage Card */}
                    <div className="w-[200px] group">
                      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 h-[280px] flex flex-col">
                        {/* Stage Number Badge */}
                        <div className="flex justify-center mb-3">
                          <div className="w-12 h-12 bg-white border-2 border-brand-primary text-brand-primary rounded-full flex items-center justify-center font-bold text-lg">
                            {stage.id}
                          </div>
                        </div>

                        {/* Stage Title */}
                        <h3 className="text-gray-900 font-bold text-base mb-3 text-center leading-tight">
                          {stage.title}
                        </h3>

                        {/* Stage Description */}
                        <p className="text-gray-600 text-xs leading-relaxed mb-3 text-center flex-1">
                          {stage.description}
                        </p>

                        {/* Stage Details */}
                      </div>
                    </div>
                  </div>

                  {/* Arrow - Show between stages in first row */}
                  {index < 4 && (
                    <div className="flex-shrink-0 mx-3 z-20">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-gray-300"
                      >
                        <path
                          d="M9 18L15 12L9 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Connecting Arrow from Row 1 to Row 2 */}
            <div className="flex justify-center mb-8">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gray-300"
              >
                <path
                  d="M12 5L12 19M12 19L6 13M12 19L18 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Second Row - Stages 6-10 */}
            <div className="flex items-center justify-center gap-4">
              {flowStages.slice(5, 10).map((stage, index) => (
                <div key={stage.id} className="flex items-center">
                  <div
                    className={`flex flex-col items-center ${
                      isVisible ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{
                      animationDelay: `${(index + 5) * 0.1}s`,
                    }}
                  >
                    {/* Stage Card */}
                    <div className="w-[200px] group">
                      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 h-[280px] flex flex-col">
                        {/* Stage Number Badge */}
                        <div className="flex justify-center mb-3">
                          <div className="w-12 h-12 bg-white border-2 border-brand-primary text-brand-primary rounded-full flex items-center justify-center font-bold text-lg">
                            {stage.id}
                          </div>
                        </div>

                        {/* Stage Title */}
                        <h3 className="text-gray-900 font-bold text-base mb-3 text-center leading-tight">
                          {stage.title}
                        </h3>

                        {/* Stage Description */}
                        <p className="text-gray-600 text-xs leading-relaxed mb-3 text-center flex-1">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow - Show between stages in second row */}
                  {index < 4 && (
                    <div className="flex-shrink-0 mx-3 z-20">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-gray-300"
                      >
                        <path
                          d="M9 18L15 12L9 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Flow Stages - Mobile/Tablet Vertical Layout */}
          <div className="lg:hidden space-y-5 px-4">
            {flowStages.map((stage, index) => (
              <div key={stage.id} className="relative">
                <div
                  className={`bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Stage Number and Title Row */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-brand-primary text-brand-primary rounded-full flex items-center justify-center font-bold text-lg">
                      {stage.id}
                    </div>
                    <h3 className="text-gray-900 font-bold text-lg">
                      {stage.title}
                    </h3>
                  </div>

                  {/* Stage Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {stage.description}
                  </p>
                </div>

                {/* Arrow - Show between stages */}
                {index < flowStages.length - 1 && (
                  <div className="flex justify-center mt-4 mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-gray-300"
                    >
                      <path
                        d="M12 5L12 19M12 19L6 13M12 19L18 13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* XMB Label - Below the grouped stages */}
          <div className="hidden lg:flex justify-center mt-12 relative z-10">
            <div className="bg-gray-50 border border-gray-200 rounded-xl px-8 py-4 shadow-md">
              <p className="text-gray-900 font-bold text-sm md:text-base">
                xtrawrkx Manufacturing (XMB)
              </p>
            </div>
          </div>

          {/* Mobile XMB Label */}
          <div className="lg:hidden mt-8 text-center">
            <div className="inline-block bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 shadow-md">
              <p className="text-gray-900 font-bold text-sm">
                xtrawrkx Manufacturing (XMB)
              </p>
              <p className="text-gray-600 text-xs mt-2">
                Stages 2-10 represent our comprehensive manufacturing services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
