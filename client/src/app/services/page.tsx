"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { servicesData } from "@/data/services";

export default function ServicesPage() {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  // Get services data from the data file
  const services = servicesData;

  const handleFavorite = (index: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(index)) {
      newFavorites.delete(index);
    } else {
      newFavorites.add(index);
    }
    setFavorites(newFavorites);
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden h-[50vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop&crop=center"
            alt="Manufacturing Services Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/50 to-blue-700/40"></div>
        </div>

        {/* Glass Overlay with Content */}
        <div className="absolute inset-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl flex items-center justify-center z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Services
            </h1>
          </div>
        </div>
      </section>

      {/* Services Introduction Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/80 border border-blue-200/50 rounded-full px-6 py-3 inline-block mb-8">
              <p className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
                MANUFACTURING EXCELLENCE
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Comprehensive Manufacturing Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From precision machining to complex assemblies, we deliver
              world-class manufacturing services that meet the highest quality
              standards. Our advanced facilities and expert team ensure
              exceptional results for every project.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Quality Assurance */}
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Quality First
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                ISO certified processes and rigorous quality control ensure
                every product meets the highest industry standards and customer
                specifications.
              </p>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Advanced Technology */}
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
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Advanced Tech
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                State-of-the-art equipment and cutting-edge manufacturing
                technologies enable us to handle the most complex and demanding
                projects.
              </p>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Global Reach */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
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
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Global Reach
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                With manufacturing facilities across multiple continents, we
                provide local expertise with global capabilities and supply
                chain efficiency.
              </p>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/80 border border-blue-200/50 rounded-full px-6 py-3 inline-block mb-8">
              <p className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
                SERVICE PORTFOLIO
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Manufacturing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive range of manufacturing services designed
              to meet diverse industry requirements with precision, quality, and
              reliability.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
                image={service.image}
                isFavorite={favorites.has(index)}
                onFavorite={() => handleFavorite(index)}
                link={`/services/${service.id}`}
                buttonText="Learn More"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with us for your next manufacturing project. Our expert team
            is ready to deliver exceptional results that exceed your
            expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-gray-100 transition-colors shadow-lg">
              GET QUOTE NOW
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-white hover:text-blue-900 transition-colors">
              VIEW PORTFOLIO
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
