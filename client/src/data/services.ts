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
        id: "sourcing-procurement",
        title: "Sourcing & Procurement",
        description: "Strategic sourcing and procurement services to optimize your supply chain, reduce costs, and ensure reliable material availability. We leverage global networks and industry expertise to deliver value-driven procurement solutions.",
        image: "/images/services/Sourcing & Procurement.png",
        heroImage: "/images/services/Sourcing & Procurement.png",
        overview: {
            title: "Strategic Supply Chain Excellence",
            description: "Our sourcing and procurement services combine deep market knowledge with strategic partnerships to deliver cost-effective, reliable supply chain solutions. We help you navigate complex global markets while ensuring quality, compliance, and sustainability.",
            image: "https://images.unsplash.com/photo-1565043589221-1d6d4b8b8b8b?w=600&h=400&fit=crop",
            imageTitle: "Global Supply Network",
            imageDescription: "Our extensive network of verified suppliers and strategic partnerships enables us to source materials and components from the most reliable and cost-effective sources worldwide."
        },
        capabilities: [
            {
                title: "Supplier Network",
                value: "500+",
                description: "Verified suppliers across multiple industries and regions"
            },
            {
                title: "Cost Savings",
                value: "15-30%",
                description: "Average cost reduction through strategic sourcing"
            },
            {
                title: "Lead Time Reduction",
                value: "40%",
                description: "Improved delivery times through optimized supply chains"
            },
            {
                title: "Quality Assurance",
                value: "ISO Certified",
                description: "Rigorous supplier qualification and quality standards"
            }
        ],
        subServices: [
            {
                title: "Strategic Sourcing",
                description: "Comprehensive sourcing strategies that align with your business objectives, focusing on cost optimization, risk mitigation, and supplier relationship management.",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
                features: ["Market analysis", "Supplier evaluation", "Cost modeling", "Risk assessment"],
                applications: ["Raw materials", "Components", "Equipment", "Services"]
            },
            {
                title: "Supplier Management",
                description: "End-to-end supplier lifecycle management including qualification, performance monitoring, and relationship optimization.",
                image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop",
                features: ["Supplier audits", "Performance metrics", "Compliance monitoring", "Relationship management"],
                applications: ["Vendor qualification", "Performance tracking", "Contract management", "Supplier development"]
            },
            {
                title: "Global Sourcing",
                description: "International sourcing solutions leveraging global markets to find the best suppliers while managing cultural, regulatory, and logistical challenges.",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
                features: ["International networks", "Cultural expertise", "Regulatory compliance", "Logistics coordination"],
                applications: ["Emerging markets", "Specialized materials", "Cost arbitrage", "Capacity expansion"]
            },
            {
                title: "Procurement Analytics",
                description: "Data-driven procurement insights using advanced analytics to optimize spending, identify opportunities, and predict market trends.",
                image: "https://images.unsplash.com/photo-1565043589221-1d6d4b8b8b8b?w=800&h=600&fit=crop",
                features: ["Spend analysis", "Market intelligence", "Predictive analytics", "Performance dashboards"],
                applications: ["Cost optimization", "Market forecasting", "Supplier benchmarking", "Risk prediction"]
            }
        ],
        processSteps: [
            {
                step: "01",
                title: "Requirements Analysis",
                description: "Comprehensive analysis of your sourcing requirements, specifications, and business objectives.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            },
            {
                step: "02",
                title: "Market Research",
                description: "In-depth market analysis to identify potential suppliers, pricing trends, and market dynamics.",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            },
            {
                step: "03",
                title: "Supplier Evaluation",
                description: "Rigorous evaluation and qualification of potential suppliers based on quality, capability, and reliability.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            },
            {
                step: "04",
                title: "Negotiation & Contracting",
                description: "Strategic negotiation and contract development to secure optimal terms and conditions.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            },
            {
                step: "05",
                title: "Implementation & Monitoring",
                description: "Implementation of sourcing strategies with ongoing performance monitoring and optimization.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            }
        ],
        ctaSection: {
            title: "Ready to Optimize Your Supply Chain?",
            description: "Transform your procurement strategy with our expert sourcing and procurement services. Let's discuss how we can reduce costs and improve efficiency.",
            primaryButton: "GET SOURCING QUOTE",
            secondaryButton: "DISCUSS STRATEGY"
        }
    },
    {
        id: "design-prototyping",
        title: "Design and Prototyping",
        description: "Comprehensive design and prototyping services from concept to production-ready designs. Our expert team combines creativity with technical expertise to bring your ideas to life through innovative design solutions.",
        image: "/images/services/Design and Prototyping.png",
        heroImage: "/images/services/Design and Prototyping.png",
        overview: {
            title: "Innovation Through Design Excellence",
            description: "Our design and prototyping services transform concepts into reality through systematic design thinking, advanced CAD modeling, and rapid prototyping technologies. We bridge the gap between imagination and implementation.",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
            imageTitle: "Advanced Design Studio",
            imageDescription: "Our design studio features state-of-the-art CAD workstations, 3D modeling software, and rapid prototyping equipment to accelerate the design-to-prototype cycle."
        },
        capabilities: [
            {
                title: "Design Software",
                value: "10+",
                description: "Professional CAD and design software platforms"
            },
            {
                title: "Prototype Speed",
                value: "24-48 hrs",
                description: "Rapid prototyping turnaround times"
            },
            {
                title: "Design Iterations",
                value: "Unlimited",
                description: "Iterative design process until perfection"
            },
            {
                title: "Material Options",
                value: "50+",
                description: "Diverse materials for prototype development"
            }
        ],
        subServices: [
            {
                title: "Concept Development",
                description: "Transform ideas into viable concepts through systematic design thinking, market research, and feasibility analysis.",
                image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop",
                features: ["Ideation workshops", "Market research", "Feasibility studies", "Concept validation"],
                applications: ["Product innovation", "Process improvement", "Technology development", "Market entry"]
            },
            {
                title: "CAD Design & Modeling",
                description: "Professional 3D CAD design and modeling services using industry-leading software for precise, manufacturable designs.",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
                features: ["3D modeling", "Technical drawings", "Assembly design", "Design optimization"],
                applications: ["Mechanical components", "Product assemblies", "Tooling design", "System integration"]
            },
            {
                title: "Rapid Prototyping",
                description: "Fast, accurate prototyping using 3D printing, CNC machining, and other rapid manufacturing technologies.",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
                features: ["3D printing", "CNC prototyping", "Functional testing", "Design validation"],
                applications: ["Proof of concept", "Functional testing", "Design verification", "Market validation"]
            },
            {
                title: "Design for Manufacturing",
                description: "Optimize designs for efficient manufacturing while maintaining functionality, quality, and cost-effectiveness.",
                image: "https://images.unsplash.com/photo-1565043589221-1d6d4b8b8b8b?w=800&h=600&fit=crop",
                features: ["DFM analysis", "Cost optimization", "Process selection", "Quality planning"],
                applications: ["Production readiness", "Cost reduction", "Quality improvement", "Scalability"]
            }
        ],
        processSteps: [
            {
                step: "01",
                title: "Discovery & Research",
                description: "Understanding requirements, market needs, and technical constraints through comprehensive research.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            },
            {
                step: "02",
                title: "Concept Design",
                description: "Development of initial design concepts with multiple alternatives and feasibility assessment.",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            },
            {
                step: "03",
                title: "Detailed Design",
                description: "Creation of detailed 3D models, technical drawings, and specifications for manufacturing.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            },
            {
                step: "04",
                title: "Prototyping",
                description: "Rapid prototype development for testing, validation, and design refinement.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            },
            {
                step: "05",
                title: "Design Validation",
                description: "Testing and validation of prototypes with design optimization for production readiness.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            }
        ],
        ctaSection: {
            title: "Ready to Bring Your Ideas to Life?",
            description: "Transform your concepts into reality with our comprehensive design and prototyping services. Let's start your innovation journey today.",
            primaryButton: "START DESIGN PROJECT",
            secondaryButton: "EXPLORE CAPABILITIES"
        }
    },
    {
        id: "manufacturing-solutions",
        title: "Manufacturing Solutions",
        description: "Complete manufacturing solutions from precision machining to large-scale production. We deliver high-quality components and assemblies using advanced manufacturing technologies and rigorous quality control processes.",
        image: "/images/services/Manufacturing Solutions.png",
        heroImage: "/images/services/Manufacturing Solutions.png",
        overview: {
            title: "Advanced Manufacturing Excellence",
            description: "Our manufacturing solutions encompass the full spectrum of production capabilities, from precision machining and fabrication to assembly and finishing. We combine cutting-edge technology with skilled craftsmanship to deliver superior quality products.",
            image: "https://images.unsplash.com/photo-1565043589221-1d6d4b8b8b8b?w=600&h=400&fit=crop",
            imageTitle: "State-of-the-Art Manufacturing",
            imageDescription: "Our manufacturing facility features advanced CNC machines, automated production lines, and comprehensive quality control systems to ensure consistent, high-quality output."
        },
        capabilities: [
            {
                title: "Production Capacity",
                value: "24/7",
                description: "Continuous production capabilities with automated systems"
            },
            {
                title: "Precision Level",
                value: "±0.001mm",
                description: "Micro-precision tolerances for critical applications"
            },
            {
                title: "Material Range",
                value: "100+",
                description: "Extensive range of metals, plastics, and composites"
            },
            {
                title: "Quality Standard",
                value: "ISO 9001",
                description: "Certified quality management systems"
            }
        ],
        subServices: [
            {
                title: "Precision Machining",
                description: "High-precision CNC machining services for complex components with tight tolerances using advanced multi-axis machines.",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
                features: ["5-axis CNC", "Swiss turning", "EDM services", "Precision grinding"],
                applications: ["Aerospace components", "Medical devices", "Automotive parts", "Industrial equipment"]
            },
            {
                title: "Sheet Metal Fabrication",
                description: "Complete sheet metal fabrication including laser cutting, forming, welding, and finishing services.",
                image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop",
                features: ["Laser cutting", "Press brake forming", "Welding services", "Surface finishing"],
                applications: ["Enclosures", "Brackets", "Panels", "Structural components"]
            },
            {
                title: "Additive Manufacturing",
                description: "Advanced 3D printing and additive manufacturing for rapid prototyping and low-volume production.",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
                features: ["Multiple technologies", "Various materials", "Post-processing", "Quality verification"],
                applications: ["Prototypes", "Complex geometries", "Custom tooling", "End-use parts"]
            },
            {
                title: "Assembly & Integration",
                description: "Comprehensive assembly services for complex mechanical and electronic systems with full testing and validation.",
                image: "https://images.unsplash.com/photo-1565043589221-1d6d4b8b8b8b?w=800&h=600&fit=crop",
                features: ["Mechanical assembly", "Electronic integration", "Testing & validation", "Documentation"],
                applications: ["System integration", "Product assembly", "Sub-assemblies", "Final testing"]
            }
        ],
        processSteps: [
            {
                step: "01",
                title: "Manufacturing Planning",
                description: "Comprehensive planning of manufacturing processes, resource allocation, and quality requirements.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            },
            {
                step: "02",
                title: "Setup & Programming",
                description: "Machine setup, program development, and tooling preparation for optimal production efficiency.",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            },
            {
                step: "03",
                title: "Production",
                description: "Full-scale manufacturing with continuous monitoring and process optimization for consistent quality.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            },
            {
                step: "04",
                title: "Quality Control",
                description: "Rigorous quality control and inspection processes to ensure all specifications are met.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            },
            {
                step: "05",
                title: "Delivery & Support",
                description: "Final packaging, delivery coordination, and ongoing support for manufactured products.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            }
        ],
        ctaSection: {
            title: "Ready for Manufacturing Excellence?",
            description: "Transform your designs into high-quality manufactured products with our comprehensive manufacturing solutions. Let's discuss your production needs.",
            primaryButton: "GET MANUFACTURING QUOTE",
            secondaryButton: "EXPLORE CAPABILITIES"
        }
    },
    {
        id: "operation-consulting-service-excellence",
        title: "Operation Consulting / Service Excellence",
        description: "Strategic operational consulting and service excellence programs to optimize your business processes, improve efficiency, and enhance customer satisfaction. We help organizations achieve operational excellence through proven methodologies.",
        image: "/images/services/Operation Consulting Service Excellence.png",
        heroImage: "/images/services/Operation Consulting Service Excellence.png",
        overview: {
            title: "Operational Excellence & Service Leadership",
            description: "Our operational consulting services combine deep industry expertise with proven methodologies to drive sustainable improvements in efficiency, quality, and customer satisfaction. We partner with you to build world-class operations.",
            image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop",
            imageTitle: "Strategic Operations Center",
            imageDescription: "Our consulting approach leverages data analytics, process optimization, and change management to deliver measurable improvements in operational performance."
        },
        capabilities: [
            {
                title: "Efficiency Improvement",
                value: "25-40%",
                description: "Average operational efficiency gains achieved"
            },
            {
                title: "Cost Reduction",
                value: "15-25%",
                description: "Typical cost savings through process optimization"
            },
            {
                title: "Quality Enhancement",
                value: "50%+",
                description: "Reduction in defects and quality issues"
            },
            {
                title: "Customer Satisfaction",
                value: "30%+",
                description: "Improvement in customer satisfaction scores"
            }
        ],
        subServices: [
            {
                title: "Process Optimization",
                description: "Comprehensive analysis and optimization of business processes to eliminate waste, reduce cycle times, and improve efficiency.",
                image: "https://images.unsplash.com/photo-1565043589221-1d6d4b8b8b8b?w=800&h=600&fit=crop",
                features: ["Process mapping", "Lean methodologies", "Automation opportunities", "Performance metrics"],
                applications: ["Manufacturing processes", "Supply chain", "Quality systems", "Administrative processes"]
            },
            {
                title: "Quality Management",
                description: "Implementation of robust quality management systems and continuous improvement programs to ensure consistent excellence.",
                image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop",
                features: ["Quality systems", "Statistical process control", "Root cause analysis", "Corrective actions"],
                applications: ["ISO certification", "Quality improvement", "Defect reduction", "Customer satisfaction"]
            },
            {
                title: "Change Management",
                description: "Strategic change management programs to ensure successful implementation of operational improvements and cultural transformation.",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
                features: ["Change strategy", "Training programs", "Communication plans", "Performance tracking"],
                applications: ["Digital transformation", "Process changes", "System implementations", "Cultural shifts"]
            },
            {
                title: "Performance Analytics",
                description: "Advanced analytics and KPI development to measure, monitor, and continuously improve operational performance.",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
                features: ["KPI development", "Dashboard creation", "Predictive analytics", "Benchmarking"],
                applications: ["Performance monitoring", "Trend analysis", "Predictive maintenance", "Resource optimization"]
            }
        ],
        processSteps: [
            {
                step: "01",
                title: "Assessment & Analysis",
                description: "Comprehensive assessment of current operations, identifying improvement opportunities and performance gaps.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            },
            {
                step: "02",
                title: "Strategy Development",
                description: "Development of customized improvement strategies aligned with business objectives and priorities.",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            },
            {
                step: "03",
                title: "Implementation",
                description: "Systematic implementation of improvement initiatives with project management and change support.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            },
            {
                step: "04",
                title: "Monitoring & Optimization",
                description: "Continuous monitoring of results with ongoing optimization and adjustment of strategies.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            },
            {
                step: "05",
                title: "Sustainability",
                description: "Establishment of systems and processes to sustain improvements and drive continuous excellence.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            }
        ],
        ctaSection: {
            title: "Ready to Achieve Operational Excellence?",
            description: "Transform your operations and achieve service excellence with our proven consulting methodologies. Let's discuss your operational challenges and opportunities.",
            primaryButton: "START CONSULTATION",
            secondaryButton: "LEARN MORE"
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