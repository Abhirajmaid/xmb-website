"use client";

import Button from "./Button";
import Icon from "./Icon";

export default function CTARegistrationSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-2 sm:px-4 md:px-6 overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 left-32 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-indigo-400/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="backdrop-blur-md bg-white/80 border border-blue-200/50 rounded-full px-4 sm:px-6 py-2 sm:py-3 inline-block mb-6 sm:mb-8">
            <p className="text-blue-600 font-semibold text-xs sm:text-sm tracking-wide uppercase">
              JOIN OUR NETWORK
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent leading-tight mb-4 sm:mb-6">
            Partner With Excellence
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Join our growing network of satisfied customers and trusted
            suppliers. Experience the XMB difference in manufacturing
            excellence.
          </p>
        </div>

        {/* Main CTA Container */}
        <div className="backdrop-blur-xl bg-white/40 border border-white/50 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl shadow-black/10 relative overflow-hidden mb-12 sm:mb-16">
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/30 rounded-3xl"></div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full translate-y-16 -translate-x-16"></div>
            <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full opacity-60"></div>
          </div>

          {/* CTA Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 relative z-10">
            {/* Customer Registration Card */}
            <div className="group relative">
              {/* Card Background with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/85 to-blue-600/95 rounded-3xl transform group-hover:scale-105 transition-all duration-500 shadow-2xl group-hover:shadow-blue-500/40"></div>

              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/25 to-blue-600/35 group-hover:from-blue-500/35 group-hover:to-blue-700/45 rounded-3xl transition-all duration-500"></div>

              {/* Decorative elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white rounded-full opacity-50"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-4 sm:p-6 md:p-8 text-white">
                {/* Icon and Badge */}
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/40 border border-white/60 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-xl shadow-white/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      name="heroicons:user-group-20-solid"
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white"
                    />
                  </div>
                  <div className="bg-white/30 border border-white/50 rounded-full px-2 sm:px-3 py-1 text-xs font-medium backdrop-blur-sm">
                    For Businesses
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
                  Join as Customer
                </h3>

                {/* Description */}
                <p className="text-white/90 leading-relaxed mb-6 sm:mb-8 text-sm md:text-base">
                  Access personalized manufacturing solutions with 24/7 support
                  and quality assurance.
                </p>

                {/* CTA Button */}
                <Button
                  variant="glass"
                  size="lg"
                  showArrow={true}
                  href="/register/customer"
                  className="w-full group-hover:shadow-lg transition-shadow duration-300"
                >
                  Register as Customer
                </Button>
              </div>
            </div>

            {/* Supplier Registration Card */}
            <div className="group relative">
              {/* Card Background with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/85 to-indigo-600/95 rounded-3xl transform group-hover:scale-105 transition-all duration-500 shadow-2xl group-hover:shadow-purple-500/40"></div>

              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/25 to-indigo-600/35 group-hover:from-purple-500/35 group-hover:to-indigo-700/45 rounded-3xl transition-all duration-500"></div>

              {/* Decorative elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white rounded-full opacity-50"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-4 sm:p-6 md:p-8 text-white">
                {/* Icon and Badge */}
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/40 border border-white/60 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-xl shadow-white/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      name="heroicons:building-office-2-20-solid"
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white"
                    />
                  </div>
                  <div className="bg-white/30 border border-white/50 rounded-full px-2 sm:px-3 py-1 text-xs font-medium backdrop-blur-sm">
                    For Partners
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
                  Join as Supplier
                </h3>

                {/* Description */}
                <p className="text-white/90 leading-relaxed mb-6 sm:mb-8 text-sm md:text-base">
                  Join our trusted supplier network with access to global
                  customers and growth opportunities.
                </p>

                {/* CTA Button */}
                <Button
                  variant="glass"
                  size="lg"
                  showArrow={true}
                  href="/register/supplier"
                  className="w-full group-hover:shadow-lg transition-shadow duration-300"
                >
                  Register as Supplier
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
          <div className="group text-center backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl p-3 sm:p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm">
                Happy Customers
              </div>
            </div>
          </div>
          <div className="group text-center backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl p-3 sm:p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-purple-100/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">
                200+
              </div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm">
                Trusted Suppliers
              </div>
            </div>
          </div>
          <div className="group text-center backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl p-3 sm:p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-indigo-100/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-1 sm:mb-2">
                25+
              </div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm">
                Countries Served
              </div>
            </div>
          </div>
          <div className="group text-center backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl p-3 sm:p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-cyan-100/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-600 mb-1 sm:mb-2">
                99.8%
              </div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
