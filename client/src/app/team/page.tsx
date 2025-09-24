"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

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
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          {notificationMessage}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&crop=center"
            alt="Team Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-700/50"></div>
        </div>

        {/* Glass Overlay with Content */}
        <div className="absolute inset-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl flex items-center justify-center z-10">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Meet Our Team
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Our diverse team of experts brings together decades of experience
              in manufacturing, technology, and business excellence to deliver
              world-class solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Filter Section */}
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/80 border border-blue-200/50 rounded-full px-6 py-3 inline-block mb-8">
              <p className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
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
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white/80 text-gray-600 hover:bg-white hover:shadow-md"
                  }`}
                >
                  {department}
                </button>
              ))}
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member, index) => (
              <div
                key={member.id}
                className="group bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-1">
                    {member.role}
                  </p>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                    {member.department}
                  </span>
                </div>

                {/* Bio */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Contact Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={() => handleContactMember(member.name)}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Contact
                  </button>
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="backdrop-blur-md bg-white/80 border border-blue-200/50 rounded-3xl p-12 max-w-4xl mx-auto">
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
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
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
