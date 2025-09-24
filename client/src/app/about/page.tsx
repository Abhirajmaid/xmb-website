"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function AboutUsPage() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [statsAnimated, setStatsAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Manufacturing images for the slider
  const manufacturingImages = [
    {
      src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=400&fit=crop",
      alt: "Global Manufacturing Network",
      title: "Global Manufacturing Network",
    },
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=400&fit=crop",
      alt: "Advanced Manufacturing Facility",
      title: "Advanced Manufacturing Facility",
    },
    {
      src: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=400&fit=crop",
      alt: "Quality Control & Innovation",
      title: "Quality Control & Innovation",
    },
    {
      src: "https://images.unsplash.com/photo-1565043589221-1d6d4b8b8b8b?w=800&h=400&fit=crop",
      alt: "Industrial Automation",
      title: "Industrial Automation",
    },
  ];

  // Auto-slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % manufacturingImages.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [manufacturingImages.length]);

  // Intersection observer for stats animation - only once
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsAnimated) {
          setStatsAnimated(true);
          observer.disconnect(); // Stop observing after first animation
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [statsAnimated]);

  // Animated counter component
  const AnimatedCounter = ({
    end,
    duration = 2000,
    suffix = "",
    prefix = "",
  }: {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
  }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    useEffect(() => {
      if (!statsAnimated) return;

      const startTime = Date.now();
      const endTime = startTime + duration;

      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * end);

        setCount(currentCount);
        countRef.current = currentCount;

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }, [statsAnimated, end, duration]);

    return (
      <span>
        {prefix}
        {count}
        {suffix}
      </span>
    );
  };

  // Mock functions for button interactions
  const handleGetStarted = () => {
    setNotificationMessage(
      "Starting consultation process... Redirecting to contact form"
    );
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
    // Mock API call
    console.log("Opening consultation form");
  };

  const handleLearnMore = () => {
    setNotificationMessage("Opening detailed information...");
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
    // Mock navigation
    console.log("Navigating to detailed information");
  };

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
      <section className="relative pt-32 pb-16 px-6 overflow-hidden h-[50vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop&crop=center"
            alt="Manufacturing Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/50 to-blue-700/40"></div>
        </div>

        {/* Glass Overlay with Content */}
        <div className="absolute inset-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl flex items-center justify-center z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              About XMB
            </h1>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="relative py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Customers */}
            <div className="text-center">
              <h3 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">
                CUSTOMERS
              </h3>
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                <AnimatedCounter end={3500} duration={2500} suffix="+" />
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                ACTIVE CUSTOMERS ACROSS INDUSTRIES, GEOGRAPHIES & CATEGORIES
              </p>
            </div>

            {/* Suppliers */}
            <div className="text-center">
              <h3 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">
                SUPPLIERS
              </h3>
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                <AnimatedCounter end={12500} duration={2500} suffix="+" />
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                ACTIVE MSME SUPPLIERS
              </p>
            </div>

            {/* Facilities */}
            <div className="text-center">
              <h3 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">
                FACILITIES
              </h3>
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                <AnimatedCounter end={16} duration={2500} />
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                MANUFACTURING FACILITIES ACROSS INDIA, SPAIN, USA & MEXICO
              </p>
            </div>

            {/* Geography */}
            <div className="text-center">
              <h3 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">
                GEOGRAPHY
              </h3>
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                <AnimatedCounter end={15} duration={2500} suffix="+" />
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                COUNTRIES INCLUDING NORTH AMERICA, ASIA & MIDDLE EAST
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/80 border border-blue-200/50 rounded-full px-6 py-3 inline-block mb-8">
              <p className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
                MISSION & VISION
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Our Mission & Vision
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Driving manufacturing excellence through innovation and
              customer-centric solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the global leader in manufacturing solutions, transforming
                ideas into reality through innovation, technology, and
                sustainable practices.
              </p>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Mission Card */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
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
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To deliver exceptional manufacturing services that exceed client
                expectations while fostering innovation, sustainability, and
                growth for our partners and communities.
              </p>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/80 border border-blue-200/50 rounded-full px-6 py-3 inline-block mb-8">
              <p className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
                COMPANY OVERVIEW
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Global Manufacturing Excellence
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Leading the way in innovative manufacturing solutions with a
              global presence and local expertise
            </p>
          </div>

          <div className="space-y-20">
            {/* Advantage XMB */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Advantage XMB
              </h3>
              <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
                Make for India, Make for the World
              </p>

              <div className="mb-16">
                {/* Glass Container for Image Slider */}
                <div className="relative w-full max-w-4xl mx-auto backdrop-blur-sm bg-white/80 border border-blue-200/50 rounded-3xl p-8 shadow-xl">
                  {/* Image Display */}
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg mb-6">
                    <img
                      src={manufacturingImages[currentImageIndex].src}
                      alt={manufacturingImages[currentImageIndex].alt}
                      className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />

                    {/* Image Title Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl px-6 py-4">
                        <h4 className="text-white text-xl font-bold mb-2">
                          {manufacturingImages[currentImageIndex].title}
                        </h4>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-white/90 text-sm">
                              {currentImageIndex + 1} of{" "}
                              {manufacturingImages.length}
                            </span>
                          </div>
                          <div className="flex space-x-1">
                            {manufacturingImages.map((_, index) => (
                              <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  index === currentImageIndex
                                    ? "bg-white"
                                    : "bg-white/40"
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
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 backdrop-blur-md bg-white/20 border border-white/30 hover:bg-white/30 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                      aria-label="Previous image"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
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
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 backdrop-blur-md bg-white/20 border border-white/30 hover:bg-white/30 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                      aria-label="Next image"
                    >
                      <svg
                        className="w-5 h-5 text-white"
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
                    </button>
                  </div>

                  {/* Thumbnail Navigation */}
                  <div className="flex justify-center space-x-4">
                    {manufacturingImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative w-20 h-16 rounded-xl overflow-hidden transition-all duration-300 ${
                          index === currentImageIndex
                            ? "ring-2 ring-blue-500 scale-105"
                            : "opacity-60 hover:opacity-80 hover:scale-105"
                        }`}
                        aria-label={`View ${image.title}`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                        {index === currentImageIndex && (
                          <div className="absolute inset-0 bg-blue-500/20" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-3xl p-12">
                <h4 className="text-2xl font-bold text-gray-900 mb-8">
                  Global Thinking, Local Execution
                </h4>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-left">
                    <h5 className="text-lg font-bold text-gray-900 mb-4">
                      Labor-Intensive Products
                    </h5>
                    <p className="text-gray-600">
                      Leveraging our skilled workforce to deliver high-quality,
                      cost-effective manufacturing solutions for labor-intensive
                      production.
                    </p>
                  </div>

                  <div className="text-left">
                    <h5 className="text-lg font-bold text-gray-900 mb-4">
                      Modular Assemblies
                    </h5>
                    <p className="text-gray-600">
                      Specializing in modular assembly systems that provide
                      flexibility, scalability, and efficiency in complex
                      manufacturing processes.
                    </p>
                  </div>

                  <div className="text-left">
                    <h5 className="text-lg font-bold text-gray-900 mb-4">
                      High-Precision and Sensitive Products
                    </h5>
                    <p className="text-gray-600">
                      Advanced capabilities in manufacturing high-precision
                      components and sensitive products requiring specialized
                      handling and quality control.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology + Manufacturing at Scale Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/80 border border-blue-200/50 rounded-full px-6 py-3 inline-block mb-8">
              <p className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
                MANUFACTURING OS
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              XMB: The Manufacturing OS
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our advanced Manufacturing OS streamlines operations, boosting
              efficiency and transparency. Real-time updates, analytics, and
              seamless project management tools make manufacturing a breeze.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="space-y-8">
                {/* Benefits for Customers */}
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Benefits for Customers
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Real-time Visibility:
                        </h4>
                        <p className="text-gray-600">
                          Monitor project progress and track deliverables in
                          real-time.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Quality Assurance:
                        </h4>
                        <p className="text-gray-600">
                          Ensure highest quality standards with automated
                          tracking.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Optimised Performance:
                        </h4>
                        <p className="text-gray-600">
                          Make data-driven decisions to boost efficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefits for Partners */}
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Benefits for Partners
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Streamlined Operations:
                        </h4>
                        <p className="text-gray-600">
                          Optimize workflows and reduce operational overhead.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Enhanced Collaboration:
                        </h4>
                        <p className="text-gray-600">
                          Improve communication and coordination across teams.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Increased Reliability:
                        </h4>
                        <p className="text-gray-600">
                          Ensure timely and quality deliveries with predictable
                          outcomes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {/* Customer Registration */}
              <div className="group relative bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 mb-8">
                <div className="absolute top-6 right-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  FOR CUSTOMERS
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Dashboard Overview
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Track your active projects and payments
                    </p>
                    <div className="text-sm text-blue-600 font-medium">
                      <p>• 10 Active Projects</p>
                      <p>• Payment Due: ₹13,87,680</p>
                    </div>
                  </div>
                  <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Project Management
                    </h4>
                    <p className="text-sm text-gray-600">
                      Monitor progress and deliverables
                    </p>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Register as Customer
                </button>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Supplier Registration */}
              <div className="group relative bg-white/90 backdrop-blur-sm border border-green-200/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute top-6 right-6">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center shadow-lg">
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  FOR SUPPLIERS
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="bg-green-50/50 rounded-xl p-4 border border-green-100">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Payment Summary
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Track orders and payments
                    </p>
                    <div className="text-sm text-green-600 font-medium">
                      <p>• Total Orders: 20</p>
                      <p>• Order Value: ₹10,20,55,750</p>
                    </div>
                  </div>
                  <div className="bg-green-50/50 rounded-xl p-4 border border-green-100">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Ledger Management
                    </h4>
                    <p className="text-sm text-gray-600">
                      Monitor receivables and payables
                    </p>
                  </div>
                </div>
                <button className="w-full bg-green-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Register as Supplier
                </button>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Manufacturing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with XMB to unlock manufacturing excellence. Our expert team
            is ready to discuss your project requirements and deliver customized
            solutions.
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
              onClick={() => handleLearnMore()}
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
