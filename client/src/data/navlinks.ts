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
                title: "Manufacturing Services",
                description: "Comprehensive manufacturing solutions from precision machining to complete assemblies. Accelerate your production with our expert services across multiple domains.",
                items: [
                    {
                        href: "/services/precision-machining",
                        label: "Precision Machining",
                        description: "CNC • High-precision components",
                        iconType: "svg",
                        icon: "cog"
                    },
                    {
                        href: "/services/assembly-manufacturing",
                        label: "Assembly Manufacturing",
                        description: "Production • Complete solutions",
                        iconType: "svg",
                        icon: "wrench"
                    },
                    {
                        href: "/services/quality-control",
                        label: "Quality Assurance",
                        description: "Testing • ISO certified processes",
                        iconType: "svg",
                        icon: "shield-check"
                    },
                    {
                        href: "/services/supply-chain",
                        label: "Supply Chain Management",
                        description: "Logistics • End-to-end solutions",
                        iconType: "svg",
                        icon: "truck"
                    }
                ]
            },
            {
                title: "Service Packages",
                description: "Choose the right service level for your manufacturing needs",
                items: [
                    {
                        href: "/services/basic",
                        label: "Basic Manufacturing",
                        description: "Best for starting up",
                        price: "₹0",
                        badge: "Free",
                        iconType: "svg",
                        icon: "building-factory"
                    },
                    {
                        href: "/services/professional",
                        label: "Professional Services",
                        description: "Best for growing production",
                        price: "₹25k/month",
                        iconType: "svg",
                        icon: "rocket"
                    },
                    {
                        href: "/services/enterprise",
                        label: "Enterprise Solutions",
                        description: "Best for large-scale operations",
                        price: "₹1L/month",
                        iconType: "svg",
                        icon: "building-office"
                    }
                ]
            }
        ]
    },
    {
        id: "solutions",
        href: "#",
        label: "Solutions",
        dropdown: [
            {
                title: "Industry Solutions",
                description: "Specialized manufacturing solutions tailored for different industries with proven expertise and quality standards.",
                items: [
                    {
                        href: "/solutions/automotive",
                        label: "Automotive Manufacturing",
                        description: "Production • Tier 1 & 2 suppliers",
                        iconType: "svg",
                        icon: "car"
                    },
                    {
                        href: "/solutions/aerospace",
                        label: "Aerospace Components",
                        description: "Precision • AS9100 certified",
                        iconType: "svg",
                        icon: "plane"
                    },
                    {
                        href: "/solutions/electronics",
                        label: "Electronics Assembly",
                        description: "SMT • Through-hole assembly",
                        iconType: "svg",
                        icon: "cpu-chip"
                    },
                    {
                        href: "/solutions/medical",
                        label: "Medical Devices",
                        description: "FDA compliant • ISO 13485",
                        iconType: "svg",
                        icon: "heart"
                    }
                ]
            },
            {
                title: "Custom Solutions",
                description: "Tailored manufacturing approaches for unique requirements",
                items: [
                    {
                        href: "/solutions/prototyping",
                        label: "Rapid Prototyping",
                        description: "Fast iteration cycles",
                        price: "₹5k+",
                        iconType: "svg",
                        icon: "bolt"
                    },
                    {
                        href: "/solutions/low-volume",
                        label: "Low Volume Production",
                        description: "Flexible manufacturing",
                        price: "₹15k+",
                        iconType: "svg",
                        icon: "adjustments"
                    },
                    {
                        href: "/solutions/high-volume",
                        label: "High Volume Production",
                        description: "Scalable operations",
                        price: "Custom",
                        iconType: "svg",
                        icon: "chart-bar"
                    }
                ]
            },
            {
                title: "Join Our Platform",
                description: "Register as a customer or supplier to access our manufacturing network",
                items: [
                    {
                        href: "/register/customer",
                        label: "Register as Customer",
                        description: "Access our manufacturing services",
                        badge: "Free",
                        iconType: "svg",
                        icon: "user-group"
                    },
                    {
                        href: "/register/supplier",
                        label: "Register as Supplier",
                        description: "Join our supplier network",
                        badge: "Apply Now",
                        iconType: "svg",
                        icon: "building-factory"
                    },
                    {
                        href: "/login",
                        label: "Login",
                        description: "Access your account",
                        iconType: "svg",
                        icon: "key"
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
                description: "Stay updated with the latest manufacturing trends, case studies, and industry best practices.",
                items: [
                    {
                        href: "/case-studies",
                        label: "Case Studies",
                        description: "Success stories • Project highlights",
                        iconType: "svg",
                        icon: "chart-pie"
                    },
                    {
                        href: "/blog",
                        label: "Manufacturing Blog",
                        description: "Industry insights • Technical articles",
                        iconType: "svg",
                        icon: "document-text"
                    },
                    {
                        href: "/webinars",
                        label: "Webinars & Events",
                        description: "Live sessions • Expert talks",
                        iconType: "svg",
                        icon: "video-camera"
                    },
                    {
                        href: "/whitepapers",
                        label: "White Papers",
                        description: "Research • Technical guides",
                        iconType: "svg",
                        icon: "academic-cap"
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
                        icon: "folder"
                    },
                    {
                        href: "/downloads/certifications",
                        label: "Certifications",
                        description: "ISO • Quality standards",
                        badge: "Verified",
                        iconType: "svg",
                        icon: "badge-check"
                    },
                    {
                        href: "/calculator",
                        label: "Cost Calculator",
                        description: "Estimate project costs",
                        badge: "Free Tool",
                        iconType: "svg",
                        icon: "calculator"
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
                description: "Learn more about our company, values, and the team behind our manufacturing excellence.",
                items: [
                    {
                        href: "/about",
                        label: "Our Story",
                        description: "Mission • Vision • Values",
                        iconType: "svg",
                        icon: "building-office-2"
                    },
                    {
                        href: "/team",
                        label: "Leadership Team",
                        description: "Meet our experts",
                        iconType: "svg",
                        icon: "user-group"
                    },
                    {
                        href: "/facilities",
                        label: "Manufacturing Facilities",
                        description: "Global presence • Local expertise",
                        iconType: "svg",
                        icon: "building-factory-2"
                    },
                    {
                        href: "/sustainability",
                        label: "Sustainability",
                        description: "Environmental commitment",
                        iconType: "svg",
                        icon: "leaf"
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
                        icon: "phone"
                    },
                    {
                        href: "/careers",
                        label: "Careers",
                        description: "Join our growing team",
                        badge: "We're hiring",
                        iconType: "svg",
                        icon: "briefcase"
                    },
                    {
                        href: "/partners",
                        label: "Partner Program",
                        description: "Become a partner",
                        iconType: "svg",
                        icon: "handshake"
                    },
                    {
                        href: "/news",
                        label: "News & Press",
                        description: "Latest updates",
                        iconType: "svg",
                        icon: "newspaper"
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
