"use client";

import { useState } from "react";
import Button from "./Button";
import { servicesData } from "@/data/services";

export default function ModernServicesSection() {
  const [activeService, setActiveService] = useState(0);

  // Transform services data for the home page display
  const services = servicesData.map((service, index) => {
    const icons = [
      // Precision Manufacturing
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>,
      // Sheet Metal Fabrication
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>,
      // 3D Printing
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      </svg>,
      // Assembly & Integration
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>,
    ];

    const stats = [
      { value: "±0.001mm", label: "Precision" },
      { value: "25+", label: "Materials" },
      { value: "8+", label: "Technologies" },
      { value: "24/7", label: "Support" },
    ];

    const tags = [
      "Precision Engineering",
      "Metal Fabrication",
      "Additive Manufacturing",
      "System Integration",
    ];

    return {
      title: service.title,
      description: service.description,
      detailedDescription: service.overview.description,
      tag: tags[index],
      stats: stats[index],
      features: service.subServices.slice(0, 4).map((sub) => sub.title),
      icon: icons[index],
      link: `/services/${service.id}`,
    };
  });

  return (
    <section className="bg-gradient-to-br from-gray-100 via-blue-100 to-slate-100 py-20 px-6 m-8 rounded-3xl relative overflow-hidden">
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
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Comprehensive Manufacturing Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide end-to-end manufacturing and business solutions designed
            to drive efficiency, innovation, and sustainable growth. Our expert
            team delivers measurable results across all aspects of your
            operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 text-white overflow-hidden group hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl cursor-pointer backdrop-blur-xl border ${
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
        <div className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-black/10 relative">
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-3xl"></div>
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              showArrow={true}
              href="/contact"
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              showArrow={true}
              href="/brochure"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
