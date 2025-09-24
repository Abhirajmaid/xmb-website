"use client";

import { useState, useEffect, useRef } from "react";
import { navigationLinks, mobileNavigationLinks } from "@/data/navlinks";
import Button from "./Button";
import Icon from "./Icon";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState<
    string | null
  >(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle dropdown interactions
  const handleMouseEnter = (linkId: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(linkId);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Handle mobile dropdown toggle
  const toggleMobileDropdown = (linkId: string) => {
    setIsMobileDropdownOpen(isMobileDropdownOpen === linkId ? null : linkId);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
      setIsMobileDropdownOpen(null);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-300 ${
        isScrolled ? "top-6 left-4 right-4" : "top-6 left-0 right-0"
      }`}
    >
      {/* Glass Morphism Background */}
      <div
        className={`absolute inset-0 backdrop-blur-xl max-w-7xl mx-auto rounded-3xl transition-all duration-500 ${
          isScrolled
            ? "opacity-100 translate-y-0 bg-white/20 border border-white/30 shadow-2xl shadow-black/10"
            : "opacity-0 -translate-y-2 bg-transparent"
        }`}
      >
        {/* Glass effect overlay */}
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 to-white/10 transition-opacity duration-500 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div
        className={`mx-auto max-w-7xl relative z-10 transition-all duration-300 ${
          isScrolled ? "px-6 py-4" : "px-6 py-4"
        }`}
      >
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
          >
            <div
              className={`w-8 h-8 backdrop-blur-md rounded-xl flex items-center justify-center transition-all duration-300 border ${
                isScrolled
                  ? "bg-blue-600/90 border-blue-400/30 shadow-lg shadow-blue-500/20"
                  : "bg-white/20 border-white/30 shadow-lg shadow-black/10"
              }`}
            >
              <div
                className={`w-3 h-3 transform rotate-45 transition-colors duration-300 ${
                  isScrolled ? "bg-white" : "bg-white"
                }`}
              ></div>
            </div>
            <span
              className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-blue-900" : "text-white"
              }`}
            >
              XMB
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 relative">
            {navigationLinks.map((link) => (
              <div
                key={link.id}
                className="relative"
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.id)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={link.href}
                  className={`font-medium text-xl transition-all duration-200 relative hover:-translate-y-0.5 flex items-center space-x-1 ${
                    isScrolled
                      ? "text-blue-700 hover:text-blue-900"
                      : "text-white hover:text-white"
                  }`}
                  onClick={(e) => {
                    if (link.dropdown && link.href === "#") {
                      e.preventDefault();
                    }
                  }}
                >
                  <span>{link.label}</span>
                  {link.dropdown && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === link.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 w-0 hover:w-full transition-all duration-300 ${
                      isScrolled ? "bg-blue-600" : "bg-white"
                    }`}
                  />
                </a>
              </div>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Button
              variant={isScrolled ? "primary" : "glass"}
              size="md"
              showArrow={true}
              href="/contact"
            >
              Contact us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:scale-110 transition-transform duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className={`w-full h-0.5 origin-center transition-all duration-300 ${
                  isScrolled ? "bg-blue-700" : "bg-white"
                } ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              />
              <span
                className={`w-full h-0.5 transition-all duration-300 ${
                  isScrolled ? "bg-blue-700" : "bg-white"
                } ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-full h-0.5 origin-center transition-all duration-300 ${
                  isScrolled ? "bg-blue-700" : "bg-white"
                } ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              />
            </div>
          </button>
        </nav>

        {/* Global Dropdown Menu */}
        {activeDropdown && (
          <div
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-3xl shadow-2xl shadow-black/20 p-8 animate-in slide-in-from-top-5 duration-300 z-50"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div
              className={`grid gap-8 ${
                navigationLinks.find((link) => link.id === activeDropdown)
                  ?.dropdown?.length === 3
                  ? "grid-cols-3"
                  : "grid-cols-2"
              }`}
            >
              {navigationLinks
                .find((link) => link.id === activeDropdown)
                ?.dropdown?.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-4">
                    {/* Section Header */}
                    <div className="pb-4 border-b border-gray-200/50">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {section.title}
                      </h3>
                      {section.description && (
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {section.description}
                        </p>
                      )}
                    </div>

                    {/* Section Items */}
                    <div className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href={item.href}
                          className="group flex items-start space-x-4 p-4 rounded-2xl bg-gray-50 border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
                        >
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-all duration-300">
                            {item.iconType === "svg" ? (
                              <Icon
                                name={item.icon || ""}
                                className="text-blue-600"
                                size="md"
                              />
                            ) : (
                              <span className="text-lg text-blue-600">
                                {item.icon}
                              </span>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                                {item.label}
                              </h4>
                              {item.price && (
                                <span className="text-sm font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                                  {item.price}
                                </span>
                              )}
                            </div>
                            {item.description && (
                              <p className="text-xs text-gray-600 leading-relaxed">
                                {item.description}
                              </p>
                            )}
                            {item.badge && (
                              <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full border border-green-200">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <svg
                              className="w-4 h-4 text-blue-600"
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
                          </div>
                        </a>
                      ))}
                    </div>

                    {/* Explore Button for each section */}
                    {sectionIndex === 0 && (
                      <div className="pt-6">
                        <Button
                          variant="gradient"
                          size="md"
                          href={
                            navigationLinks.find(
                              (link) => link.id === activeDropdown
                            )?.href || "#"
                          }
                          showArrow={true}
                          className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white shadow-xl hover:shadow-2xl hover:shadow-pink-500/30 transform hover:scale-110 transition-all duration-500 border-0 font-bold tracking-wide"
                        >
                          Explore
                        </Button>
                      </div>
                    )}

                    {/* Explore models button for second section */}
                    {sectionIndex === 1 && (
                      <div className="pt-6">
                        <Button
                          variant="glass"
                          size="md"
                          href="#"
                          showArrow={true}
                          className="backdrop-blur-xl bg-gradient-to-r from-slate-900/80 via-gray-900/80 to-slate-900/80 hover:from-slate-800/90 hover:via-gray-800/90 hover:to-slate-800/90 border border-white/20 hover:border-white/40 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 font-bold tracking-wide"
                        >
                          Explore models
                        </Button>
                      </div>
                    )}

                    {/* Join Platform button for third section */}
                    {sectionIndex === 2 && (
                      <div className="pt-6">
                        <Button
                          variant="primary"
                          size="sm"
                          href="/register"
                          showArrow={true}
                          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-blue-500/25"
                        >
                          Join Platform
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`lg:hidden mt-4 backdrop-blur-xl rounded-3xl p-6 animate-in slide-in-from-top-5 duration-300 border ${
              isScrolled
                ? "bg-white/20 border-white/30 shadow-2xl shadow-black/10"
                : "bg-white/10 border-white/20 shadow-xl shadow-black/20"
            }`}
          >
            {/* Glass effect overlay for mobile menu */}
            <div
              className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-white/5 transition-opacity duration-300 ${
                isScrolled ? "opacity-100" : "opacity-80"
              }`}
            />
            <div className="flex flex-col space-y-4 relative z-10">
              {navigationLinks.map((link, index) => (
                <div key={link.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <a
                      href={link.dropdown ? "#" : link.href}
                      className={`font-medium text-base transition-all duration-200 hover:translate-x-2 flex-1 ${
                        isScrolled
                          ? "text-blue-700 hover:text-blue-900"
                          : "text-white/90 hover:text-white"
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                      onClick={(e) => {
                        if (link.dropdown) {
                          e.preventDefault();
                          toggleMobileDropdown(link.id);
                        }
                      }}
                    >
                      {link.label}
                    </a>
                    {link.dropdown && (
                      <button
                        onClick={() => toggleMobileDropdown(link.id)}
                        className={`p-1 transition-transform duration-200 ${
                          isMobileDropdownOpen === link.id ? "rotate-180" : ""
                        }`}
                      >
                        <svg
                          className={`w-4 h-4 ${
                            isScrolled ? "text-blue-700" : "text-white/90"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Mobile Dropdown */}
                  {link.dropdown && isMobileDropdownOpen === link.id && (
                    <div className="ml-4 space-y-4 animate-in slide-in-from-top-3 duration-200">
                      {link.dropdown.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="space-y-2">
                          {/* Section Title */}
                          <div className="pb-2 border-b border-white/20">
                            <h4
                              className={`text-sm font-bold ${
                                isScrolled ? "text-blue-800" : "text-white"
                              }`}
                            >
                              {section.title}
                            </h4>
                          </div>

                          {/* Section Items */}
                          {section.items.map((item, itemIndex) => (
                            <a
                              key={itemIndex}
                              href={item.href}
                              className={`flex items-center space-x-3 p-2 rounded-xl transition-all duration-200 hover:translate-x-1 ${
                                isScrolled
                                  ? "text-blue-600 hover:text-blue-800 hover:bg-white/20"
                                  : "text-white/80 hover:text-white hover:bg-white/10"
                              }`}
                            >
                              {item.iconType === "svg" ? (
                                <Icon
                                  name={item.icon || ""}
                                  className="text-current"
                                  size="sm"
                                />
                              ) : (
                                <span className="text-sm">{item.icon}</span>
                              )}
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <div className="text-sm font-medium">
                                    {item.label}
                                  </div>
                                  {item.price && (
                                    <span
                                      className={`text-xs font-bold ${
                                        isScrolled
                                          ? "text-blue-700"
                                          : "text-white"
                                      }`}
                                    >
                                      {item.price}
                                    </span>
                                  )}
                                </div>
                                {item.description && (
                                  <div className="text-xs opacity-75 mt-0.5">
                                    {item.description}
                                  </div>
                                )}
                                {item.badge && (
                                  <span className="inline-block mt-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-white/20">
                <Button
                  variant={isScrolled ? "primary" : "glass"}
                  size="md"
                  showArrow={true}
                  href="/contact"
                >
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
