"use client";

import { useState, useEffect } from "react";
import Button from "./Button";

export default function ModernTestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      quote:
        "XMB transformed our manufacturing processes completely. Their precision engineering approach increased our production efficiency by 40% while maintaining zero defects. The ROI was evident within the first quarter.",
      name: "Sarah Chen",
      position: "VP of Operations",
      company: "TechFlow Manufacturing",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      companyLogo: "TF",
      industry: "Technology",
      projectValue: "$2.5M",
    },
    {
      quote:
        "The digital transformation project exceeded all expectations. XMB's team delivered a comprehensive IoT solution that revolutionized our operations. Real-time monitoring and predictive analytics have been game-changers.",
      name: "Michael Rodriguez",
      position: "Chief Technology Officer",
      company: "Industrial Dynamics Corp",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      companyLogo: "ID",
      industry: "Manufacturing",
      projectValue: "$5.2M",
    },
    {
      quote:
        "Working with XMB was the best decision we made for our quality assurance program. Their Six Sigma implementation and statistical process control helped us achieve 99.8% quality rates consistently.",
      name: "Dr. Emily Watson",
      position: "Quality Director",
      company: "Precision Systems Ltd",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      companyLogo: "PS",
      industry: "Aerospace",
      projectValue: "$3.8M",
    },
    {
      quote:
        "XMB's strategic consulting services provided invaluable insights that drove our expansion into new markets. Their data-driven approach and market analysis resulted in 250% revenue growth over two years.",
      name: "James Thompson",
      position: "CEO & Founder",
      company: "Advanced Materials Group",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      companyLogo: "AM",
      industry: "Materials",
      projectValue: "$8.1M",
    },
    {
      quote:
        "The 24/7 support team has been exceptional. With average response times under 10 minutes and proactive maintenance, our uptime improved to 99.9%. XMB truly understands the importance of continuous operations.",
      name: "Lisa Park",
      position: "Plant Manager",
      company: "Global Manufacturing Solutions",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      companyLogo: "GM",
      industry: "Automotive",
      projectValue: "$4.6M",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handleTestimonialChange = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="bg-gradient-to-br from-slate-100 via-purple-50 to-blue-50 py-12 sm:py-16 md:py-20 px-2 sm:px-4 md:px-6 relative overflow-hidden">
      {/* Glass background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 left-32 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-blue-400/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 uppercase tracking-wide text-sm font-medium mb-6 backdrop-blur-sm bg-blue-50/50 px-6 py-2 rounded-full w-fit mx-auto border border-blue-200/50">
            CLIENT SUCCESS STORIES
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped leading companies achieve exceptional
            results through our comprehensive manufacturing and business
            solutions.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="backdrop-blur-xl bg-white/80 border border-white/60 rounded-3xl shadow-2xl shadow-black/10 p-4 sm:p-6 md:p-8 lg:p-12 mb-8 sm:mb-12 relative">
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/40 rounded-3xl"></div>
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center relative z-10">
            {/* Testimonial Content */}
            <div>
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-6">
                {renderStars(testimonials[currentTestimonial].rating)}
                <span className="ml-2 text-sm text-gray-600">5.0</span>
              </div>

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-gray-800 leading-relaxed mb-8 font-medium">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-blue-600 font-medium">
                    {testimonials[currentTestimonial].position}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-sm text-gray-600">Industry</div>
                  <div className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].industry}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Project Value</div>
                  <div className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].projectValue}
                  </div>
                </div>
              </div>
            </div>

            {/* Company Card */}
            <div className="lg:ml-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-8 text-white text-center">
                <div className="w-24 h-24 bg-white/30 border border-white/40 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-md shadow-lg">
                  <span className="text-3xl font-bold">
                    {testimonials[currentTestimonial].companyLogo}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {testimonials[currentTestimonial].company}
                </h3>
                <p className="text-blue-100 mb-6">
                  {testimonials[currentTestimonial].industry} Industry
                </p>
                <div className="bg-white/20 border border-white/30 rounded-2xl p-4 backdrop-blur-md shadow-lg">
                  <div className="text-3xl font-bold mb-1">
                    {testimonials[currentTestimonial].projectValue}
                  </div>
                  <div className="text-blue-100 text-sm">
                    Project Investment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => handleTestimonialChange(index)}
              className={`flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 ${
                index === currentTestimonial
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-md"
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-sm">{testimonial.name}</div>
                <div className="text-xs opacity-75">{testimonial.company}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Stats Section */}
        <div className="backdrop-blur-xl bg-white/80 border border-white/60 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl shadow-black/10 relative">
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/40 rounded-3xl"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center relative z-10">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">99.8%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                $2.1B+
              </div>
              <div className="text-gray-600">Project Value Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results and
            transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="lg"
              showArrow={true}
              href="/contact"
              className="w-full sm:w-auto min-w-0"
            >
              Start Your Success Story
            </Button>
            <Button
              variant="outline"
              size="lg"
              showArrow={true}
              href="/case-studies"
              className="w-full sm:w-auto min-w-0"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
