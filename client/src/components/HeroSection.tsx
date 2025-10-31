"use client";

import Button from "./Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          onError={(e) => {
            console.log("Video failed to load, showing poster image");
            e.currentTarget.style.display = "none";
          }}
        >
          {/* Local hero video */}
          <source src="/videos/hero1.mp4" type="video/mp4" />
          {/* Fallback message */}
          Your browser does not support HTML5 video.
        </video>

        {/* Fallback background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            zIndex: -1,
          }}
        ></div>

        {/* Theme Gradient Overlay */}
        <div className="absolute inset-0 bg-brand-dark/40 bg-gradient-to-br from-brand-primary/30 via-brand-secondary/30 to-brand-primary/40"></div>
        {/* Additional dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col justify-center items-center text-center min-h-[80vh]">
          {/* Main Content */}
          <div className="max-w-4xl space-y-10">
            {/* Glass Card Container */}
            <div>
              <div className="space-y-8 relative z-10">
                <p className="text-white/90 uppercase tracking-widest text-lg font-medium backdrop-blur-sm bg-white/10 px-6 py-2 rounded-full w-fit mx-auto border border-white/20">
                  BUILT TO EXCEL
                </p>

                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1]">
                  Manufacturing excellence that drives success
                </h1>

                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                  Xtrawrkx Manufacturing Services provides end-to-end product
                  development and manufacturing services from ideation and
                  prototyping to large-scale production, quality assurance,
                  logistics, and supply chain solutions.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <Button
                variant="primary"
                size="xl"
                showArrow={true}
                href="/services"
                className="w-full sm:w-auto min-w-0"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-xl shadow-black/10 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                500+
              </div>
              <div className="text-white/80 text-sm">
                Manufacturing Projects
              </div>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-xl shadow-black/10 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                150+
              </div>
              <div className="text-white/80 text-sm">Industry Experts</div>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-xl shadow-black/10 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                99.5%
              </div>
              <div className="text-white/80 text-sm">Quality Assurance</div>
            </div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-xl shadow-black/10 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                24/7
              </div>
              <div className="text-white/80 text-sm">Operations Support</div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="flex justify-center mt-16">
            <div className="text-white/60 text-sm">Scroll down</div>
          </div>
        </div>
      </div>
    </section>
  );
}
