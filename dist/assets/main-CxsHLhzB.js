(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();const o={meta:{author:"Alex Morgan"},profile:{name:"Alex Morgan",firstName:"Alex",lastName:"Morgan",avatar:"./src/assets/images/avatar-profile.png",rating:{score:"4.9 / 5",count:"Helped 120+ businesses & counting"},tagline:"I build digital experiences that drive real growth for your business. Let's partner to create work that gets results.",ctaPrimary:{text:"Start a Project",link:"#contact"},ctaSecondary:{text:"See Projects",link:"#projects"},email:"hello@alexmorgan.design"},showcase:[{image:"./src/assets/images/showcase-watch.png",title:"Smart Watch UI",projectId:"shopora"},{image:"./src/assets/images/showcase-vr.png",title:"Vision Interface",projectId:"edunova"},{image:"./src/assets/images/showcase-phone.png",title:"Mobile Wallet",projectId:"paynest"},{image:"./src/assets/images/project-paynest.png",title:"Display Terminal",projectId:"connecto"},{image:"./src/assets/images/project-connecto.png",title:"Tablet Interface",projectId:"connecto"},{image:"./src/assets/images/project-shopora.png",title:"Editorial ST10 Book",projectId:"shopora"},{image:"./src/assets/images/project-medilink.png",title:"Health Device",projectId:"medilink"},{image:"./src/assets/images/project-travelio.png",title:"Spatial Studio",projectId:"travelio"}],stats:[{value:"100%",label:"Client Satisfaction Rate"},{value:"50+",label:"Projects Completed"},{value:"4X",label:"Client Growth"},{value:"7+",label:"Years of Experience"}],career:[{role:"Design Director",company:"Solvix",period:"2025 - Now",desc:"Leading design vision, team mentorship, and scalable multi-platform design systems."},{role:"Sr. Product Designer",company:"Coreva",period:"2024 - 2025",desc:"Spearheaded user research, conversion optimization, and core mobile app features."},{role:"Product Designer",company:"Belvo",period:"2015 - 2024",desc:"Designed intuitive fintech dashboards, APIs documentation UI, and checkout flows."},{role:"UI/UX Designer",company:"Arvion",period:"2012 - 2015",desc:"Created modern brand identities, responsive web layouts, and interactive prototypes."}],skills:["UX-UI Design","Product Strategy","Design Systems","Web Development","Mobile Apps","Brand Identity","Interaction Design","Prototyping"],projects:[{id:"connecto",title:"Connecto",year:"2023",category:"Web Design",industry:"SaaS / Collaboration",subtitle:"A collaboration platform for remote teams to stay aligned, track progress, and communicate seamlessly.",description:"Connecto is a unified workspace app built to eliminate communication silos across distributed teams.",challenge:"Connecto needed a redesigned dashboard and workflow interface that reduced cognitive overload, making task updates and team chats intuitive without sacrificing speed.",approach:"We streamlined the layout with focus modes, standardized design tokens, and crafted a distraction-free user flow for real-time collaboration.",image:"./src/assets/images/project-connecto.png",featured:!0,liveUrl:"https://connecto.example.com"},{id:"paynest",title:"PayNest",year:"2024",category:"Fintech / App",industry:"Fintech",subtitle:"This project solves common financial usability challenges by delivering a seamless mobile wallet experience.",description:"PayNest is a digital wallet app for instant transfers, bill payments, expense tracking, and secure daily transactions.",challenge:"PayNest faced friction during multi-step checkout and wallet funding, causing drop-offs among first-time fintech users.",approach:"I worked across product design and system refinement, simplifying core user flows, adding clear visual feedback, and implementing biometric quick-pay.",image:"./src/assets/images/project-paynest.png",featured:!0,liveUrl:"https://paynest.example.com"},{id:"shopora",title:"Shopora",year:"2024",category:"E-Commerce",industry:"E-Commerce & Retail",subtitle:"Elevating the shopping experience with intuitive search, smart filtering, and rapid single-page checkout.",description:"Shopora is a high-growth luxury retail marketplace offering curated fashion and lifestyle collections.",challenge:"Catalog browsing was sluggish and checkout abandonment rates were high on mobile devices.",approach:"Re-architected the product discovery pages, added instant variant preview modals, and streamlined mobile checkout to 2 steps.",image:"./src/assets/images/project-shopora.png",featured:!0,liveUrl:"https://shopora.example.com"},{id:"edunova",title:"EduNova",year:"2024",category:"EdTech",industry:"Education & Learning",subtitle:"An interactive learning management ecosystem connecting students, educators, and course creators.",description:"EduNova empowers learners worldwide with bite-sized video courses, interactive quizzes, and cohort discussions.",challenge:"Learners struggled to keep track of their course milestones and interact with mentors effectively.",approach:"Designed a personalized dashboard with progress tracking, streak rewards, and synchronized video note-taking.",image:"./src/assets/images/project-edunova.png",featured:!0,liveUrl:"https://edunova.example.com"},{id:"medilink",title:"MediLink",year:"2026",category:"HealthTech",industry:"Healthcare",subtitle:"Connecting patients with verified specialists and telehealth consultations in minutes.",description:"MediLink is a digital healthcare platform providing secure appointment bookings, lab reports, and telehealth.",challenge:"Patients found booking consultations complicated and medical history data hard to parse on small screens.",approach:"Built an accessible, high-contrast UI with clear doctor rating cards, real-time availability slots, and encrypted records.",image:"./src/assets/images/project-medilink.png",featured:!0,liveUrl:"https://medilink.example.com"},{id:"travelio",title:"Travelio",year:"2025",category:"Travel & Lifestyle",industry:"Travel",subtitle:"Smart itinerary planning and curated local travel experiences worldwide.",description:"Travelio is an all-in-one travel companion for discovering hidden gems, booking stays, and sharing custom itineraries.",challenge:"Users needed a seamless way to collaborate with friends on trip itineraries and split expenses on the go.",approach:"Created a collaborative drag-and-drop itinerary board with integrated map view and instant currency conversion.",image:"./src/assets/images/project-travelio.png",featured:!0,liveUrl:"https://travelio.example.com"}],process:[{step:"01",title:"Discovery & Empathy",desc:"Every great design starts with empathy. I dive deep into the problem to uncover insights that shape the solid foundation."},{step:"02",title:"Strategy & Wireframing",desc:"I blend strategy, usability, and visual storytelling to design experiences that feel intuitive and look distinct."},{step:"03",title:"Feedback & Iteration",desc:"Through feedback, testing, and iteration, I ensure the design works in the real world — not just on Figma."},{step:"04",title:"Handoff & Scalability",desc:"I guide projects from concept to launch, helping teams build scalable design systems and maintain consistent, well-crafted brand experiences across products."}],services:[{title:"UX-UI & Creative",desc:"Crafting clean, user-friendly sites and apps that reflect your brand & deliver a seamless experience."},{title:"Web Development",desc:"Building fast, high-performance websites that are easy to manage and optimized for every device."},{title:"Brand Identity",desc:"Cohesive visual systems — from logos to typography and colors — make your brand instantly recognizable."},{title:"Design Consultation",desc:"Offering strategic guidance to help you plan, refine, and execute your design ideas effectively."}],testimonials:[{rating:5,quote:"Alex truly understood my vision & turned it into impactful designs, the results went way beyond my expectations!",author:"Marcus Rivera",role:"Founder at NovaTech",avatar:"./src/assets/images/testimonial-marcus.png"},{rating:4.9,quote:"As a small business owner, the entire process felt effortless thanks to Alex’s clear guidance & design excellence.",author:"Sophia Laurent",role:"CEO at VibeStudio",avatar:"./src/assets/images/testimonial-sophia.png"},{rating:4.8,quote:"Running a startup is challenging, but Alex Morgan made this entire product rebranding smooth and completely hassle-free.",author:"Daniel Zhang",role:"Product Lead at FlowScale",avatar:"./src/assets/images/testimonial-daniel.png"}],faqs:[{question:"How do we get started?",answer:"Simply fill out the project form below or book a quick 30-minute discovery call. We will discuss your goals, scope, timeline, and deliverables."},{question:"Can you redesign my existing website or app?",answer:"Yes! I conduct a thorough UX audit of your current product, pinpointing friction points and redesigning the experience to maximize usability and conversions."},{question:"Do you also handle development or just design?",answer:"Both. I provide end-to-end services from Figma prototypes to fully responsive, clean, and production-ready code."},{question:"What tools do you use for design?",answer:"Framer, Figma, Adobe Suite, Webflow, and modern web development technologies (HTML, Modern CSS, JavaScript, React)."},{question:"Can I request additional revisions?",answer:"Absolutely. Every project includes dedicated feedback cycles to ensure you are 100% satisfied with the outcome before final handoff."}],socials:[{name:"Dribbble",url:"https://dribbble.com"},{name:"Behance",url:"https://behance.net"},{name:"Figma",url:"https://figma.com"},{name:"Twitter / X",url:"https://x.com"},{name:"LinkedIn",url:"https://linkedin.com"}],footer:{copyright:`© ${new Date().getFullYear()} Alex Morgan. All rights reserved.`,newsletterNote:"Subscribe to get early access to special offers, design insights, and exclusive project updates.",responseGuarantee:"We will reach out to you within 24hrs"}};document.addEventListener("DOMContentLoaded",()=>{v(),document.body.classList.add("page-loaded"),b(),k(),E(),M(),h(),L(),$()});function v(){const i=localStorage.getItem("theme")||"light";document.documentElement.setAttribute("data-theme",i)}function f(){const a=(document.documentElement.getAttribute("data-theme")||"light")==="light"?"dark":"light";document.documentElement.setAttribute("data-theme",a),localStorage.setItem("theme",a),document.querySelectorAll(".theme-toggle-btn").forEach(t=>{t.innerHTML=a==="dark"?'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>':'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>'})}function b(){const i=window.location.pathname,a=i.includes("about"),t=i.includes("all-projects"),s=i.includes("contact"),e=document.documentElement.getAttribute("data-theme")||"light",n=`
    <!-- Mobile Menu Backdrop -->
    <div id="mobile-menu-backdrop" class="mobile-menu-backdrop" aria-hidden="true"></div>

    <header class="navbar-wrapper">
      <div class="navbar-container">
        <!-- Desktop Pill Navigation -->
        <nav class="navbar-left" aria-label="Main Navigation">
          <a href="index.html" class="navbar-avatar" title="${o.profile.name}">
            <img src="${o.profile.avatar}" alt="${o.profile.name}" />
          </a>
          <ul class="nav-links">
            <li><a href="about.html" class="nav-link ${a?"active":""}">About</a></li>
            <li><a href="all-projects.html" class="nav-link ${t?"active":""}">All Projects</a></li>
            <li><a href="contact.html" class="nav-link ${s?"active":""}">Contact</a></li>
          </ul>
        </nav>

        <!-- Mobile & Tablet Morphing Squircle Menu -->
        <div id="mobile-morph-menu" class="mobile-morph-menu" aria-label="Mobile Navigation">
          <button type="button" id="mobile-menu-toggle" class="mobile-menu-toggle-btn" aria-label="Toggle navigation menu" aria-expanded="false">
            <span class="hamburger-bar bar-top"></span>
            <span class="hamburger-bar bar-bottom"></span>
          </button>

          <div class="mobile-menu-content">
            <a href="index.html" class="mobile-menu-avatar" title="${o.profile.name}">
              <img src="${o.profile.avatar}" alt="${o.profile.name}" />
            </a>

            <nav class="mobile-menu-nav">
              <a href="about.html" class="mobile-nav-link ${a?"active":""}">About</a>
              <a href="all-projects.html" class="mobile-nav-link ${t?"active":""}">All Projects</a>
              <a href="contact.html" class="mobile-nav-link ${s?"active":""}">Contact</a>
            </nav>

            <div class="mobile-menu-bottom">
              <div class="lang-switcher-wrap">
                <button type="button" class="lang-toggle-btn" title="Change Language" aria-label="Change language">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20M12 2a14.5 14.5 0 0 1 0 20M2 12h20"/>
                  </svg>
                  <span class="lang-code-badge">EN</span>
                </button>
                <div class="lang-dropdown">
                  <button type="button" class="lang-option active" data-lang="en">
                    <span>English</span>
                    <span class="lang-check">✓</span>
                  </button>
                  <button type="button" class="lang-option" data-lang="id">
                    <span>Bahasa Indonesia</span>
                    <span class="lang-check">✓</span>
                  </button>
                </div>
              </div>

              <button type="button" class="theme-toggle-btn" title="Toggle Theme" aria-label="Toggle theme">
                ${e==="dark"?'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>':'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>'}
              </button>
            </div>
          </div>
        </div>
        
        <div class="navbar-right">
          <a href="mailto:${o.profile.email}" class="nav-btn-call" title="Connect with me via email">
            <span>Connect with me</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
          </a>

          <!-- Desktop Language & Theme Controls -->
          <div class="desktop-only-controls">
            <div class="lang-switcher-wrap">
              <button type="button" class="lang-toggle-btn" title="Change Language" aria-label="Change language">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20M12 2a14.5 14.5 0 0 1 0 20M2 12h20"/>
                </svg>
                <span class="lang-code-badge">EN</span>
              </button>
              <div class="lang-dropdown">
                <button type="button" class="lang-option active" data-lang="en">
                  <span>English</span>
                  <span class="lang-check">✓</span>
                </button>
                <button type="button" class="lang-option" data-lang="id">
                  <span>Bahasa Indonesia</span>
                  <span class="lang-check">✓</span>
                </button>
              </div>
            </div>

            <button type="button" class="theme-toggle-btn" title="Toggle Theme" aria-label="Toggle theme">
              ${e==="dark"?'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>':'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>'}
            </button>
          </div>
        </div>
      </div>
    </header>
  `;document.body.insertAdjacentHTML("afterbegin",n),y(),w()}function y(){const i=document.getElementById("mobile-morph-menu"),a=document.getElementById("mobile-menu-toggle"),t=document.getElementById("mobile-menu-backdrop");if(!i||!a)return;function s(){i.classList.add("is-open"),a.setAttribute("aria-expanded","true"),t&&t.classList.add("is-active")}function e(){i.classList.remove("is-open"),a.setAttribute("aria-expanded","false"),t&&t.classList.remove("is-active")}a.addEventListener("click",n=>{n.stopPropagation(),i.classList.contains("is-open")?e():s()}),t&&t.addEventListener("click",e),document.addEventListener("click",n=>{i.classList.contains("is-open")&&!i.contains(n.target)&&n.target!==t&&e()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&i.classList.contains("is-open")&&e()}),i.querySelectorAll(".mobile-nav-link").forEach(n=>{n.addEventListener("click",()=>{e()})}),window.addEventListener("resize",()=>{window.innerWidth>960&&i.classList.contains("is-open")&&e()})}function w(){const i=document.querySelectorAll(".lang-switcher-wrap");if(!i.length)return;const a=localStorage.getItem("site_lang")||"en";t(a),i.forEach(s=>{const e=s.querySelector(".lang-toggle-btn"),n=s.querySelector(".lang-dropdown");!e||!n||(e.addEventListener("click",l=>{l.stopPropagation();const c=n.classList.contains("is-visible");document.querySelectorAll(".lang-dropdown").forEach(d=>d.classList.remove("is-visible")),c||n.classList.add("is-visible")}),n.querySelectorAll(".lang-option").forEach(l=>{l.addEventListener("click",c=>{c.stopPropagation();const d=l.getAttribute("data-lang");localStorage.setItem("site_lang",d),t(d),document.querySelectorAll(".lang-dropdown").forEach(u=>u.classList.remove("is-visible"))})}))}),document.addEventListener("click",()=>{document.querySelectorAll(".lang-dropdown").forEach(s=>s.classList.remove("is-visible"))}),document.addEventListener("keydown",s=>{s.key==="Escape"&&document.querySelectorAll(".lang-dropdown").forEach(e=>e.classList.remove("is-visible"))});function t(s){document.querySelectorAll(".lang-code-badge").forEach(e=>{e.textContent=s.toUpperCase()}),document.querySelectorAll(".lang-toggle-btn").forEach(e=>{e.setAttribute("title",s==="id"?"Bahasa: Indonesia":"Language: English")}),document.querySelectorAll(".lang-option").forEach(e=>{e.getAttribute("data-lang")===s?e.classList.add("active"):e.classList.remove("active")})}}function k(){const i=document.getElementById("hero-section");if(i){const r=o.showcase.map(m=>`
      <a href="project.html?id=${m.projectId||"connecto"}" class="marquee-card">
        <div class="marquee-card-img-wrap">
          <img src="${m.image}" alt="${m.title}" loading="lazy" />
        </div>
        <div class="marquee-card-badge">
          <span>${m.title}</span>
          <svg class="marquee-card-badge-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
        </div>
      </a>
    `).join("");i.innerHTML=`
      <div class="container">
        <div class="hero-grid">
          <!-- Left: Big Name with Inline Avatar Squircle -->
          <div class="hero-left reveal-blur">
            <h1 class="hero-name">
              <span class="hero-name-row">
                <span>${o.profile.firstName}</span>
                <span class="hero-avatar-badge" title="${o.profile.name}">
                  <img src="${o.profile.avatar}" alt="${o.profile.name}" />
                </span>
              </span>
              <span>${o.profile.lastName}</span>
            </h1>
          </div>

          <!-- Right: Rating Pill, Tagline & CTAs -->
          <div class="hero-right reveal-blur">
            <div class="rating-pill">
              <span class="rating-badge-star">
                <span class="rating-star-icon">★</span>
                <span>${o.profile.rating.score}</span>
              </span>
              <span class="rating-text">${o.profile.rating.count}</span>
            </div>

            <p class="hero-tagline">${o.profile.tagline}</p>

            <div class="hero-actions">
              <a href="${o.profile.ctaPrimary.link}" class="btn-primary">
                <span>${o.profile.ctaPrimary.text}</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="${o.profile.ctaSecondary.link}" class="btn-secondary">
                <span>${o.profile.ctaSecondary.text}</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Edge-to-Edge Hero Showcase Marquee Carousel -->
        <div class="hero-marquee-wrapper reveal-blur" id="hero-marquee-wrapper">
          <div class="hero-marquee-track" id="hero-marquee-track">
            ${r}
            ${r}
          </div>
        </div>
      </div>
    `}const a=document.getElementById("clients-bar-section");a&&(a.innerHTML=`
      <div class="clients-bar-wrap reveal-blur">
        <div class="clients-bar">
          <span class="clients-label">Clients & collaborators</span>
          <div class="clients-logos">
            <div class="client-logo-item">
              <span>标识</span>
            </div>
            <div class="client-logo-item">
              <span>❖ LOGOIPSUM</span>
            </div>
            <div class="client-logo-item">
              <span>✹ Logoipsum</span>
            </div>
            <div class="client-logo-item">
              <span>✿ Logoipsum</span>
            </div>
          </div>
        </div>
      </div>
    `);const t=document.getElementById("stats-grid");t&&(t.innerHTML=o.stats.map(r=>`
      <div class="stat-card reveal-blur">
        <div class="stat-val">${r.value}</div>
        <div class="stat-label">${r.label}</div>
      </div>
    `).join(""));const s=document.getElementById("projects-grid");if(s){const m=window.location.pathname.includes("all-projects")?o.projects:o.projects.filter(p=>p.featured);s.innerHTML=m.map(p=>`
      <a href="project.html?id=${p.id}" class="project-card reveal-blur">
        <div class="project-thumb">
          <img src="${p.image}" alt="${p.title}" loading="lazy" />
        </div>
        <div class="project-info">
          <div class="project-meta">
            <span>${p.category}</span>
            <span>${p.year}</span>
          </div>
          <div class="project-title">
            <span>${p.title}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
          </div>
          <p class="project-sub">${p.subtitle}</p>
        </div>
      </a>
    `).join("")}const e=document.getElementById("career-timeline");e&&(e.innerHTML=`
      <div class="career-container reveal-blur">
        <div class="badge-career">
          <span class="dot-orange"></span>
          <span>Career</span>
        </div>
        <div class="career-list">
          ${o.career.map(r=>`
            <div class="career-row">
              <div>
                <div class="career-role-title">${r.role}</div>
                <div class="career-role-sub">${r.company} · ${r.desc}</div>
              </div>
              <div class="career-period">${r.period}</div>
            </div>
          `).join("")}
        </div>
      </div>
    `);const n=document.getElementById("skills-wrap");n&&(n.innerHTML=o.skills.map(r=>`
      <span class="skill-tag reveal-blur">${r}</span>
    `).join(""));const l=document.getElementById("process-grid");l&&(l.innerHTML=o.process.map(r=>`
      <div class="card-item reveal-blur">
        <span class="card-num">${r.step}</span>
        <h3 class="card-title">${r.title}</h3>
        <p class="card-desc">${r.desc}</p>
      </div>
    `).join(""));const c=document.getElementById("services-grid");c&&(c.innerHTML=o.services.map(r=>`
      <div class="card-item reveal-blur">
        <h3 class="card-title">${r.title}</h3>
        <p class="card-desc">${r.desc}</p>
      </div>
    `).join(""));const d=document.getElementById("testimonials-grid");d&&(d.innerHTML=o.testimonials.map(r=>`
      <div class="testimonial-card reveal-blur">
        <div class="rating-star-icon" style="font-size: 15px;">★★★★★</div>
        <p class="testimonial-quote">"${r.quote}"</p>
        <div class="testimonial-author">
          <img src="${r.avatar}" alt="${r.author}" class="testimonial-avatar" />
          <div>
            <div class="author-name">${r.author}</div>
            <div class="author-role">${r.role}</div>
          </div>
        </div>
      </div>
    `).join(""));const u=document.getElementById("faq-list");u&&(u.innerHTML=o.faqs.map(r=>`
      <div class="faq-item reveal-blur">
        <button class="faq-question" type="button">
          <span>${r.question}</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
          <p>${r.answer}</p>
        </div>
      </div>
    `).join(""));const g=document.getElementById("project-detail-content");g&&x(g)}function x(i){const t=new URLSearchParams(window.location.search).get("id")||"connecto",s=o.projects.find(e=>e.id===t)||o.projects[0];document.title=`${s.title} - ${o.meta.author}`,i.innerHTML=`
    <div class="container-narrow">
      <div class="section-title-wrap reveal-blur" style="text-align: center; align-items: center; gap: 18px; margin-bottom: 36px;">
        <div class="badge">${s.category} · ${s.year}</div>
        <h1 class="hero-name" style="font-size: clamp(2.5rem, 5vw, 4rem); text-align: center;"><span>${s.title}</span></h1>
        <p class="hero-tagline" style="max-width: 650px; text-align: center;">${s.subtitle}</p>
        <a href="${s.liveUrl}" target="_blank" rel="noopener" class="btn-primary" style="margin-top: 8px;">
          <span>Visit Live Site</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
        </a>
      </div>

      <div class="project-thumb reveal-blur" style="height: 500px; border-radius: var(--radius-xl); margin-bottom: 50px; border: 1px solid var(--border-subtle); box-shadow: var(--shadow-card);">
        <img src="${s.image}" alt="${s.title}" style="width:100%; height:100%; object-fit: cover;" />
      </div>

      <div class="about-grid reveal-blur" style="margin-bottom: 70px;">
        <div class="card-item">
          <span class="card-num">01 / CHALLENGE</span>
          <h2 class="card-title">The Problem</h2>
          <p class="card-desc">${s.challenge}</p>
        </div>
        <div class="card-item">
          <span class="card-num">02 / SOLUTION</span>
          <h2 class="card-title">Our Approach</h2>
          <p class="card-desc">${s.approach}</p>
        </div>
      </div>

      <div style="text-align: center; margin-top: 50px;">
        <a href="all-projects.html" class="btn-secondary">
          <span>← Back to All Projects</span>
        </a>
      </div>
    </div>
  `}function E(){const i=`
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div>
            <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">${o.profile.name}</h3>
            <p style="color: var(--text-muted); font-size: 14px;">${o.footer.responseGuarantee}</p>
          </div>
          <div class="footer-socials">
            ${o.socials.map(a=>`
              <a href="${a.url}" target="_blank" rel="noopener" class="social-link">${a.name}</a>
            `).join("")}
          </div>
        </div>
        <div class="footer-bottom">
          <p>${o.footer.copyright}</p>
          <p>${o.footer.newsletterNote}</p>
        </div>
      </div>
    </footer>
  `;document.body.insertAdjacentHTML("beforeend",i)}function M(){const i=document.getElementById("hero-marquee-wrapper"),a=document.getElementById("hero-marquee-track");if(!i||!a)return;let t=0,s=1.15,e=.25,n=s,l=s,c=null;i.addEventListener("mouseenter",()=>{n=e}),i.addEventListener("mouseleave",()=>{n=s});function d(){l+=(n-l)*.08,t+=l;const u=a.scrollWidth/2;u>0&&t>=u&&(t-=u),a.style.transform=`translate3d(-${t.toFixed(2)}px, 0, 0)`,c=requestAnimationFrame(d)}c=requestAnimationFrame(d),window.addEventListener("beforeunload",()=>{c&&cancelAnimationFrame(c)})}function h(){document.querySelectorAll(".btn-primary, .btn-secondary, .nav-btn-call, .social-link, .nav-link, .mobile-nav-link").forEach(a=>{if(a.querySelector(".btn-flip-wrapper"))return;const t=a.querySelector("span"),s=a.querySelector("svg"),e=t?t.textContent.trim():a.textContent.trim();if(!e)return;const n=document.createElement("span");n.className="btn-flip-wrapper";const l=document.createElement("span");l.className="btn-flip-text";const c=document.createElement("span");c.className="btn-flip-front",c.textContent=e;const d=document.createElement("span");d.className="btn-flip-back",d.setAttribute("aria-hidden","true"),d.textContent=e,l.appendChild(c),l.appendChild(d),n.appendChild(l),s&&n.appendChild(s.cloneNode(!0)),a.innerHTML="",a.appendChild(n)})}function L(){const i=new IntersectionObserver(a=>{a.forEach(t=>{t.isIntersecting&&t.target.classList.add("is-visible")})},{threshold:.08,rootMargin:"0px 0px -30px 0px"});document.querySelectorAll(".reveal-blur").forEach(a=>i.observe(a))}function $(){document.querySelectorAll(".theme-toggle-btn").forEach(a=>{a.addEventListener("click",f)}),document.querySelectorAll(".faq-question").forEach(a=>{a.addEventListener("click",()=>{const t=a.parentElement,s=t.classList.contains("active");document.querySelectorAll(".faq-item").forEach(e=>e.classList.remove("active")),s||t.classList.add("active")})});const i=document.getElementById("contact-form");i&&i.addEventListener("submit",a=>{a.preventDefault();const t=i.querySelector('button[type="submit"]'),s=t.innerHTML;t.innerHTML="<span>Sending...</span>",t.disabled=!0,setTimeout(()=>{t.innerHTML="<span>✓ Message Sent Successfully!</span>",t.style.background="var(--accent-green)",t.style.color="#fff",i.reset(),setTimeout(()=>{t.innerHTML=s,t.style.background="",t.style.color="",t.disabled=!1,h()},4e3)},1e3)})}
