"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";

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
        "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800&h=600&fit=crop&crop=center",
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
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
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
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
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
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
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
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      id: "aerospace",
      title: "Aerospace",
      description: "Aviation • Space technology",
      image:
        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop&crop=center",
      href: "/industries/aerospace",
      content:
        "Advanced aerospace manufacturing for aviation and space exploration technologies. We provide precision manufacturing services for aircraft components, space systems, and satellite technology that meet the stringent requirements of aerospace industry standards.",
      features: [
        "Aircraft Components",
        "Space Systems",
        "Satellite Technology",
        "Avionics",
        "Propulsion Systems",
        "Structural Components",
      ],
      icon: (
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <PageHero
        title="Industries"
        subtitle="Specialized manufacturing solutions for cutting-edge industries driving the future of technology"
        backgroundImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop&crop=center"
        backgroundAlt="Industries Background"
        variant="full"
      />

      {/* Industries Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/80 border border-brand-light/50 rounded-full px-6 py-3 inline-block mb-8">
              <p className="text-brand-primary font-semibold text-lg tracking-wide uppercase">
                Industry Solutions
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Future-Ready Industries
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We provide comprehensive manufacturing solutions for industries at
              the forefront of technological innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <a
                key={industry.id}
                href={industry.href}
                className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-brand-primary hover:-translate-y-1"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
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
                <div className="p-7 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {industry.content}
                  </p>

                  {/* Featured Items */}
                  <div className="space-y-2">
                    {industry.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-brand-primary rounded-full flex-shrink-0"></div>
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="flex items-center text-brand-primary font-semibold text-sm group-hover:gap-2 transition-all pt-2">
                    <span>Explore Industry</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </a>
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
              Industry Expertise
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
      <section className="bg-brand-primary py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
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
