"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function BESSEnergyStoragePage() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const handleGetQuote = () => {
    setNotificationMessage("Redirecting to quote request form...");
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const services = [
    {
      title: "Grid-Scale Storage",
      description:
        "Large-scale battery systems for utility grid stabilization and renewable energy integration",
      features: [
        "Utility-Scale BESS",
        "Grid Stabilization",
        "Peak Shaving",
        "Frequency Regulation",
      ],
    },
    {
      title: "Residential Energy Storage",
      description:
        "Home battery systems for energy independence and backup power solutions",
      features: [
        "Home Battery Systems",
        "Backup Power",
        "Solar Integration",
        "Energy Management",
      ],
    },
    {
      title: "Industrial BESS",
      description:
        "Commercial and industrial battery storage for cost optimization and reliability",
      features: [
        "Industrial Backup",
        "Load Management",
        "Demand Response",
        "Power Quality",
      ],
    },
    {
      title: "Energy Management Systems",
      description:
        "Advanced control systems for optimal battery performance and grid integration",
      features: [
        "Battery Management",
        "Grid Integration",
        "Predictive Analytics",
        "Remote Monitoring",
      ],
    },
  ];

  const capabilities = [
    "Battery Assembly",
    "Power Electronics",
    "Thermal Management",
    "Safety Systems",
    "Grid Integration",
    "Testing & Validation",
  ];

  return (
    <main className="min-h-screen">
      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          {notificationMessage}
        </div>
      )}

      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1920&h=1080&fit=crop&crop=center"
            alt="BESS Energy Storage Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/60 via-orange-800/50 to-red-700/40"></div>
        </div>

        {/* Glass Overlay with Content */}
        <div className="absolute inset-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl flex items-center justify-center z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
              BESS/Energy Storage
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Advanced battery energy storage systems for grid stability and
              renewable energy integration
            </p>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="backdrop-blur-md bg-yellow-50/80 border border-yellow-200/50 rounded-full px-6 py-3 inline-block mb-8">
                <p className="text-yellow-600 font-semibold text-lg tracking-wide uppercase">
                  Energy Storage
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Powering the Energy Revolution
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Battery Energy Storage Systems (BESS) are the cornerstone of
                modern energy infrastructure. As renewable energy adoption
                accelerates, reliable energy storage becomes critical for grid
                stability, energy arbitrage, and backup power. Our manufacturing
                expertise delivers robust, scalable BESS solutions for every
                application.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">
                    100+
                  </div>
                  <div className="text-sm text-gray-600">BESS Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">
                    500MW
                  </div>
                  <div className="text-sm text-gray-600">Total Capacity</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">
                    99.9%
                  </div>
                  <div className="text-sm text-gray-600">Reliability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">
                    25+
                  </div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="backdrop-blur-sm bg-white/80 border border-yellow-200/50 rounded-3xl p-8 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop"
                  alt="Battery Energy Storage System"
                  className="w-full h-80 object-cover rounded-2xl mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Advanced BESS Manufacturing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our facilities specialize in manufacturing high-performance
                  battery energy storage systems with advanced safety features
                  and intelligent management capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Our BESS/Energy Storage Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive energy storage solutions for grid, commercial, and
              residential applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border border-yellow-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-yellow-600 rounded-2xl flex items-center justify-center mr-4">
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
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Manufacturing Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced manufacturing capabilities for energy storage systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="text-center p-6 bg-yellow-50/50 rounded-2xl border border-yellow-100 hover:bg-yellow-100/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {capability}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-yellow-900 via-orange-800 to-red-900 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Store the Future of Energy?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Partner with Xtrawrkx Manufacturing for cutting-edge BESS solutions.
            Let's build a more sustainable energy future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={handleGetQuote}
              className="bg-white text-yellow-900 hover:bg-gray-100 font-bold text-sm tracking-wide"
            >
              GET QUOTE NOW
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-yellow-900 font-bold text-sm tracking-wide"
            >
              LEARN MORE
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
