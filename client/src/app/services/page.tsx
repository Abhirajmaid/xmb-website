"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { servicesData } from "@/data/services";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Get services data from the data file
  const services = servicesData;

  // Service icons mapping
  const serviceIcons = {
    "sourcing-procurement": (
      <Icon name="heroicons:truck-20-solid" className="w-6 h-6 text-white" />
    ),
    "design-prototyping": (
      <Icon
        name="heroicons:light-bulb-20-solid"
        className="w-6 h-6 text-white"
      />
    ),
    "manufacturing-solutions": (
      <Icon
        name="heroicons:cog-6-tooth-20-solid"
        className="w-6 h-6 text-white"
      />
    ),
    "operation-consulting-service-excellence": (
      <Icon
        name="heroicons:chart-bar-20-solid"
        className="w-6 h-6 text-white"
      />
    ),
  };

  // Service tags mapping
  const serviceTags = {
    "sourcing-procurement": "Supply Chain",
    "design-prototyping": "Innovation",
    "manufacturing-solutions": "Production",
    "operation-consulting-service-excellence": "Excellence",
  };

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
        backgroundImage="/images/hero3.jpg"
        backgroundAlt="Business Services Background"
        variant="full"
      />

      {/* Services Grid Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-8xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="backdrop-blur-md bg-white/80 border border-brand-light/50 rounded-full px-4 sm:px-6 py-2 sm:py-3 inline-block mb-4 sm:mb-6 md:mb-8">
              <p className="text-brand-primary font-semibold text-xs sm:text-sm md:text-lg tracking-wide uppercase">
                SERVICE PORTFOLIO
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight px-4 sm:px-0">
              Complete Business Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Explore our comprehensive range of services from strategic
              sourcing and innovative design to advanced manufacturing and
              operational excellence, designed to drive growth and efficiency
              across your entire value chain.
            </p>
          </div>

          {/* Services Grid - Single Row */}
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-brand-primary hover:-translate-y-1 flex-1 min-w-[280px] flex flex-col"
              >
                {/* Image Section */}
                <div className="relative h-[300px] flex-shrink-0 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div> */}

                  {/* Icon Badge */}
                  <div className="absolute top-5 left-5 w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    {serviceIcons[service.id as keyof typeof serviceIcons]}
                  </div>

                  {/* Service Tag */}
                  <div className="absolute top-5 right-5 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-md">
                    <p className="text-xs font-bold text-gray-800">
                      {serviceTags[service.id as keyof typeof serviceTags]}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                    {service.description}
                  </p>

                  {/* Subpoints */}
                  {service.subServices && service.subServices.length > 0 && (
                    <ul className="space-y-2 mt-auto">
                      {service.subServices[0].features
                        .slice(0, 3)
                        .map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <span className="text-brand-primary mt-1.5 flex-shrink-0">
                              •
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                    </ul>
                  )}
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
