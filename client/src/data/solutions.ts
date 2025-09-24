export interface SolutionFeature {
    title: string;
    description: string;
    icon: string;
}

export interface SolutionBenefit {
    title: string;
    value: string;
    description: string;
}

export interface SolutionComponent {
    title: string;
    description: string;
    image: string;
    services: string[];
    technologies: string[];
}

export interface SolutionProcess {
    step: string;
    title: string;
    description: string;
    icon: string;
}

export interface Solution {
    id: string;
    title: string;
    description: string;
    image: string;
    heroImage: string;
    category: 'industry' | 'business' | 'partnership';
    overview: {
        title: string;
        description: string;
        image: string;
        imageTitle: string;
        imageDescription: string;
    };
    benefits: SolutionBenefit[];
    features: SolutionFeature[];
    components: SolutionComponent[];
    processSteps: SolutionProcess[];
    ctaSection: {
        title: string;
        description: string;
        primaryButton: string;
        secondaryButton: string;
    };
}

export const solutionsData: Solution[] = [
    // Industry Solutions
    {
        id: "automotive",
        title: "Automotive Industry Solutions",
        description: "Comprehensive automotive manufacturing solutions combining precision engineering, supply chain optimization, and quality excellence to meet the demanding requirements of the automotive industry.",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop&crop=center",
        category: "industry",
        overview: {
            title: "Driving Automotive Excellence",
            description: "Our automotive solutions integrate advanced manufacturing, strategic sourcing, innovative design, and operational excellence to deliver high-quality components and systems that meet the stringent requirements of the automotive industry.",
            image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop",
            imageTitle: "Advanced Automotive Manufacturing",
            imageDescription: "State-of-the-art manufacturing facilities equipped with precision machinery and quality control systems specifically designed for automotive applications."
        },
        benefits: [
            {
                title: "Quality Standards",
                value: "TS 16949",
                description: "Automotive quality management system certified"
            },
            {
                title: "Cost Reduction",
                value: "20-35%",
                description: "Average cost savings through optimized processes"
            },
            {
                title: "Lead Time",
                value: "50% Faster",
                description: "Reduced time-to-market for new components"
            },
            {
                title: "Defect Rate",
                value: "<10 PPM",
                description: "Ultra-low defect rates for critical components"
            }
        ],
        features: [
            {
                title: "Precision Manufacturing",
                description: "High-precision machining and fabrication for critical automotive components with tight tolerances.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            },
            {
                title: "Supply Chain Optimization",
                description: "Strategic sourcing and procurement solutions tailored for automotive supply chains.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            },
            {
                title: "Design & Prototyping",
                description: "Rapid prototyping and design validation for automotive components and systems.",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            },
            {
                title: "Quality Assurance",
                description: "Comprehensive quality management systems meeting automotive industry standards.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            }
        ],
        components: [
            {
                title: "Engine Components",
                description: "Precision-manufactured engine parts including pistons, connecting rods, and valve components.",
                image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
                services: ["Precision Machining", "Quality Control", "Assembly"],
                technologies: ["CNC Machining", "Coordinate Measuring", "Statistical Process Control"]
            },
            {
                title: "Transmission Systems",
                description: "Complex transmission components and assemblies with high precision requirements.",
                image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
                services: ["Manufacturing", "Testing", "Validation"],
                technologies: ["Gear Manufacturing", "Heat Treatment", "Noise Testing"]
            },
            {
                title: "Chassis & Body Parts",
                description: "Structural components and body panels with advanced materials and manufacturing techniques.",
                image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
                services: ["Sheet Metal Fabrication", "Welding", "Surface Treatment"],
                technologies: ["Laser Cutting", "Robotic Welding", "Powder Coating"]
            }
        ],
        processSteps: [
            {
                step: "01",
                title: "Requirements Analysis",
                description: "Comprehensive analysis of automotive specifications, quality standards, and regulatory requirements.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            },
            {
                step: "02",
                title: "Design & Validation",
                description: "Advanced design development with simulation, prototyping, and validation testing.",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            },
            {
                step: "03",
                title: "Supply Chain Setup",
                description: "Strategic sourcing and supplier qualification for automotive-grade materials and components.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            },
            {
                step: "04",
                title: "Production & Quality",
                description: "Full-scale manufacturing with continuous quality monitoring and process optimization.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            },
            {
                step: "05",
                title: "Delivery & Support",
                description: "Logistics coordination and ongoing support for automotive manufacturing programs.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            }
        ],
        ctaSection: {
            title: "Ready to Accelerate Your Automotive Manufacturing?",
            description: "Partner with us to deliver high-quality automotive components and systems that meet the industry's most demanding requirements.",
            primaryButton: "GET AUTOMOTIVE QUOTE",
            secondaryButton: "EXPLORE CAPABILITIES"
        }
    },
    {
        id: "aerospace",
        title: "Aerospace & Defense Solutions",
        description: "Mission-critical aerospace and defense manufacturing solutions with AS9100 certification, precision engineering, and rigorous quality standards for the most demanding applications.",
        image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1920&h=1080&fit=crop&crop=center",
        category: "industry",
        overview: {
            title: "Aerospace Excellence & Defense Precision",
            description: "Our aerospace and defense solutions deliver mission-critical components and systems with uncompromising quality, precision, and reliability. We combine advanced manufacturing technologies with rigorous quality standards to meet the most demanding aerospace applications.",
            image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop",
            imageTitle: "Precision Aerospace Manufacturing",
            imageDescription: "Advanced manufacturing facility with specialized equipment for aerospace components, featuring precision machining centers and comprehensive quality control systems."
        },
        benefits: [
            {
                title: "Certification",
                value: "AS9100D",
                description: "Aerospace quality management system certified"
            },
            {
                title: "Precision",
                value: "±0.0001\"",
                description: "Ultra-high precision for critical components"
            },
            {
                title: "Traceability",
                value: "100%",
                description: "Complete material and process traceability"
            },
            {
                title: "On-Time Delivery",
                value: "99.8%",
                description: "Exceptional delivery performance record"
            }
        ],
        features: [
            {
                title: "Mission-Critical Manufacturing",
                description: "Ultra-precision manufacturing for aerospace and defense applications with zero-defect requirements.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            },
            {
                title: "Advanced Materials",
                description: "Expertise in exotic materials including titanium, Inconel, and advanced composites.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            },
            {
                title: "Regulatory Compliance",
                description: "Full compliance with aerospace regulations including ITAR, EAR, and military specifications.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            },
            {
                title: "Supply Chain Security",
                description: "Secure supply chain management with verified suppliers and controlled access protocols.",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            }
        ],
        components: [
            {
                title: "Engine Components",
                description: "Critical engine parts including turbine blades, combustor components, and fuel system parts.",
                image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=600&fit=crop",
                services: ["5-Axis Machining", "Heat Treatment", "Non-Destructive Testing"],
                technologies: ["Advanced CNC", "Electron Beam Welding", "X-Ray Inspection"]
            },
            {
                title: "Structural Components",
                description: "Airframe structures, landing gear components, and critical structural assemblies.",
                image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
                services: ["Precision Machining", "Assembly", "Surface Treatment"],
                technologies: ["Large Format Machining", "Automated Assembly", "Anodizing"]
            },
            {
                title: "Avionics Housings",
                description: "Precision housings and enclosures for sensitive electronic systems and avionics.",
                image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop",
                services: ["CNC Machining", "EMI Shielding", "Environmental Testing"],
                technologies: ["Multi-Axis Machining", "Conductive Coatings", "Climate Testing"]
            }
        ],
        processSteps: [
            {
                step: "01",
                title: "Requirements & Compliance",
                description: "Detailed analysis of aerospace specifications, regulatory requirements, and security protocols.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            },
            {
                step: "02",
                title: "Design & Simulation",
                description: "Advanced engineering design with FEA simulation and validation for aerospace applications.",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            },
            {
                step: "03",
                title: "Material Qualification",
                description: "Rigorous material testing and supplier qualification for aerospace-grade materials.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            },
            {
                step: "04",
                title: "Precision Manufacturing",
                description: "Ultra-precision manufacturing with continuous monitoring and in-process quality control.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            },
            {
                step: "05",
                title: "Certification & Delivery",
                description: "Final inspection, certification documentation, and secure delivery with full traceability.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            }
        ],
        ctaSection: {
            title: "Ready for Mission-Critical Manufacturing?",
            description: "Partner with us for aerospace and defense solutions that meet the highest standards of precision, quality, and reliability.",
            primaryButton: "GET AEROSPACE QUOTE",
            secondaryButton: "VIEW CERTIFICATIONS"
        }
    },
    {
        id: "electronics",
        title: "Electronics & Technology Solutions",
        description: "Advanced electronics manufacturing solutions combining precision assembly, innovative design, and rapid prototyping for consumer electronics, industrial systems, and emerging technologies.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop&crop=center",
        category: "industry",
        overview: {
            title: "Electronics Innovation & Manufacturing Excellence",
            description: "Our electronics solutions span the complete product lifecycle from concept design and rapid prototyping to high-volume manufacturing and assembly. We specialize in cutting-edge technologies and miniaturized components for the electronics industry.",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
            imageTitle: "Advanced Electronics Assembly",
            imageDescription: "State-of-the-art electronics manufacturing facility with automated SMT lines, precision assembly equipment, and comprehensive testing capabilities."
        },
        benefits: [
            {
                title: "Assembly Speed",
                value: "50K+ CPH",
                description: "High-speed surface mount technology placement"
            },
            {
                title: "Miniaturization",
                value: "0201 Components",
                description: "Ultra-miniature component placement capability"
            },
            {
                title: "Quality Level",
                value: "Six Sigma",
                description: "Statistical quality control and process optimization"
            },
            {
                title: "Time to Market",
                value: "40% Faster",
                description: "Accelerated product development cycles"
            }
        ],
        features: [
            {
                title: "Advanced PCB Assembly",
                description: "High-density PCB assembly with fine-pitch components and advanced packaging technologies.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            },
            {
                title: "Rapid Prototyping",
                description: "Fast turnaround prototyping for electronics design validation and testing.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            },
            {
                title: "Design for Manufacturing",
                description: "Optimization of electronic designs for efficient manufacturing and assembly processes.",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            },
            {
                title: "Testing & Validation",
                description: "Comprehensive testing including functional, environmental, and reliability testing.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            }
        ],
        components: [
            {
                title: "Consumer Electronics",
                description: "Smartphones, tablets, wearables, and smart home devices with advanced miniaturization.",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
                services: ["SMT Assembly", "Final Assembly", "Testing"],
                technologies: ["High-Speed Placement", "Reflow Soldering", "Automated Testing"]
            },
            {
                title: "Industrial Electronics",
                description: "Control systems, sensors, and industrial automation equipment for harsh environments.",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
                services: ["Ruggedized Assembly", "Environmental Testing", "Certification"],
                technologies: ["Conformal Coating", "Thermal Management", "EMC Testing"]
            },
            {
                title: "IoT & Connected Devices",
                description: "Internet of Things devices with wireless connectivity and sensor integration.",
                image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop",
                services: ["Wireless Integration", "Sensor Assembly", "Cloud Testing"],
                technologies: ["RF Assembly", "Antenna Integration", "Wireless Testing"]
            }
        ],
        processSteps: [
            {
                step: "01",
                title: "Design Analysis",
                description: "Comprehensive analysis of electronic design requirements and manufacturing feasibility.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            },
            {
                step: "02",
                title: "Prototype Development",
                description: "Rapid prototyping and design validation with functional testing and optimization.",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            },
            {
                step: "03",
                title: "Process Setup",
                description: "Manufacturing process development including SMT programming and test fixture design.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            },
            {
                step: "04",
                title: "Production & Assembly",
                description: "High-volume manufacturing with automated assembly and continuous quality monitoring.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            },
            {
                step: "05",
                title: "Testing & Delivery",
                description: "Comprehensive testing, packaging, and logistics for electronics products.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            }
        ],
        ctaSection: {
            title: "Ready to Innovate in Electronics?",
            description: "Transform your electronics concepts into market-ready products with our comprehensive design, prototyping, and manufacturing solutions.",
            primaryButton: "START ELECTRONICS PROJECT",
            secondaryButton: "EXPLORE TECHNOLOGIES"
        }
    },
    {
        id: "medical",
        title: "Medical & Healthcare Solutions",
        description: "FDA-compliant medical device manufacturing solutions with ISO 13485 certification, precision engineering, and rigorous quality standards for life-critical healthcare applications.",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop&crop=center",
        category: "industry",
        overview: {
            title: "Medical Excellence & Healthcare Innovation",
            description: "Our medical and healthcare solutions deliver life-critical devices and components with uncompromising quality and regulatory compliance. We combine advanced manufacturing with strict quality systems to serve the medical device industry.",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
            imageTitle: "Medical Device Manufacturing",
            imageDescription: "Cleanroom manufacturing facility with specialized equipment for medical devices, featuring precision machining and comprehensive quality control systems."
        },
        benefits: [
            {
                title: "Certification",
                value: "ISO 13485",
                description: "Medical device quality management system"
            },
            {
                title: "Compliance",
                value: "FDA 21 CFR",
                description: "Full FDA regulatory compliance"
            },
            {
                title: "Cleanroom",
                value: "Class 10,000",
                description: "Controlled manufacturing environment"
            },
            {
                title: "Traceability",
                value: "100%",
                description: "Complete device history record"
            }
        ],
        features: [
            {
                title: "Precision Medical Manufacturing",
                description: "Ultra-precision manufacturing for medical devices with biocompatible materials and processes.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            },
            {
                title: "Regulatory Compliance",
                description: "Full compliance with FDA, ISO 13485, and other medical device regulations.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            },
            {
                title: "Biocompatible Materials",
                description: "Expertise in medical-grade materials including titanium, PEEK, and biocompatible polymers.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            },
            {
                title: "Validation & Testing",
                description: "Comprehensive validation including biocompatibility, sterilization, and performance testing.",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            }
        ],
        components: [
            {
                title: "Surgical Instruments",
                description: "Precision surgical instruments and tools with superior ergonomics and durability.",
                image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
                services: ["Precision Machining", "Surface Treatment", "Sterilization"],
                technologies: ["Swiss Machining", "Passivation", "Gamma Sterilization"]
            },
            {
                title: "Implantable Devices",
                description: "Orthopedic implants, cardiovascular devices, and other implantable medical components.",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
                services: ["Biocompatible Manufacturing", "Surface Modification", "Validation"],
                technologies: ["Titanium Machining", "Surface Texturing", "Biocompatibility Testing"]
            },
            {
                title: "Diagnostic Equipment",
                description: "Components for diagnostic imaging, laboratory equipment, and monitoring devices.",
                image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop",
                services: ["Precision Assembly", "Electronics Integration", "Calibration"],
                technologies: ["Clean Assembly", "EMC Compliance", "Metrology"]
            }
        ],
        processSteps: [
            {
                step: "01",
                title: "Regulatory Planning",
                description: "Comprehensive regulatory strategy and compliance planning for medical device requirements.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            },
            {
                step: "02",
                title: "Design Controls",
                description: "Implementation of design controls and risk management throughout the development process.",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            },
            {
                step: "03",
                title: "Material Qualification",
                description: "Biocompatibility testing and material qualification for medical device applications.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            },
            {
                step: "04",
                title: "Controlled Manufacturing",
                description: "Manufacturing in controlled environments with validated processes and continuous monitoring.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            },
            {
                step: "05",
                title: "Validation & Release",
                description: "Final validation, documentation, and controlled release with full traceability records.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            }
        ],
        ctaSection: {
            title: "Ready for Medical Device Excellence?",
            description: "Partner with us for FDA-compliant medical device manufacturing that meets the highest standards of quality and regulatory compliance.",
            primaryButton: "GET MEDICAL QUOTE",
            secondaryButton: "VIEW CERTIFICATIONS"
        }
    },
    // Business Solutions
    {
        id: "end-to-end",
        title: "End-to-End Solutions",
        description: "Complete value chain management from initial concept through final delivery, integrating all our core services for seamless project execution and optimal results.",
        image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1920&h=1080&fit=crop&crop=center",
        category: "business",
        overview: {
            title: "Complete Value Chain Management",
            description: "Our end-to-end solutions provide comprehensive project management from concept to delivery, integrating sourcing, design, manufacturing, and operational excellence into a seamless workflow that maximizes efficiency and minimizes risk.",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
            imageTitle: "Integrated Project Management",
            imageDescription: "Comprehensive project management approach that coordinates all aspects of the value chain for optimal results and seamless execution."
        },
        benefits: [
            {
                title: "Project Efficiency",
                value: "60% Faster",
                description: "Accelerated project completion through integration"
            },
            {
                title: "Cost Optimization",
                value: "25-40%",
                description: "Total cost reduction through value chain optimization"
            },
            {
                title: "Risk Reduction",
                value: "80%",
                description: "Reduced project risks through single-source management"
            },
            {
                title: "Quality Consistency",
                value: "99.5%",
                description: "Consistent quality across all project phases"
            }
        ],
        features: [
            {
                title: "Integrated Project Management",
                description: "Single point of contact managing all aspects of your project from concept to delivery.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            },
            {
                title: "Value Chain Optimization",
                description: "Optimization of the entire value chain for maximum efficiency and cost-effectiveness.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            },
            {
                title: "Risk Management",
                description: "Comprehensive risk assessment and mitigation strategies across all project phases.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            },
            {
                title: "Quality Assurance",
                description: "Consistent quality standards maintained throughout the entire project lifecycle.",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            }
        ],
        components: [
            {
                title: "Strategic Planning",
                description: "Comprehensive project planning and strategy development for optimal execution.",
                image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop",
                services: ["Project Planning", "Risk Assessment", "Resource Allocation"],
                technologies: ["Project Management Software", "Risk Analysis Tools", "Resource Planning"]
            },
            {
                title: "Design & Development",
                description: "Integrated design and development services from concept through production-ready designs.",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
                services: ["Concept Design", "Prototyping", "Design Validation"],
                technologies: ["CAD Systems", "Simulation Software", "Rapid Prototyping"]
            },
            {
                title: "Supply Chain & Manufacturing",
                description: "Complete supply chain management and manufacturing execution with quality control.",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
                services: ["Sourcing", "Manufacturing", "Quality Control"],
                technologies: ["ERP Systems", "Manufacturing Execution", "Quality Management"]
            }
        ],
        processSteps: [
            {
                step: "01",
                title: "Project Initiation",
                description: "Comprehensive project scoping, requirements analysis, and strategic planning.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            },
            {
                step: "02",
                title: "Design & Development",
                description: "Integrated design development with continuous stakeholder feedback and validation.",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            },
            {
                step: "03",
                title: "Supply Chain Setup",
                description: "Strategic sourcing and supply chain optimization for project requirements.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            },
            {
                step: "04",
                title: "Manufacturing & Assembly",
                description: "Coordinated manufacturing and assembly with integrated quality management.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            },
            {
                step: "05",
                title: "Delivery & Support",
                description: "Final delivery coordination with ongoing support and continuous improvement.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            }
        ],
        ctaSection: {
            title: "Ready for Complete Project Management?",
            description: "Experience the power of integrated end-to-end solutions that streamline your entire project from concept to delivery.",
            primaryButton: "START END-TO-END PROJECT",
            secondaryButton: "LEARN MORE"
        }
    },
    {
        id: "supply-chain-optimization",
        title: "Supply Chain Optimization",
        description: "Comprehensive supply chain optimization solutions combining strategic sourcing, procurement excellence, and logistics coordination to maximize efficiency and minimize costs.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop&crop=center",
        category: "business",
        overview: {
            title: "Strategic Supply Chain Excellence",
            description: "Our supply chain optimization solutions transform your procurement and logistics operations through strategic sourcing, supplier relationship management, and advanced analytics to deliver significant cost savings and operational improvements.",
            image: "https://images.unsplash.com/photo-1565043589221-1d6d4b8b8b8b?w=600&h=400&fit=crop",
            imageTitle: "Global Supply Network",
            imageDescription: "Advanced supply chain management platform providing real-time visibility and control across global supplier networks and logistics operations."
        },
        benefits: [
            {
                title: "Cost Savings",
                value: "20-35%",
                description: "Average procurement cost reduction achieved"
            },
            {
                title: "Lead Time Reduction",
                value: "45%",
                description: "Improved delivery times through optimization"
            },
            {
                title: "Supplier Performance",
                value: "95%+",
                description: "On-time delivery rate from optimized suppliers"
            },
            {
                title: "Inventory Reduction",
                value: "30%",
                description: "Optimized inventory levels and carrying costs"
            }
        ],
        features: [
            {
                title: "Strategic Sourcing",
                description: "Advanced sourcing strategies that optimize cost, quality, and supply security.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            },
            {
                title: "Supplier Management",
                description: "Comprehensive supplier lifecycle management and performance optimization.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            },
            {
                title: "Logistics Optimization",
                description: "Advanced logistics planning and coordination for efficient material flow.",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            },
            {
                title: "Supply Chain Analytics",
                description: "Data-driven insights and predictive analytics for supply chain optimization.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            }
        ],
        components: [
            {
                title: "Procurement Excellence",
                description: "Strategic procurement processes that deliver optimal value and supplier relationships.",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
                services: ["Strategic Sourcing", "Contract Management", "Supplier Development"],
                technologies: ["E-Procurement Platforms", "Spend Analytics", "Contract Management Systems"]
            },
            {
                title: "Global Sourcing",
                description: "International sourcing capabilities with local expertise and global reach.",
                image: "https://images.unsplash.com/photo-1565043589221-1d6d4b8b8b8b?w=800&h=600&fit=crop",
                services: ["Market Intelligence", "Supplier Qualification", "Risk Management"],
                technologies: ["Global Supplier Networks", "Market Intelligence Tools", "Risk Assessment Platforms"]
            },
            {
                title: "Supply Chain Visibility",
                description: "Real-time visibility and control across the entire supply chain network.",
                image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop",
                services: ["Supply Chain Monitoring", "Performance Analytics", "Exception Management"],
                technologies: ["Supply Chain Platforms", "IoT Tracking", "Predictive Analytics"]
            }
        ],
        processSteps: [
            {
                step: "01",
                title: "Supply Chain Assessment",
                description: "Comprehensive analysis of current supply chain performance and optimization opportunities.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            },
            {
                step: "02",
                title: "Strategy Development",
                description: "Development of customized supply chain optimization strategies and implementation roadmap.",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            },
            {
                step: "03",
                title: "Supplier Optimization",
                description: "Strategic supplier selection, qualification, and relationship management implementation.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            },
            {
                step: "04",
                title: "Process Implementation",
                description: "Implementation of optimized processes with technology integration and change management.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            },
            {
                step: "05",
                title: "Continuous Improvement",
                description: "Ongoing monitoring, optimization, and continuous improvement of supply chain performance.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            }
        ],
        ctaSection: {
            title: "Ready to Optimize Your Supply Chain?",
            description: "Transform your supply chain operations with our comprehensive optimization solutions that deliver measurable cost savings and performance improvements.",
            primaryButton: "START OPTIMIZATION",
            secondaryButton: "ASSESS MY SUPPLY CHAIN"
        }
    },
    {
        id: "innovation-lab",
        title: "Innovation Lab Services",
        description: "Comprehensive innovation laboratory services combining advanced design capabilities, rapid prototyping, and testing facilities to accelerate product development and innovation cycles.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop&crop=center",
        category: "business",
        overview: {
            title: "Innovation Acceleration & Product Development",
            description: "Our Innovation Lab services provide a complete ecosystem for product development, from initial concept through market-ready prototypes. We combine cutting-edge design tools, rapid prototyping technologies, and comprehensive testing capabilities.",
            image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop",
            imageTitle: "Advanced Innovation Laboratory",
            imageDescription: "State-of-the-art innovation facility equipped with the latest design software, 3D printing technologies, and comprehensive testing equipment for accelerated product development."
        },
        benefits: [
            {
                title: "Development Speed",
                value: "70% Faster",
                description: "Accelerated product development cycles"
            },
            {
                title: "Prototype Turnaround",
                value: "24-48 hrs",
                description: "Rapid prototyping and iteration capabilities"
            },
            {
                title: "Design Iterations",
                value: "Unlimited",
                description: "Continuous design refinement and optimization"
            },
            {
                title: "Success Rate",
                value: "85%",
                description: "Product concepts successfully brought to market"
            }
        ],
        features: [
            {
                title: "Advanced Design Studio",
                description: "State-of-the-art design capabilities with the latest CAD software and simulation tools.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            },
            {
                title: "Rapid Prototyping",
                description: "Multiple prototyping technologies for fast iteration and validation of design concepts.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            },
            {
                title: "Testing & Validation",
                description: "Comprehensive testing facilities for functional, environmental, and performance validation.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            },
            {
                title: "Market Validation",
                description: "Market research and validation services to ensure product-market fit before launch.",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            }
        ],
        components: [
            {
                title: "Concept Development",
                description: "Systematic approach to transforming ideas into viable product concepts with market potential.",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
                services: ["Ideation Workshops", "Market Research", "Feasibility Studies"],
                technologies: ["Design Thinking Tools", "Market Analysis Software", "Concept Validation Platforms"]
            },
            {
                title: "Prototype Development",
                description: "Advanced prototyping capabilities using multiple technologies and materials for comprehensive validation.",
                image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop",
                services: ["3D Printing", "CNC Prototyping", "Functional Testing"],
                technologies: ["Multi-Material 3D Printing", "Precision CNC", "Automated Testing"]
            },
            {
                title: "Innovation Consulting",
                description: "Strategic innovation consulting to guide product development and market entry strategies.",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
                services: ["Innovation Strategy", "Technology Roadmapping", "IP Strategy"],
                technologies: ["Innovation Management Platforms", "Technology Scouting", "Patent Analysis Tools"]
            }
        ],
        processSteps: [
            {
                step: "01",
                title: "Innovation Discovery",
                description: "Comprehensive discovery process to understand innovation goals and market opportunities.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            },
            {
                step: "02",
                title: "Concept Development",
                description: "Systematic development of product concepts with feasibility analysis and market validation.",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            },
            {
                step: "03",
                title: "Rapid Prototyping",
                description: "Fast iteration through multiple prototype generations with continuous testing and refinement.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            },
            {
                step: "04",
                title: "Validation & Testing",
                description: "Comprehensive validation including functional, performance, and market testing.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            },
            {
                step: "05",
                title: "Market Preparation",
                description: "Preparation for market entry including production planning and go-to-market strategy.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            }
        ],
        ctaSection: {
            title: "Ready to Accelerate Innovation?",
            description: "Transform your product development process with our comprehensive Innovation Lab services that bring ideas to market faster than ever.",
            primaryButton: "START INNOVATION PROJECT",
            secondaryButton: "TOUR OUR LAB"
        }
    },
    {
        id: "operational-excellence",
        title: "Operational Excellence",
        description: "Comprehensive operational excellence programs combining process optimization, quality management, and continuous improvement methodologies to achieve world-class operational performance.",
        image: "https://images.unsplash.com/photo-1565043589221-1d6d4b8b8b8b?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1565043589221-1d6d4b8b8b8b?w=1920&h=1080&fit=crop&crop=center",
        category: "business",
        overview: {
            title: "Achieving World-Class Operations",
            description: "Our operational excellence solutions transform your business operations through proven methodologies, advanced analytics, and systematic improvement programs that deliver sustainable performance gains and competitive advantage.",
            image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop",
            imageTitle: "Operational Excellence Center",
            imageDescription: "Advanced operations management center featuring real-time performance monitoring, analytics dashboards, and continuous improvement coordination systems."
        },
        benefits: [
            {
                title: "Efficiency Improvement",
                value: "35-50%",
                description: "Operational efficiency gains through optimization"
            },
            {
                title: "Cost Reduction",
                value: "20-30%",
                description: "Operating cost reduction through process improvement"
            },
            {
                title: "Quality Enhancement",
                value: "60%+",
                description: "Reduction in defects and quality issues"
            },
            {
                title: "Employee Engagement",
                value: "40%+",
                description: "Increased employee satisfaction and engagement"
            }
        ],
        features: [
            {
                title: "Process Optimization",
                description: "Systematic analysis and optimization of business processes for maximum efficiency.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            },
            {
                title: "Lean Six Sigma",
                description: "Implementation of Lean Six Sigma methodologies for waste elimination and quality improvement.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            },
            {
                title: "Performance Management",
                description: "Advanced performance management systems with real-time monitoring and analytics.",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            },
            {
                title: "Change Management",
                description: "Comprehensive change management programs to ensure sustainable operational improvements.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            }
        ],
        components: [
            {
                title: "Process Excellence",
                description: "Comprehensive process analysis, redesign, and optimization for maximum operational efficiency.",
                image: "https://images.unsplash.com/photo-1565043589221-1d6d4b8b8b8b?w=800&h=600&fit=crop",
                services: ["Process Mapping", "Value Stream Analysis", "Waste Elimination"],
                technologies: ["Process Mining Software", "Simulation Tools", "Workflow Automation"]
            },
            {
                title: "Quality Systems",
                description: "Implementation of robust quality management systems and continuous improvement programs.",
                image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop",
                services: ["Quality Management", "Statistical Process Control", "Root Cause Analysis"],
                technologies: ["Quality Management Systems", "SPC Software", "Analytics Platforms"]
            },
            {
                title: "Performance Analytics",
                description: "Advanced analytics and KPI management for data-driven operational decision making.",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
                services: ["KPI Development", "Dashboard Creation", "Predictive Analytics"],
                technologies: ["Business Intelligence Tools", "Analytics Platforms", "Performance Dashboards"]
            }
        ],
        processSteps: [
            {
                step: "01",
                title: "Operational Assessment",
                description: "Comprehensive assessment of current operational performance and improvement opportunities.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            },
            {
                step: "02",
                title: "Excellence Strategy",
                description: "Development of customized operational excellence strategy aligned with business objectives.",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            },
            {
                step: "03",
                title: "Implementation",
                description: "Systematic implementation of improvement initiatives with project management and change support.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            },
            {
                step: "04",
                title: "Performance Monitoring",
                description: "Continuous monitoring of performance improvements with real-time analytics and reporting.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            },
            {
                step: "05",
                title: "Continuous Improvement",
                description: "Establishment of continuous improvement culture with ongoing optimization and innovation.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            }
        ],
        ctaSection: {
            title: "Ready to Achieve Operational Excellence?",
            description: "Transform your operations with our proven methodologies that deliver sustainable performance improvements and competitive advantage.",
            primaryButton: "START EXCELLENCE PROGRAM",
            secondaryButton: "ASSESS MY OPERATIONS"
        }
    }
];

// Helper function to get solution by ID
export const getSolutionById = (id: string): Solution | undefined => {
    return solutionsData.find(solution => solution.id === id);
};

// Helper function to get all solution IDs for static generation
export const getAllSolutionIds = (): string[] => {
    return solutionsData.map(solution => solution.id);
};

// Helper function to get solutions by category
export const getSolutionsByCategory = (category: 'industry' | 'business' | 'partnership'): Solution[] => {
    return solutionsData.filter(solution => solution.category === category);
};
