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
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Don't close if clicking on the dropdown or navigation items
      if (!target.closest(".dropdown-container") && !target.closest("nav")) {
        setActiveDropdown(null);
        setIsMobileDropdownOpen(null);
      }
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
            className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200"
          >
            <img
              src="/xtrawrkx_logo_full.png"
              alt="Xtrawrkx Manufacturing Business"
              className="h-10 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span
                className={`text-lg font-bold transition-colors duration-300 leading-tight ${
                  isScrolled ? "text-brand-dark" : "text-white"
                }`}
              >
                Xtrawrkx
              </span>
              <span
                className={`text-xs font-medium transition-colors duration-300 leading-tight ${
                  isScrolled ? "text-gray-600" : "text-white/80"
                }`}
              >
                Manufacturing Business
              </span>
            </div>
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
                      ? "text-brand-dark/80 hover:text-brand-dark"
                      : "text-white hover:text-white"
                  }`}
                  onClick={(e) => {
                    if (link.dropdown && link.href === "#") {
                      e.preventDefault();
                    }
                  }}
                >
                  <span>{link.label}</span>
                  {/* Show dropdown arrow */}
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
                      isScrolled ? "bg-brand-primary" : "bg-white"
                    }`}
                  />
                </a>

                {/* Dropdown Menu - Positioned relative to this nav item */}
                {activeDropdown === link.id && link.dropdown && (
                  <div
                    className={`dropdown-container absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-2xl shadow-2xl shadow-black/20 p-4 animate-in slide-in-from-top-5 duration-300 z-50 ${
                      link.dropdown.length === 1
                        ? "w-auto min-w-[320px]"
                        : link.dropdown.length === 2
                        ? "w-[500px]"
                        : "w-[600px]"
                    }`}
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div
                      className={`grid gap-4 ${
                        link.dropdown.length === 1
                          ? "grid-cols-1"
                          : link.dropdown.length === 3
                          ? "grid-cols-3"
                          : "grid-cols-2"
                      }`}
                    >
                      {link.dropdown.map((section, sectionIndex) => (
                        <div
                          key={sectionIndex}
                          className={`flex flex-col h-full min-w-0 ${
                            link.dropdown && link.dropdown.length === 1
                              ? ""
                              : "pr-2"
                          }`}
                        >
                          {/* Section Header - Compact */}
                          <div className="mb-3">
                            <h3 className="text-lg font-bold text-gray-900 leading-tight break-words">
                              {section.title}
                            </h3>
                          </div>

                          {/* Section Items - Compact Cards */}
                          <div className="flex-1 space-y-2 min-w-0">
                            {section.items.map((item, itemIndex) => (
                              <a
                                key={itemIndex}
                                href={item.href}
                                className="group block h-14 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-brand-light hover:border-brand-light transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-brand-primary/20 min-w-0"
                              >
                                <div className="flex items-center space-x-2 h-full min-w-0">
                                  {/* Icon Container - Compact Size */}
                                  <div className="flex-shrink-0 w-8 h-8 bg-brand-light rounded-lg flex items-center justify-center group-hover:bg-brand-light transition-all duration-300">
                                    {item.iconType === "svg" ? (
                                      <Icon
                                        name={item.icon || ""}
                                        className="text-brand-primary"
                                        size="sm"
                                      />
                                    ) : (
                                      <span className="text-xs text-brand-primary">
                                        {item.icon}
                                      </span>
                                    )}
                                  </div>

                                  {/* Content Container - Compact */}
                                  <div className="flex-1 min-w-0 h-full flex items-center overflow-hidden">
                                    <div className="flex items-center justify-between w-full min-w-0">
                                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-brand-primary transition-colors duration-300 truncate min-w-0">
                                        {item.label}
                                      </h4>
                                      {item.badge && (
                                        <span className="ml-2 px-1.5 py-0.5 bg-brand-success/20 text-brand-success text-xs font-medium rounded-full border border-brand-success/30 flex-shrink-0">
                                          {item.badge}
                                        </span>
                                      )}
                                    </div>
                                  </div>

                                  {/* Arrow Icon */}
                                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg
                                      className="w-3.5 h-3.5 text-brand-primary"
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
                                </div>
                              </a>
                            ))}
                          </div>

                          {/* CTA Button - Compact */}
                          <div className="mt-4 pt-3 border-t border-gray-200">
                            {activeDropdown === "solutions" && (
                              <>
                                {sectionIndex === 0 && (
                                  <Button
                                    variant="primary"
                                    size="sm"
                                    showArrow={true}
                                    href="/solutions"
                                    className="w-auto"
                                  >
                                    Explore
                                  </Button>
                                )}
                                {sectionIndex === 1 && (
                                  <Button
                                    variant="primary"
                                    size="sm"
                                    showArrow={true}
                                    href="/industries"
                                    className="w-auto"
                                  >
                                    Explore Industries
                                  </Button>
                                )}
                                {sectionIndex === 2 && (
                                  <Button
                                    variant="primary"
                                    size="sm"
                                    showArrow={true}
                                    href="/register"
                                    className="w-auto"
                                  >
                                    Join Platform
                                  </Button>
                                )}
                              </>
                            )}

                            {activeDropdown === "company" && (
                              <>
                                {sectionIndex === 0 && (
                                  <Button
                                    variant="primary"
                                    size="sm"
                                    showArrow={true}
                                    href="/about"
                                    className="w-auto"
                                  >
                                    Learn More
                                  </Button>
                                )}
                                {sectionIndex === 1 && (
                                  <Button
                                    variant="primary"
                                    size="sm"
                                    showArrow={true}
                                    href="/contact"
                                    className="w-auto"
                                  >
                                    Get In Touch
                                  </Button>
                                )}
                              </>
                            )}

                            {activeDropdown === "industries" && (
                              <Button
                                variant="primary"
                                size="sm"
                                showArrow={true}
                                href="/industries"
                                className="w-auto"
                              >
                                View All Industries
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
                  isScrolled ? "bg-brand-secondary" : "bg-white"
                } ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              />
              <span
                className={`w-full h-0.5 transition-all duration-300 ${
                  isScrolled ? "bg-brand-secondary" : "bg-white"
                } ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-full h-0.5 origin-center transition-all duration-300 ${
                  isScrolled ? "bg-brand-secondary" : "bg-white"
                } ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              />
            </div>
          </button>
        </nav>

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
                          ? "text-brand-primary hover:text-brand-dark"
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
                            isScrolled ? "text-brand-primary" : "text-white/90"
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
                                isScrolled
                                  ? "text-brand-secondary"
                                  : "text-white"
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
                                  ? "text-brand-primary hover:text-brand-secondary hover:bg-white/20"
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
                                          ? "text-brand-primary"
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
                                  <span className="inline-block mt-1 px-2 py-0.5 bg-brand-success/20 text-brand-success text-xs font-medium rounded-full">
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
