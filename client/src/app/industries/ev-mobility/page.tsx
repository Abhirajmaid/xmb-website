"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function EVMobilityPage() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const handleGetQuote = () => {
    setNotificationMessage("Redirecting to quote request form...");
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const services = [
    {
      title: "Electric Vehicle Manufacturing",
      description:
        "Complete EV assembly including battery integration, motor systems, and electronic controls",
      features: [
        "Battery Pack Assembly",
        "Motor Integration",
        "Power Electronics",
        "Vehicle Assembly",
      ],
    },
    {
      title: "Charging Infrastructure",
      description:
        "Manufacturing of EV charging stations and supporting infrastructure components",
      features: [
        "AC/DC Chargers",
        "Charging Stations",
        "Power Distribution",
        "Grid Integration",
      ],
    },
    {
      title: "Battery Management Systems",
      description:
        "Advanced BMS solutions for optimal battery performance and safety",
      features: [
        "Battery Monitoring",
        "Thermal Management",
        "Safety Systems",
        "Data Analytics",
      ],
    },
    {
      title: "Smart Mobility Solutions",
      description:
        "IoT-enabled solutions for connected vehicles and smart transportation",
      features: [
        "Vehicle Telematics",
        "Fleet Management",
        "Predictive Maintenance",
        "User Interfaces",
      ],
    },
  ];

  const capabilities = [
    "Precision Manufacturing",
    "Quality Assurance",
    "Supply Chain Management",
    "Testing & Validation",
    "Regulatory Compliance",
    "Scalable Production",
  ];

  return (
    <main className="min-h-screen">
      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 bg-brand-success text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          {notificationMessage}
        </div>
      )}

      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/industries/ev-mobility.png"
            alt="EV Mobility Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/60 via-brand-secondary/50 to-brand-primary/40"></div>
        </div>

        {/* Glass Overlay with Content */}
        <div className="absolute inset-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl flex items-center justify-center z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-brand-light bg-clip-text text-transparent">
              EV/E-Mobility
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Revolutionizing transportation with electric vehicles and
              sustainable mobility solutions
            </p>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="backdrop-blur-md bg-brand-light/80 border border-brand-light/50 rounded-full px-6 py-3 inline-block mb-8">
                <p className="text-brand-primary font-semibold text-lg tracking-wide uppercase">
                  Electric Mobility
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Driving the Future of Transportation
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The electric vehicle revolution is transforming how we move.
                From passenger cars to commercial fleets, electric mobility
                represents the future of sustainable transportation. Our
                manufacturing expertise supports the entire EV ecosystem, from
                vehicle assembly to charging infrastructure.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">
                    500+
                  </div>
                  <div className="text-sm text-gray-600">EV Components</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">
                    50+
                  </div>
                  <div className="text-sm text-gray-600">Charging Stations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">
                    99.5%
                  </div>
                  <div className="text-sm text-gray-600">Quality Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="backdrop-blur-sm bg-white/80 border border-brand-light/50 rounded-3xl p-8 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800&h=600&fit=crop"
                  alt="Electric Vehicle Manufacturing"
                  className="w-full h-80 object-cover rounded-2xl mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Advanced EV Manufacturing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our state-of-the-art facilities are equipped with precision
                  manufacturing capabilities specifically designed for electric
                  vehicle components and systems.
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
              Our EV/E-Mobility Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive manufacturing solutions for the electric mobility
              ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border border-brand-light/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mr-4">
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
                      <div className="w-2 h-2 bg-brand-light0 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-light0/5 to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
              Advanced manufacturing capabilities tailored for electric vehicle
              production
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="text-center p-6 bg-brand-light/50 rounded-2xl border border-brand-light hover:bg-brand-light/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mx-auto mb-4">
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
      <section className="bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Electrify Your Mobility Solutions?
          </h2>
          <p className="text-xl text-brand-light mb-8 max-w-2xl mx-auto">
            Partner with Xtrawrkx Manufacturing for cutting-edge EV
            manufacturing solutions. Let's accelerate the future of electric
            mobility together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={handleGetQuote}
              className="bg-white text-brand-primary hover:bg-gray-100 font-bold text-sm tracking-wide"
            >
              GET QUOTE NOW
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-primary font-bold text-sm tracking-wide"
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
