/**
 * PORTFOLICA - DATA CONFIGURATION FILE
 * Anda bisa dengan sangat mudah mengubah seluruh informasi website, nama, bio,
 * proyek, riwayat kerja, testimoni, review, dan link media sosial langsung dari file ini!
 */

export const siteConfig = {
  meta: {
    title: "Daniel Richard Ransun - Senior Product Designer & Creative Director",
    description: "Personal Portfolio Website - Crafted with precision, sleek interactions, and high conversion design.",
    author: "Daniel Richard Ransun",
    location: "Jakarta, Indonesia & Worldwide Remote"
  },
  
  // Profil & Hero
  profile: {
    name: "Daniel Richard Ransun",
    firstName: "Daniel",
    lastName: "Richard Ransun",
    role: "Senior Product Designer & Creative Director",
    avatar: "./src/assets/images/profile-image.png",
    navbarAvatar: "./src/assets/images/profile-navbar.png",
    statusBadge: {
      active: true,
      text: "Available for work"
    },
    rating: {
      score: "4.9 / 5",
      count: "Helped 120+ businesses & counting"
    },
    tagline: "I build digital experiences that drive real growth for your business. Let's partner to create work that gets results.",
    ctaPrimary: {
      text: "Start a Project",
      link: "#contact"
    },
    ctaSecondary: {
      text: "See Projects",
      link: "#projects"
    },
    email: "hello@danielrichard.design",
    bookingLink: "https://cal.com"
  },

  // Hero Showcase Strip / Infinite Auto-scrolling Marquee
  showcase: [
    { image: "./src/assets/images/showcase-watch.png", title: "Smart Watch UI", projectId: "shopora" },
    { image: "./src/assets/images/showcase-vr.png", title: "Vision Interface", projectId: "edunova" },
    { image: "./src/assets/images/showcase-phone.png", title: "Mobile Wallet", projectId: "paynest" },
    { image: "./src/assets/images/project-paynest.png", title: "Display Terminal", projectId: "connecto" },
    { image: "./src/assets/images/project-connecto.png", title: "Tablet Interface", projectId: "connecto" },
    { image: "./src/assets/images/project-shopora.png", title: "Editorial ST10 Book", projectId: "shopora" },
    { image: "./src/assets/images/project-medilink.png", title: "Health Device", projectId: "medilink" },
    { image: "./src/assets/images/project-travelio.png", title: "Spatial Studio", projectId: "travelio" }
  ],

  // Quick Info Strip under Showcase Marquee (Exact Portfolica Reference)
  quickInfo: {
    role: "Designer and front-end engineer",
    basedIn: "Lisbon, remote-friendly",
    previously: "Loopcraft, Tallyhive",
    availability: "Open for projects from November"
  },

  // Collaborators & Clients
  collaborators: [
    { name: "LOGOIPSUM", icon: "⬡" },
    { name: "LOGOIPSUM", icon: "❖" },
    { name: "Logoipsum", icon: "✹" },
    { name: "Logoipsum", icon: "✿" }
  ],

  // About Section (Framer Interactive Scroll Replica)
  about: {
    badge: "About",
    portraitImage: "./src/assets/images/profile-about.png",
    statusText: "Open for new projects",
    heading: "Eight years of making complicated software easier to use.",
    bio1: "Since 2018 I’ve designed software for small teams in analytics, finance, health and developer tools. Most projects start with a workflow everyone agrees is painful and nobody has had time to fix.",
    bio2: "I cover the whole path: talking to users, sketching flows, designing in Figma and building the production front end. Because one person does both, nothing gets lost between the mockup and what ships.",
    ctaText: "Book a 20-minute call",
    ctaLink: "#contact",
    rolesLabel: "Where I’ve worked",
    roles: [
      {
        period: "2023 – now",
        role: "Independent",
        company: "Lisbon",
        desc: "Design and front-end builds for early-stage teams."
      },
      {
        period: "2020 – 2023",
        role: "Senior product designer",
        company: "Loopcraft",
        desc: "Led the design system and the redesign of the core editor."
      },
      {
        period: "2018 – 2020",
        role: "Product designer",
        company: "Tallyhive",
        desc: "First design hire. Shaped invoicing and onboarding from the ground up."
      }
    ],
    toolkit: [
      "Figma",
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Framer"
    ]
  },

  // Statistik & Metrics
  stats: [
    { value: "100%", label: "Client Satisfaction Rate" },
    { value: "50+", label: "Projects Completed" },
    { value: "4X", label: "Client Growth" },
    { value: "7+", label: "Years of Experience" }
  ],

  // Riwayat Karir
  career: [
    {
      role: "Design Director",
      company: "Solvix",
      period: "2025 - Now",
      desc: "Leading design vision, team mentorship, and scalable multi-platform design systems."
    },
    {
      role: "Sr. Product Designer",
      company: "Coreva",
      period: "2024 - 2025",
      desc: "Spearheaded user research, conversion optimization, and core mobile app features."
    },
    {
      role: "Product Designer",
      company: "Belvo",
      period: "2015 - 2024",
      desc: "Designed intuitive fintech dashboards, APIs documentation UI, and checkout flows."
    },
    {
      role: "UI/UX Designer",
      company: "Arvion",
      period: "2012 - 2015",
      desc: "Created modern brand identities, responsive web layouts, and interactive prototypes."
    }
  ],

  // Skills & Capabilities
  skills: [
    "UX-UI Design",
    "Product Strategy",
    "Design Systems",
    "Web Development",
    "Mobile Apps",
    "Brand Identity",
    "Interaction Design",
    "Prototyping"
  ],

  // Daftar Proyek
  projects: [
    {
      id: "connecto",
      title: "Connecto",
      year: "2023",
      category: "Telecom",
      industry: "Telecom",
      subtitle: "This project solves common e-commerce usability challenges by delivering a seamless shopping experience focused on higher sales conversions.",
      description: "Connecto is a telecom app for recharges, tracking, support, and seamless everyday mobile management, designed for modern users.",
      challengeParas: [
        "Connecto is a telecom app for recharges, tracking, support, & seamless everyday mobile management.",
        "I worked across product design and system refinement, focusing on simplifying core user flows, improving usability, and ensuring a consistent experience across key features."
      ],
      approachParas: [
        "This project tackles core challenge by building a intuitive digital experience focused on maximizing conversions.",
        "I approached the project with a focus on clarity and usability, mapping key user journeys before translating them into simple, scalable interface patterns. The goal was to reduce friction in everyday tasks while maintaining consistency."
      ],
      image: "./src/assets/images/project-connecto.png",
      featureImage1: "./src/assets/images/project-connecto-feat1.png",
      featureImage2: "./src/assets/images/project-connecto-feat2.png",
      featured: true,
      liveUrl: "https://connecto.example.com"
    },
    {
      id: "paynest",
      title: "PayNest",
      year: "2024",
      category: "Fintech",
      industry: "Fintech",
      subtitle: "This project solves common e-commerce usability challenges by delivering a seamless shopping experience focused on higher sales conversions.",
      description: "PayNest is a digital wallet app for instant transfers, bill payments, expense tracking, and secure daily transactions.",
      challengeParas: [
        "PayNest is a digital wallet app for instant transfers, bill payments, expense tracking, and secure daily transactions.",
        "I worked across product design and system refinement, focusing on simplifying core user flows, improving usability, and ensuring a consistent experience across key features."
      ],
      approachParas: [
        "This project solves core usability problems by delivering a fast, intuitive, and conversion-optimized experience.",
        "I approached the project with a focus on clarity and usability, mapping key user journeys before translating them into simple, scalable interface patterns. The goal was to reduce friction in everyday tasks while maintaining consistency."
      ],
      image: "./src/assets/images/project-paynest.png",
      featureImage1: "./src/assets/images/project-paynest-feat1.png",
      featureImage2: "./src/assets/images/project-paynest-feat2.png",
      featured: true,
      liveUrl: "https://paynest.example.com"
    },
    {
      id: "shopora",
      title: "Shopora",
      year: "2014",
      category: "E-commerce",
      industry: "E-commerce",
      subtitle: "This project solves common e-commerce usability challenges by delivering a seamless shopping experience focused on higher sales conversions.",
      description: "Shopora is an e-commerce app for browsing, cart management, secure checkout, and fast product delivery.",
      challengeParas: [
        "Shopora is an e-commerce app for browsing, cart management, secure checkout, and fast product delivery.",
        "I worked across product design and system refinement, focusing on simplifying core user flows, improving usability, and ensuring a consistent experience across key features."
      ],
      approachParas: [
        "This project focuses on simplifying the buying journey with a fast, user-friendly, and conversion-driven interface.",
        "I approached the project with a focus on clarity, mapping key user journeys before translating them into simple, scalable interface patterns. The goal was to reduce friction in everyday tasks while maintaining consistency across the product as features expanded."
      ],
      image: "./src/assets/images/project-shopora.png",
      featureImage1: "./src/assets/images/project-shopora-feat1.png",
      featureImage2: "./src/assets/images/project-shopora-feat2.png",
      featured: true,
      liveUrl: "https://shopora.example.com"
    },
    {
      id: "edunova",
      title: "EduNova",
      year: "2026",
      category: "Education",
      industry: "Education",
      subtitle: "This project solves common e-commerce usability challenges by delivering a seamless shopping experience focused on higher sales conversions.",
      description: "EduNova is an online learning platform for courses, progress tracking, live sessions, and smart learning management built for modern students.",
      challengeParas: [
        "EduNova is an online learning platform for courses, progress tracking, live sessions, and smart learning management built for modern students.",
        "I worked across product design and system refinement, focusing on simplifying core user flows, improving usability, and ensuring a consistent experience across key features."
      ],
      approachParas: [
        "This project focuses on improving usability & learning flow while maximizing conversion through clean UX design.",
        "I approached the project with a focus on clarity and usability, mapping key user journeys before translating them into simple, scalable interface patterns. The goal was to reduce friction in tasks while maintaining consistency across the product as features expanded."
      ],
      image: "./src/assets/images/project-edunova.png",
      featureImage1: "./src/assets/images/project-edunova-feat1.png",
      featureImage2: "./src/assets/images/project-edunova-feat2.png",
      featured: true,
      liveUrl: "https://edunova.example.com"
    },
    {
      id: "medilink",
      title: "MediLink",
      year: "2026",
      category: "Healthcare",
      industry: "Healthcare",
      subtitle: "This project solves common e-commerce usability challenges by delivering a seamless shopping experience focused on higher sales conversions.",
      description: "MediLink is a healthcare app for doctor appointments, medical reports, consultations, and patient management built for modern users.",
      challengeParas: [
        "MediLink is a healthcare app for doctor appointments, medical reports, consultations, and patient management built for modern users.",
        "I worked across product design and system refinement, focusing on simplifying core user flows, improving usability, and ensuring a consistent experience across key features."
      ],
      approachParas: [
        "This project focuses on simplifying patient journeys and increasing conversions through intelligent UX.",
        "I approached the project with a focus on clarity and usability, mapping key user journeys before translating them into scalable interface patterns. The goal was to reduce friction in everyday tasks while maintaining consistency across the product as features expanded."
      ],
      image: "./src/assets/images/project-medilink.png",
      featureImage1: "./src/assets/images/project-medilink-feat1.png",
      featureImage2: "./src/assets/images/project-medilink-feat2.png",
      featured: true,
      liveUrl: "https://medilink.example.com"
    },
    {
      id: "travelio",
      title: "Travelio",
      year: "2026",
      category: "Travel & Tourism",
      industry: "Travel & Tourism",
      subtitle: "This project solves common e-commerce usability challenges by delivering a seamless shopping experience focused on higher sales conversions.",
      description: "Travelio is a travel booking app for flights, hotels, trip planning, and real-time journey tracking designed for users.",
      challengeParas: [
        "Travelio is a travel booking app for flights, hotels, trip planning, and real-time journey tracking designed for users.",
        "I worked across product design and system refinement, focusing on simplifying core user flows, improving usability, and ensuring a consistent experience across key features."
      ],
      approachParas: [
        "This project tackles core challenge by building a intuitive digital experience focused on maximizing conversions.",
        "I approached the project with focus on clarity and usability, mapping key user journeys before turning them into scalable interface patterns. The goal was to reduce friction in tasks while keeping consistency across the product as features grew."
      ],
      image: "./src/assets/images/project-travelio.png",
      featureImage1: "./src/assets/images/project-travelio-feat1.png",
      featureImage2: "./src/assets/images/project-travelio-feat2.png",
      featured: true,
      liveUrl: "https://travelio.example.com"
    }
  ],

  // 4-Step Process
  process: [
    {
      step: "01",
      title: "Discovery & Empathy",
      desc: "Every great design starts with empathy. I dive deep into the problem to uncover insights that shape the solid foundation."
    },
    {
      step: "02",
      title: "Strategy & Wireframing",
      desc: "I blend strategy, usability, and visual storytelling to design experiences that feel intuitive and look distinct."
    },
    {
      step: "03",
      title: "Feedback & Iteration",
      desc: "Through feedback, testing, and iteration, I ensure the design works in the real world — not just on Figma."
    },
    {
      step: "04",
      title: "Handoff & Scalability",
      desc: "I guide projects from concept to launch, helping teams build scalable design systems and maintain consistent, well-crafted brand experiences across products."
    }
  ],

  // Services
  services: [
    {
      icon: "figma",
      title: "UX-UI & Creative",
      desc: "Crafting clean, user-friendly sites that reflect your brand & deliver a seamless experience."
    },
    {
      icon: "code",
      title: "Web Development",
      desc: "Building fast, no-code websites that are easy to manage and optimized for every device."
    },
    {
      icon: "brand",
      title: "Brand Identity",
      desc: "Cohesive visual systems — from logos to colors — make your brand instantly recognizable."
    },
    {
      icon: "consultation",
      title: "Design Consultation",
      desc: "Offering strategic guidance to help you plan, refine, and execute your design ideas effectively."
    }
  ],

  // Testimonials / Client Reviews
  testimonials: [
    {
      rating: 5.0,
      quote: "Alex truly understood my vision & turned it into impactful designs, the results went way beyond my expectations!",
      author: "Marcus Rivera",
      role: "Founder at NovaTech",
      avatar: "./src/assets/images/testimonial-marcus.png"
    },
    {
      rating: 4.9,
      quote: "As a small business owner, the entire process felt effortless thanks to Alex’s clear guidance & design excellence.",
      author: "Sophia Laurent",
      role: "CEO at VibeStudio",
      avatar: "./src/assets/images/testimonial-sophia.png"
    },
    {
      rating: 4.8,
      quote: "Running a startup is challenging, but Alex Morgan made this entire product rebranding smooth and completely hassle-free.",
      author: "Daniel Zhang",
      role: "Product Lead at FlowScale",
      avatar: "./src/assets/images/testimonial-daniel.png"
    }
  ],

  // FAQs
  faqs: [
    {
      question: "How do we get started?",
      answer: "Simply fill out the project form below or book a quick 30-minute discovery call. We will discuss your goals, scope, timeline, and deliverables."
    },
    {
      question: "Can you redesign my existing website or app?",
      answer: "Yes! I conduct a thorough UX audit of your current product, pinpointing friction points and redesigning the experience to maximize usability and conversions."
    },
    {
      question: "Do you also handle development or just design?",
      answer: "Both. I provide end-to-end services from Figma prototypes to fully responsive, clean, and production-ready code."
    },
    {
      question: "What tools do you use for design?",
      answer: "Framer, Figma, Adobe Suite, Webflow, and modern web development technologies (HTML, Modern CSS, JavaScript, React)."
    },
    {
      question: "Can I request additional revisions?",
      answer: "Absolutely. Every project includes dedicated feedback cycles to ensure you are 100% satisfied with the outcome before final handoff."
    }
  ],

  // Social Links
  socials: [
    { name: "Dribbble", url: "https://dribbble.com" },
    { name: "Behance", url: "https://behance.net" },
    { name: "Figma", url: "https://figma.com" },
    { name: "Twitter / X", url: "https://x.com" },
    { name: "LinkedIn", url: "https://linkedin.com" }
  ],

  // Footer & Legal
  footer: {
    copyright: `© ${new Date().getFullYear()} Daniel Richard Ransun. All rights reserved.`,
    newsletterNote: "Subscribe to get early access to special offers, design insights, and exclusive project updates.",
    responseGuarantee: "We will reach out to you within 24hrs"
  }
};
