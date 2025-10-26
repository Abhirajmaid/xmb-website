"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import OurJourneySection from "@/components/OurJourneySection";

export default function AboutUsPage() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Manufacturing images for the slider
  const manufacturingImages = [
    {
      src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop",
      alt: "Global Manufacturing Network",
      title: "Global Manufacturing Network",
      description: "Connecting manufacturers worldwide"
    },
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=600&fit=crop",
      alt: "Advanced Manufacturing Facility",
      title: "Advanced Manufacturing Facility",
      description: "State-of-the-art production capabilities"
    },
    {
      src: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200&h=600&fit=crop",
      alt: "Quality Control & Innovation",
      title: "Quality Control & Innovation",
      description: "Excellence in every process"
    },
    {
      src: "https://images.unsplash.com/photo-1565043589221-1d6d4b8b8b8b?w=1200&h=600&fit=crop",
      alt: "Industrial Automation",
      title: "Industrial Automation",
      description: "Smart manufacturing solutions"
    },
  ];

  // Auto-slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % manufacturingImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [manufacturingImages.length]);



  // Mock functions for button interactions
  const handleGetStarted = () => {
    setNotificationMessage("Starting consultation process... Redirecting to contact form");
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleLearnMore = () => {
    setNotificationMessage("Opening detailed information...");
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          {notificationMessage}
        </div>
      )}

      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden h-[50vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop&crop=center"
            alt="About Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/50 to-blue-700/40"></div>
        </div>

        {/* Glass Overlay with Content */}
        <div className="absolute inset-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl flex items-center justify-center z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              About Us
            </h1>
          </div>
        </div>
      </section>


      {/* Mission and Vision Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving manufacturing excellence through innovation and customer-centric solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <div className="w-16 h-1 bg-blue-500 rounded-full mb-6"></div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the global leader in manufacturing solutions, transforming ideas into reality 
                through innovation, technology, and sustainable practices that shape the future of industry.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <div className="w-16 h-1 bg-green-500 rounded-full mb-6"></div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To deliver exceptional manufacturing services that exceed client expectations while 
                fostering innovation, sustainability, and growth for our partners and communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <OurJourneySection />

      {/* Company Overview Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Global Manufacturing Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the way in innovative manufacturing solutions with global presence and local expertise
            </p>
          </div>

            {/* Advantage XMB */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Advantage XMB
              </h3>
              <p className="text-2xl text-blue-600 font-semibold mb-8">
                Make for India, Make for the World
              </p>
            </div>

            {/* Image Slider */}
            <div className="relative mb-12">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={manufacturingImages[currentImageIndex].src}
                      alt={manufacturingImages[currentImageIndex].alt}
                      className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                    />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Image Info */}
                    <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                          {manufacturingImages[currentImageIndex].title}
                        </h4>
                    <p className="text-gray-600 mb-4">
                      {manufacturingImages[currentImageIndex].description}
                    </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">
                          {currentImageIndex + 1} of {manufacturingImages.length}
                            </span>
                          </div>
                      <div className="flex space-x-2">
                            {manufacturingImages.map((_, index) => (
                          <button
                                key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                  index === currentImageIndex
                                ? "bg-blue-500 scale-125"
                                : "bg-gray-300 hover:bg-gray-400"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                      onClick={() =>
                        setCurrentImageIndex(
                          currentImageIndex === 0
                            ? manufacturingImages.length - 1
                            : currentImageIndex - 1
                        )
                      }
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border border-gray-200 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <button
                      onClick={() =>
                        setCurrentImageIndex(
                          currentImageIndex === manufacturingImages.length - 1
                            ? 0
                            : currentImageIndex + 1
                        )
                      }
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border border-gray-200 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  </div>

            {/* Capabilities Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Labor-Intensive Products
                </h4>
                    <p className="text-gray-600">
                  Leveraging our skilled workforce to deliver high-quality, cost-effective manufacturing solutions for labor-intensive production.
                    </p>
                  </div>

              <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                      Modular Assemblies
                </h4>
                    <p className="text-gray-600">
                  Specializing in modular assembly systems that provide flexibility, scalability, and efficiency in complex manufacturing processes.
                    </p>
                  </div>

              <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  High-Precision Products
                </h4>
                <p className="text-gray-600">
                  Advanced capabilities in manufacturing high-precision components and sensitive products requiring specialized handling and quality control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders driving innovation and excellence in manufacturing solutions
            </p>
          </div>

          {/* Leadership Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Rajesh Kumar - CEO */}
            <div className="group bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Rajesh Kumar"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Member Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  Rajesh Kumar
                </h3>
                <p className="text-blue-600 font-semibold mb-1">
                  Chief Executive Officer
                </p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                  Leadership
                </span>
              </div>

              {/* Bio */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                With over 20 years of experience in manufacturing and business strategy, Rajesh leads XMB's vision for innovative manufacturing solutions.
              </p>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                  Strategic Planning
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                  Manufacturing Excellence
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                  Business Development
                </span>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Priya Sharma - CTO */}
            <div className="group bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                    alt="Priya Sharma"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Member Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  Priya Sharma
                </h3>
                <p className="text-blue-600 font-semibold mb-1">
                  Chief Technology Officer
                </p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                  Technology
                </span>
              </div>

              {/* Bio */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                Priya drives technological innovation at XMB, specializing in Industry 4.0 solutions and smart manufacturing systems.
              </p>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                  Industry 4.0
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                  IoT Solutions
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                  Process Automation
                </span>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Amit Patel - Head of Operations */}
            <div className="group bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                    alt="Amit Patel"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Member Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  Amit Patel
                </h3>
                <p className="text-blue-600 font-semibold mb-1">
                  Head of Operations
                </p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                  Operations
                </span>
              </div>

              {/* Bio */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                Amit oversees all manufacturing operations, ensuring quality, efficiency, and timely delivery across all projects.
              </p>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                  Operations Management
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                  Quality Control
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                  Supply Chain
                </span>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Manufacturing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with XMB to unlock manufacturing excellence. Our expert team is ready to discuss 
            your project requirements and deliver customized solutions that drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={handleGetStarted}
              className="bg-white text-blue-900 hover:bg-gray-100 font-bold text-sm tracking-wide"
            >
              GET QUOTE NOW
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleLearnMore}
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