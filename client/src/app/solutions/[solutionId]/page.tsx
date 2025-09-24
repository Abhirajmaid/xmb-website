"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { getSolutionById } from "@/data/solutions";

export default function SolutionDetailPage() {
  const params = useParams();
  const solutionId = params.solutionId as string;
  const solution = getSolutionById(solutionId);

  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  // If solution not found, show 404-like message
  if (!solution) {
    return (
      <main className="min-h-screen">
        <Header />
        <section className="py-20 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Solution Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              The solution you're looking for doesn't exist or has been moved.
            </p>
            <Button href="/solutions" variant="primary">
              Back to Solutions
            </Button>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const handleGetQuote = () => {
    setNotificationMessage("Redirecting to solution consultation form...");
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleContactExpert = () => {
    setNotificationMessage("Connecting you with our solution expert...");
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const getCategoryBadge = () => {
    const categoryColors = {
      industry: "bg-blue-100 text-blue-700",
      business: "bg-green-100 text-green-700",
      partnership: "bg-purple-100 text-purple-700",
    };

    const categoryLabels = {
      industry: "Industry Solution",
      business: "Business Solution",
      partnership: "Partnership Program",
    };

    return (
      <span
        className={`px-3 py-1 rounded-full text-sm font-semibold ${
          categoryColors[solution.category]
        }`}
      >
        {categoryLabels[solution.category]}
      </span>
    );
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
      <section className="relative pt-32 pb-16 px-6 overflow-hidden h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={solution.heroImage}
            alt={solution.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-700/50"></div>
        </div>

        {/* Glass Overlay with Content */}
        <div className="absolute inset-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl flex items-center justify-center z-10">
          <div className="text-center text-white max-w-4xl">
            <div className="flex justify-center mb-6">{getCategoryBadge()}</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {solution.title}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {solution.description}
            </p>
          </div>
        </div>
      </section>

      {/* Solution Overview Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="backdrop-blur-md bg-white/80 border border-blue-200/50 rounded-full px-6 py-3 inline-block mb-8">
                <p className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
                  SOLUTION OVERVIEW
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                {solution.overview.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {solution.overview.description}
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-6">
                {solution.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-200/30"
                  >
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {benefit.value}
                    </div>
                    <div className="text-sm font-semibold text-gray-900 mb-1">
                      {benefit.title}
                    </div>
                    <div className="text-xs text-gray-600">
                      {benefit.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-3xl p-8 shadow-xl">
                <img
                  src={solution.overview.image}
                  alt={solution.overview.imageTitle}
                  className="w-full h-80 object-cover rounded-2xl mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solution.overview.imageTitle}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.overview.imageDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/80 border border-blue-200/50 rounded-full px-6 py-3 inline-block mb-8">
              <p className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
                KEY FEATURES
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Solution Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our {solution.title.toLowerCase()} delivers comprehensive
              capabilities designed to address your specific challenges and
              drive measurable results.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {solution.features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={feature.icon}
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Components Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/80 border border-blue-200/50 rounded-full px-6 py-3 inline-block mb-8">
              <p className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
                SOLUTION COMPONENTS
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Integrated Service Components
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our solution integrates multiple service components to deliver
              comprehensive value and seamless execution across all project
              phases.
            </p>
          </div>

          {/* Components Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {solution.components.map((component, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative mb-6">
                  <img
                    src={component.image}
                    alt={component.title}
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent rounded-2xl"></div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {component.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {component.description}
                </p>

                {/* Services */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Services Included
                  </h4>
                  <div className="space-y-2">
                    {component.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        {service}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {component.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Workflow Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/80 border border-blue-200/50 rounded-full px-6 py-3 inline-block mb-8">
              <p className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
                OUR PROCESS
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Solution Implementation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our systematic approach ensures successful implementation and
              optimal results for every {solution.title.toLowerCase()} project.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-8">
            {solution.processSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-8 group">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-3xl p-8 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={step.icon}
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {solution.ctaSection.title}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {solution.ctaSection.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGetQuote}
              className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-gray-100 transition-colors shadow-lg"
            >
              {solution.ctaSection.primaryButton}
            </button>
            <button
              onClick={handleContactExpert}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-white hover:text-blue-900 transition-colors"
            >
              {solution.ctaSection.secondaryButton}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
