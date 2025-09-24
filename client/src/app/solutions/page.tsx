"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { solutionsData, getSolutionsByCategory } from "@/data/solutions";

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
      <section className="relative pt-32 pb-16 px-6 overflow-hidden h-[50vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1920&h=1080&fit=crop&crop=center"
            alt="Business Solutions Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/50 to-blue-700/40"></div>
        </div>

        {/* Glass Overlay with Content */}
        <div className="absolute inset-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl flex items-center justify-center z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Solutions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive industry and business solutions that integrate our
              core services to deliver exceptional value and competitive
              advantage
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Introduction Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background */}
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

          {/* Solution Categories Overview */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Industry Solutions */}
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

            {/* Business Solutions */}
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
      </section>

      {/* Category Filter Section */}
      <section className="py-8 px-6 bg-gray-50">
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
      </section>

      {/* Solutions Grid Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/80 border border-blue-200/50 rounded-full px-6 py-3 inline-block mb-8">
              <p className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
                {activeCategory === "all"
                  ? "ALL SOLUTIONS"
                  : activeCategory === "industry"
                  ? "INDUSTRY SOLUTIONS"
                  : "BUSINESS SOLUTIONS"}
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              {activeCategory === "all"
                ? "Complete Solution Portfolio"
                : activeCategory === "industry"
                ? "Industry-Specific Expertise"
                : "Integrated Business Solutions"}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {activeCategory === "all"
                ? "Explore our comprehensive range of solutions designed to address specific industry challenges and business objectives across all sectors."
                : activeCategory === "industry"
                ? "Specialized solutions tailored for specific industries with deep domain expertise, regulatory compliance, and industry-specific requirements."
                : "Comprehensive business solutions that integrate multiple services for maximum value and operational efficiency."}
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <ServiceCard
                key={solution.id}
                name={solution.title}
                description={solution.description}
                image={solution.image}
                isFavorite={favorites.has(index)}
                onFavorite={() => handleFavorite(index)}
                link={`/solutions/${solution.id}`}
                buttonText="Explore Solution"
              />
            ))}
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
