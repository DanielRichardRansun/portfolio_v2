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
    { image: "./src/assets/images/porto/ICIA_App/ICIA_App.jpg", title: "ICIA App", projectId: "icia-app" },
    { image: "./src/assets/images/porto/MyPortfolio/MyPortfolio.png", title: "My Portfolio", projectId: "my-portfolio" },
    { image: "./src/assets/images/porto/ICIA_Judging/ICIA_Judging_Thumbnail.webp", title: "Judging System", projectId: "judging-website" },
    { image: "./src/assets/images/porto/AppleRebrand/AppleRebrand.png", title: "Apple GSAP Web", projectId: "apple-gsap" },
    { image: "./src/assets/images/porto/HoopTourney/HoopTourney.png", title: "HoopTourney", projectId: "hooptourney" },
    { image: "./src/assets/images/porto/GYISJudging/GyisJudging.png", title: "GYIS Admin", projectId: "gyis-admin" },
    { image: "./src/assets/images/porto/Mocraft/Mocraft.png", title: "Mocraft 3D", projectId: "mocraft" },
    { image: "./src/assets/images/porto/KryaGlobal/KryaGlobal.png", title: "Krya Global", projectId: "krya-global" },
    { image: "./src/assets/images/porto/PrivateVault/PrivateVault.png", title: "Billstone Vault", projectId: "billstone-private-vault" }
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
      id: "icia-app",
      title: "ICIA App",
      year: "2026",
      category: "Competition Web App",
      industry: "Event & Education",
      subtitle: "A global event management platform supporting international innovation competitions worldwide.",
      description: "A comprehensive digital management platform developed to handle large-scale international competitions with automated attendee tracking and project submissions.",
      image: "./src/assets/images/porto/ICIA_App/ICIA_App.jpg",
      featureImage1: "./src/assets/images/porto/ICIA_App/ICIA_App.jpg",
      featureImage2: "./src/assets/images/porto/ICIA_App/ICIA_App.jpg",
      keyFeaturesParas: [
        "Built with Laravel and MySQL, ICIA App replaces traditional paperwork with a real-time QR code attendance scanning system, multi-tier team management, and secure online project submission workflows.",
        "The platform features an intuitive administrator dashboard equipped with automated participant verification, live event notifications, and streamlined data export tools."
      ],
      features: [
        "Attendance QR Scan System",
        "Project Submission System",
        "Team Management",
        "Admin Dashboard",
        "Real-time Notifications"
      ],
      outcomeParas: [
        "Successfully served as the backbone infrastructure for ICIA 2026 Cambodia, supporting over 1,000 global participants with zero downtime and seamless operation.",
        "Completely digitized event workflows, consolidating multi-country submissions and judging logistics into a unified, high-reliability platform."
      ],
      outcomes: [
        "Successfully supported ICIA 2026 Cambodia",
        "Served 1,000+ global participants per event",
        "Replaced manual workflows with fully digital system",
        "Integrated all event operations into one platform"
      ],
      tech: ["Laravel", "PHP", "MySQL", "Hostinger", "GitHub"],
      featured: true,
      liveUrl: "https://app.icia.global"
    },
    {
      id: "my-portfolio",
      title: "My Portfolio",
      year: "2025",
      category: "Personal Website",
      industry: "Personal Portfolio",
      subtitle: "A modern interactive portfolio built to showcase development expertise, case studies, and digital solutions.",
      description: "An ultra-clean personal portfolio engineered with React and modern web animation frameworks, optimized for high performance, smooth interactivity, and client conversions.",
      image: "./src/assets/images/porto/MyPortfolio/MyPortfolio.png",
      featureImage1: "./src/assets/images/porto/MyPortfolio/MyPortfolio.png",
      featureImage2: "./src/assets/images/porto/MyPortfolio/MyPortfolio.png",
      keyFeaturesParas: [
        "Architected with a mobile-first philosophy, incorporating fluid micro-animations, theme toggling, and structured case study layouts that highlight engineering process and business impact.",
        "Engineered with strict SEO metadata, fast asset delivery, and contact integrations to ensure maximum discoverability and frictionless client inquiries."
      ],
      features: [
        "Interactive UI with smooth animations",
        "Optimized performance & fast loading",
        "Responsive design (mobile-first approach)",
        "SEO optimization",
        "Project showcase with clear case studies",
        "Contact integration"
      ],
      outcomeParas: [
        "Generated 10+ interview invitations and freelance inquiries within the first 3 months of deployment.",
        "Substantially elevated personal brand positioning, delivering an engaging user experience without compromising speed or accessibility."
      ],
      outcomes: [
        "Generated 10+ interview invitations within 3 months",
        "Improved overall user experience compared to previous versions",
        "Enhanced brand positioning and professional credibility",
        "Smooth animations without compromising performance"
      ],
      tech: ["React", "Next.js", "Tailwind", "Vercel", "GitHub"],
      featured: true,
      liveUrl: "https://danielrichardransun.vercel.app/"
    },
    {
      id: "judging-website",
      title: "Judging Website",
      year: "2025",
      category: "Management System",
      industry: "EdTech & Competition",
      subtitle: "A web-based scoring and certification management system for international innovation competitions.",
      description: "A specialized judging application designed to automate scoring calculations, award classifications, and digital certificate generation for international juries.",
      image: "./src/assets/images/porto/ICIA_Judging/ICIA_Judging_Thumbnail.webp",
      coverImage: "./src/assets/images/porto/ICIA_Judging/ICIA_Judging.png",
      featureImage1: "./src/assets/images/porto/ICIA_Judging/ICIA_Judging_Thumbnail.webp",
      featureImage2: "./src/assets/images/porto/ICIA_Judging/ICIA_Judging.png",
      keyFeaturesParas: [
        "Provides an intuitive mobile-friendly portal allowing judges to evaluate projects on-site in real time, with immediate average score computation and award rubric classification.",
        "Includes an administrative hub featuring automated PDF certificate generation with dynamic recipient fields, cutting hundreds of manual design hours."
      ],
      features: [
        "Automated score calculation",
        "Real-time average scoring system",
        "Award decision automation",
        "Digital certificate auto-generation",
        "Judge mobile-friendly interface",
        "Admin dashboard for score management"
      ],
      outcomeParas: [
        "Successfully deployed across 10+ international competition events, eliminating calculation discrepancies and human error in award distributions.",
        "Automatically generated and distributed over 1,000 verified certificates directly to global participants and mentors."
      ],
      outcomes: [
        "Successfully supported 10+ international events",
        "Enabled judges to score efficiently via mobile devices",
        "Automated award decisions based on scoring metrics",
        "Generated 1,000+ certificates automatically",
        "Reduced human error in score calculation"
      ],
      tech: ["Laravel", "PHP", "MySQL", "Hostinger", "GitHub"],
      featured: false,
      liveUrl: "https://judge.icia.global/"
    },
    {
      id: "apple-gsap",
      title: "Apple GSAP Web",
      year: "2024",
      category: "Animation Demo",
      industry: "Interactive Frontend",
      subtitle: "An Apple-inspired interactive showcase exploring advanced scroll-driven animations and 3D rendering.",
      description: "A high-fidelity landing page exploring cutting-edge web motion design, featuring GSAP timeline orchestration, Three.js 3D models, and scroll-linked product reveals.",
      image: "./src/assets/images/porto/AppleRebrand/AppleRebrand.png",
      featureImage1: "./src/assets/images/porto/AppleRebrand/AppleRebrand.png",
      featureImage2: "./src/assets/images/porto/AppleRebrand/AppleRebrand.png",
      keyFeaturesParas: [
        "Employs GSAP ScrollTrigger paired with customized cubic-bezier easing to deliver seamless cinematic product transitions as the user scrolls down the viewport.",
        "Integrates lightweight 3D assets with GPU-accelerated canvas rendering, maintaining solid 60fps frame rates across mobile and desktop devices."
      ],
      features: [
        "Scroll-based animations",
        "GSAP timeline control",
        "3D asset integration",
        "Smooth transitions & motion effects",
        "Performance-optimized animation rendering"
      ],
      outcomeParas: [
        "Mastered complex animation sequencing techniques, successfully proving that immersive visual storytelling can coexist with web performance.",
        "Served as a showcase of deep front-end engineering proficiency and creative motion design capability."
      ],
      outcomes: [
        "Strengthened front-end animation engineering skills",
        "Mastered advanced GSAP animation sequencing",
        "Balanced rich visual fidelity with high device performance",
        "Built visually engaging and memorable landing experience"
      ],
      tech: ["React", "GSAP", "Three.js", "Vercel", "GitHub"],
      featured: false,
      liveUrl: "https://macbook-landingpage-gsap.vercel.app/"
    },
    {
      id: "hooptourney",
      title: "HoopTourney",
      year: "2024",
      category: "Sports Website",
      industry: "Sports & Events",
      subtitle: "A centralized tournament platform connecting organizers, basketball teams, and players with live analytics.",
      description: "A full-featured sports management web application offering dynamic tournament bracket generation, match scheduling, and advanced player statistical analytics.",
      image: "./src/assets/images/porto/HoopTourney/HoopTourney.png",
      featureImage1: "./src/assets/images/porto/HoopTourney/HoopTourney.png",
      featureImage2: "./src/assets/images/porto/HoopTourney/HoopTourney.png",
      keyFeaturesParas: [
        "Features an interactive visual bracket system, live game schedule updates, and detailed player performance profiles powered by Player Efficiency Rating (PER) formulas.",
        "Equipped with organizer dashboards for rapid game scoring entry, foul tracking, standings recalculation, and team roster administration."
      ],
      features: [
        "Visual tournament bracket system",
        "Match scheduling management",
        "Player statistics tracking",
        "Player Efficiency Rating (PER) calculation",
        "Team & player profile management",
        "Admin dashboard for competition control"
      ],
      outcomeParas: [
        "Selected as the official competition system for the Ubaya Engineering Basketball Cup, handling multi-court schedules without conflict.",
        "Replaced manual spreadsheets with an automated digital hub that gave players and supporters instant access to real-time box scores and standings."
      ],
      outcomes: [
        "Official platform for Ubaya Engineering Basketball Cup",
        "Integrated tournament operations into a centralized system",
        "Enabled player performance tracking using PER methodology",
        "Simplified competition management for organizers"
      ],
      tech: ["Laravel", "Tailwind", "PHP", "Supabase", "Vercel", "GitHub"],
      featured: true,
      liveUrl: "https://hooptourney.vercel.app/"
    },
    {
      id: "gyis-admin",
      title: "GYIS Admin System",
      year: "2024",
      category: "Management System",
      industry: "Event Administration",
      subtitle: "An integrated administration and evaluation platform for the Global Youth Innovation Summit Singapore.",
      description: "An end-to-end event backend built to manage hundreds of international delegacies, scoring rubrics, award allocations, and certification records.",
      image: "./src/assets/images/porto/GYISJudging/GyisJudging.png",
      featureImage1: "./src/assets/images/porto/GYISJudging/GyisJudging.png",
      featureImage2: "./src/assets/images/porto/GYISJudging/GyisJudging.png",
      keyFeaturesParas: [
        "Features a structured delegacy database with rapid search, categorized scoring criteria, and automated multi-judge average computation.",
        "Automates award tier classification based on configurable score thresholds, synchronizing participant records with output certificate archives."
      ],
      features: [
        "Participant data management",
        "Judging score system",
        "Automated average score calculation",
        "Award classification automation",
        "Certification data integration",
        "Admin control dashboard"
      ],
      outcomeParas: [
        "Significantly accelerated scoring review times during event closing ceremonies, enabling instant award determination.",
        "Reduced administrative overhead by more than 80%, replacing scattered forms with a single verified database."
      ],
      outcomes: [
        "Facilitated seamless judging workflows for GYIS Singapore",
        "Reduced manual administrative overhead significantly",
        "Automated award decisions based on scoring metrics",
        "Integrated all participant records into a structured system"
      ],
      tech: ["Laravel", "Tailwind", "PHP", "Hostinger", "GitHub"],
      featured: false,
      liveUrl: "https://gyis-judgingform.krya.global/"
    },
    {
      id: "siw",
      title: "Startup Innovation Weekend",
      year: "2024",
      category: "Landing Page",
      industry: "Startup & Innovation",
      subtitle: "A dynamic international promotional landing page for SIW Phnom Penh, Cambodia.",
      description: "A clean, conversion-focused event landing page created to attract international student innovators, mentors, and angel investors.",
      image: "./src/assets/images/porto/SIW/Siw.png",
      featureImage1: "./src/assets/images/porto/SIW/Siw.png",
      featureImage2: "./src/assets/images/porto/SIW/Siw.png",
      keyFeaturesParas: [
        "Features clear schedule outlines, speaker highlights, prize categories, and interactive registration prompts engineered with lightweight vanilla technologies.",
        "Fully optimized for search indexing, social sharing meta cards, and rapid loading speeds on Southeast Asian mobile networks."
      ],
      features: [
        "Event information sections",
        "Registration call-to-action",
        "SEO optimization",
        "Performance optimization",
        "Mobile-responsive design"
      ],
      outcomeParas: [
        "Successfully boosted global startup registration numbers, providing international attendees with immediate clarity on event itineraries.",
        "Achieved top-tier mobile page experience scores and robust brand visibility for global partners."
      ],
      outcomes: [
        "Introduced event to global startup communities",
        "Successfully deployed fast-loading and responsive landing page",
        "Optimized search visibility for event keywords",
        "Strengthened online branding for international audience"
      ],
      tech: ["HTML", "CSS", "JavaScript", "GitHub"],
      featured: false,
      liveUrl: "http://siw.icia.global/"
    },
    {
      id: "ransite",
      title: "Ransite",
      year: "2024",
      category: "Service Website",
      industry: "Digital Agency",
      subtitle: "A bilingual digital agency showcase offering bespoke web engineering and design solutions.",
      description: "Official business landing page for Ransite, engineered to present tiered digital services, pricing plans, client testimonials, and automated lead capture.",
      image: "./src/assets/images/porto/Ransite/Ransite.png",
      featureImage1: "./src/assets/images/porto/Ransite/Ransite.png",
      featureImage2: "./src/assets/images/porto/Ransite/Ransite.png",
      keyFeaturesParas: [
        "Includes multi-language localization (EN / ID), package pricing tables, dynamic contact inquiry routing, and transparent deliverable timelines.",
        "Engineered with clean semantic markup, high-contrast typography, and performance optimizations for optimal Google Core Web Vitals."
      ],
      features: [
        "Service showcase & pricing structure",
        "Multi-language support (ID / EN)",
        "Lead capture form",
        "SEO optimization",
        "Performance optimization"
      ],
      outcomeParas: [
        "Directly generated multiple custom website development contracts and established recurring retainer relationships.",
        "Expanded agency reach to international business clients seeking reliable full-cycle web development."
      ],
      outcomes: [
        "Generated 5+ website development client orders",
        "Expanded service reach to international audience",
        "Improved brand credibility through structured service presentation",
        "Increased qualified inbound client inquiries"
      ],
      tech: ["HTML", "CSS", "JavaScript", "cPanel", "GitHub"],
      featured: false,
      liveUrl: "https://ransite.com"
    },
    {
      id: "mocraft",
      title: "Mocraft",
      year: "2024",
      category: "Company Profile",
      industry: "3D Printing & Manufacturing",
      subtitle: "A multilingual corporate website for an international 3D printing and digital prototyping brand.",
      description: "A company profile built with a custom WordPress CMS architecture, supporting Indonesian, German, and English client bases.",
      image: "./src/assets/images/porto/Mocraft/Mocraft.png",
      featureImage1: "./src/assets/images/porto/Mocraft/Mocraft.png",
      featureImage2: "./src/assets/images/porto/Mocraft/Mocraft.png",
      keyFeaturesParas: [
        "Engineered with a seamless trilingual switcher (ID / DE / EN), rich capability portfolios, technical material specifications, and quotation inquiry hooks.",
        "Implemented server caching, image CDN delivery, and on-page SEO targeting industrial prototyping search terms across Europe and Asia."
      ],
      features: [
        "Multi-language support (ID / DE / EN)",
        "Service showcase",
        "SEO optimization",
        "Performance optimization",
        "Business inquiry integration"
      ],
      outcomeParas: [
        "Significantly expanded corporate reach into international markets, particularly Germany and Singapore.",
        "Enhanced market trust and established a modern, credible online presence for industrial clients."
      ],
      outcomes: [
        "Expanded international accessibility across 3 languages",
        "Improved brand trust and professional image",
        "Increased global visibility through multilingual content"
      ],
      tech: ["WordPress", "Elementor", "Hostinger"],
      featured: true,
      liveUrl: "https://mocraft3d.com/"
    },
    {
      id: "akusila",
      title: "Akusila",
      year: "2024",
      category: "E-Commerce",
      industry: "Sustainable Fashion",
      subtitle: "An artisanal e-commerce storefront for handcrafted eco-friendly jute bag collections.",
      description: "An online boutique built to empower local craftspeople by taking traditional sustainable products to modern domestic and international buyers.",
      image: "./src/assets/images/porto/Akusila/Akusila.png",
      featureImage1: "./src/assets/images/porto/Akusila/Akusila.png",
      featureImage2: "./src/assets/images/porto/Akusila/Akusila.png",
      keyFeaturesParas: [
        "Configured with a clean WooCommerce product catalog, automated payment gateways, cart management, and responsive mobile checkout flows.",
        "Includes targeted category taxonomies, high-resolution product carousels, and localized shipping rate calculators."
      ],
      features: [
        "Product catalog management",
        "Online payment integration",
        "Checkout system",
        "SEO optimization",
        "Responsive design"
      ],
      outcomeParas: [
        "Successfully launched direct-to-consumer online shopping, enabling seamless end-to-end digital transactions.",
        "Created an accessible digital showcase for traditional handicrafts, elevating product visibility across regional search rankings."
      ],
      outcomes: [
        "Successfully processed online retail transactions",
        "Established digital market presence for traditional crafts",
        "Improved product visibility through search optimization"
      ],
      tech: ["WordPress", "WooCommerce", "Elementor", "Hostinger"],
      featured: false,
      liveUrl: "https://akusila.com/"
    },
    {
      id: "krya-global",
      title: "Krya Global",
      year: "2024",
      category: "Company Profile",
      industry: "Education & Innovation",
      subtitle: "A centralized multi-brand digital ecosystem for an international innovation education enterprise.",
      description: "The primary digital identity for Krya Global, connecting 5 distinct program brands, blogs, and international event portals under one unified architecture.",
      image: "./src/assets/images/porto/KryaGlobal/KryaGlobal.png",
      featureImage1: "./src/assets/images/porto/KryaGlobal/KryaGlobal.png",
      featureImage2: "./src/assets/images/porto/KryaGlobal/KryaGlobal.png",
      keyFeaturesParas: [
        "Architected with complex DNS and multi-subdomain routings, corporate blog management, and setup of 20+ secure Google Workspace business emails.",
        "Optimized for international authority with multilingual metadata, event archives, and global partnership showcases."
      ],
      features: [
        "Blog management system",
        "Multi sub-domain configuration",
        "Hosting & DNS management",
        "Business email setup (20+ accounts)",
        "SEO optimization"
      ],
      outcomeParas: [
        "Consistently attracted 500+ monthly unique visitors from academic institutions across Asia and Europe.",
        "Maintained 100% uptime across 5 core subdomains while establishing a cohesive brand authority for international stakeholders."
      ],
      outcomes: [
        "Achieved 500+ monthly unique visitors",
        "Managed 5 sub-domains under krya.global",
        "Improved search engine visibility through structured updates",
        "Handled full hosting & server infrastructure configuration"
      ],
      tech: ["WordPress", "Elementor", "Hostinger"],
      featured: false,
      liveUrl: "https://krya.global/"
    },
    {
      id: "icia-global",
      title: "ICIA Global",
      year: "2024",
      category: "Competition Website",
      industry: "Global Innovation Platform",
      subtitle: "The flagship portal for the International Competition of Innovation and Action.",
      description: "An authoritative web portal serving as the global hub for innovation competitions, delegacy information, announcements, and international sponsor relations.",
      image: "./src/assets/images/porto/ICIA_Global/ICIA_Global.png",
      featureImage1: "./src/assets/images/porto/ICIA_Global/ICIA_Global.png",
      featureImage2: "./src/assets/images/porto/ICIA_Global/ICIA_Global.png",
      keyFeaturesParas: [
        "Features comprehensive competition guidelines, international timeline releases, partner logos, and multi-subdomain routing for judging and app portals.",
        "Engineered with advanced on-page SEO targeting international school competitions, backed by high-availability cloud infrastructure."
      ],
      features: [
        "Event information management",
        "Blog & content updates",
        "Multi sub-domain setup",
        "Hosting & DNS configuration",
        "SEO optimization"
      ],
      outcomeParas: [
        "Consistently reached over 1,000 monthly unique global visitors and achieved Google page 1 ranking for primary competition terms.",
        "Unified all competition branding, forming a trustworthy first touchpoint for international delegates and governments."
      ],
      outcomes: [
        "Achieved 1,000+ monthly unique visitors",
        "Ranked on first page of Google for selected keywords",
        "Managed 5 sub-domains and business email infrastructure",
        "Strengthened global online presence"
      ],
      tech: ["Wix Studio", "Hostinger"],
      featured: false,
      liveUrl: "https://www.icia.global/"
    },
    {
      id: "billstone-private-vault",
      title: "Billstone Private Vault",
      year: "2024",
      category: "Landing Page",
      industry: "Luxury Security Systems",
      subtitle: "A bespoke landing page for high-end security vault systems tailored for luxury watch and jewelry collectors.",
      description: "A high-conversion landing page engineered for Billstone's flagship security line, featuring custom configuration consultations, high-definition galleries, and private client inquiries.",
      image: "./src/assets/images/porto/PrivateVault/PrivateVault.png",
      featureImage1: "./src/assets/images/porto/PrivateVault/PrivateVault.png",
      featureImage2: "./src/assets/images/porto/PrivateVault/PrivateVault.png",
      keyFeaturesParas: [
        "Designed with a minimalist, luxury aesthetic highlighting product dimensions, biometric security features, and VIP private consultation booking triggers.",
        "Optimized for high-speed delivery of dense media assets and precision keywords in the luxury collector niche."
      ],
      features: [
        "Custom consultation booking integration",
        "Responsive layout for all devices",
        "Optimized SEO structure",
        "Fast media loading for high-resolution images"
      ],
      outcomeParas: [
        "Enhanced brand prestige within high-net-worth collector markets and drove measurable increases in qualified private vault consultation leads.",
        "Improved keyword rankings and organic dwell time through immersive product presentation."
      ],
      outcomes: [
        "Enhanced brand positioning in premium market",
        "Improved user engagement with clear CTAs",
        "Increased organic traffic for target keywords",
        "Generated more custom vault consultation inquiries"
      ],
      tech: ["WordPress", "Elementor", "WooCommerce", "cPanel"],
      featured: false,
      liveUrl: "https://billstoneofficial.com/private-vault/"
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
