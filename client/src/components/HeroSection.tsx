"use client";

import Button from "./Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero2.jpg')`,
            transform: "scaleX(-1)",
          }}
        ></div>

        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Theme Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/40 via-brand-secondary/20 to-brand-primary/40"></div> */}
        {/* Additional dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main Content - Left Aligned */}
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pt-32 pb-20">
            <div className="max-w-2xl">
              {/* Pre-headline Badge */}
              <p className="text-white/80 uppercase tracking-widest text-sm font-medium mb-6">
                BUILT TO INSPIRE
              </p>

              {/* Main Headline */}
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                Manufacturing excellence that drives success
              </h1>

              {/* Description */}
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                Xtrawrkx Manufacturing provides end-to-end product development
                and manufacturing services from ideation and prototyping to
                large-scale production, quality assurance, logistics, and supply
                chain solutions.
              </p>

              {/* CTA Button */}
              <div className="mt-8">
                <Button
                  variant="primary"
                  size="xl"
                  showArrow={true}
                  href="/services"
                  className="w-full sm:w-auto"
                >
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Stats and Scroll Indicator */}
        <div className="relative z-10 pb-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
              {/* Stats Section - Bottom Left */}
              <div className="flex flex-wrap gap-6 lg:gap-8">
                <div className="text-white">
                  <div className="text-3xl lg:text-4xl font-bold mb-1">
                    500+
                  </div>
                  <div className="text-white/70 text-sm">Project complete</div>
                </div>
                <div className="text-white">
                  <div className="text-3xl lg:text-4xl font-bold mb-1">
                    150+
                  </div>
                  <div className="text-white/70 text-sm">Expert teams</div>
                </div>
                <div className="text-white">
                  <div className="text-3xl lg:text-4xl font-bold mb-1">
                    $3.5M
                  </div>
                  <div className="text-white/70 text-sm">Project value</div>
                </div>
              </div>

              {/* Scroll Down Indicator - Bottom Center */}
              <div className="flex justify-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 py-2 shadow-lg">
                  <div className="text-white/70 text-xs">Scroll down</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
