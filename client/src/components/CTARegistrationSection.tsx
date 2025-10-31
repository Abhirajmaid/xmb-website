"use client";

import Button from "./Button";
import Icon from "./Icon";

export default function CTARegistrationSection() {
  return (
    <section className="relative pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-16 md:pb-20 px-2 sm:px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 sm:px-6 py-2 bg-brand-light/40 rounded-full mb-6">
            <p className="text-brand-primary font-semibold text-xs sm:text-sm tracking-wide uppercase">
              JOIN OUR NETWORK
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Partner With Excellence
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our growing network of satisfied customers and trusted
            suppliers.
          </p>
        </div>

        {/* Main CTA Container */}
        <div className="mb-12 sm:mb-16">
          {/* CTA Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 relative z-10">
            {/* Customer Registration Card */}
            <div className="group bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Content */}
              <div className="text-white">
                {/* Icon and Badge */}
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Icon
                      name="heroicons:user-group-20-solid"
                      className="w-6 h-6 sm:w-7 text-white"
                    />
                  </div>
                  <div className="bg-white/20 rounded-full px-3 py-1 text-xs font-medium">
                    For Businesses
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 leading-tight">
                  Join as Customer Partner
                </h3>

                {/* Description */}
                <p className="text-white/90 leading-relaxed mb-6 text-base">
                  Access personalized manufacturing solutions with 24/7 support
                  and quality assurance.
                </p>

                {/* CTA Button */}
                <Button
                  variant="glass"
                  size="lg"
                  showArrow={true}
                  href="/register/customer"
                >
                  Register as Customer
                </Button>
              </div>
            </div>

            {/* Supplier Registration Card */}
            <div className="group bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Content */}
              <div className="text-white">
                {/* Icon and Badge */}
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Icon
                      name="heroicons:building-office-2-20-solid"
                      className="w-6 h-6 sm:w-7 text-white"
                    />
                  </div>
                  <div className="bg-white/20 rounded-full px-3 py-1 text-xs font-medium">
                    For Partners
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 leading-tight">
                  Join as Supplier Partner in Goods and Service Provider
                </h3>

                {/* Description */}
                <p className="text-white/90 leading-relaxed mb-6 text-base">
                  Join our trusted supplier network with access to global
                  customers and growth opportunities.
                </p>

                {/* CTA Button */}
                <Button
                  variant="glass"
                  size="lg"
                  showArrow={true}
                  href="/register/supplier"
                >
                  Register as Supplier
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
          <div className="group text-center backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl p-3 sm:p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-light/50 to-blue-100/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-2xl sm:text-3xl font-bold text-brand-primary mb-1 sm:mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm">
                Happy Customers
              </div>
            </div>
          </div>
          <div className="group text-center backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl p-3 sm:p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary50/50 to-brand-primary100/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-2xl sm:text-3xl font-bold text-brand-primary600 mb-1 sm:mb-2">
                200+
              </div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm">
                Trusted Suppliers
              </div>
            </div>
          </div>
          <div className="group text-center backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl p-3 sm:p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary50/50 to-brand-primary100/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-2xl sm:text-3xl font-bold text-brand-primary600 mb-1 sm:mb-2">
                25+
              </div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm">
                Countries Served
              </div>
            </div>
          </div>
          <div className="group text-center backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl p-3 sm:p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary50/50 to-brand-primary100/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-2xl sm:text-3xl font-bold text-brand-primary600 mb-1 sm:mb-2">
                99.8%
              </div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
