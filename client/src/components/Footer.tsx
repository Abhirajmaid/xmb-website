"use client";

import { useState } from "react";
import Button from "./Button";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-black bg-gradient-to-br from-brand-secondary/10 via-brand-primary/15 to-brand-secondary/10 text-white overflow-hidden">
      {/* Glass background elements */}
      {/* <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 left-32 w-96 h-96 bg-brand-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-brand-secondary/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-brand-success/20 rounded-full blur-3xl"></div>
      </div> */}

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-[80%] mx-auto px-6 py-16">
        {/* Newsletter Section */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/30 rounded-3xl p-8 md:p-12 mb-16 shadow-2xl shadow-black/20 relative">
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0 rounded-3xl"></div>
          <div className="text-center mb-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Stay Connected with XMB
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Get the latest insights on manufacturing innovation, industry
              trends, and XMB updates delivered to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-white/20 border border-white/30 rounded-full text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300 placeholder:text-white"
                required
              />
              <Button
                variant="primary"
                size="lg"
                showArrow={true}
                onClick={handleSubscribe}
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-brand-primary/80">
                XTRAWRKX MANUFACTURING BUSINESS
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Transforming manufacturing through precision engineering,
                innovative solutions, and cutting-edge technology. Delivering
                excellence that drives business growth and operational success
                across 25+ countries.
              </p>
            </div>

            {/* Stats - commented out */}
            {false && (
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    Projects
                  </div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="text-2xl font-bold text-white">25+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    Countries
                  </div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    Years
                  </div>
                </div>
              </div>
            )}

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {[
                  {
                    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                    name: "Instagram",
                    color: "bg-gray-700 hover:bg-gray-600",
                  },
                  {
                    icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
                    name: "Twitter",
                    color: "bg-gray-700 hover:bg-gray-600",
                  },
                  {
                    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                    name: "LinkedIn",
                    color: "bg-gray-700 hover:bg-gray-600",
                  },
                  {
                    icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                    name: "X",
                    color: "bg-gray-700 hover:bg-gray-600",
                  },
                ].map((social, index) => (
                  <div
                    key={index}
                    className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl`}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.icon} />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 font-medium group"
                >
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-4">
              <p className="text-gray-300">
                Ready to transform your manufacturing operations? Let's discuss
                your project.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white font-medium">info@xmb.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <div className="text-white font-medium">
                      +1 (555) 123-4567
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="text-white font-medium">
                      Industrial District, Manufacturing Hub
                    </div>
                  </div>
                </div>
              </div>

              <Button
                variant="primary"
                size="lg"
                showArrow={true}
                href="/contact"
                fullWidth={true}
                className="mt-4"
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 XMB - Xtrawrkx Manufacturing Business. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
