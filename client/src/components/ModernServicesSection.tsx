"use client";

import { useState } from "react";
import Button from "./Button";
import Icon from "./Icon";

// Add custom styles for enhanced animations
const customStyles = `
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }
  .animate-bounce-slow {
    animation: bounce-slow 3s ease-in-out infinite;
  }
`;

export default function ModernServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Enhanced service cards data with modern styling - Blue theme for all
  const services = [
    {
      title: "End to End Supply Chain Management",
      description: "Comprehensive supply chain solutions from strategic sourcing to final delivery. We optimize your entire supply chain process to reduce costs, improve efficiency, and ensure reliable material availability across all stages.",
      tag: "Supply Chain Excellence",
      stats: { value: "500+", label: "Suppliers" },
      features: ["Strategic sourcing", "Procurement", "Inventory control", "Warehousing & logistics"],
      icon: <Icon name="heroicons:truck-20-solid" className="w-8 h-8" />,
      link: "/services/supply-chain",
      gradient: "from-blue-500 via-blue-600 to-indigo-600",
      accentColor: "blue",
      bgPattern: "blue"
    },
    {
      title: "Design & Prototyping",
      description: "Complete design and prototyping services from concept development to production-ready designs. Our expert team combines creativity with technical expertise to bring your ideas to life through innovative design solutions.",
      tag: "Innovation & Design",
      stats: { value: "24-48hrs", label: "Prototyping" },
      features: ["Product Design", "Design Validation", "Prototyping", "Product testing & validation"],
      icon: <Icon name="heroicons:light-bulb-20-solid" className="w-8 h-8" />,
      link: "/services/design-prototyping",
      gradient: "from-blue-500 via-blue-600 to-indigo-600",
      accentColor: "blue",
      bgPattern: "blue"
    },
    {
      title: "Manufacturing Solutions",
      description: "Complete manufacturing solutions from sub-assemblies to critical controlled assemblies. We deliver high-quality components and assemblies using advanced manufacturing technologies, automation, robotics, and rigorous quality control processes.",
      tag: "Manufacturing Excellence",
      stats: { value: "±0.001mm", label: "Precision" },
      features: ["Sub assemblies", "Main assemblies", "Critical and controlled assemblies", "Automation & Robotics"],
      icon: <Icon name="heroicons:cog-6-tooth-20-solid" className="w-8 h-8" />,
      link: "/services/manufacturing",
      gradient: "from-blue-500 via-blue-600 to-indigo-600",
      accentColor: "blue",
      bgPattern: "blue"
    },
    {
      title: "Business Excellence",
      description: "Transforming organizations through competitiveness, sustainability & digitization. We help organizations achieve operational excellence through proven methodologies including operations optimization, quality improvement, digitization & automation, and new facility design.",
      tag: "Operational Excellence",
      stats: { value: "30-80%", label: "Efficiency" },
      features: ["Operations Optimisation", "Quality Improvement", "Digitisation & Automation", "New Facility Design"],
      icon: <Icon name="heroicons:chart-bar-20-solid" className="w-8 h-8" />,
      link: "/services/business-excellence",
      gradient: "from-blue-500 via-blue-600 to-indigo-600",
      accentColor: "blue",
      bgPattern: "blue"
    },
  ];

  return (
    <>
      <style>{customStyles}</style>
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Static Background Elements - Blue Theme */}
      <div className="absolute inset-0">
        {/* Static gradient orbs - Blue only */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-indigo-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-indigo-500/15 to-blue-600/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/15 to-blue-500/15 rounded-full blur-3xl"></div>
        
        {/* Static glassmorphism elements - Blue only */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-xl border border-blue-200/50 rounded-full mb-8 shadow-lg">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></div>
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">
              Our Services
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Complete Business
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From strategic sourcing and innovative design to advanced manufacturing and operational excellence, 
            we provide comprehensive solutions that drive efficiency, innovation, and sustainable growth across your entire value chain.
          </p>
        </div>

        {/* Modern Services Row - 4 Cards in a Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Floating Background Glow */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500`}></div>
              
              {/* Main Card */}
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/30 h-full">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br from-${service.accentColor}-50/20 via-transparent to-${service.accentColor}-100/20`}></div>
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-${service.accentColor}-100/15 to-transparent rounded-full blur-lg`}></div>
                  <div className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-${service.accentColor}-100/15 to-transparent rounded-full blur-lg`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Header with Icon and Stats */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-900 mb-1">
                        {service.stats.value}
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        {service.stats.label}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div
                        key={idx}
                        className={`px-2 py-1 bg-${service.accentColor}-50/60 border border-${service.accentColor}-200/40 rounded-lg text-xs font-medium text-gray-700 group-hover:bg-${service.accentColor}-100/80 transition-colors duration-300`}
                      >
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Footer with Tag and CTA */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 bg-gradient-to-r from-${service.accentColor}-100 to-${service.accentColor}-200 text-${service.accentColor}-700 text-xs font-bold rounded-full border border-${service.accentColor}-200/50`}>
                        {service.tag}
                      </span>
                      <button className={`group/btn w-8 h-8 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center text-white shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300`}>
                        <svg className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="backdrop-blur-xl bg-white/80 border border-blue-200/50 rounded-3xl p-12 shadow-2xl">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                Ready to Transform?
              </span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Build Something
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h3>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your operations? Let's discuss how our comprehensive solutions 
              can drive efficiency and growth for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                variant="primary"
                size="lg"
                showArrow={true}
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                showArrow={true}
                href="/brochure"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold text-lg px-8 py-4 rounded-2xl backdrop-blur-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Download Brochure
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600 text-sm">Active Suppliers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">16</div>
                <div className="text-gray-600 text-sm">Global Facilities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">99%</div>
                <div className="text-gray-600 text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}