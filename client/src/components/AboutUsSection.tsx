"use client";

import { useEffect, useState } from "react";
import Button from "./Button";

export default function AboutUsSection() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Modern manufacturing facility",
      title: "Advanced Manufacturing",
      description: "State-of-the-art production lines",
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Industrial automation",
      title: "Automation Excellence",
      description: "Cutting-edge robotic systems",
    },
    {
      src: "https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Quality control process",
      title: "Quality Assurance",
      description: "Precision testing and validation",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 py-12 sm:py-16 md:py-24 pb-8 sm:pb-12 px-2 sm:px-4 md:px-6 relative overflow-hidden">
      {/* Glass background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-8xl mx-auto relative z-10">
        {/* Glass Morphism Card Section */}
        <div className="backdrop-blur-xl bg-white/30 border border-white/30 rounded-3xl p-3 sm:p-4 md:p-10 lg:p-14 shadow-2xl shadow-black/10 relative overflow-hidden">
          {/* Additional glass effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-3xl"></div>
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-16 items-center relative z-10">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <p className="text-blue-600 uppercase tracking-wide text-sm font-medium mb-6 backdrop-blur-sm bg-blue-50/50 px-4 py-2 rounded-full w-fit border border-blue-200/50">
                  ABOUT US
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  We are a team of passionate experts dedicated to transforming
                  businesses through innovative solutions.
                </h2>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                With years of experience across various industries, we
                understand the unique challenges that businesses face in today's
                rapidly evolving landscape. Our mission is to provide tailored
                solutions that drive growth, efficiency, and sustainable
                success.
              </p>

              {/* Statistics Section - Commented out */}
              {/* <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    500+
                  </div>
                  <div className="text-gray-600 text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    98%
                  </div>
                  <div className="text-gray-600 text-sm">Success Rate</div>
                </div>
              </div> */}
            </div>

            {/* Right Content - Image Gallery */}
            <div className="relative">
              <div className="relative h-[400px]">
                {images.map((image, index) => {
                  const isActive = index === currentImage;
                  const isNext = index === (currentImage + 1) % images.length;
                  const isPrev =
                    index ===
                    (currentImage - 1 + images.length) % images.length;

                  let transform = "";
                  let opacity = 0;
                  let zIndex = 0;

                  if (isActive) {
                    transform = "translateY(0) scale(1)";
                    opacity = 1;
                    zIndex = 3;
                  } else if (isNext) {
                    transform = "translateY(20px) scale(0.95)";
                    opacity = 0.7;
                    zIndex = 2;
                  } else if (isPrev) {
                    transform = "translateY(-20px) scale(0.95)";
                    opacity = 0.7;
                    zIndex = 1;
                  }

                  return (
                    <div
                      key={index}
                      className="absolute inset-0 transition-all duration-500 ease-out bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg"
                      style={{
                        transform,
                        opacity,
                        zIndex,
                      }}
                    >
                      <div className="relative h-full">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-xl font-bold mb-2">
                            {image.title}
                          </h3>
                          <p className="text-sm opacity-90">
                            {image.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Image indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentImage ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section - What they say about us */}
        {false && (
          <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-10 lg:p-14 shadow-sm mt-6 sm:mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div>
              <p className="text-gray-500 uppercase tracking-wide text-sm font-medium mb-6">
                TESTIMONIALS
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                What they say about us?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Don't just take our word for it. Here's what our clients have to
                say about their experience working with us.
              </p>

              <Button
                variant="primary"
                size="lg"
                showArrow={true}
                href="/about"
                className="!bg-red-500 hover:!bg-red-600 !border-red-500"
              >
                ABOUT US
              </Button>
            </div>

            {/* Right Side - Moving Queue of Logos/Cards */}
            <div className="relative">
              {/* Moving Cards Container */}
              <div className="relative overflow-hidden mb-8">
                <div
                  className="flex gap-6 animate-scroll-testimonials"
                  style={{ width: "max-content" }}
                >
                  {/* Testimonial Card 1 */}
                  <div className="bg-gray-50 rounded-2xl p-6 w-[320px] flex-shrink-0 shadow-sm">
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                      "They brought clarity to complex problems, breaking down
                      barriers and delivering innovative solutions. I was truly
                      impressed by how quickly their strategies turned into
                      real, tangible outcomes, driving measurable growth and
                      success for our business."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-black text-sm">
                          John Doe
                        </div>
                        <div className="text-gray-500 text-xs">CEO, Innova</div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Card 2 */}
                  <div className="bg-gray-50 rounded-2xl p-6 w-[320px] flex-shrink-0 shadow-sm">
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                      "We faced a turning point and needed expert guidance. They
                      stepped in with a clear vision and strong execution. Their
                      strategies not only solved immediate pain points but
                      created lasting change that boosted our productivity and
                      internal alignment."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-black text-sm">
                          Ryan Cole
                        </div>
                        <div className="text-gray-500 text-xs">CEO, Novent</div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Card 3 */}
                  <div className="bg-gray-50 rounded-2xl p-6 w-[320px] flex-shrink-0 shadow-sm">
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                      "Their insight into our industry challenges was
                      outstanding. They reshaped our approach with precision,
                      clarity, and innovation. The results were not only
                      measurable but also impactful in shaping the future path
                      of our organization. Truly a great experience."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-black text-sm">
                          Paul West
                        </div>
                        <div className="text-gray-500 text-xs">CEO, Lumora</div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Card 4 */}
                  <div className="bg-gray-50 rounded-2xl p-6 w-[320px] flex-shrink-0 shadow-sm">
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                      "They quickly identified key bottlenecks in our process
                      and implemented creative, actionable solutions. The
                      improvements were visible almost immediately, and their
                      collaborative approach helped align our entire team behind
                      the new direction and goals."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-black text-sm">
                          Mark King
                        </div>
                        <div className="text-gray-500 text-xs">CEO, Soltek</div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Card 5 */}
                  <div className="bg-gray-50 rounded-2xl p-6 w-[320px] flex-shrink-0 shadow-sm">
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                      "They brought clarity to complex problems, breaking down
                      barriers and delivering innovative solutions. I was
                      thoroughly impressed by how quickly their strategies
                      turned into real, tangible outcomes, driving measurable
                      growth and success for our business."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-black text-sm">
                          John Doe
                        </div>
                        <div className="text-gray-500 text-xs">CEO, Innova</div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Card 6 */}
                  <div className="bg-gray-50 rounded-2xl p-6 w-[320px] flex-shrink-0 shadow-sm">
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                      "We faced a turning point and needed expert guidance. They
                      stepped in with a clear vision and strong execution. Their
                      strategies not only solved immediate pain points but
                      created lasting change that boosted our productivity and
                      internal alignment."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-black text-sm">
                          Ryan Cole
                        </div>
                        <div className="text-gray-500 text-xs">CEO, Novent</div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Card 7 */}
                  <div className="bg-gray-50 rounded-2xl p-6 w-[320px] flex-shrink-0 shadow-sm">
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                      "Their insight into our industry challenges was
                      outstanding. They reshaped our approach with precision,
                      clarity, and innovation. The results were not only
                      measurable but also impactful in shaping the future path
                      of our organization. Truly a great experience."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-black text-sm">
                          Paul West
                        </div>
                        <div className="text-gray-500 text-xs">CEO, Lumora</div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Card 8 */}
                  <div className="bg-gray-50 rounded-2xl p-6 w-[320px] flex-shrink-0 shadow-sm">
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                      "They quickly identified key bottlenecks in our process
                      and implemented creative, actionable solutions. The
                      improvements were visible almost immediately, and their
                      collaborative approach helped align our entire team behind
                      the new direction and goals."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-black text-sm">
                          Mark King
                        </div>
                        <div className="text-gray-500 text-xs">CEO, Soltek</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-start gap-3">
                <button
                  aria-label="Previous testimonial"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  aria-label="Next testimonial"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          </div>
        )}
        {/* </div> */}
      </div>
    </section>
  );
}
