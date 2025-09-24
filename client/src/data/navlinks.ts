export interface DropdownItem {
    href: string;
    label: string;
    description?: string;
    iconType?: 'svg' | 'emoji';
    icon?: string;
    price?: string;
    badge?: string;
    category?: string;
}

export interface DropdownSection {
    title: string;
    description?: string;
    items: DropdownItem[];
}

export interface NavLink {
    href: string;
    label: string;
    id: string;
    dropdown?: DropdownSection[];
}

export const navigationLinks: NavLink[] = [
    {
        id: "about",
        href: "/about",
        label: "About Us"
    },
    {
        id: "services",
        href: "/services",
        label: "Services",
        dropdown: [
            {
                title: "Core Services",
                description: "Our comprehensive suite of business solutions designed to drive efficiency, innovation, and growth across your entire value chain.",
                items: [
                    {
                        href: "/services/sourcing-procurement",
                        label: "Sourcing & Procurement",
                        description: "Supply chain • Strategic sourcing",
                        iconType: "svg",
                        icon: "heroicons:truck-20-solid"
                    },
                    {
                        href: "/services/design-prototyping",
                        label: "Design and Prototyping",
                        description: "Innovation • Rapid prototyping",
                        iconType: "svg",
                        icon: "heroicons:light-bulb-20-solid"
                    },
                    {
                        href: "/services/manufacturing-solutions",
                        label: "Manufacturing Solutions",
                        description: "Production • Advanced manufacturing",
                        iconType: "svg",
                        icon: "heroicons:cog-6-tooth-20-solid"
                    },
                    {
                        href: "/services/operation-consulting-service-excellence",
                        label: "Operation Consulting",
                        description: "Excellence • Process optimization",
                        iconType: "svg",
                        icon: "heroicons:chart-bar-20-solid"
                    }
                ]
            },
            {
                title: "Service Capabilities",
                description: "Specialized capabilities within our core service offerings",
                items: [
                    {
                        href: "/services/sourcing-procurement#strategic-sourcing",
                        label: "Strategic Sourcing",
                        description: "Market analysis • Supplier evaluation",
                        iconType: "svg",
                        icon: "heroicons:magnifying-glass-20-solid"
                    },
                    {
                        href: "/services/design-prototyping#rapid-prototyping",
                        label: "Rapid Prototyping",
                        description: "24-48hrs • Design validation",
                        iconType: "svg",
                        icon: "heroicons:bolt-20-solid"
                    },
                    {
                        href: "/services/manufacturing-solutions#precision-machining",
                        label: "Precision Manufacturing",
                        description: "±0.001mm • ISO certified",
                        iconType: "svg",
                        icon: "heroicons:wrench-screwdriver-20-solid"
                    },
                    {
                        href: "/services/operation-consulting-service-excellence#process-optimization",
                        label: "Process Optimization",
                        description: "25-40% efficiency gains",
                        iconType: "svg",
                        icon: "heroicons:adjustments-horizontal-20-solid"
                    }
                ]
            }
        ]
    },
    {
        id: "solutions",
        href: "/solutions",
        label: "Solutions",
        dropdown: [
            {
                title: "Industry Solutions",
                description: "Specialized solutions tailored for different industries with proven expertise across our core service areas.",
                items: [
                    {
                        href: "/solutions/automotive",
                        label: "Automotive Industry",
                        description: "Supply chain • Manufacturing • Quality",
                        iconType: "svg",
                        icon: "mdi:car"
                    },
                    {
                        href: "/solutions/aerospace",
                        label: "Aerospace & Defense",
                        description: "Precision • AS9100 certified",
                        iconType: "svg",
                        icon: "heroicons:paper-airplane-20-solid"
                    },
                    {
                        href: "/solutions/electronics",
                        label: "Electronics & Technology",
                        description: "Design • Prototyping • Assembly",
                        iconType: "svg",
                        icon: "heroicons:cpu-chip-20-solid"
                    },
                    {
                        href: "/solutions/medical",
                        label: "Medical & Healthcare",
                        description: "FDA compliant • ISO 13485",
                        iconType: "svg",
                        icon: "heroicons:heart-20-solid"
                    }
                ]
            },
            {
                title: "Business Solutions",
                description: "Comprehensive business solutions combining our core services",
                items: [
                    {
                        href: "/solutions/end-to-end",
                        label: "End-to-End Solutions",
                        description: "Complete value chain management",
                        badge: "Popular",
                        iconType: "svg",
                        icon: "heroicons:arrow-path-20-solid"
                    },
                    {
                        href: "/solutions/supply-chain-optimization",
                        label: "Supply Chain Optimization",
                        description: "Sourcing • Procurement • Logistics",
                        iconType: "svg",
                        icon: "heroicons:truck-20-solid"
                    },
                    {
                        href: "/solutions/innovation-lab",
                        label: "Innovation Lab Services",
                        description: "Design • Prototyping • Testing",
                        iconType: "svg",
                        icon: "heroicons:beaker-20-solid"
                    },
                    {
                        href: "/solutions/operational-excellence",
                        label: "Operational Excellence",
                        description: "Process improvement • Consulting",
                        iconType: "svg",
                        icon: "heroicons:chart-bar-20-solid"
                    }
                ]
            },
            {
                title: "Partnership Programs",
                description: "Join our ecosystem of customers, suppliers, and partners",
                items: [
                    {
                        href: "/register/customer",
                        label: "Customer Portal",
                        description: "Access our services platform",
                        badge: "Free Access",
                        iconType: "svg",
                        icon: "heroicons:user-group-20-solid"
                    },
                    {
                        href: "/register/supplier",
                        label: "Supplier Network",
                        description: "Join our verified suppliers",
                        badge: "Apply Now",
                        iconType: "svg",
                        icon: "heroicons:building-office-2-20-solid"
                    },
                    {
                        href: "/partners/strategic",
                        label: "Strategic Partnerships",
                        description: "Long-term collaboration",
                        iconType: "svg",
                        icon: "heroicons:hand-raised-20-solid"
                    }
                ]
            }
        ]
    },
    {
        id: "resources",
        href: "#",
        label: "Resources",
        dropdown: [
            {
                title: "Learning & Insights",
                description: "Stay updated with the latest trends in sourcing, design, manufacturing, and operational excellence.",
                items: [
                    {
                        href: "/case-studies",
                        label: "Case Studies",
                        description: "Success stories • Project highlights",
                        iconType: "svg",
                        icon: "heroicons:chart-pie-20-solid"
                    },
                    {
                        href: "/blog",
                        label: "Industry Blog",
                        description: "Business insights • Best practices",
                        iconType: "svg",
                        icon: "heroicons:document-text-20-solid"
                    },
                    {
                        href: "/webinars",
                        label: "Webinars & Events",
                        description: "Live sessions • Expert talks",
                        iconType: "svg",
                        icon: "heroicons:video-camera-20-solid"
                    },
                    {
                        href: "/whitepapers",
                        label: "White Papers",
                        description: "Research • Strategic guides",
                        iconType: "svg",
                        icon: "heroicons:academic-cap-20-solid"
                    }
                ]
            },
            {
                title: "Tools & Downloads",
                description: "Access our comprehensive resource library",
                items: [
                    {
                        href: "/downloads/catalogs",
                        label: "Product Catalogs",
                        description: "Complete specifications",
                        badge: "PDF",
                        iconType: "svg",
                        icon: "heroicons:folder-20-solid"
                    },
                    {
                        href: "/downloads/certifications",
                        label: "Certifications",
                        description: "ISO • Quality standards",
                        badge: "Verified",
                        iconType: "svg",
                        icon: "heroicons:shield-check-20-solid"
                    },
                    {
                        href: "/calculator",
                        label: "Cost Calculator",
                        description: "Estimate project costs",
                        badge: "Free Tool",
                        iconType: "svg",
                        icon: "heroicons:calculator-20-solid"
                    }
                ]
            }
        ]
    },
    {
        id: "company",
        href: "#",
        label: "Company",
        dropdown: [
            {
                title: "About XMB",
                description: "Learn more about our company, values, and the team behind our business excellence across sourcing, design, manufacturing, and operations.",
                items: [
                    {
                        href: "/about",
                        label: "Our Story",
                        description: "Mission • Vision • Values",
                        iconType: "svg",
                        icon: "heroicons:building-office-2-20-solid"
                    },
                    {
                        href: "/team",
                        label: "Leadership Team",
                        description: "Meet our experts",
                        iconType: "svg",
                        icon: "heroicons:user-group-20-solid"
                    },
                    {
                        href: "/capabilities",
                        label: "Our Capabilities",
                        description: "Global network • Service excellence",
                        iconType: "svg",
                        icon: "heroicons:building-storefront-20-solid"
                    },
                    {
                        href: "/sustainability",
                        label: "Sustainability",
                        description: "Environmental commitment",
                        iconType: "svg",
                        icon: "heroicons:leaf-20-solid"
                    }
                ]
            },
            {
                title: "Connect With Us",
                description: "Get in touch and explore opportunities",
                items: [
                    {
                        href: "/contact",
                        label: "Contact Us",
                        description: "Get in touch with our team",
                        iconType: "svg",
                        icon: "heroicons:phone-20-solid"
                    },
                    {
                        href: "/careers",
                        label: "Careers",
                        description: "Join our growing team",
                        badge: "We're hiring",
                        iconType: "svg",
                        icon: "heroicons:briefcase-20-solid"
                    },
                    {
                        href: "/partners",
                        label: "Partner Program",
                        description: "Become a partner",
                        iconType: "svg",
                        icon: "heroicons:hand-raised-20-solid"
                    },
                    {
                        href: "/news",
                        label: "News & Press",
                        description: "Latest updates",
                        iconType: "svg",
                        icon: "heroicons:newspaper-20-solid"
                    }
                ]
            }
        ]
    }
];

export const mobileNavigationLinks: NavLink[] = [
    {
        id: "projects",
        href: "/",
        label: "Projects"
    },
    {
        id: "contact",
        href: "/contact",
        label: "Contact"
    },
    {
        id: "services",
        href: "/services",
        label: "Services"
    },
    {
        id: "about",
        href: "/about",
        label: "About Us"
    },
    {
        id: "blog",
        href: "/blog",
        label: "Blog"
    }
];
