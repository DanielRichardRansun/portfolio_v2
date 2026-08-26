/**
 * PORTFOLICA - DATA CONFIGURATION FILE
 * Anda bisa dengan sangat mudah mengubah seluruh informasi website, nama, bio,
 * proyek, riwayat kerja, testimoni, review, dan link media sosial langsung dari file ini!
 */

export const siteConfig = {
  meta: {
    title: "Alex Morgan - Senior Product Designer & Creative Director",
    description: "Personal Portfolio Website Template - Crafted with precision, sleek interactions, and high conversion design.",
    author: "Alex Morgan",
    location: "CDMX, Mexico & Worldwide Remote"
  },
  
  // Profil & Hero
  profile: {
    name: "Alex Morgan",
    firstName: "Alex",
    lastName: "Morgan",
    role: "Senior Product Designer & Creative Director",
    avatar: "./src/assets/images/avatar-profile.png",
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

  // Collaborators & Clients
  collaborators: [
    { name: "LOGOIPSUM", icon: "⬡" },
    { name: "LOGOIPSUM", icon: "❖" },
    { name: "Logoipsum", icon: "✹" },
    { name: "Logoipsum", icon: "✿" }
  ],

  // About Section
  about: {
    badge: "About me",
    heading: "Mindset, methods, & experience",
    intro: "I help brands find clarity and express it through strong, thoughtful design.",
    backgroundTitle: "Background",
    backgroundText: "Originally from CDMX, I’ve been designing identities for 7+ years, working with startups, restaurants, hoteliers, & creative founders across Mexico and worldwide.",
    approachTitle: "My Approach",
    approachText: "I believe good design starts with empathy. I ask questions, listen closely, and build brands that feel as good as they look — honest, beautiful, and built to last."
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
      category: "Web Design",
      industry: "SaaS / Collaboration",
      subtitle: "A collaboration platform for remote teams to stay aligned, track progress, and communicate seamlessly.",
      description: "Connecto is a unified workspace app built to eliminate communication silos across distributed teams.",
      challenge: "Connecto needed a redesigned dashboard and workflow interface that reduced cognitive overload, making task updates and team chats intuitive without sacrificing speed.",
      approach: "We streamlined the layout with focus modes, standardized design tokens, and crafted a distraction-free user flow for real-time collaboration.",
      image: "./src/assets/images/project-connecto.png",
      featured: true,
      liveUrl: "https://connecto.example.com"
    },
    {
      id: "paynest",
      title: "PayNest",
      year: "2024",
      category: "Fintech / App",
      industry: "Fintech",
      subtitle: "This project solves common financial usability challenges by delivering a seamless mobile wallet experience.",
      description: "PayNest is a digital wallet app for instant transfers, bill payments, expense tracking, and secure daily transactions.",
      challenge: "PayNest faced friction during multi-step checkout and wallet funding, causing drop-offs among first-time fintech users.",
      approach: "I worked across product design and system refinement, simplifying core user flows, adding clear visual feedback, and implementing biometric quick-pay.",
      image: "./src/assets/images/project-paynest.png",
      featured: true,
      liveUrl: "https://paynest.example.com"
    },
    {
      id: "shopora",
      title: "Shopora",
      year: "2024",
      category: "E-Commerce",
      industry: "E-Commerce & Retail",
      subtitle: "Elevating the shopping experience with intuitive search, smart filtering, and rapid single-page checkout.",
      description: "Shopora is a high-growth luxury retail marketplace offering curated fashion and lifestyle collections.",
      challenge: "Catalog browsing was sluggish and checkout abandonment rates were high on mobile devices.",
      approach: "Re-architected the product discovery pages, added instant variant preview modals, and streamlined mobile checkout to 2 steps.",
      image: "./src/assets/images/project-shopora.png",
      featured: true,
      liveUrl: "https://shopora.example.com"
    },
    {
      id: "edunova",
      title: "EduNova",
      year: "2024",
      category: "EdTech",
      industry: "Education & Learning",
      subtitle: "An interactive learning management ecosystem connecting students, educators, and course creators.",
      description: "EduNova empowers learners worldwide with bite-sized video courses, interactive quizzes, and cohort discussions.",
      challenge: "Learners struggled to keep track of their course milestones and interact with mentors effectively.",
      approach: "Designed a personalized dashboard with progress tracking, streak rewards, and synchronized video note-taking.",
      image: "./src/assets/images/project-edunova.png",
      featured: true,
      liveUrl: "https://edunova.example.com"
    },
    {
      id: "medilink",
      title: "MediLink",
      year: "2026",
      category: "HealthTech",
      industry: "Healthcare",
      subtitle: "Connecting patients with verified specialists and telehealth consultations in minutes.",
      description: "MediLink is a digital healthcare platform providing secure appointment bookings, lab reports, and telehealth.",
      challenge: "Patients found booking consultations complicated and medical history data hard to parse on small screens.",
      approach: "Built an accessible, high-contrast UI with clear doctor rating cards, real-time availability slots, and encrypted records.",
      image: "./src/assets/images/project-medilink.png",
      featured: true,
      liveUrl: "https://medilink.example.com"
    },
    {
      id: "travelio",
      title: "Travelio",
      year: "2025",
      category: "Travel & Lifestyle",
      industry: "Travel",
      subtitle: "Smart itinerary planning and curated local travel experiences worldwide.",
      description: "Travelio is an all-in-one travel companion for discovering hidden gems, booking stays, and sharing custom itineraries.",
      challenge: "Users needed a seamless way to collaborate with friends on trip itineraries and split expenses on the go.",
      approach: "Created a collaborative drag-and-drop itinerary board with integrated map view and instant currency conversion.",
      image: "./src/assets/images/project-travelio.png",
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
      title: "UX-UI & Creative",
      desc: "Crafting clean, user-friendly sites and apps that reflect your brand & deliver a seamless experience."
    },
    {
      title: "Web Development",
      desc: "Building fast, high-performance websites that are easy to manage and optimized for every device."
    },
    {
      title: "Brand Identity",
      desc: "Cohesive visual systems — from logos to typography and colors — make your brand instantly recognizable."
    },
    {
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
    copyright: `© ${new Date().getFullYear()} Alex Morgan. All rights reserved.`,
    newsletterNote: "Subscribe to get early access to special offers, design insights, and exclusive project updates.",
    responseGuarantee: "We will reach out to you within 24hrs"
  }
};
