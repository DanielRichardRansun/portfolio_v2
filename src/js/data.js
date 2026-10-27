/**
 * PORTFOLICA - DATA CONFIGURATION FILE
 * Anda bisa dengan sangat mudah mengubah seluruh informasi website, nama, bio,
 * proyek, riwayat kerja, testimoni, review, dan link media sosial langsung dari file ini!
 */

export const siteConfig = {
  meta: {
    title: "Daniel Richard Ransun - Full Stack Web Developer",
    description: "Portfolio of Daniel Richard Ransun — Full Stack Web Developer building useful and impactful digital solutions.",
    author: "Daniel Richard Ransun",
    location: "Surabaya, Indonesia"
  },
  
  // Profil & Hero
  profile: {
    name: "Daniel Richard Ransun",
    firstName: "Daniel",
    lastName: "Richard Ransun",
    role: "Web & Digital Solutions Developer",
    avatar: "./src/assets/images/profile-image.png",
    navbarAvatar: "./src/assets/images/profile-navbar.png",
    statusBadge: {
      active: true,
      text: "Available for work"
    },
    rating: {
      score: "4.9 / 5",
      count: "Helped 50+ Businesses & Clients"
    },
    tagline: "I build web systems and digital solutions that solve real problems and drive real growth for your business.",
    ctaPrimary: {
      text: "See My Work",
      link: "all-projects.html"
    },
    ctaSecondary: {
      text: "Contact Me",
      link: "contact.html"
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
    role: "Web & Digital Solutions Developer",
    basedIn: "Surabaya, Indonesia",
    previously: "PT Muda Karya Krya, Billstone",
    availability: "Open for new projects"
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
    heading: "4+ years building functional and impactful web solutions.",
    bio1: "Since 2021 I've been developing web apps for corporate and global environments. Most projects start with a real business problem that needs a reliable digital solution.",
    bio2: "I handle the full stack: from coding in Laravel and React to deployment, DNS, SEO, and production. One developer covering the full cycle means nothing falls through the cracks.",
    ctaText: "Book a 20-minute call",
    ctaLink: "contact.html",
    rolesLabel: "Where I’ve worked",
    roles: [
      {
        period: "2025 – Present",
        role: "Full-Stack Web Developer",
        company: "PT Muda Karya Krya",
        desc: "Driving digital transformation and managing scalable web infrastructure."
      },
      {
        period: "2026 – 2027",
        role: "Freelance Tech Support",
        company: "Billstone Official",
        desc: "Technical maintenance, performance optimization, and migration."
      },
      {
        period: "2024 – 2025",
        role: "Web Developer Intern",
        company: "PT Muda Karya Krya",
        desc: "Building professional CMS websites while honing UI/UX and web skills."
      }
    ],
    toolkit: [
      "Laravel",
      "React",
      "WordPress",
      "JavaScript",
      "PHP",
      "MySQL"
    ]
  },

  // Statistik & Metrics
  stats: [
    { value: "5", label: "Years of Experience" },
    { value: "20", label: "Projects Launched" },
    { value: "100k+", label: "Global Users Reached" },
    { value: "18", label: "Professional Certifications" }
  ],

  // Riwayat Karir
  career: [
    {
      role: "Full-Stack Web Developer",
      company: "PT Muda Karya Krya",
      period: "2025 - Present",
      desc: "Driving digital transformation and managing scalable web infrastructure for global operations."
    },
    {
      role: "Freelance Tech Support",
      company: "Billstone Official",
      period: "2026 - 2027",
      desc: "Technical website maintenance, performance optimization, and infrastructure migration."
    },
    {
      role: "Web Developer Intern",
      company: "PT Muda Karya Krya",
      period: "2024 - 2025",
      desc: "Building professional CMS-based websites while honing UI/UX and communication skills."
    },
    {
      role: "Freelance Web & Design",
      company: "Ransite Official",
      period: "2021 - Present",
      desc: "Freelance web development and design services for business and e-commerce clients."
    }
  ],

  // Skills & Capabilities
  skills: [
    "Web Development",
    "Full-Stack",
    "Laravel & PHP",
    "React & Next.js",
    "WordPress & CMS",
    "SEO Optimization",
    "Database Management",
    "Deployment & DevOps"
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

  services: [
    {
      icon: "code",
      title: "Web Development",
      desc: "Building fast, responsive web applications modern UI/UX and clean design using React, Next.js, Laravel, and modern technology."
    },
    {
      icon: "figma",
      title: "CMS & Social Media",
      desc: "Developing and managing WordPress, Shopify, and Wix websites while executing visual design and social media content planning."
    },
    {
      icon: "marketing",
      title: "Digital Marketing & Automation",
      desc: "Designing email marketing automation, running digital ad campaigns, and building measurable lead generation strategies."
    },
    {
      icon: "seo",
      title: "SEO & Technical Setup",
      desc: "Implementing SEO strategies and performance optimization, alongside handling VPS hosting, DNS domain, database, business email, and deployment."
    }
  ],

  // Testimonials / Client Reviews
  testimonials: [
    {
      rating: 5.0,
      quote: "Richard truly understood my vision & turned it into an impactful web application, the results went way beyond expectations!",
      author: "Marcus Rivera",
      role: "Founder at NovaTech",
      avatar: "./src/assets/images/testimonial-marcus.png"
    },
    {
      rating: 4.9,
      quote: "As a business owner, the entire development process felt effortless thanks to Richard’s clear guidance & technical excellence.",
      author: "Sophia Laurent",
      role: "CEO at VibeStudio",
      avatar: "./src/assets/images/testimonial-sophia.png"
    },
    {
      rating: 4.8,
      quote: "Running a business is challenging, but Richard made our entire web platform development smooth and completely hassle-free.",
      author: "Daniel Zhang",
      role: "Product Lead at FlowScale",
      avatar: "./src/assets/images/testimonial-daniel.png"
    }
  ],

  // FAQs
  faqs: [
    {
      question: "How do we get started?",
      answer: "Simply fill out the contact form or send me an email. We'll discuss your goals, scope, timeline, and deliverables to get the project rolling."
    },
    {
      question: "What technologies do you work with?",
      answer: "I primarily work with Laravel, React, Next.js, PHP, JavaScript, WordPress, and Wix. For databases, I use MySQL and PostgreSQL."
    },
    {
      question: "Can you redesign or improve my existing website?",
      answer: "Yes! I can audit your current site, fix performance issues, improve SEO, and redesign the experience to maximize usability and conversions."
    },
    {
      question: "Do you handle hosting and deployment?",
      answer: "Absolutely. I handle full-cycle deployment including hosting setup, domain & DNS configuration, business email, SSL, and production launch."
    },
    {
      question: "Can I request revisions after delivery?",
      answer: "Of course. Every project includes feedback cycles to ensure you're 100% satisfied with the outcome before final handoff."
    }
  ],

  // Social Links
  socials: [
    { name: "GitHub", url: "https://github.com/DanielRichardRansun" },
    { name: "LinkedIn", url: "https://linkedin.com/in/danielrichardransun" },
    { name: "Instagram", url: "https://instagram.com/danielrichardransun" },
    { name: "Email", url: "mailto:hello@danielrichard.design" }
  ],

  // Footer & Legal
  footer: {
    copyright: `© ${new Date().getFullYear()} Daniel Richard Ransun. All rights reserved.`,
    newsletterNote: "Subscribe to get early access to special offers, design insights, and exclusive project updates.",
    responseGuarantee: "We will reach out to you within 24hrs"
  }
};
