"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function DronesPage() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const handleGetQuote = () => {
    setNotificationMessage("Redirecting to quote request form...");
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const services = [
    {
      title: "Commercial Drones",
      description:
        "Professional-grade UAVs for commercial applications including delivery, inspection, and surveying",
      features: [
        "Delivery Drones",
        "Inspection UAVs",
        "Surveying Systems",
        "Payload Integration",
      ],
    },
    {
      title: "Industrial UAVs",
      description:
        "Heavy-duty drones for industrial applications requiring robust performance and reliability",
      features: [
        "Heavy Lift Drones",
        "Industrial Inspection",
        "Cargo Transport",
        "Emergency Response",
      ],
    },
    {
      title: "Defense Systems",
      description:
        "Military-grade drone systems for defense and security applications",
      features: [
        "Surveillance Drones",
        "Reconnaissance Systems",
        "Defense Platforms",
        "Security Solutions",
      ],
    },
    {
      title: "Aerial Surveillance",
      description:
        "Advanced surveillance and monitoring systems for security and safety applications",
      features: [
        "Security Monitoring",
        "Border Patrol",
        "Search & Rescue",
        "Environmental Monitoring",
      ],
    },
  ];

  const capabilities = [
    "Precision Assembly",
    "Flight Testing",
    "Payload Integration",
    "Navigation Systems",
    "Communication Systems",
    "Safety Compliance",
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
            src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1920&h=1080&fit=crop&crop=center"
            alt="Drones Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-blue-800/50 to-indigo-700/40"></div>
        </div>

        {/* Glass Overlay with Content */}
        <div className="absolute inset-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl flex items-center justify-center z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Drones
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Cutting-edge drone technology for commercial, industrial, and
              defense applications
            </p>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="backdrop-blur-md bg-purple-50/80 border border-purple-200/50 rounded-full px-6 py-3 inline-block mb-8">
                <p className="text-purple-600 font-semibold text-lg tracking-wide uppercase">
                  Unmanned Aerial Systems
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Soaring to New Heights
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The drone industry is revolutionizing how we approach aerial
                operations across multiple sectors. From commercial delivery
                services to industrial inspection and defense applications,
                drones are transforming industries with their versatility,
                efficiency, and precision. Our manufacturing expertise delivers
                reliable, high-performance UAV systems for every mission.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    200+
                  </div>
                  <div className="text-sm text-gray-600">Drone Models</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    50+
                  </div>
                  <div className="text-sm text-gray-600">Applications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    99.8%
                  </div>
                  <div className="text-sm text-gray-600">Flight Success</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="backdrop-blur-sm bg-white/80 border border-purple-200/50 rounded-3xl p-8 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop"
                  alt="Drone Manufacturing"
                  className="w-full h-80 object-cover rounded-2xl mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Advanced Drone Manufacturing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our facilities specialize in manufacturing
                  precision-engineered drones with advanced flight control
                  systems, robust construction, and cutting-edge payload
                  integration capabilities.
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
              Our Drone Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive drone solutions for commercial, industrial, and
              defense applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border border-purple-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mr-4">
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
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
              Advanced manufacturing capabilities for unmanned aerial systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="text-center p-6 bg-purple-50/50 rounded-2xl border border-purple-100 hover:bg-purple-100/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
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
      <section className="bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-900 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Take Flight?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Partner with Xtrawrkx Manufacturing for cutting-edge drone
            solutions. Let's elevate your operations to new heights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={handleGetQuote}
              className="bg-white text-purple-900 hover:bg-gray-100 font-bold text-sm tracking-wide"
            >
              GET QUOTE NOW
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-900 font-bold text-sm tracking-wide"
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
