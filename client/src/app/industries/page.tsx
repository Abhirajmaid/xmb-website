"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function IndustriesPage() {

  const industries = [
    {
      id: "ev-mobility",
      title: "EV/E-Mobility",
      description: "Electric vehicles • Charging infrastructure",
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800&h=600&fit=crop&crop=center",
      href: "/industries/ev-mobility",
      content: "Revolutionizing transportation with electric vehicles and sustainable mobility solutions. We provide comprehensive manufacturing services for electric vehicle components, charging infrastructure, and battery management systems that power the future of sustainable transportation.",
      features: ["Electric Vehicle Manufacturing", "Charging Infrastructure", "Battery Management Systems", "Smart Mobility Solutions", "Power Electronics", "Thermal Management"],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
        </svg>
      )
    },
    {
      id: "bess-energy-storage",
      title: "BESS/Energy Storage",
      description: "Battery systems • Grid storage",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop&crop=center",
      href: "/industries/bess-energy-storage",
      content: "Advanced battery energy storage systems for grid stability and renewable energy integration. Our manufacturing capabilities include large-scale battery systems, energy management solutions, and grid-scale storage technologies that enable sustainable energy infrastructure.",
      features: ["Grid-Scale Storage", "Residential Energy Storage", "Industrial BESS", "Energy Management Systems", "Battery Pack Assembly", "Power Conversion Systems"],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
        </svg>
      )
    },
    {
      id: "drones",
      title: "Drones",
      description: "UAV manufacturing • Aerial systems",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop&crop=center",
      href: "/industries/drones",
      content: "Cutting-edge drone technology for commercial, industrial, and defense applications. We specialize in precision manufacturing of UAV components, flight control systems, and advanced aerial platforms that meet the highest industry standards for reliability and performance.",
      features: ["Commercial Drones", "Industrial UAVs", "Defense Systems", "Aerial Surveillance", "Flight Control Systems", "Payload Integration"],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
        </svg>
      )
    },
    {
      id: "e-agritech",
      title: "E-Agritech",
      description: "Smart farming • Agricultural tech",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop&crop=center",
      href: "/industries/e-agritech",
      content: "Smart agricultural technologies for sustainable farming and food production. Our manufacturing solutions include precision agriculture equipment, IoT sensor systems, and automated farming technologies that optimize crop yields and reduce environmental impact.",
      features: ["Precision Agriculture", "IoT Sensors", "Automated Farming", "Crop Monitoring Systems", "Smart Irrigation", "Agricultural Robotics"],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      )
    },
    {
      id: "aerospace",
      title: "Aerospace",
      description: "Aviation • Space technology",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop&crop=center",
      href: "/industries/aerospace",
      content: "Advanced aerospace manufacturing for aviation and space exploration technologies. We provide precision manufacturing services for aircraft components, space systems, and satellite technology that meet the stringent requirements of aerospace industry standards.",
      features: ["Aircraft Components", "Space Systems", "Satellite Technology", "Avionics", "Propulsion Systems", "Structural Components"],
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      )
    }
  ];


  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden h-[50vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop&crop=center"
            alt="Industries Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/50 to-blue-700/40"></div>
        </div>

        {/* Glass Overlay with Content */}
        <div className="absolute inset-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl flex items-center justify-center z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Industries
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Specialized manufacturing solutions for cutting-edge industries driving the future of technology
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/80 border border-blue-200/50 rounded-full px-6 py-3 inline-block mb-8">
              <p className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
                Industry Solutions
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Future-Ready Industries
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We provide comprehensive manufacturing solutions for industries at the forefront of technological innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-80">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      {industry.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">{industry.description.split(' • ')[0]}</div>
                      <div className="text-sm text-gray-500">{industry.description.split(' • ')[1]}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {industry.content}
                  </p>
                  <div className="space-y-2">
                    {industry.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


