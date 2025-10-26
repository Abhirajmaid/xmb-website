"use client";

import { useState, useEffect, useRef } from "react";

export default function GlobalManufacturingCapacity() {
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
      { threshold: 0.2 }
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

  // Manufacturing locations in India with accurate coordinates for the SVG map
  const indiaLocations = [
    { id: 1, top: "22%", left: "52%", name: "Delhi" }, // Delhi - National Capital
    { id: 2, top: "30%", left: "55%", name: "Lucknow" }, // Uttar Pradesh
    { id: 3, top: "32%", left: "65%", name: "Kolkata" }, // West Bengal
    { id: 4, top: "48%", left: "38%", name: "Mumbai" }, // Maharashtra - West Coast
    { id: 5, top: "52%", left: "42%", name: "Pune" }, // Maharashtra - Inland
    { id: 6, top: "68%", left: "52%", name: "Bangalore" }, // Karnataka
    { id: 7, top: "72%", left: "56%", name: "Chennai" }, // Tamil Nadu - East Coast
    { id: 8, top: "58%", left: "54%", name: "Hyderabad" }, // Telangana - Central
    { id: 9, top: "40%", left: "38%", name: "Ahmedabad" }, // Gujarat - West
    { id: 10, top: "28%", left: "48%", name: "Jaipur" }, // Rajasthan
    { id: 11, top: "42%", left: "62%", name: "Bhubaneswar" }, // Odisha - East Coast
    { id: 12, top: "75%", left: "52%", name: "Coimbatore" }, // Tamil Nadu - South
    { id: 13, top: "18%", left: "52%", name: "Chandigarh" }, // Punjab/Haryana
    { id: 14, top: "62%", left: "40%", name: "Goa" }, // Goa - West Coast
    { id: 15, top: "42%", left: "58%", name: "Raipur" }, // Chhattisgarh - Central
  ];

  return (
    <>
      {/* India Map Section - WHO DO WE SERVE */}
      {false && (
        <section
          ref={sectionRef}
          className="hidden lg:block relative py-20 px-6 overflow-hidden min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100"
        >
          {/* Section Header with Glass Design */}
          <div className="text-center mb-16 relative z-30">
            <div className="backdrop-blur-md bg-white/80 border border-blue-200/50 rounded-full px-4 py-2 inline-block mb-6">
              <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
                WHO DO WE SERVE
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              INDIA MANUFACTURING CAPACITY
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              XMB has the capacity to double production needs overnight regardless
              of product, specification, scale or geography across India's
              manufacturing landscape.
            </p>
          </div>

          {/* Large Center Map - No Card */}
          <div className="relative max-w-6xl mx-auto">
            <div className="relative w-full h-[900px] flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3a/India_grey.svg"
                alt="India Map"
                className="w-full h-full object-contain opacity-90"
              />

              {/* Manufacturing Location Dots on India Map */}
              {indiaLocations.map((location, index) => (
                <div
                  key={location.id}
                  className={`absolute w-5 h-5 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20 shadow-lg border-2 border-white ${
                    isVisible ? "animate-pulse" : ""
                  }`}
                  style={{
                    top: location.top,
                    left: location.left,
                    animationDelay: `${index * 0.15}s`,
                  }}
                >
                  {/* Ripple Effect */}
                  <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-60"></div>

                  {/* Location Tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-medium text-white opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl">
                    {location.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-gray-900/90"></div>
                  </div>
                </div>
              ))}

              {/* Left Overlay Cards */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 space-y-4 z-30">
                <div className="backdrop-blur-xl bg-white/90 border border-blue-200/50 rounded-2xl p-4 shadow-2xl w-64">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Pan-India Network
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Manufacturing facilities across major industrial hubs in India
                    with quick turnaround time.
                  </p>
                </div>

                <div className="backdrop-blur-xl bg-white/90 border border-blue-200/50 rounded-2xl p-4 shadow-2xl w-64">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Quality Assurance
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Consistent quality standards across all manufacturing
                    locations.
                  </p>
                </div>

                {/* Stats */}
                <div className="backdrop-blur-xl bg-white/90 border border-blue-200/50 rounded-2xl p-4 shadow-2xl w-64">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      12+
                    </div>
                    <div className="text-xs text-gray-600 font-medium">
                      Manufacturing Hubs
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Overlay Cards */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 space-y-4 z-30">
                <div className="backdrop-blur-xl bg-white/90 border border-blue-200/50 rounded-2xl p-4 shadow-2xl w-64">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Rapid Scaling
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Quick turnaround time for production scaling up and down based
                    on demand.
                  </p>
                </div>

                <div className="backdrop-blur-xl bg-white/90 border border-blue-200/50 rounded-2xl p-4 shadow-2xl w-64">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    24/7 Support
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Round-the-clock production support and monitoring across all
                    locations.
                  </p>
                </div>

                {/* Stats */}
                <div className="backdrop-blur-xl bg-white/90 border border-blue-200/50 rounded-2xl p-4 shadow-2xl w-64">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      500+
                    </div>
                    <div className="text-xs text-gray-600 font-medium">
                      Partner Facilities
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Legend - Below Map */}
            <div className="flex justify-center mt-8">
              <div className="backdrop-blur-xl bg-white/90 border border-blue-200/50 rounded-2xl px-6 py-3 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Manufacturing Facilities Across India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
