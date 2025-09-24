export interface SubService {
    title: string;
    description: string;
    image: string;
    features: string[];
    applications: string[];
}

export interface ProcessStep {
    step: string;
    title: string;
    description: string;
    icon: string;
}

export interface Capability {
    title: string;
    value: string;
    description: string;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    image: string;
    heroImage: string;
    overview: {
        title: string;
        description: string;
        image: string;
        imageTitle: string;
        imageDescription: string;
    };
    capabilities: Capability[];
    subServices: SubService[];
    processSteps: ProcessStep[];
    ctaSection: {
        title: string;
        description: string;
        primaryButton: string;
        secondaryButton: string;
    };
}

export const servicesData: Service[] = [
    {
        id: "precision-manufacturing",
        title: "Precision Manufacturing",
        description: "Advanced precision manufacturing services for complex components with tight tolerances. Our state-of-the-art facilities ensure exceptional quality and accuracy for aerospace, automotive, and medical industries.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop&crop=center",
        overview: {
            title: "Precision That Exceeds Expectations",
            description: "Our precision manufacturing services combine advanced technology, skilled craftsmanship, and rigorous quality control to deliver components that meet the most demanding specifications. With state-of-the-art equipment and decades of experience, we're your trusted partner for critical precision applications.",
            image: "https://images.unsplash.com/photo-1565043589221-1d6d4b8b8b8b?w=600&h=400&fit=crop",
            imageTitle: "Advanced Manufacturing Technology",
            imageDescription: "Our facility features the latest CNC machines, Swiss turning centers, EDM equipment, and precision grinding systems, all integrated with advanced quality control systems."
        },
        capabilities: [
            {
                title: "Tolerance Capabilities",
                value: "±0.001mm",
                description: "Achieving micro-precision tolerances for critical applications"
            },
            {
                title: "Material Range",
                value: "50+",
                description: "Materials including metals, plastics, ceramics, and composites"
            },
            {
                title: "Production Capacity",
                value: "24/7",
                description: "Continuous production capabilities with automated systems"
            },
            {
                title: "Quality Standard",
                value: "ISO 9001",
                description: "Certified quality management systems and processes"
            }
        ],
        subServices: [
            {
                title: "CNC Precision Machining",
                description: "High-precision CNC machining for complex geometries with tolerances up to ±0.001mm. Our multi-axis machines handle everything from prototypes to high-volume production.",
                image: "https://images.unsplash.com/photo-1565043589221-1d6d4b8b8b8b?w=800&h=600&fit=crop",
                features: ["5-axis CNC capabilities", "±0.001mm tolerance", "24/7 production", "Material variety"],
                applications: ["Aerospace components", "Medical devices", "Automotive parts", "Industrial equipment"]
            },
            {
                title: "Swiss Turning",
                description: "Specialized Swiss turning for small, complex parts requiring exceptional precision and surface finish. Ideal for high-volume production of intricate components.",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
                features: ["Micro-machining", "Superior surface finish", "High-volume capability", "Complex geometries"],
                applications: ["Watch components", "Medical implants", "Electronics parts", "Precision instruments"]
            },
            {
                title: "EDM Services",
                description: "Electrical Discharge Machining for hardened materials and complex internal geometries that traditional machining cannot achieve.",
                image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop",
                features: ["Wire EDM", "Sinker EDM", "Hardened materials", "Complex cavities"],
                applications: ["Tool & die making", "Mold manufacturing", "Aerospace tooling", "Medical tooling"]
            },
            {
                title: "Grinding Services",
                description: "Precision grinding services for achieving superior surface finishes and tight tolerances on various materials and geometries.",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
                features: ["Surface grinding", "Cylindrical grinding", "Centerless grinding", "Profile grinding"],
                applications: ["Bearing components", "Hydraulic parts", "Engine components", "Precision tools"]
            }
        ],
        processSteps: [
            {
                step: "01",
                title: "Design Review",
                description: "Comprehensive analysis of your design requirements, specifications, and manufacturability assessment.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            },
            {
                step: "02",
                title: "Process Planning",
                description: "Development of optimal manufacturing processes, tooling selection, and production workflow planning.",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            },
            {
                step: "03",
                title: "Setup & Programming",
                description: "Machine setup, program development, and first article production with quality verification.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            },
            {
                step: "04",
                title: "Production",
                description: "Full-scale production with continuous quality monitoring and process optimization.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            },
            {
                step: "05",
                title: "Quality Control",
                description: "Final inspection, documentation, and certification ensuring all specifications are met.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            }
        ],
        ctaSection: {
            title: "Ready for Precision Manufacturing?",
            description: "Let's discuss your precision manufacturing requirements. Our experts are ready to help you achieve exceptional quality and precision for your next project.",
            primaryButton: "GET PRECISION QUOTE",
            secondaryButton: "CONTACT EXPERT"
        }
    },
    {
        id: "sheet-metal-fabrication",
        title: "Sheet Metal Fabrication",
        description: "Complete sheet metal fabrication services including cutting, bending, welding, and finishing. From prototypes to high-volume production, we deliver quality metal components for diverse applications.",
        image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1920&h=1080&fit=crop&crop=center",
        overview: {
            title: "Complete Sheet Metal Solutions",
            description: "Our comprehensive sheet metal fabrication services cover the entire process from design to finished product. With advanced equipment and skilled craftsmen, we deliver high-quality metal components for various industries.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
            imageTitle: "Advanced Fabrication Equipment",
            imageDescription: "Our facility features laser cutting systems, press brakes, welding stations, and finishing equipment for complete sheet metal fabrication."
        },
        capabilities: [
            {
                title: "Material Thickness",
                value: "0.5-25mm",
                description: "Wide range of material thicknesses for diverse applications"
            },
            {
                title: "Sheet Size",
                value: "4x8 ft",
                description: "Large format capabilities for big components"
            },
            {
                title: "Material Types",
                value: "25+",
                description: "Steel, aluminum, stainless steel, and specialty alloys"
            },
            {
                title: "Bend Accuracy",
                value: "±0.1°",
                description: "Precise bending with tight angular tolerances"
            }
        ],
        subServices: [
            {
                title: "Laser Cutting",
                description: "High-precision laser cutting for complex shapes and tight tolerances with excellent edge quality.",
                image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop",
                features: ["Fiber laser technology", "Complex geometries", "Minimal heat affected zone", "Excellent edge quality"],
                applications: ["Brackets", "Panels", "Decorative parts", "Precision components"]
            },
            {
                title: "Press Brake Forming",
                description: "Precision bending and forming operations using advanced press brake technology with accurate tooling.",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
                features: ["CNC press brakes", "Custom tooling", "Complex bends", "Repeatable accuracy"],
                applications: ["Enclosures", "Chassis", "Brackets", "Structural components"]
            },
            {
                title: "Welding Services",
                description: "Professional welding services including MIG, TIG, and spot welding for strong, durable joints.",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
                features: ["MIG welding", "TIG welding", "Spot welding", "Certified welders"],
                applications: ["Assemblies", "Frames", "Structural welding", "Repair work"]
            },
            {
                title: "Finishing Services",
                description: "Complete finishing services including powder coating, anodizing, and surface treatments.",
                image: "https://images.unsplash.com/photo-1565043589221-1d6d4b8b8b8b?w=800&h=600&fit=crop",
                features: ["Powder coating", "Anodizing", "Plating", "Surface preparation"],
                applications: ["Decorative finishes", "Corrosion protection", "Wear resistance", "Color matching"]
            }
        ],
        processSteps: [
            {
                step: "01",
                title: "Design Review",
                description: "Analysis of part design for manufacturability, material selection, and process optimization.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            },
            {
                step: "02",
                title: "Material Preparation",
                description: "Material selection, cutting to size, and preparation for fabrication processes.",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            },
            {
                step: "03",
                title: "Fabrication",
                description: "Cutting, bending, forming, and welding operations to create the finished component.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            },
            {
                step: "04",
                title: "Assembly",
                description: "Assembly of multiple components, hardware installation, and sub-assembly creation.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            },
            {
                step: "05",
                title: "Finishing",
                description: "Surface preparation, coating application, and final quality inspection before delivery.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            }
        ],
        ctaSection: {
            title: "Ready for Sheet Metal Fabrication?",
            description: "Transform your designs into high-quality metal components with our comprehensive fabrication services. Get started with a quote today.",
            primaryButton: "GET FABRICATION QUOTE",
            secondaryButton: "DISCUSS REQUIREMENTS"
        }
    },
    {
        id: "3d-printing-additive-manufacturing",
        title: "3D Printing & Additive Manufacturing",
        description: "Cutting-edge 3D printing and additive manufacturing solutions for rapid prototyping and low-volume production. We support various materials and technologies for innovative design solutions.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop&crop=center",
        overview: {
            title: "Advanced Additive Manufacturing",
            description: "Our 3D printing and additive manufacturing services enable rapid prototyping, complex geometries, and innovative design solutions. With multiple technologies and materials available, we bring your ideas to life quickly and cost-effectively.",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
            imageTitle: "State-of-the-Art 3D Printing",
            imageDescription: "Our facility houses industrial-grade 3D printers using various technologies including FDM, SLA, SLS, and metal printing for diverse applications."
        },
        capabilities: [
            {
                title: "Print Technologies",
                value: "8+",
                description: "Multiple 3D printing technologies for diverse applications"
            },
            {
                title: "Material Options",
                value: "100+",
                description: "Extensive range of plastics, metals, and composites"
            },
            {
                title: "Build Volume",
                value: "500x500x500mm",
                description: "Large format printing capabilities"
            },
            {
                title: "Layer Resolution",
                value: "0.05mm",
                description: "High-resolution printing for detailed parts"
            }
        ],
        subServices: [
            {
                title: "FDM Printing",
                description: "Fused Deposition Modeling for functional prototypes and production parts using engineering-grade thermoplastics.",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
                features: ["Engineering plastics", "Large build volumes", "Cost-effective", "Functional parts"],
                applications: ["Prototypes", "Jigs and fixtures", "End-use parts", "Tooling"]
            },
            {
                title: "SLA Printing",
                description: "Stereolithography for high-resolution parts with smooth surface finishes and fine details.",
                image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop",
                features: ["High resolution", "Smooth finish", "Fine details", "Clear materials"],
                applications: ["Concept models", "Jewelry", "Dental models", "Miniatures"]
            },
            {
                title: "SLS Printing",
                description: "Selective Laser Sintering for complex geometries without support structures using nylon and other powders.",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
                features: ["No supports needed", "Complex geometries", "Durable materials", "Batch production"],
                applications: ["Functional parts", "Assemblies", "Aerospace components", "Medical devices"]
            },
            {
                title: "Metal Printing",
                description: "Direct Metal Laser Sintering for high-strength metal parts with complex internal structures.",
                image: "https://images.unsplash.com/photo-1565043589221-1d6d4b8b8b8b?w=800&h=600&fit=crop",
                features: ["Metal materials", "High strength", "Complex internals", "Aerospace grade"],
                applications: ["Aerospace parts", "Medical implants", "Tooling", "Heat exchangers"]
            }
        ],
        processSteps: [
            {
                step: "01",
                title: "Design Optimization",
                description: "Analysis and optimization of designs for additive manufacturing, including support structure planning.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            },
            {
                step: "02",
                title: "Material Selection",
                description: "Selection of optimal materials and printing technology based on application requirements.",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            },
            {
                step: "03",
                title: "Printing",
                description: "3D printing process with continuous monitoring and quality control throughout production.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            },
            {
                step: "04",
                title: "Post-Processing",
                description: "Support removal, surface finishing, and any required secondary operations.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            },
            {
                step: "05",
                title: "Quality Verification",
                description: "Dimensional verification, surface quality inspection, and functional testing as required.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            }
        ],
        ctaSection: {
            title: "Ready to 3D Print Your Ideas?",
            description: "Bring your concepts to life with our advanced 3D printing and additive manufacturing capabilities. Fast turnaround and high quality guaranteed.",
            primaryButton: "GET 3D PRINTING QUOTE",
            secondaryButton: "EXPLORE MATERIALS"
        }
    },
    {
        id: "assembly-integration",
        title: "Assembly & Integration",
        description: "Comprehensive assembly and integration services for complex mechanical and electronic systems. Our skilled technicians ensure proper fit, function, and quality control throughout the assembly process.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop&crop=center",
        overview: {
            title: "Expert Assembly & Integration",
            description: "Our assembly and integration services bring together precision manufacturing with expert craftsmanship. We handle complex multi-component assemblies with strict quality control and testing protocols.",
            image: "https://images.unsplash.com/photo-1565043589221-1d6d4b8b8b8b?w=600&h=400&fit=crop",
            imageTitle: "Clean Room Assembly",
            imageDescription: "Our controlled environment assembly areas ensure contamination-free assembly for critical applications in medical, aerospace, and electronics industries."
        },
        capabilities: [
            {
                title: "Assembly Types",
                value: "Mechanical & Electronic",
                description: "Complete assembly services for diverse systems"
            },
            {
                title: "Clean Room",
                value: "Class 10,000",
                description: "Controlled environment for critical assemblies"
            },
            {
                title: "Testing Capability",
                value: "Functional & Performance",
                description: "Comprehensive testing and validation"
            },
            {
                title: "Documentation",
                value: "Full Traceability",
                description: "Complete assembly documentation and records"
            }
        ],
        subServices: [
            {
                title: "Mechanical Assembly",
                description: "Precision mechanical assembly services for complex systems requiring careful attention to tolerances and specifications.",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
                features: ["Torque specifications", "Precision alignment", "Custom tooling", "Quality control"],
                applications: ["Industrial equipment", "Automotive assemblies", "Aerospace systems", "Medical devices"]
            },
            {
                title: "Electronic Integration",
                description: "Electronic system integration including wiring, component installation, and system testing.",
                image: "https://images.unsplash.com/photo-1565043589221-1d6d4b8b8b8b?w=800&h=600&fit=crop",
                features: ["Cable assembly", "PCB installation", "System testing", "EMI compliance"],
                applications: ["Control systems", "Test equipment", "Communication devices", "Instrumentation"]
            },
            {
                title: "Clean Room Assembly",
                description: "Contamination-controlled assembly for critical applications requiring sterile or clean environments.",
                image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop",
                features: ["Controlled environment", "Sterile procedures", "Contamination control", "Documentation"],
                applications: ["Medical devices", "Semiconductor equipment", "Optical systems", "Pharmaceutical equipment"]
            },
            {
                title: "Testing & Validation",
                description: "Comprehensive testing and validation services to ensure proper function and performance.",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
                features: ["Functional testing", "Performance validation", "Calibration", "Certification"],
                applications: ["Quality assurance", "Product validation", "Compliance testing", "Performance verification"]
            }
        ],
        processSteps: [
            {
                step: "01",
                title: "Assembly Planning",
                description: "Detailed planning of assembly sequence, tooling requirements, and quality control points.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            },
            {
                step: "02",
                title: "Component Preparation",
                description: "Preparation and inspection of all components before assembly begins.",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            },
            {
                step: "03",
                title: "Assembly Process",
                description: "Systematic assembly following documented procedures with quality checkpoints.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            },
            {
                step: "04",
                title: "Testing",
                description: "Comprehensive testing and validation to ensure proper function and performance.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            },
            {
                step: "05",
                title: "Documentation",
                description: "Complete documentation of assembly process, test results, and quality records.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            }
        ],
        ctaSection: {
            title: "Need Assembly & Integration Services?",
            description: "Let our expert technicians handle your complex assembly requirements with precision and quality. Contact us to discuss your project needs.",
            primaryButton: "GET ASSEMBLY QUOTE",
            secondaryButton: "DISCUSS PROJECT"
        }
    }
];

// Helper function to get service by ID
export const getServiceById = (id: string): Service | undefined => {
    return servicesData.find(service => service.id === id);
};

// Helper function to get all service IDs for static generation
export const getAllServiceIds = (): string[] => {
    return servicesData.map(service => service.id);
};