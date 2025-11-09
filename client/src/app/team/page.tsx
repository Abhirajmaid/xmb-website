"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import TeamCard from "@/components/TeamCard";

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member, index) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
                linkedin={member.linkedin}
                email={member.email}
                department={member.department}
                bio={member.bio}
                animationDelay={index * 100}
              />
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
