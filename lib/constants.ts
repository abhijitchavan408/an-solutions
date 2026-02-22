export const SITE_CONFIG = {
  name: "AN Solutions",
  tagline: "Building Digital Solutions That Drive Growth",
  description:
    "We deliver cutting-edge website development, mobile app development, UI/UX design, and custom software solutions for modern businesses.",
  email: "ansolutions.dev@gmail.com",
  phone: "+91 9657782463",
  address: "Bock-3 International Tech Park Kharadi,Pune. 411014",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "web-development",
    title: "Website Development",
    shortDescription:
      "Responsive, high-performance websites built with modern frameworks and best practices.",
    fullDescription:
      "From corporate websites to complex web applications, we build responsive, high-performance digital experiences using React, Next.js, and modern web technologies. Our websites are optimized for speed, SEO, and conversion.",
    features: [
      "Custom website design and development",
      "E-commerce solutions",
      "Progressive Web Apps (PWA)",
      "CMS integration",
      "Performance optimization",
      "SEO-friendly architecture",
    ],
    icon: "Globe",
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    shortDescription:
      "Native and cross-platform mobile applications for iOS and Android.",
    fullDescription:
      "We create native and cross-platform mobile applications that deliver seamless experiences across iOS and Android. Using React Native and Flutter, we build apps that are fast, reliable, and engaging.",
    features: [
      "iOS and Android development",
      "Cross-platform solutions",
      "UI/UX mobile design",
      "App Store optimization",
      "Push notifications and analytics",
      "Maintenance and support",
    ],
    icon: "Smartphone",
  },
  {
    id: "uiux-design",
    title: "UI/UX Design",
    shortDescription:
      "User-centered design that creates intuitive, beautiful digital experiences.",
    fullDescription:
      "Our design team crafts user-centered interfaces that are both beautiful and functional. We follow a research-driven approach to create intuitive experiences that delight users and drive engagement.",
    features: [
      "User research and personas",
      "Wireframing and prototyping",
      "Visual design systems",
      "Usability testing",
      "Interaction design",
      "Design system creation",
    ],
    icon: "Palette",
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    shortDescription:
      "Tailored software solutions designed to solve your unique business challenges.",
    fullDescription:
      "We build tailored software solutions that automate workflows, integrate systems, and scale with your business. From enterprise applications to SaaS platforms, our custom solutions are built for reliability and growth.",
    features: [
      "Enterprise application development",
      "SaaS platform development",
      "API design and integration",
      "Cloud infrastructure setup",
      "Database architecture",
      "DevOps and CI/CD pipelines",
    ],
    icon: "Code",
  },
] as const;

export const PORTFOLIO_PROJECTS = [
  {
    id: "finpay-dashboard",
    title: "FinPay Dashboard",
    description:
      "A comprehensive financial analytics dashboard with real-time data visualization, transaction tracking, and AI-powered insights for fintech startup FinPay.",
    category: "Web Application",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Chart.js"],
    image: "/images/portfolio/finpay.jpg",
  },
  {
    id: "healthtrack-app",
    title: "HealthTrack Mobile",
    description:
      "Cross-platform health and wellness tracking application with wearable device integration, personalized recommendations, and social fitness features.",
    category: "Mobile App",
    techStack: ["React Native", "Node.js", "MongoDB", "Firebase", "HealthKit"],
    image: "/images/portfolio/healthtrack.jpg",
  },
  {
    id: "shopverse-ecommerce",
    title: "ShopVerse E-Commerce",
    description:
      "A high-performance e-commerce platform featuring AI-powered product recommendations, real-time inventory management, and seamless checkout experiences.",
    category: "E-Commerce",
    techStack: ["Next.js", "Stripe", "Prisma", "Redis", "AWS"],
    image: "/images/portfolio/shopverse.jpg",
  },
  {
    id: "edulearn-platform",
    title: "EduLearn Platform",
    description:
      "An interactive online learning platform with video streaming, live classes, progress tracking, and collaborative tools for educators and students.",
    category: "SaaS Platform",
    techStack: ["React", "Python", "Django", "WebRTC", "AWS S3"],
    image: "/images/portfolio/edulearn.jpg",
  },
  {
    id: "logismart-system",
    title: "LogiSmart System",
    description:
      "Enterprise logistics management system with route optimization, real-time fleet tracking, and predictive analytics for supply chain operations.",
    category: "Enterprise Software",
    techStack: ["TypeScript", "Node.js", "PostgreSQL", "Docker", "Kubernetes"],
    image: "/images/portfolio/logismart.jpg",
  },
  {
    id: "artisan-portfolio",
    title: "Artisan Creative Portfolio",
    description:
      "A stunning portfolio website for a creative agency featuring immersive animations, interactive galleries, and a custom CMS for content management.",
    category: "Website",
    techStack: ["Next.js", "Framer Motion", "Sanity CMS", "Tailwind CSS"],
    image: "/images/portfolio/artisan.jpg",
  },
] as const;

export const TEAM_MEMBERS = [
  {
    name: "Abhijit Chavan",
    role: "CEO & Co-Founder",
    bio: "10+ years in tech leadership",
  },
  {
    name: "Neha Chavan",
    role: "Head of Design",
    bio: "Full-stack architect with expertise in cloud infrastructure and distributed systems.",
  },
  {
    name: "Prasad Kakade",
    role: "Lead Developer",
    bio: "Award-winning designer specializing in user experience for enterprise and consumer products.",
  }
] as const;

export const STATS = [
  { value: "70+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "10+", label: "Team Members" },
  { value: "2+", label: "Years Experience" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "AN Solutions transformed our outdated systems into a modern, scalable platform. Their team's expertise and professionalism exceeded our expectations.",
    author: "David Miller",
    role: "CTO, FinPay Inc.",
  },
  {
    quote:
      "The mobile app they built for us has been a game-changer. User engagement increased by 300% within the first quarter of launch.",
    author: "Lisa Tran",
    role: "Product Director, HealthTrack",
  },
  {
    quote:
      "Working with AN Solutions felt like having an extension of our own team. They truly understood our vision and delivered beyond what we imagined.",
    author: "Robert Kim",
    role: "Founder, ShopVerse",
  },
] as const;
