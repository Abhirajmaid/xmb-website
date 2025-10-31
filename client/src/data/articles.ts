export interface Article {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    subcategory?: string;
    author: string;
    date: string;
    readTime?: string;
    featured?: boolean;
    href?: string;
}

export const articles: Article[] = [
    // Featured Article
    {
        id: 1,
        title: "Pioneering Steel Fabrication for Manufacturing Excellence: XMB's Breakthrough Achievement",
        description: "Discover how XMB revolutionized steel fabrication processes, delivering unprecedented precision and efficiency in large-scale manufacturing projects across multiple industries.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        category: "Case Study",
        subcategory: "Infrastructure",
        author: "XMB Editorial Team",
        date: "Dec 15, 2024",
        readTime: "8 min read",
        featured: true,
        href: "/articles/steel-fabrication-excellence"
    },

    // Sidebar Articles
    {
        id: 2,
        title: "XMB Pioneering A Global Paradigm Shift In Solar Energy Supply Chain Dynamics",
        description: "Transforming renewable energy manufacturing through innovative supply chain optimization.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
        category: "Case Study",
        subcategory: "Renewable Energy",
        author: "XMB Editorial Team",
        date: "Dec 12, 2024",
        readTime: "6 min read",
        href: "/articles/solar-energy-supply-chain"
    },
    {
        id: 3,
        title: "Harnessing And Deploying Data: The Innovative Interface Unit",
        description: "Exploring advanced data analytics solutions for modern manufacturing environments.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
        category: "Blog",
        subcategory: "Data Analytics",
        author: "XMB Editorial Team",
        date: "Dec 10, 2024",
        readTime: "5 min read",
        href: "/articles/data-interface-unit"
    },
    {
        id: 4,
        title: "Accelerating Innovation: XMB's Rapid Deployment Of Smart Manufacturing Solutions",
        description: "Revolutionary approach to implementing Industry 4.0 technologies across manufacturing facilities.",
        image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=300&fit=crop",
        category: "Case Study",
        subcategory: "Industry 4.0",
        author: "XMB Editorial Team",
        date: "Dec 8, 2024",
        readTime: "7 min read",
        href: "/articles/smart-manufacturing-deployment"
    },

    // Bottom Grid Articles
    {
        id: 5,
        title: "Aerospace & Defense Capabilities",
        description: "Advanced manufacturing solutions for mission-critical aerospace applications.",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=225&fit=crop",
        category: "XMBVidz",
        subcategory: "Aerospace & Defense",
        author: "XMB Editorial Team",
        date: "Dec 6, 2024",
        readTime: "4 min read",
        href: "/articles/aerospace-defense-capabilities"
    },
    {
        id: 6,
        title: "Leveraging Data For Autonomous Procurement",
        description: "Revolutionary automation in supply chain and procurement processes.",
        image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=300&fit=crop",
        category: "Press",
        subcategory: "Precision Manufacturing",
        author: "XMB Editorial Team",
        date: "Dec 4, 2024",
        readTime: "6 min read",
        href: "/articles/autonomous-procurement"
    },
    {
        id: 7,
        title: "Delivering Mission-Critical Defense Equipment Reliability",
        description: "Ensuring the highest standards in defense manufacturing and quality assurance.",
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=300&h=225&fit=crop",
        category: "Blog",
        subcategory: "General",
        author: "XMB Editorial Team",
        date: "Dec 2, 2024",
        readTime: "5 min read",
        href: "/articles/defense-equipment-reliability"
    },
    {
        id: 8,
        title: "Powering Sustainability: Harnessing Solar Energy For Manufacturing",
        description: "Innovative renewable energy solutions for sustainable manufacturing operations.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=300&h=225&fit=crop",
        category: "Case Study",
        subcategory: "General",
        author: "XMB Editorial Team",
        date: "Nov 30, 2024",
        readTime: "7 min read",
        href: "/articles/sustainable-manufacturing"
    },

    // Additional Articles for gaZETTe category
    {
        id: 9,
        title: "XMB Quarterly Manufacturing Insights Report",
        description: "Comprehensive analysis of manufacturing trends, innovations, and market outlook for Q4 2024.",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
        category: "gaZETTe",
        subcategory: "Market Analysis",
        author: "XMB Research Team",
        date: "Nov 28, 2024",
        readTime: "12 min read",
        href: "/articles/quarterly-insights-report"
    },
    {
        id: 10,
        title: "Digital Twin Technology: Revolutionizing Manufacturing Efficiency",
        description: "How digital twin implementation is transforming production optimization and predictive maintenance.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
        category: "Blog",
        subcategory: "Digital Technology",
        author: "Dr. Sarah Kim",
        date: "Nov 25, 2024",
        readTime: "9 min read",
        href: "/articles/digital-twin-technology"
    },
    {
        id: 11,
        title: "Sustainable Manufacturing: Carbon Neutral Production Strategies",
        description: "Implementing eco-friendly manufacturing processes and achieving carbon neutrality in industrial operations.",
        image: "https://images.unsplash.com/photo-1497436072909-f71d3d048b2b?w=400&h=300&fit=crop",
        category: "Press",
        subcategory: "Sustainability",
        author: "Environmental Team",
        date: "Nov 22, 2024",
        readTime: "8 min read",
        href: "/articles/carbon-neutral-manufacturing"
    },
    {
        id: 12,
        title: "AI-Powered Quality Control: The Future of Manufacturing",
        description: "Exploring how artificial intelligence is revolutionizing quality assurance and defect detection in manufacturing.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
        category: "Case Study",
        subcategory: "Artificial Intelligence",
        author: "AI Research Division",
        date: "Nov 20, 2024",
        readTime: "10 min read",
        href: "/articles/ai-quality-control"
    }
];

// Helper function to get articles by category
export const getArticlesByCategory = (category: string): Article[] => {
    if (category === "All") {
        return articles;
    }
    return articles.filter(article => article.category === category);
};

// Helper function to get featured article
export const getFeaturedArticle = (): Article | undefined => {
    return articles.find(article => article.featured);
};

// Helper function to get sidebar articles (first 3 non-featured)
export const getSidebarArticles = (): Article[] => {
    return articles.filter(article => !article.featured).slice(0, 3);
};

// Helper function to get bottom grid articles
export const getBottomGridArticles = (): Article[] => {
    return articles.filter(article => !article.featured).slice(3, 7);
};

// Get category badge color
export const getCategoryColor = (category: string): string => {
    // Rising Sun theme: unified brand gradient for all badges
    return "bg-gradient-to-r from-brand-primary to-brand-secondary";
};
