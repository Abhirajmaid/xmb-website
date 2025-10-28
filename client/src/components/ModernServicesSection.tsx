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
      link: "/services/design-prototyping",
      icon: <Icon name="heroicons:light-bulb-20-solid" className="w-8 h-8" />,
    },
    {
      title: "Manufacturing Solutions",
      description:
        "Complete manufacturing solutions from sub-assemblies to critical controlled assemblies. We deliver high-quality components and assemblies using advanced manufacturing technologies, automation, robotics, and rigorous quality control processes.",
      tag: "Manufacturing Excellence",
      stats: { value: "±0.001mm", label: "Precision" },
      link: "/services/manufacturing",
      icon: <Icon name="heroicons:cog-6-tooth-20-solid" className="w-8 h-8" />,
    },
    {
      title: "Business Excellence",
      description:
        "Transforming organizations through competitiveness, sustainability & digitization. We help organizations achieve operational excellence through proven methodologies including operations optimization, quality improvement, digitization & automation, and new facility design.",
      tag: "Operational Excellence",
      stats: { value: "30-80%", label: "Efficiency" },
      link: "/services/business-excellence",
      icon: <Icon name="heroicons:chart-bar-20-solid" className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-20 px-24 bg-white">
      <div className="max-w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-brand-light/40 rounded-full mb-6">
            <span className="text-brand-primary font-semibold text-sm uppercase tracking-wide">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
            Complete Business Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From strategic sourcing and innovative design to advanced
            manufacturing and operational excellence.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center mb-6">
                <div className="text-white">{service.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-primary transition-colors leading-tight">
                {service.title}
              </h3>

              {/* Stats */}
              <div className="mb-4">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {service.stats.value}
                </div>
                <div className="text-xs text-gray-600 font-medium">
                  {service.stats.label}
                </div>
              </div>

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed mb-4 flex-grow">
                {service.description}
              </p>

              {/* Tag */}
              <div className="mt-auto pt-4 border-t border-gray-100">
                <span className="inline-block px-3 py-1 bg-brand-light/40 text-brand-primary text-xs font-semibold rounded-full">
                  {service.tag}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-2xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
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
