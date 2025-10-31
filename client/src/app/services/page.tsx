"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { servicesData } from "@/data/services";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Get services data from the data file
  const services = servicesData;

  // FAQ data
  const faqs = [
    {
      question: "What types of services do you provide?",
      answer:
        "We offer comprehensive services including sourcing and procurement, design and prototyping, manufacturing solutions, and operational consulting. Our services span the entire product lifecycle from concept to delivery.",
    },
    {
      question: "How do you ensure quality in your manufacturing processes?",
      answer:
        "We maintain ISO 9001 certified quality management systems with rigorous quality control processes, statistical process control, and continuous improvement programs. Each project undergoes multiple quality checkpoints.",
    },
    {
      question: "What is your typical turnaround time for projects?",
      answer:
        "Turnaround times vary based on project complexity and volume. Prototyping can be delivered in 24-48 hours, while full-scale manufacturing depends on quantity and complexity. We provide detailed timelines during the quotation process.",
    },
    {
      question: "Do you work with small businesses and startups?",
      answer:
        "Absolutely! We work with businesses of all sizes, from startups to Fortune 500 companies. Our flexible service model accommodates both low-volume prototyping and high-volume production runs.",
    },
    {
      question: "What materials can you work with?",
      answer:
        "We work with over 100 different materials including metals (aluminum, steel, titanium, etc.), plastics, composites, and specialized materials. Our material selection varies based on your project requirements and industry standards.",
    },
    {
      question: "How do I get a quote for my project?",
      answer:
        "You can get a quote by contacting us through our 'Get Quote' button, emailing our sales team, or filling out our online request form. We typically respond within 24 hours with a detailed quotation.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <PageHero
        title="Our Services"
        backgroundImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop&crop=center"
        backgroundAlt="Business Services Background"
        variant="full"
      />

      {/* Services Grid Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/80 border border-brand-light/50 rounded-full px-6 py-3 inline-block mb-8">
              <p className="text-brand-primary font-semibold text-lg tracking-wide uppercase">
                SERVICE PORTFOLIO
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Complete Business Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive range of services from strategic
              sourcing and innovative design to advanced manufacturing and
              operational excellence, designed to drive growth and efficiency
              across your entire value chain.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-brand-primary hover:-translate-y-1"
              >
                {/* Image Section */}
                <div className="relative h-56 rounded-2xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="p-7 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Learn More removed to disable clickthrough */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-8">
              <p className="text-brand-primary uppercase tracking-wide text-sm font-bold mb-6 bg-brand-light/40 px-8 py-3 rounded-full border border-brand-light/50">
                ✨ FAQ
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              Common Questions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Get answers to the most frequently asked questions about our
              services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-brand-primary flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with us for your next manufacturing project. Our expert team
            is ready to deliver exceptional results that exceed your
            expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg">
              GET QUOTE NOW
            </Button>
            <Button
              variant="glass"
              size="lg"
              className="border-2 border-white/50 hover:border-white"
            >
              VIEW PORTFOLIO
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
