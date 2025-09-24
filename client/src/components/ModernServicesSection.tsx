"use client";

import { useState } from "react";
import Button from "./Button";
import Icon from "./Icon";
import { servicesData } from "@/data/services";

export default function ModernServicesSection() {
  const [activeService, setActiveService] = useState(0);

  // Transform services data for the home page display
  const services = servicesData.map((service, index) => {
    const iconNames = [
      "heroicons:truck-20-solid", // Sourcing & Procurement
      "heroicons:light-bulb-20-solid", // Design and Prototyping
      "heroicons:cog-6-tooth-20-solid", // Manufacturing Solutions
      "heroicons:chart-bar-20-solid", // Operation Consulting / Service Excellence
    ];

    const stats = [
      { value: "500+", label: "Suppliers" },
      { value: "24-48hrs", label: "Prototyping" },
      { value: "±0.001mm", label: "Precision" },
      { value: "25-40%", label: "Efficiency" },
    ];

    const tags = [
      "Supply Chain Excellence",
      "Innovation & Design",
      "Manufacturing Excellence",
      "Operational Excellence",
    ];

    return {
      title: service.title,
      description: service.description,
      detailedDescription: service.overview.description,
      tag: tags[index],
      stats: stats[index],
      features: service.subServices.slice(0, 4).map((sub) => sub.title),
      icon: <Icon name={iconNames[index]} className="w-12 h-12" />,
      link: `/services/${service.id}`,
    };
  });

  return (
    <section className="bg-gradient-to-br from-gray-100 via-blue-100 to-slate-100 py-12 sm:py-16 md:py-20 px-2 sm:px-4 md:px-6 m-1 sm:m-2 md:m-8 rounded-3xl relative overflow-hidden">
      {/* Glass background elements */}
      <div className="absolute inset-0 opacity-30 rounded-3xl">
        <div className="absolute top-40 left-40 w-96 h-96 bg-blue-400/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-40 w-80 h-80 bg-purple-400/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-indigo-400/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 uppercase tracking-wide text-sm font-medium mb-6 backdrop-blur-sm bg-blue-50/50 px-6 py-2 rounded-full w-fit mx-auto border border-blue-200/50">
            OUR SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Complete Business Solutions
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From strategic sourcing and innovative design to advanced
            manufacturing and operational excellence, we provide comprehensive
            solutions that drive efficiency, innovation, and sustainable growth
            across your entire value chain.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-3 sm:p-4 md:p-8 text-white overflow-hidden group hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl cursor-pointer backdrop-blur-xl border ${
                index === activeService
                  ? "bg-blue-600/95 border-blue-400/80 shadow-blue-500/40"
                  : "bg-gradient-to-br from-blue-500/85 to-blue-600/95 border-blue-400/70 hover:from-blue-600/95 hover:to-blue-700/95"
              }`}
              onClick={() => setActiveService(index)}
            >
              {/* Glass effect overlay */}
              <div
                className={`absolute inset-0 rounded-3xl transition-opacity duration-300 ${
                  index === activeService
                    ? "bg-gradient-to-br from-blue-600/40 to-blue-800/25"
                    : "bg-gradient-to-br from-blue-400/25 to-blue-600/35 group-hover:from-blue-500/35 group-hover:to-blue-700/45"
                }`}
              ></div>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white rounded-full opacity-50"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon and Stats */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 bg-white/40 border border-white/60 rounded-2xl flex items-center justify-center text-white backdrop-blur-md shadow-xl shadow-white/20">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">
                      {service.stats.value}
                    </div>
                    <div className="text-xs text-white/95">
                      {service.stats.label}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 leading-tight text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <div
                      key={idx}
                      className="text-xs bg-white/30 border border-white/50 rounded-lg px-2 py-1 text-white backdrop-blur-sm shadow-sm"
                    >
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Tag and Arrow */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium bg-white/40 border border-white/60 px-3 py-1 rounded-full text-white backdrop-blur-sm shadow-sm">
                    {service.tag}
                  </span>
                  <div className="w-10 h-10 bg-white/95 border border-white/60 rounded-full flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300 shadow-lg backdrop-blur-sm">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Active Service Indicator */}
              {index === activeService && (
                <div className="absolute top-4 left-4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              )}
            </div>
          ))}
        </div>

        {/* Detailed Service Information */}
        <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-3 sm:p-4 md:p-8 lg:p-12 shadow-2xl shadow-black/10 relative">
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-3xl"></div>
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-12 items-center relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600/80 border border-blue-400/40 rounded-2xl flex items-center justify-center text-white backdrop-blur-md shadow-lg shadow-blue-500/20">
                  {services[activeService].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {services[activeService].title}
                  </h3>
                  <span className="text-blue-600 text-sm font-medium">
                    {services[activeService].tag}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                {services[activeService].detailedDescription}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {services[activeService].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="primary"
                size="lg"
                showArrow={true}
                href={services[activeService].link}
              >
                Learn More About This Service
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-8 text-white">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">
                    {services[activeService].stats.value}
                  </div>
                  <div className="text-blue-100 mb-6">
                    {services[activeService].stats.label}
                  </div>
                  <div className="text-sm opacity-90">
                    Industry-leading performance metrics
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Operations?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our comprehensive solutions can drive efficiency
            and growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="lg"
              showArrow={true}
              href="/contact"
              className="w-full sm:w-auto min-w-0"
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              showArrow={true}
              href="/brochure"
              className="w-full sm:w-auto min-w-0"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
