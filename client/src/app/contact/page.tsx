"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";

export default function ContactPage() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  // const [activeTab, setActiveTab] = useState("INDIA"); // Removed since only India is shown
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    project: "",
    file: null as File | null,
    agreeToReceive: false,
    agreeToStore: false,
  });

  // Location data for India only
  const locationData = {
    company: "Xtrawrkx Manufacturing Businesses Pvt Ltd.",
    address:
      "841, Vaishnavi Sovereign, Green Glen Layout, Bellandur, Bengaluru 560103",
    phone: "+91 77950 81665",
    email: "contact@xtrawrkx.com",
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, file }));
  };

  const handleSubmit = (e?: React.FormEvent | React.MouseEvent) => {
    if (e) e.preventDefault();
    setNotificationMessage(
      "Quote request submitted successfully! We'll get back to you soon."
    );
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 5000);
    console.log("Form submitted:", formData);
  };

  return (
    <main className="min-h-screen">
      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 bg-brand-success text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          {notificationMessage}
        </div>
      )}

      <Header />

      {/* Hero Section */}
      <PageHero
        title="Contact Us"
        backgroundImage="/images/hero5.jpg"
        backgroundAlt="Contact Background"
        variant="full"
      />

      {/* Main Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            {/* Left Side - Contact Form */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Xtrawrkx Manufacturing is a global manufacturer that can help
                  you maximize efficiency, quality and value in your supply
                  chain.
                </h2>
                <p className="text-brand-primary text-lg">
                  With worldwide operations and manufacturing capabilities for
                  precision parts, capital goods, and consumer goods, Xtrawrkx
                  Manufacturing offers best-in-class lead times — whatever the
                  category, product, scale, or geography.
                </p>
              </div>

              <div className="mb-8">
                <p className="text-gray-700 mb-4">
                  Let's get the conversation started today — fill out the form
                  on this page or email us directly to request a quote.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name and Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Email and Company Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company Name*
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Tell Us About Your Project */}
                <div>
                  <label
                    htmlFor="project"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tell Us About Your Project*
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    rows={4}
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 resize-none"
                    required
                  ></textarea>
                </div>

                {/* File Upload */}
                <div>
                  <label
                    htmlFor="file"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    File Upload
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-brand-light file:text-brand-dark hover:file:bg-brand-light/80"
                      accept=".pdf,.dwg,.step,.stp,.iges,.jpg,.png"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Accepts .pdf, .dwg, .step, .stp, .iges. Other file types can
                    be emailed to contact: nab@xtrawrkx.com.
                  </p>
                </div>

                {/* Consent Checkboxes */}
                <div className="space-y-3">
                  <p className="text-sm text-gray-700">
                    We need your consent to communicate with you and to store
                    and process your personal data. If you consent, please check
                    the boxes below. You can unsubscribe or ask us to remove
                    your data at any time.
                  </p>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="agreeToReceive"
                      name="agreeToReceive"
                      checked={formData.agreeToReceive}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
                    />
                    <label
                      htmlFor="agreeToReceive"
                      className="text-sm text-gray-700"
                    >
                      I agree to receive communications from Xtrawrkx
                      Manufacturing.*
                    </label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="agreeToStore"
                      name="agreeToStore"
                      checked={formData.agreeToStore}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
                    />
                    <label
                      htmlFor="agreeToStore"
                      className="text-sm text-gray-700"
                    >
                      I agree to allow Xtrawrkx Manufacturing to store and
                      process my personal data.*
                    </label>
                  </div>
                </div>

                {/* reCAPTCHA placeholder */}
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <input type="checkbox" className="w-6 h-6" />
                    <span className="text-sm text-gray-700">
                      I'm not a robot
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">
                    <div>reCAPTCHA</div>
                    <div>Privacy - Terms</div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={handleSubmit}
                  className="font-bold text-sm tracking-wide"
                >
                  GET QUOTE NOW
                </Button>
              </form>
            </div>

            {/* Right Side - Our Global Print */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Our Global Print
              </h3>

              {/* Location Content - India Only */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-4">
                    {locationData.company}
                  </h4>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 text-brand-primary mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {locationData.address}
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 text-brand-primary">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <p className="text-brand-primary text-sm font-medium">
                    {locationData.phone}
                  </p>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 text-brand-primary">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-brand-primary text-sm font-medium">
                    {locationData.email}
                  </p>
                </div>

                {/* View on Google Map */}
                <div className="pt-4">
                  <button className="inline-flex items-center text-brand-primary text-sm font-medium hover:text-brand-dark transition-colors">
                    View on Google Map
                    <svg
                      className="w-4 h-4 ml-1"
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
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
