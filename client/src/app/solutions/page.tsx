"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { solutionsData, getSolutionsByCategory } from "@/data/solutions";
import PageHero from "@/components/PageHero";

export default function SolutionsPage() {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [activeCategory, setActiveCategory] = useState<
    "all" | "industry" | "business"
  >("all");

  // Get solutions data based on active category
  const getSolutions = () => {
    if (activeCategory === "all") {
      return solutionsData;
    }
    return getSolutionsByCategory(activeCategory);
  };

  const solutions = getSolutions();

  const handleFavorite = (index: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(index)) {
      newFavorites.delete(index);
    } else {
      newFavorites.add(index);
    }
    setFavorites(newFavorites);
  };

  const categoryStats = {
    industry: getSolutionsByCategory("industry").length,
    business: getSolutionsByCategory("business").length,
    total: solutionsData.length,
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <PageHero
        title="Our Solutions"
        subtitle="Comprehensive industry and business solutions that integrate our core services to deliver exceptional value and competitive advantage"
        backgroundImage="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1920&h=1080&fit=crop&crop=center"
        backgroundAlt="Business Solutions Background"
        variant="full"
      />

      {/* Solutions Introduction Section */}
      {/* <section className="relative py-20 px-6 overflow-hidden">
        Background
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/80 border border-blue-200/50 rounded-full px-6 py-3 inline-block mb-8">
              <p className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
                INTEGRATED SOLUTIONS
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Tailored Solutions for Every Industry
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our solutions combine sourcing excellence, innovative design,
              advanced manufacturing, and operational consulting to deliver
              comprehensive value across industries and business functions. Each
              solution is tailored to meet specific industry requirements and
              business objectives.
            </p>
          </div>

          Solution Categories Overview
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            Industry Solutions
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
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Industry Solutions
                  </h3>
                  <p className="text-blue-600 font-semibold">
                    {categoryStats.industry} Specialized Industries
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Specialized solutions tailored for automotive, aerospace,
                electronics, and medical industries with deep domain expertise
                and industry-specific certifications and compliance
                requirements.
              </p>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            Business Solutions - Commented out
            {/* <div className="group relative bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Business Solutions
                  </h3>
                  <p className="text-green-600 font-semibold">
                    {categoryStats.business} Comprehensive Programs
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Integrated business solutions that combine our core services for
                end-to-end value chain management, supply chain optimization,
                innovation acceleration, and operational excellence programs.
              </p>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Category Filter Section */}
      {/* <section className="py-8 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-3 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              All Solutions ({categoryStats.total})
            </button>
            <button
              onClick={() => setActiveCategory("industry")}
              className={`px-6 py-3 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 ${
                activeCategory === "industry"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              Industry Solutions ({categoryStats.industry})
            </button>
            Business Solutions filter button - commented out
            <button
              onClick={() => setActiveCategory("business")}
              className={`px-6 py-3 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 ${
                activeCategory === "business"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              Business Solutions ({categoryStats.business})
            </button>
          </div>
        </div>
      </section> */}

      {/* Solutions Grid Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/80 border border-blue-200/50 rounded-full px-6 py-3 inline-block mb-8">
              <p className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
                {activeCategory === "all"
                  ? "ALL SERVICES"
                  : activeCategory === "industry"
                  ? "INDUSTRY SOLUTIONS"
                  : "BUSINESS SOLUTIONS"}
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              {activeCategory === "all"
                ? "Complete Services Portfolio"
                : activeCategory === "industry"
                ? "Industry-Specific Expertise"
                : "Integrated Business Solutions"}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {activeCategory === "all"
                ? "Explore our comprehensive range of services designed to address specific industry challenges and business objectives across all sectors."
                : activeCategory === "industry"
                ? "Specialized solutions tailored for specific industries with deep domain expertise, regulatory compliance, and industry-specific requirements."
                : "Comprehensive business solutions that integrate multiple services for maximum value and operational efficiency."}
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sourcing & Procurement */}
            <div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
              {/* Header Section */}
              <div className="relative h-40 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-6">
                <div className="absolute top-6 right-6">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
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
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Sourcing & Procurement
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-white/30 font-medium">
                      Supply Chain
                    </span>
                    <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-white/30 font-medium">
                      Strategic Sourcing
                    </span>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-white/5 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/5 rounded-full"></div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  Strategic sourcing solutions that optimize your supply chain,
                  reduce costs, and ensure quality through our global supplier
                  network and procurement expertise.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-medium">Global Supplier Network</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-medium">Cost Optimization</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-medium">Quality Assurance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Design and Prototyping */}
            <div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
              {/* Header Section */}
              <div className="relative h-40 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 p-6">
                <div className="absolute top-6 right-6">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
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
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Design and Prototyping
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-white/30 font-medium">
                      Innovation
                    </span>
                    <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-white/30 font-medium">
                      Rapid Prototyping
                    </span>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-white/5 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/5 rounded-full"></div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  Cutting-edge design and rapid prototyping services that
                  transform your ideas into reality with advanced CAD modeling,
                  3D printing, and iterative development.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="font-medium">CAD Modeling</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="font-medium">3D Printing</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="font-medium">Iterative Development</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Manufacturing Solutions */}
            <div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
              {/* Header Section */}
              <div className="relative h-40 bg-gradient-to-br from-violet-600 via-violet-700 to-violet-800 p-6">
                <div className="absolute top-6 right-6">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
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
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Manufacturing Solutions
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-white/30 font-medium">
                      Production
                    </span>
                    <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-white/30 font-medium">
                      Advanced Manufacturing
                    </span>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-white/5 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/5 rounded-full"></div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  End-to-end manufacturing solutions featuring advanced
                  production capabilities, quality control systems, and scalable
                  operations for diverse industries.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <span className="font-medium">Quality Control</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <span className="font-medium">Scalable Operations</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <span className="font-medium">Advanced Production</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operation Consulting */}
            <div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
              {/* Header Section */}
              <div className="relative h-40 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 p-6">
                <div className="absolute top-6 right-6">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
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
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Operation Consulting
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-white/30 font-medium">
                      Excellence
                    </span>
                    <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-white/30 font-medium">
                      Process Optimization
                    </span>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-white/5 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/5 rounded-full"></div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  Strategic operational consulting that drives excellence
                  through process optimization, performance improvement, and
                  operational transformation initiatives.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="font-medium">Performance Improvement</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="font-medium">Transformation</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="font-medium">Strategic Planning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover how our integrated solutions can drive efficiency,
            innovation, and growth across your organization. Let's discuss your
            specific needs and challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-gray-100 transition-colors shadow-lg">
              GET SOLUTION CONSULTATION
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-white hover:text-blue-900 transition-colors">
              EXPLORE ALL SOLUTIONS
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
