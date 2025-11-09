"use client";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  email?: string;
  department?: string;
  bio?: string;
  animationDelay?: number;
}

export default function TeamCard({
  name,
  role,
  image,
  linkedin = "#",
  email,
  department,
  bio,
  animationDelay = 0,
}: TeamCardProps) {
  return (
    <div
      className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-brand-primary hover:-translate-y-1 flex flex-col"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {/* Image Section */}
      <div className="relative h-64 flex-shrink-0 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1">
        {/* Member Info */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
            {name}
          </h3>
          <p className="text-gray-600 text-sm mb-2">{role}</p>
          {department && (
            <span className="inline-block px-3 py-1 bg-brand-light/40 text-brand-primary text-xs font-semibold rounded-full border border-brand-light/50">
              {department}
            </span>
          )}
        </div>

        {/* Bio */}
        {bio && (
          <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center line-clamp-2">
            {bio}
          </p>
        )}

        {/* Social Icons */}
        <div className="flex justify-center gap-3 mt-auto pt-4">
          <a
            href={linkedin}
            className="group w-10 h-10 rounded-xl bg-gray-200 hover:bg-brand-primary flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
            aria-label={`${name} LinkedIn`}
          >
            <svg
              className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href={email ? `mailto:${email}` : "#"}
            className="group w-10 h-10 rounded-xl bg-gray-200 hover:bg-brand-primary flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
            aria-label={`${name} Email`}
          >
            <svg
              className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

