"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import OurJourneySection from "@/components/OurJourneySection";
import PageHero from "@/components/PageHero";
import TeamCard from "@/components/TeamCard";

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
        subtitle="Redefining manufacturing as a service-driven, resource rich & technology-enabled ecosystem"
        backgroundImage="/images/hero.png"
        backgroundAlt="About Background"
        variant="full"
      />

      {/* Introduction Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-8">
              <p className="text-brand-primary uppercase tracking-wide text-sm font-bold mb-6 bg-brand-light/40 px-8 py-3 rounded-full border border-brand-light/50">
                ✨ ABOUT XTRAWKRX
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left Section - Our Purpose */}
              <div>
                <p className="text-gray-500 uppercase tracking-wide text-sm font-medium mb-4">
                  OUR PURPOSE
                </p>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Our purpose
                </h3>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  At Xtrawrkx, we are redefining manufacturing as a
                  service-driven, resource rich & technology-enabled ecosystem.
                  We help businesses of all sizes transform ideas into
                  industry-ready products with speed, precision, and scalability
                  with affordability.
                </p>
              </div>

              {/* Right Section - Numbered Principles */}
              <div className="space-y-8">
                {/* Principle 01 */}
                <div className="pb-8 border-b border-gray-200">
                  <div className="flex items-start gap-4">
                    <span className="text-gray-400 text-2xl font-normal">
                      01
                    </span>
                    <div className="flex-1">
                      <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        Full-Lifecycle Partnership
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        A full-lifecycle manufacturing partner offering design,
                        prototyping, certification, production, logistics, and
                        financing solutions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Principle 02 */}
                <div className="pb-8 border-b border-gray-200">
                  <div className="flex items-start gap-4">
                    <span className="text-gray-400 text-2xl font-normal">
                      02
                    </span>
                    <div className="flex-1">
                      <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        Innovation & Execution
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Great products don't just happen — they are designed,
                        validated, built, and scaled through a seamless
                        ecosystem of innovation and execution.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Principle 03 */}
                <div>
                  <div className="flex items-start gap-4">
                    <span className="text-gray-400 text-2xl font-normal">
                      03
                    </span>
                    <div className="flex-1">
                      <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        End-to-End Partnership
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        We are more than a manufacturer. We are your end-to-end
                        partner, helping businesses, startups, and enterprises
                        transform ideas into market-ready solutions with speed,
                        precision, and reliability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-8">
              <p className="text-brand-primary uppercase tracking-wide text-sm font-bold mb-6 bg-brand-light/40 px-8 py-3 rounded-full border border-brand-light/50">
                ✨ MISSION & VISION
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left Section - Vision */}
              <div>
                <p className="text-gray-500 uppercase tracking-wide text-sm font-medium mb-4">
                  OUR VISION
                </p>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Our vision
                </h3>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  To manufacture not just products, but possibilities with
                  premium quality, scalability and affordability with utmost
                  customer satisfaction.
                </p>
              </div>

              {/* Right Section - Mission */}
              <div>
                <p className="text-gray-500 uppercase tracking-wide text-sm font-medium mb-4">
                  OUR MISSION
                </p>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Our mission
                </h3>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  To simplify, enable and accelerate manufacturing by
                  integrating design, engineering, production, and supply chain
                  under one roof enabling our clients to focus on innovation
                  while we take care of execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <OurJourneySection />

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {leadershipTeam.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                animationDelay={index * 100}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Button
              variant="primary"
              size="lg"
              showArrow={true}
              className="inline-flex"
              href="/team"
            >
              View All Team Members
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-brand-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Ideas into Reality?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with Xtrawrkx to unlock manufacturing excellence. Our expert
            team is ready to discuss your project requirements and deliver
            customized solutions that drive your success with speed, precision,
            and affordability.
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
