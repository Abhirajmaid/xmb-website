"use client";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundAlt?: string;
  variant?: "full" | "simple";
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
  backgroundAlt,
  variant = "full",
}: PageHeroProps) {
  if (variant === "simple") {
    return (
      <section className="relative pt-32 pb-16 px-6 bg-gradient-to-br from-brand-primary/90 via-brand-secondary/80 to-brand-primary/90">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="relative pt-32 pb-16 px-6 overflow-hidden h-[50vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        {backgroundImage && (
          <img
            src={backgroundImage}
            alt={backgroundAlt || title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/10 to-brand-primary/10"></div>
      </div>

      {/* Glass Overlay with Content */}
      <div className="absolute inset-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl flex items-center justify-center z-10">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-brand-light bg-clip-text text-transparent">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
