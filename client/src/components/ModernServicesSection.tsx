"use client";

import Icon from "./Icon";
import Button from "./Button";

export default function ModernServicesSection() {
  // Service cards data with theme colors
  const services = [
    {
      title: "End to End Supply Chain Management",
      description:
        "Comprehensive supply chain solutions from strategic sourcing to final delivery. We optimize your entire supply chain process to reduce costs, improve efficiency, and ensure reliable material availability across all stages.",
      tag: "Supply Chain Excellence",
      stats: { value: "500+", label: "Suppliers" },
      image: "/images/services/Sourcing & Procurement.png",
      features: [
        "Strategic sourcing",
        "Procurement",
        "Inventory control",
        "Warehousing & logistics",
      ],
      link: "/services/supply-chain",
      icon: <Icon name="heroicons:truck-20-solid" className="w-8 h-8" />,
    },
    {
      title: "Design & Prototyping",
      description:
        "Complete design and prototyping services from concept development to production-ready designs. Our expert team combines creativity with technical expertise to bring your ideas to life through innovative design solutions.",
      tag: "Innovation & Design",
      stats: { value: "24-48hrs", label: "Prototyping" },
      image: "/images/services/Design and Prototyping.png",
      link: "/services/design-prototyping",
      icon: <Icon name="heroicons:light-bulb-20-solid" className="w-8 h-8" />,
    },
    {
      title: "Manufacturing Solutions",
      description:
        "Complete manufacturing solutions from sub-assemblies to critical controlled assemblies. We deliver high-quality components and assemblies using advanced manufacturing technologies, automation, robotics, and rigorous quality control processes.",
      tag: "Manufacturing Excellence",
      stats: { value: "±0.001mm", label: "Precision" },
      image: "/images/services/Manufacturing Solutions.png",
      link: "/services/manufacturing",
      icon: <Icon name="heroicons:cog-6-tooth-20-solid" className="w-8 h-8" />,
    },
    {
      title: "Business Excellence",
      description:
        "Transforming organizations through competitiveness, sustainability & digitization. We help organizations achieve operational excellence through proven methodologies including operations optimization, quality improvement, digitization & automation, and new facility design.",
      tag: "Operational Excellence",
      stats: { value: "30-80%", label: "Efficiency" },
      image: "/images/services/Operation Consulting Service Excellence.png",
      link: "/services/business-excellence",
      icon: <Icon name="heroicons:chart-bar-20-solid" className="w-8 h-8" />,
    },
  ];

  return (
    <section className="pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block px-4 sm:px-6 py-2 bg-brand-light/40 rounded-full mb-4 sm:mb-6">
            <span className="text-brand-primary font-semibold text-xs sm:text-sm uppercase tracking-wide">
              Our Services
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900">
            Complete Business Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            From strategic sourcing and innovative design to advanced
            manufacturing and operational excellence.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 h-auto sm:h-[480px] flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-[250px] flex-shrink-0 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" /> */}

                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                  <div className="text-brand-primary">{service.icon}</div>
                </div>

                {/* Stats Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <div className="text-brand-primary text-lg font-bold">
                    {service.stats.value}
                  </div>
                  <div className="text-gray-600 text-[10px] font-medium">
                    {service.stats.label}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                {/* Tag */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-brand-light/40 text-brand-primary text-xs font-semibold rounded-full border border-brand-light/50">
                    {service.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
              Let's discuss how our comprehensive solutions can drive efficiency
              and growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                showArrow={true}
                href="/contact"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
