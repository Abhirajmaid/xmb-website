"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function EAgritechPage() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const handleGetQuote = () => {
    setNotificationMessage("Redirecting to quote request form...");
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const services = [
    {
      title: "Precision Agriculture",
      description:
        "Smart farming solutions using IoT sensors, drones, and data analytics for optimized crop production",
      features: [
        "Soil Monitoring",
        "Crop Health Analysis",
        "Yield Optimization",
        "Resource Management",
      ],
    },
    {
      title: "IoT Sensors",
      description:
        "Advanced sensor networks for real-time monitoring of agricultural conditions and equipment",
      features: [
        "Weather Stations",
        "Soil Sensors",
        "Equipment Monitoring",
        "Data Collection",
      ],
    },
    {
      title: "Automated Farming",
      description:
        "Robotic systems and automation solutions for efficient and sustainable farming operations",
      features: [
        "Autonomous Tractors",
        "Robotic Harvesting",
        "Automated Irrigation",
        "Smart Greenhouses",
      ],
    },
    {
      title: "Crop Monitoring Systems",
      description:
        "Advanced monitoring and management systems for crop health, growth, and yield optimization",
      features: [
        "Satellite Monitoring",
        "Drone Surveillance",
        "AI Analytics",
        "Predictive Modeling",
      ],
    },
  ];

  const capabilities = [
    "Sensor Manufacturing",
    "IoT Integration",
    "Data Analytics",
    "Automation Systems",
    "Precision Equipment",
    "Farm Management",
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
            src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1920&h=1080&fit=crop&crop=center"
            alt="E-Agritech Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-emerald-800/50 to-teal-700/40"></div>
        </div>

        {/* Glass Overlay with Content */}
        <div className="absolute inset-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl flex items-center justify-center z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              E-Agritech
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Smart agricultural technologies for sustainable farming and food
              production
            </p>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="backdrop-blur-md bg-green-50/80 border border-green-200/50 rounded-full px-6 py-3 inline-block mb-8">
                <p className="text-green-600 font-semibold text-lg tracking-wide uppercase">
                  Smart Agriculture
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Cultivating the Future of Farming
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                E-Agritech is revolutionizing agriculture through smart
                technologies, precision farming, and sustainable practices. As
                the global population grows and climate challenges intensify,
                smart agricultural solutions become essential for food security.
                Our manufacturing expertise delivers advanced agritech solutions
                that optimize crop yields, reduce resource consumption, and
                promote sustainable farming practices.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    150+
                  </div>
                  <div className="text-sm text-gray-600">Farm Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    30%
                  </div>
                  <div className="text-sm text-gray-600">Yield Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    40%
                  </div>
                  <div className="text-sm text-gray-600">Water Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    1000+
                  </div>
                  <div className="text-sm text-gray-600">Sensors Deployed</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="backdrop-blur-sm bg-white/80 border border-green-200/50 rounded-3xl p-8 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop"
                  alt="Smart Agriculture Technology"
                  className="w-full h-80 object-cover rounded-2xl mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Advanced Agritech Manufacturing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our facilities specialize in manufacturing precision
                  agricultural equipment, IoT sensors, and smart farming systems
                  that enhance productivity and sustainability.
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
              Our E-Agritech Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive smart agriculture solutions for modern farming
              operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border border-green-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mr-4">
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
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
              Advanced manufacturing capabilities for agricultural technology
              solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="text-center p-6 bg-green-50/50 rounded-2xl border border-green-100 hover:bg-green-100/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
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
      <section className="bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Grow Smarter?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Partner with Xtrawrkx Manufacturing for cutting-edge agritech
            solutions. Let's cultivate a more sustainable future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={handleGetQuote}
              className="bg-white text-green-900 hover:bg-gray-100 font-bold text-sm tracking-wide"
            >
              GET QUOTE NOW
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-green-900 font-bold text-sm tracking-wide"
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
