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
    name: "Hiten Pal Saklani",
    role: "CEO, Co-Founder & MD",
    department: "Leadership",
    location: "Chandigarh",
    image: "/images/team/hiten.png",
    bio: "Group MD & OG of xtrawrkx Group, leading the organization with strategic vision and innovation.",
    linkedin: "#",
    email: "hiten@xmb.com",
  },
  {
    id: 2,
    name: "Gopi Tharun Velivala",
    role: "CEO, Co-Founder & Director at XMB",
    department: "Leadership",
    location: "Hyderabad",
    image: "/images/team/gopi.png",
    bio: "Leading the XMB team as a dynamic and experienced CEO, driving growth and excellence across all operations.",
    linkedin: "#",
    email: "gopi@xmb.com",
  },
  {
    id: 3,
    name: "Amitabh Vaidya",
    role: "Co-Founder & Director XMC",
    department: "Engineering",
    location: "Pune",
    image: "/images/team/amitabh.png",
    bio: "The cornerstone to our engineering capabilities, ensuring technical excellence and innovation in all projects.",
    linkedin: "#",
    email: "amitabh@xmb.com",
  },
  {
    id: 4,
    name: "Seetal Singh Jasrotia",
    role: "Cofounder and Director at XMB",
    department: "Leadership",
    location: "Jammu",
    image: "/images/team/seetal.png",
    bio: "Co-founder and Director at XMB, contributing to strategic direction and organizational growth.",
    linkedin: "#",
    email: "seetal@xmb.com",
  },
  {
    id: 5,
    name: "Arti Thakur Saklani",
    role: "Director at XMC & XMB",
    department: "Operations",
    location: "Chandigarh",
    image: "/images/team/arti.png",
    bio: "Leading corporate operations, audit, and strategic partnerships across XMC and XMB organizations.",
    linkedin: "#",
    email: "arti@xmb.com",
  },
  {
    id: 6,
    name: "Dinesh Laxman Burangule",
    role: "AVP Dealer Development",
    department: "Business",
    location: "Pune",
    image: "/images/team/dinesh.png",
    bio: "Driving dealer development and expanding our network of partners and distributors.",
    linkedin: "#",
    email: "dinesh@xmb.com",
  },
  {
    id: 7,
    name: "Aniket Dey",
    role: "Manager-BD at XMC",
    department: "Business",
    location: "Chandigarh",
    image: "/images/team/aniket.png",
    bio: "Handling XEN community & membership growth, building strong relationships and expanding our network.",
    linkedin: "#",
    email: "aniket@xmb.com",
  },
  {
    id: 8,
    name: "Anurag Das",
    role: "Partner at XMC",
    department: "Leadership",
    location: "Ahmedabad",
    image: "/images/team/anurag.png",
    bio: "Aide-de-camp to MD & being positioned as future CEO, playing a key role in strategic planning and execution.",
    linkedin: "#",
    email: "anurag@xmb.com",
  },
  {
    id: 9,
    name: "Chandrashekar V",
    role: "Partner Consultant at XMC & XMB",
    department: "Engineering",
    location: "Bengaluru",
    image: "/images/team/chandra.png",
    bio: "Our senior most expert in all matters EV sourcing, providing strategic guidance and technical expertise.",
    linkedin: "#",
    email: "chandrashekar@xmb.com",
  },
];

const departments = [
  "All",
  "Leadership",
  "Engineering",
  "Operations",
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
