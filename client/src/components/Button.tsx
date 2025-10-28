"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "glass" | "gradient";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  showArrow?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  showArrow = false,
  href,
  onClick,
  className = "",
  disabled = false,
  fullWidth = false,
  loading = false,
}: ButtonProps) {
  // Size configurations with responsive design
  const sizeClasses = {
    sm: "px-3 py-2 text-sm sm:px-4",
    md: "px-4 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base",
    lg: "px-5 py-3 text-base sm:px-8 sm:py-4 sm:text-lg",
    xl: "px-6 py-3.5 text-base sm:px-10 sm:py-4.5 sm:text-lg md:px-12 md:py-5 md:text-xl",
  };

  // Variant configurations with advanced animations
  const variantClasses = {
    primary: `
      relative overflow-hidden group
      bg-gradient-to-r from-brand-primary to-brand-secondary 
      hover:from-brand-secondary hover:to-brand-primary
      text-white font-semibold
      before:absolute before:inset-0 
      before:bg-gradient-to-r before:from-brand-primary/80 before:to-brand-secondary/80
      before:translate-x-[-100%] before:transition-transform before:duration-500
      hover:before:translate-x-0
      border border-brand-primary/70 hover:border-brand-primary
      shadow-lg hover:shadow-xl hover:shadow-brand-primary/25
      transform hover:scale-105 hover:-translate-y-1
    `,
    secondary: `
      relative overflow-hidden group
      bg-gradient-to-r from-gray-600 to-gray-700 
      hover:from-gray-700 hover:to-gray-800
      text-white font-semibold
      before:absolute before:inset-0 
      before:bg-gradient-to-r before:from-gray-400 before:to-gray-600
      before:translate-x-[-100%] before:transition-transform before:duration-500
      hover:before:translate-x-0
      border border-gray-500 hover:border-gray-400
      shadow-lg hover:shadow-xl hover:shadow-gray-500/25
      transform hover:scale-105 hover:-translate-y-1
    `,
    outline: `
      relative overflow-hidden group
      bg-transparent border-2 border-brand-primary
      text-brand-primary hover:text-white font-semibold
      before:absolute before:inset-0 
      before:bg-gradient-to-r before:from-brand-primary before:to-brand-secondary
      before:scale-x-0 before:origin-left before:transition-transform before:duration-500
      hover:before:scale-x-100
      hover:border-brand-primary/80
      shadow-md hover:shadow-lg hover:shadow-brand-primary/20
      transform hover:scale-105
    `,
    glass: `
      relative overflow-hidden group
      backdrop-blur-xl bg-white/20 border border-white/30
      text-white font-semibold
      before:absolute before:inset-0 
      before:bg-gradient-to-r before:from-white/30 before:to-white/10
      before:translate-y-[100%] before:transition-transform before:duration-500
      hover:before:translate-y-0
      after:absolute after:top-0 after:left-[-100%] after:w-full after:h-full
      after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent
      after:transition-all after:duration-700 after:ease-out
      hover:after:left-[100%]
      hover:bg-white/30 hover:border-white/50
      shadow-xl hover:shadow-2xl hover:shadow-black/20
      transform hover:scale-105 hover:-translate-y-1
    `,
    gradient: `
      relative overflow-hidden group
      bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500
      hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600
      text-white font-semibold
      before:absolute before:inset-0 
      before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-blue-500
      before:opacity-0 before:transition-opacity before:duration-500
      hover:before:opacity-100
      after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent
      after:translate-x-[-200%] after:transition-transform after:duration-1000
      hover:after:translate-x-[200%]
      border border-purple-400/50 hover:border-pink-400/70
      shadow-lg hover:shadow-xl hover:shadow-purple-500/25
      transform hover:scale-105 hover:-translate-y-1
    `,
  };

  // Base classes
  const baseClasses = `
    relative inline-flex items-center justify-center gap-3
    rounded-full font-medium transition-all duration-300 ease-out
    focus:outline-none focus:ring-4 focus:ring-brand-primary/20
    cursor-pointer select-none
    ${fullWidth ? "w-full" : ""}
    ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}
  `;

  // Arrow component
  const ArrowIcon = () => (
    <svg
      className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${
        iconPosition === "left" ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );

  // Loading spinner
  const LoadingSpinner = () => (
    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  // Combined classes
  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

  // Content with proper z-index for animations
  const content = (
    <>
      <span className="relative z-20 flex items-center gap-3">
        {loading && <LoadingSpinner />}
        {!loading && icon && iconPosition === "left" && icon}
        {!loading && showArrow && iconPosition === "left" && <ArrowIcon />}
        <span className="font-bold tracking-wide">{children}</span>
        {!loading && icon && iconPosition === "right" && icon}
        {!loading && showArrow && iconPosition === "right" && <ArrowIcon />}
      </span>
    </>
  );

  // Render as link or button
  if (href && !disabled) {
    return (
      <a href={href} className={buttonClasses}>
        {content}
      </a>
    );
  }

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {content}
    </button>
  );
}
