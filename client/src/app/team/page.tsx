"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";

// Team data
const teamMembers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Chief Executive Officer",
    department: "Leadership",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "With over 20 years of experience in manufacturing and business strategy, Rajesh leads XMB's vision for innovative manufacturing solutions.",
    expertise: [
      "Strategic Planning",
      "Manufacturing Excellence",
      "Business Development",
    ],
    linkedin: "#",
    email: "rajesh@xmb.com",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    department: "Technology",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    bio: "Priya drives technological innovation at XMB, specializing in Industry 4.0 solutions and smart manufacturing systems.",
    expertise: ["Industry 4.0", "IoT Solutions", "Process Automation"],
    linkedin: "#",
    email: "priya@xmb.com",
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Head of Operations",
    department: "Operations",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Amit oversees all manufacturing operations, ensuring quality, efficiency, and timely delivery across all projects.",
    expertise: ["Operations Management", "Quality Control", "Supply Chain"],
    linkedin: "#",
    email: "amit@xmb.com",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Head of Quality Assurance",
    department: "Quality",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Sneha ensures the highest quality standards across all manufacturing processes with ISO certifications and continuous improvement.",
    expertise: ["Quality Management", "ISO Standards", "Process Improvement"],
    linkedin: "#",
    email: "sneha@xmb.com",
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Head of Engineering",
    department: "Engineering",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "Vikram leads our engineering team in developing innovative solutions and optimizing manufacturing processes for maximum efficiency.",
    expertise: ["Mechanical Engineering", "CAD/CAM", "Product Development"],
    linkedin: "#",
    email: "vikram@xmb.com",
  },
  {
    id: 6,
    name: "Kavya Nair",
    role: "Head of Business Development",
    department: "Business",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    bio: "Kavya drives business growth by building strategic partnerships and expanding XMB's market presence across industries.",
    expertise: [
      "Business Strategy",
      "Partnership Development",
      "Market Analysis",
    ],
    linkedin: "#",
    email: "kavya@xmb.com",
  },
];

const departments = [
  "All",
  "Leadership",
  "Technology",
  "Operations",
  "Quality",
  "Engineering",
  "Business",
];

export default function TeamPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const filteredMembers =
    activeFilter === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.department === activeFilter);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    setNotificationMessage(`Filtered to show ${filter} team members`);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleContactMember = (name: string) => {
    setNotificationMessage(`Opening contact for ${name}`);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 bg-brand-success text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          {notificationMessage}
        </div>
      )}

      {/* Hero Section */}
      <PageHero
        title="Meet Our Team"
        subtitle="Our diverse team of experts brings together decades of experience in manufacturing, technology, and business excellence to deliver world-class solutions."
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&crop=center"
        backgroundAlt="Team Background"
        variant="full"
      />

      {/* Team Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-light via-white to-brand-light/50"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Filter Section */}
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/80 border border-brand-light/50 rounded-full px-6 py-3 inline-block mb-8">
              <p className="text-brand-primary font-semibold text-lg tracking-wide uppercase">
                OUR LEADERSHIP
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-4 justify-center">
              {departments.map((department) => (
                <button
                  key={department}
                  onClick={() => handleFilterClick(department)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === department
                      ? "bg-brand-primary text-white shadow-lg"
                      : "bg-white/80 text-gray-600 hover:bg-white hover:shadow-md"
                  }`}
                >
                  {department}
                </button>
              ))}
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member, index) => (
              <div
                key={member.id}
                className="group relative bg-white rounded-3xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-brand-light"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:ring-blue-100 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-brand-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{member.role}</p>
                  </div>

                  {/* Social Icons */}
                  <div className="flex justify-center gap-3 pt-2">
                    <a
                      href={member.linkedin}
                      className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-brand-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <svg
                        className="w-5 h-5 text-gray-600 hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-brand-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={`${member.name} Email`}
                    >
                      <svg
                        className="w-5 h-5 text-gray-600 hover:text-white"
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
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="backdrop-blur-md bg-white/80 border border-brand-light/50 rounded-3xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Work With Our Team?
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Our experienced professionals are ready to help you achieve your
                manufacturing goals. Get in touch to discuss your project
                requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  href="/contact"
                  showArrow={true}
                  className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary"
                >
                  Contact Our Team
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href="/services"
                  showArrow={true}
                  className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200"
                >
                  View Our Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
