"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

export default function IndustriesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // FAQ data
  const faqs = [
    {
      question: "What industries do you specialize in?",
      answer:
        "We specialize in EV/E-Mobility, BESS/Energy Storage, Drones, E-Agritech, and Aerospace industries. Our manufacturing expertise spans cutting-edge sectors driving technological innovation.",
    },
    {
      question: "Can you handle both prototyping and mass production?",
      answer:
        "Yes, we provide end-to-end manufacturing services from rapid prototyping to full-scale mass production. Our flexible production capabilities accommodate low-volume prototyping runs as well as high-volume manufacturing requirements.",
    },
    {
      question: "Do you provide complete product development services?",
      answer:
        "Absolutely. We offer complete product development services including design, prototyping, manufacturing, quality assurance, and supply chain management to bring your product from concept to market.",
    },
    {
      question: "What certifications and quality standards do you maintain?",
      answer:
        "We maintain ISO 9001 certification and adhere to industry-specific standards including AS9100 for aerospace applications. We also comply with relevant environmental and safety regulations.",
    },
    {
      question: "How do you handle intellectual property protection?",
      answer:
        "We take IP protection seriously. We sign comprehensive NDAs, use secure data management systems, and ensure strict confidentiality throughout the development and manufacturing process.",
    },
    {
      question: "What is your global manufacturing capacity?",
      answer:
        "We have manufacturing facilities with 24/7 production capabilities, handling projects ranging from small batches to thousands of units. Our global supply chain enables efficient delivery worldwide.",
    },
  ];
  const industries = [
    {
      id: "ev-mobility",
      title: "EV/E-Mobility",
      description: "Electric vehicles • Charging infrastructure",
      image:
        "https://images.unsplash.com/photo-1746123249833-5625967e8bf1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "/industries/ev-mobility",
      content:
        "Revolutionizing transportation with electric vehicles and sustainable mobility solutions. We provide comprehensive manufacturing services for electric vehicle components, charging infrastructure, and battery management systems that power the future of sustainable transportation.",
      features: [
        "Electric Vehicle Manufacturing",
        "Charging Infrastructure",
        "Battery Management Systems",
        "Smart Mobility Solutions",
        "Power Electronics",
        "Thermal Management",
      ],
      icon: (
        <Icon name="heroicons:truck-20-solid" className="w-6 h-6 text-white" />
      ),
    },
    {
      id: "bess-energy-storage",
      title: "BESS/Energy Storage",
      description: "Battery systems • Grid storage",
      image:
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop&crop=center",
      href: "/industries/bess-energy-storage",
      content:
        "Advanced battery energy storage systems for grid stability and renewable energy integration. Our manufacturing capabilities include large-scale battery systems, energy management solutions, and grid-scale storage technologies that enable sustainable energy infrastructure.",
      features: [
        "Grid-Scale Storage",
        "Residential Energy Storage",
        "Industrial BESS",
        "Energy Management Systems",
        "Battery Pack Assembly",
        "Power Conversion Systems",
      ],
      icon: (
        <Icon
          name="heroicons:battery-50-solid"
          className="w-6 h-6 text-white"
        />
      ),
    },
    {
      id: "drones",
      title: "Drones",
      description: "UAV manufacturing • Aerial systems",
      image:
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop&crop=center",
      href: "/industries/drones",
      content:
        "Cutting-edge drone technology for commercial, industrial, and defense applications. We specialize in precision manufacturing of UAV components, flight control systems, and advanced aerial platforms that meet the highest industry standards for reliability and performance.",
      features: [
        "Commercial Drones",
        "Industrial UAVs",
        "Defense Systems",
        "Aerial Surveillance",
        "Flight Control Systems",
        "Payload Integration",
      ],
      icon: (
        <Icon
          name="heroicons:paper-airplane-20-solid"
          className="w-6 h-6 text-white"
        />
      ),
    },
    {
      id: "e-agritech",
      title: "E-Agritech",
      description: "Smart farming • Agricultural tech",
      image:
        "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop&crop=center",
      href: "/industries/e-agritech",
      content:
        "Smart agricultural technologies for sustainable farming and food production. Our manufacturing solutions include precision agriculture equipment, IoT sensor systems, and automated farming technologies that optimize crop yields and reduce environmental impact.",
      features: [
        "Precision Agriculture",
        "IoT Sensors",
        "Automated Farming",
        "Crop Monitoring Systems",
        "Smart Irrigation",
        "Agricultural Robotics",
      ],
      icon: (
        <Icon name="heroicons:chart-bar-solid" className="w-6 h-6 text-white" />
      ),
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <PageHero
        title="Our Industries"
        backgroundImage="/images/hero3.jpg"
        backgroundAlt="Industries Background"
        variant="full"
      />

      {/* Industries Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="backdrop-blur-md bg-white/80 border border-brand-light/50 rounded-full px-4 sm:px-6 py-2 sm:py-3 inline-block mb-4 sm:mb-6 md:mb-8">
              <p className="text-brand-primary font-semibold text-xs sm:text-sm md:text-lg tracking-wide uppercase">
                Industry Solutions
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight px-4 sm:px-0">
              Future-Ready Industries
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              We provide comprehensive manufacturing solutions for industries at
              the forefront of technological innovation
            </p>
          </div>

          {/* Industries Grid - Single Row */}
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-brand-primary hover:-translate-y-1 flex-1 min-w-[280px] flex flex-col"
              >
                {/* Image Section */}
                <div className="relative h-56 flex-shrink-0 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  {/* Icon Badge */}
                  <div className="absolute top-5 left-5 w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>

                  {/* Industry Tag */}
                  <div className="absolute top-5 right-5 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-md">
                    <p className="text-xs font-bold text-gray-800">
                      {industry.description.split(" • ")[0]}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-6 md:p-7 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                    {industry.content}
                  </p>

                  {/* Featured Items */}
                  <ul className="space-y-2 mt-auto">
                    {industry.features.slice(0, 3).map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="text-brand-primary mt-1.5 flex-shrink-0">
                          •
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="relative inline-block mb-4 sm:mb-6 md:mb-8">
              <p className="text-brand-primary uppercase tracking-wide text-xs sm:text-sm font-bold mb-4 sm:mb-6 bg-brand-light/40 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full border border-brand-light/50">
                ✨ FAQ
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6 md:mb-8 px-4 sm:px-0">
              Industry Expertise
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Get answers to common questions about our industry capabilities
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
      <section className="bg-brand-primary py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-0">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
            Partner with us for cutting-edge manufacturing solutions. Let's
            innovate together.
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
              VIEW CAPABILITIES
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
