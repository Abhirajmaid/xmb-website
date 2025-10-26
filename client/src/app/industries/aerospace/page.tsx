"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function AerospacePage() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const handleGetQuote = () => {
    setNotificationMessage("Redirecting to quote request form...");
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const services = [
    {
      title: "Aircraft Components",
      description: "Precision manufacturing of critical aircraft components including structural elements, landing gear, and propulsion systems",
      features: ["Structural Components", "Landing Gear Systems", "Engine Components", "Flight Controls"]
    },
    {
      title: "Space Systems",
      description: "Advanced manufacturing for space exploration including satellite components, launch vehicles, and space station modules",
      features: ["Satellite Systems", "Launch Vehicles", "Space Station Modules", "Spacecraft Components"]
    },
    {
      title: "Satellite Technology",
      description: "High-precision manufacturing of satellite systems for communication, navigation, and earth observation",
      features: ["Communication Satellites", "Navigation Systems", "Earth Observation", "Scientific Instruments"]
    },
    {
      title: "Avionics",
      description: "Advanced electronic systems for aircraft and spacecraft including navigation, communication, and control systems",
      features: ["Flight Management", "Navigation Systems", "Communication Equipment", "Control Systems"]
    }
  ];

  const capabilities = [
    "Precision Machining",
    "Composite Manufacturing",
    "Quality Assurance",
    "Testing & Validation",
    "Regulatory Compliance",
    "Supply Chain Management"
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
            src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1920&h=1080&fit=crop&crop=center"
            alt="Aerospace Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-blue-800/50 to-indigo-700/40"></div>
        </div>

        {/* Glass Overlay with Content */}
        <div className="absolute inset-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl flex items-center justify-center z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Aerospace
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Advanced aerospace manufacturing for aviation and space exploration technologies
            </p>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="backdrop-blur-md bg-blue-50/80 border border-blue-200/50 rounded-full px-6 py-3 inline-block mb-8">
                <p className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
                  Aviation & Space
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Reaching for the Stars
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The aerospace industry represents the pinnacle of engineering excellence, pushing the boundaries 
                of what's possible in aviation and space exploration. From commercial aircraft to space missions, 
                aerospace manufacturing demands the highest levels of precision, quality, and reliability. Our 
                manufacturing expertise delivers critical components and systems that meet the stringent requirements 
                of aerospace applications.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Aircraft Components</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Satellite Systems</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.99%</div>
                  <div className="text-sm text-gray-600">Quality Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">AS9100</div>
                  <div className="text-sm text-gray-600">Certified</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="backdrop-blur-sm bg-white/80 border border-blue-200/50 rounded-3xl p-8 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop"
                  alt="Aerospace Manufacturing"
                  className="w-full h-80 object-cover rounded-2xl mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Advanced Aerospace Manufacturing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our facilities are equipped with state-of-the-art precision manufacturing capabilities, 
                  advanced testing equipment, and rigorous quality control systems for aerospace applications.
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
              Our Aerospace Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive aerospace manufacturing solutions for aviation and space applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mr-4">
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
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
              Advanced manufacturing capabilities for aerospace applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="text-center p-6 bg-blue-50/50 rounded-2xl border border-blue-100 hover:bg-blue-100/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
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
                <h3 className="font-semibold text-gray-900 text-sm">{capability}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-800 to-indigo-900 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Reach New Heights?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with Xtrawrkx Manufacturing for cutting-edge aerospace solutions. 
            Let's explore the infinite possibilities together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={handleGetQuote}
              className="bg-white text-blue-900 hover:bg-gray-100 font-bold text-sm tracking-wide"
            >
              GET QUOTE NOW
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold text-sm tracking-wide"
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




