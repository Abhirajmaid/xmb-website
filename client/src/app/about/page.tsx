"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import OurJourneySection from "@/components/OurJourneySection";
import PageHero from "@/components/PageHero";

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
      description: "Connecting manufacturers worldwide",
    },
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=600&fit=crop",
      alt: "Advanced Manufacturing Facility",
      title: "Advanced Manufacturing Facility",
      description: "State-of-the-art production capabilities",
    },
    {
      src: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200&h=600&fit=crop",
      alt: "Quality Control & Innovation",
      title: "Quality Control & Innovation",
      description: "Excellence in every process",
    },
    {
      src: "https://images.unsplash.com/photo-1565043589221-1d6d4b8b8b8b?w=1200&h=600&fit=crop",
      alt: "Industrial Automation",
      title: "Industrial Automation",
      description: "Smart manufacturing solutions",
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
    setNotificationMessage(
      "Starting consultation process... Redirecting to contact form"
    );
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleLearnMore = () => {
    setNotificationMessage("Opening detailed information...");
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  // Leadership team data
  const leadershipTeam = [
    {
      name: "Rajesh Kumar",
      role: "Chief Executive Officer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Priya Sharma",
      role: "Chief Technology Officer",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Amit Patel",
      role: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 bg-brand-success text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          {notificationMessage}
        </div>
      )}

      <Header />

      {/* Hero Section */}
      <PageHero
        title="About Us"
        subtitle="Driving manufacturing excellence through innovation"
        backgroundImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop&crop=center"
        backgroundAlt="About Background"
        variant="full"
      />

      {/* Mission and Vision Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving manufacturing excellence through innovation and
              customer-centric solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <div className="w-16 h-1 bg-brand-primary rounded-full mb-6"></div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the global leader in manufacturing solutions, transforming
                ideas into reality through innovation, technology, and
                sustainable practices that shape the future of industry.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <div className="w-16 h-1 bg-brand-success rounded-full mb-6"></div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To deliver exceptional manufacturing services that exceed client
                expectations while fostering innovation, sustainability, and
                growth for our partners and communities worldwide.
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
            <div className="relative inline-block mb-8">
              <p className="text-brand-primary uppercase tracking-wide text-sm font-bold mb-6 bg-brand-light/40 px-8 py-3 rounded-full border border-brand-light/50">
                ✨ GLOBAL EXCELLENCE
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              Global Manufacturing Excellence
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From skilled craftsmanship to cutting-edge automation, discover
              how we deliver manufacturing excellence across industries
              worldwide.
            </p>
          </div>

          {/* Advantage XMB */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
            {/* Image Display */}
            <div className="relative mb-8">
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <img
                  src={manufacturingImages[currentImageIndex].src}
                  alt={manufacturingImages[currentImageIndex].alt}
                  className="w-full h-full object-cover transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-2xl font-bold text-white mb-2">
                    {manufacturingImages[currentImageIndex].title}
                  </h4>
                  <p className="text-white/90">
                    {manufacturingImages[currentImageIndex].description}
                  </p>
                </div>
              </div>

              {/* Simple Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {manufacturingImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-brand-primary w-6"
                        : "bg-gray-300"
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Capabilities Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center mx-auto mb-4">
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
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Labor-Intensive Products
                </h4>
                <p className="text-gray-600 text-sm">
                  High-quality, cost-effective manufacturing solutions
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-brand-success rounded-lg flex items-center justify-center mx-auto mb-4">
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
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Modular Assemblies
                </h4>
                <p className="text-gray-600 text-sm">
                  Flexible and scalable manufacturing systems
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center mx-auto mb-4">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  High-Precision Products
                </h4>
                <p className="text-gray-600 text-sm">
                  Advanced precision manufacturing capabilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-8">
              <p className="text-brand-primary uppercase tracking-wide text-sm font-bold mb-6 bg-brand-light/40 px-8 py-3 rounded-full border border-brand-light/50">
                ✨ OUR LEADERSHIP
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experienced leaders driving innovation and excellence in
              manufacturing solutions
            </p>
          </div>

          {/* Leadership Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300"
              >
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{member.role}</p>
                  </div>

                  {/* Social Icons */}
                  <div className="flex justify-center gap-3 pt-2">
                    <a
                      href="#"
                      className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-brand-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <svg
                        className="w-5 h-5 text-gray-600 hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-brand-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={`${member.name} Email`}
                    >
                      <svg
                        className="w-5 h-5 text-gray-600 hover:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-brand-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Manufacturing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with XMB to unlock manufacturing excellence. Our expert team
            is ready to discuss your project requirements and deliver customized
            solutions that drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg" onClick={handleGetStarted}>
              GET QUOTE NOW
            </Button>
            <Button
              variant="glass"
              size="lg"
              onClick={handleLearnMore}
              className="border-2 border-white/50 hover:border-white"
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
