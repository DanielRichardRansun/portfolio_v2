(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const e={meta:{author:"Alex Morgan"},profile:{name:"Alex Morgan",firstName:"Alex",lastName:"Morgan",avatar:"./src/assets/images/QsdA548N7Gu3jhrCEHLFgsrs040688.png",rating:{score:"4.9 / 5",count:"Helped 120+ businesses & counting"},tagline:"I build digital experiences that drive real growth for your business. Let's partner to create work that gets results.",ctaPrimary:{text:"Start a Project",link:"#contact"},ctaSecondary:{text:"See Projects",link:"#projects"},bookingLink:"https://cal.com"},showcase:[{image:"./src/assets/images/BMIIfm3F6KOhs4e0XbupycuUa8a2.png",title:"Mobile UI"},{image:"./src/assets/images/6226OWEOo2jiofOMMWbqK4BykK00688.png",title:"Display Terminal"},{image:"./src/assets/images/ubWnscZGEwgvwVyAvmkY9kr5k0688.png",title:"Tablet Interface"},{image:"./src/assets/images/XNBUHZ3Fth8RwCKmsWSAsRL8CU0688.png",title:"Editorial ST10 Book"},{image:"./src/assets/images/dSOEoYvaIiU6VtEXiXYZjilZ6MY0688.png",title:"Smart Device"}],stats:[{value:"100%",label:"Client Satisfaction Rate"},{value:"50+",label:"Projects Completed"},{value:"4X",label:"Client Growth"},{value:"7+",label:"Years of Experience"}],career:[{role:"Design Director",company:"Solvix",period:"2025 - Now",desc:"Leading design vision, team mentorship, and scalable multi-platform design systems."},{role:"Sr. Product Designer",company:"Coreva",period:"2024 - 2025",desc:"Spearheaded user research, conversion optimization, and core mobile app features."},{role:"Product Designer",company:"Belvo",period:"2015 - 2024",desc:"Designed intuitive fintech dashboards, APIs documentation UI, and checkout flows."},{role:"UI/UX Designer",company:"Arvion",period:"2012 - 2015",desc:"Created modern brand identities, responsive web layouts, and interactive prototypes."}],skills:["UX-UI Design","Product Strategy","Design Systems","Web Development","Mobile Apps","Brand Identity","Interaction Design","Prototyping"],projects:[{id:"connecto",title:"Connecto",year:"2023",category:"Web Design",industry:"SaaS / Collaboration",subtitle:"A collaboration platform for remote teams to stay aligned, track progress, and communicate seamlessly.",description:"Connecto is a unified workspace app built to eliminate communication silos across distributed teams.",challenge:"Connecto needed a redesigned dashboard and workflow interface that reduced cognitive overload, making task updates and team chats intuitive without sacrificing speed.",approach:"We streamlined the layout with focus modes, standardized design tokens, and crafted a distraction-free user flow for real-time collaboration.",image:"./src/assets/images/ubWnscZGEwgvwVyAvmkY9kr5k0688.png",featured:!0,liveUrl:"https://connecto.example.com"},{id:"paynest",title:"PayNest",year:"2024",category:"Fintech / App",industry:"Fintech",subtitle:"This project solves common financial usability challenges by delivering a seamless mobile wallet experience.",description:"PayNest is a digital wallet app for instant transfers, bill payments, expense tracking, and secure daily transactions.",challenge:"PayNest faced friction during multi-step checkout and wallet funding, causing drop-offs among first-time fintech users.",approach:"I worked across product design and system refinement, simplifying core user flows, adding clear visual feedback, and implementing biometric quick-pay.",image:"./src/assets/images/6226OWEOo2jiofOMMWbqK4BykK00688.png",featured:!0,liveUrl:"https://paynest.example.com"},{id:"shopora",title:"Shopora",year:"2024",category:"E-Commerce",industry:"E-Commerce & Retail",subtitle:"Elevating the shopping experience with intuitive search, smart filtering, and rapid single-page checkout.",description:"Shopora is a high-growth luxury retail marketplace offering curated fashion and lifestyle collections.",challenge:"Catalog browsing was sluggish and checkout abandonment rates were high on mobile devices.",approach:"Re-architected the product discovery pages, added instant variant preview modals, and streamlined mobile checkout to 2 steps.",image:"./src/assets/images/XNBUHZ3Fth8RwCKmsWSAsRL8CU0688.png",featured:!0,liveUrl:"https://shopora.example.com"},{id:"edunova",title:"EduNova",year:"2024",category:"EdTech",industry:"Education & Learning",subtitle:"An interactive learning management ecosystem connecting students, educators, and course creators.",description:"EduNova empowers learners worldwide with bite-sized video courses, interactive quizzes, and cohort discussions.",challenge:"Learners struggled to keep track of their course milestones and interact with mentors effectively.",approach:"Designed a personalized dashboard with progress tracking, streak rewards, and synchronized video note-taking.",image:"./src/assets/images/wWM4O3FUUedeVCL1ZsQrZMNPZ00688.png",featured:!0,liveUrl:"https://edunova.example.com"},{id:"medilink",title:"MediLink",year:"2026",category:"HealthTech",industry:"Healthcare",subtitle:"Connecting patients with verified specialists and telehealth consultations in minutes.",description:"MediLink is a digital healthcare platform providing secure appointment bookings, lab reports, and telehealth.",challenge:"Patients found booking consultations complicated and medical history data hard to parse on small screens.",approach:"Built an accessible, high-contrast UI with clear doctor rating cards, real-time availability slots, and encrypted records.",image:"./src/assets/images/dSOEoYvaIiU6VtEXiXYZjilZ6MY0688.png",featured:!0,liveUrl:"https://medilink.example.com"},{id:"travelio",title:"Travelio",year:"2025",category:"Travel & Lifestyle",industry:"Travel",subtitle:"Smart itinerary planning and curated local travel experiences worldwide.",description:"Travelio is an all-in-one travel companion for discovering hidden gems, booking stays, and sharing custom itineraries.",challenge:"Users needed a seamless way to collaborate with friends on trip itineraries and split expenses on the go.",approach:"Created a collaborative drag-and-drop itinerary board with integrated map view and instant currency conversion.",image:"./src/assets/images/r13uC0loylC7UCy1flJYmpOxraY0688.png",featured:!0,liveUrl:"https://travelio.example.com"}],process:[{step:"01",title:"Discovery & Empathy",desc:"Every great design starts with empathy. I dive deep into the problem to uncover insights that shape the solid foundation."},{step:"02",title:"Strategy & Wireframing",desc:"I blend strategy, usability, and visual storytelling to design experiences that feel intuitive and look distinct."},{step:"03",title:"Feedback & Iteration",desc:"Through feedback, testing, and iteration, I ensure the design works in the real world — not just on Figma."},{step:"04",title:"Handoff & Scalability",desc:"I guide projects from concept to launch, helping teams build scalable design systems and maintain consistent, well-crafted brand experiences across products."}],services:[{title:"UX-UI & Creative",desc:"Crafting clean, user-friendly sites and apps that reflect your brand & deliver a seamless experience."},{title:"Web Development",desc:"Building fast, high-performance websites that are easy to manage and optimized for every device."},{title:"Brand Identity",desc:"Cohesive visual systems — from logos to typography and colors — make your brand instantly recognizable."},{title:"Design Consultation",desc:"Offering strategic guidance to help you plan, refine, and execute your design ideas effectively."}],testimonials:[{rating:5,quote:"Alex truly understood my vision & turned it into impactful designs, the results went way beyond my expectations!",author:"Marcus Rivera",role:"Founder at NovaTech",avatar:"./src/assets/images/TsqXxFsRybj1exbSyDk1Qzn4FZA0688.png"},{rating:4.9,quote:"As a small business owner, the entire process felt effortless thanks to Alex’s clear guidance & design excellence.",author:"Sophia Laurent",role:"CEO at VibeStudio",avatar:"./src/assets/images/IhMKR62TmAYemQnYIXjvnFCxc00688.png"},{rating:4.8,quote:"Running a startup is challenging, but Alex Morgan made this entire product rebranding smooth and completely hassle-free.",author:"Daniel Zhang",role:"Product Lead at FlowScale",avatar:"./src/assets/images/4ogfJrQenTSc6VnYawhMS1ONo0688.png"}],faqs:[{question:"How do we get started?",answer:"Simply fill out the project form below or book a quick 30-minute discovery call. We will discuss your goals, scope, timeline, and deliverables."},{question:"Can you redesign my existing website or app?",answer:"Yes! I conduct a thorough UX audit of your current product, pinpointing friction points and redesigning the experience to maximize usability and conversions."},{question:"Do you also handle development or just design?",answer:"Both. I provide end-to-end services from Figma prototypes to fully responsive, clean, and production-ready code."},{question:"What tools do you use for design?",answer:"Framer, Figma, Adobe Suite, Webflow, and modern web development technologies (HTML, Modern CSS, JavaScript, React)."},{question:"Can I request additional revisions?",answer:"Absolutely. Every project includes dedicated feedback cycles to ensure you are 100% satisfied with the outcome before final handoff."}],socials:[{name:"Dribbble",url:"https://dribbble.com"},{name:"Behance",url:"https://behance.net"},{name:"Figma",url:"https://figma.com"},{name:"Twitter / X",url:"https://x.com"},{name:"LinkedIn",url:"https://linkedin.com"}],footer:{copyright:`© ${new Date().getFullYear()} Alex Morgan. All rights reserved.`,newsletterNote:"Subscribe to get early access to special offers, design insights, and exclusive project updates.",responseGuarantee:"We will reach out to you within 24hrs"}};document.addEventListener("DOMContentLoaded",()=>{h(),document.body.classList.add("page-loaded"),f(),b(),w(),k(),x(),M()});function h(){const n=localStorage.getItem("theme")||"light";document.documentElement.setAttribute("data-theme",n)}function v(){const i=(document.documentElement.getAttribute("data-theme")||"light")==="light"?"dark":"light";document.documentElement.setAttribute("data-theme",i),localStorage.setItem("theme",i);const r=document.getElementById("theme-toggle-btn");r&&(r.innerHTML=i==="dark"?'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>':'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>')}function f(){const n=window.location.pathname,i=n.includes("about"),r=n.includes("all-projects"),t=n.includes("contact"),s=document.documentElement.getAttribute("data-theme")||"light",o=`
    <header class="navbar-wrapper">
      <div class="navbar-container">
        <nav class="navbar-left" aria-label="Main Navigation">
          <a href="index.html" class="navbar-avatar" title="${e.profile.name}">
            <img src="${e.profile.avatar}" alt="${e.profile.name}" />
          </a>
          <ul class="nav-links">
            <li><a href="about.html" class="nav-link ${i?"active":""}">About</a></li>
            <li><a href="all-projects.html" class="nav-link ${r?"active":""}">All Projects</a></li>
            <li><a href="contact.html" class="nav-link ${t?"active":""}">Contact</a></li>
          </ul>
        </nav>
        
        <div class="navbar-right">
          <a href="${e.profile.bookingLink}" target="_blank" rel="noopener" class="nav-btn-call">
            <span>Book a 30 min call</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
          </a>
          <a href="contact.html" class="nav-btn-mail" title="Send a message" aria-label="Contact">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
          <button type="button" id="theme-toggle-btn" class="theme-toggle-btn" title="Toggle Theme" aria-label="Toggle theme">
            ${s==="dark"?'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>':'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>'}
          </button>
        </div>
      </div>
    </header>
  `;document.body.insertAdjacentHTML("afterbegin",o)}function b(){const n=document.getElementById("hero-section");n&&(n.innerHTML=`
      <div class="container">
        <div class="hero-grid">
          <!-- Left: Big Name with Inline Avatar Squircle -->
          <div class="hero-left reveal-blur">
            <h1 class="hero-name">
              <span class="hero-name-row">
                <span>${e.profile.firstName}</span>
                <span class="hero-avatar-badge">
                  <img src="${e.profile.avatar}" alt="${e.profile.name}" />
                </span>
              </span>
              <span>${e.profile.lastName}</span>
            </h1>
          </div>

          <!-- Right: Rating Pill, Tagline & CTAs -->
          <div class="hero-right reveal-blur">
            <div class="rating-pill">
              <span class="rating-badge-star">
                <span class="rating-star-icon">★</span>
                <span>${e.profile.rating.score}</span>
              </span>
              <span class="rating-text">${e.profile.rating.count}</span>
            </div>

            <p class="hero-tagline">${e.profile.tagline}</p>

            <div class="hero-actions">
              <a href="${e.profile.ctaPrimary.link}" class="btn-primary">
                <span>${e.profile.ctaPrimary.text}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="${e.profile.ctaSecondary.link}" class="btn-secondary">
                <span>${e.profile.ctaSecondary.text}</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Showcase Gallery Strip (Reference Image 1) -->
        <div class="hero-showcase-wrap reveal-blur">
          <div class="hero-showcase-grid">
            ${e.showcase.map(a=>`
              <div class="showcase-card">
                <img src="${a.image}" alt="${a.title}" loading="lazy" />
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `);const i=document.getElementById("clients-bar-section");i&&(i.innerHTML=`
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
    `);const r=document.getElementById("stats-grid");r&&(r.innerHTML=e.stats.map(a=>`
      <div class="stat-card reveal-blur">
        <div class="stat-val">${a.value}</div>
        <div class="stat-label">${a.label}</div>
      </div>
    `).join(""));const t=document.getElementById("projects-grid");if(t){const u=window.location.pathname.includes("all-projects")?e.projects:e.projects.filter(l=>l.featured);t.innerHTML=u.map(l=>`
      <a href="project.html?id=${l.id}" class="project-card reveal-blur">
        <div class="project-thumb">
          <img src="${l.image}" alt="${l.title}" loading="lazy" />
        </div>
        <div class="project-info">
          <div class="project-meta">
            <span>${l.category}</span>
            <span>${l.year}</span>
          </div>
          <div class="project-title">
            <span>${l.title}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
          </div>
          <p class="project-sub">${l.subtitle}</p>
        </div>
      </a>
    `).join("")}const s=document.getElementById("career-timeline");s&&(s.innerHTML=`
      <div class="career-container reveal-blur">
        <div class="badge-career">
          <span class="dot-orange"></span>
          <span>Career</span>
        </div>
        <div class="career-list">
          ${e.career.map(a=>`
            <div class="career-row">
              <div>
                <div class="career-role-title">${a.role}</div>
                <div class="career-role-sub">${a.company} · ${a.desc}</div>
              </div>
              <div class="career-period">${a.period}</div>
            </div>
          `).join("")}
        </div>
      </div>
    `);const o=document.getElementById("skills-wrap");o&&(o.innerHTML=e.skills.map(a=>`
      <span class="skill-tag reveal-blur">${a}</span>
    `).join(""));const c=document.getElementById("process-grid");c&&(c.innerHTML=e.process.map(a=>`
      <div class="card-item reveal-blur">
        <span class="card-num">${a.step}</span>
        <h3 class="card-title">${a.title}</h3>
        <p class="card-desc">${a.desc}</p>
      </div>
    `).join(""));const d=document.getElementById("services-grid");d&&(d.innerHTML=e.services.map(a=>`
      <div class="card-item reveal-blur">
        <h3 class="card-title">${a.title}</h3>
        <p class="card-desc">${a.desc}</p>
      </div>
    `).join(""));const p=document.getElementById("testimonials-grid");p&&(p.innerHTML=e.testimonials.map(a=>`
      <div class="testimonial-card reveal-blur">
        <div class="rating-star-icon" style="font-size: 16px;">★★★★★</div>
        <p class="testimonial-quote">"${a.quote}"</p>
        <div class="testimonial-author">
          <img src="${a.avatar}" alt="${a.author}" class="testimonial-avatar" />
          <div>
            <div class="author-name">${a.author}</div>
            <div class="author-role">${a.role}</div>
          </div>
        </div>
      </div>
    `).join(""));const m=document.getElementById("faq-list");m&&(m.innerHTML=e.faqs.map(a=>`
      <div class="faq-item reveal-blur">
        <button class="faq-question" type="button">
          <span>${a.question}</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
          <p>${a.answer}</p>
        </div>
      </div>
    `).join(""));const g=document.getElementById("project-detail-content");g&&y(g)}function y(n){const r=new URLSearchParams(window.location.search).get("id")||"connecto",t=e.projects.find(s=>s.id===r)||e.projects[0];document.title=`${t.title} - ${e.meta.author}`,n.innerHTML=`
    <div class="container-narrow">
      <div class="section-title-wrap reveal-blur" style="text-align: center; align-items: center; gap: 20px; margin-bottom: 40px;">
        <div class="badge">${t.category} · ${t.year}</div>
        <h1 class="hero-name" style="font-size: clamp(2.5rem, 5vw, 4rem);"><span>${t.title}</span></h1>
        <p class="hero-tagline" style="max-width: 650px;">${t.subtitle}</p>
        <a href="${t.liveUrl}" target="_blank" rel="noopener" class="btn-primary" style="margin-top: 10px;">
          <span>Visit Live Site</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
        </a>
      </div>

      <div class="project-thumb reveal-blur" style="height: 520px; border-radius: var(--radius-xl); margin-bottom: 60px;">
        <img src="${t.image}" alt="${t.title}" style="width:100%; height:100%; object-fit: cover;" />
      </div>

      <div class="about-grid reveal-blur" style="margin-bottom: 80px;">
        <div class="card-item">
          <span class="card-num">01 / CHALLENGE</span>
          <h2 class="card-title">The Problem</h2>
          <p class="card-desc">${t.challenge}</p>
        </div>
        <div class="card-item">
          <span class="card-num">02 / SOLUTION</span>
          <h2 class="card-title">Our Approach</h2>
          <p class="card-desc">${t.approach}</p>
        </div>
      </div>

      <div style="text-align: center; margin-top: 60px;">
        <a href="all-projects.html" class="btn-secondary">
          <span>← Back to All Projects</span>
        </a>
      </div>
    </div>
  `}function w(){const n=`
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div>
            <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">${e.profile.name}</h3>
            <p style="color: var(--text-muted); font-size: 14px;">${e.footer.responseGuarantee}</p>
          </div>
          <div class="footer-socials">
            ${e.socials.map(i=>`
              <a href="${i.url}" target="_blank" rel="noopener" class="social-link">${i.name}</a>
            `).join("")}
          </div>
        </div>
        <div class="footer-bottom">
          <p>${e.footer.copyright}</p>
          <p>${e.footer.newsletterNote}</p>
        </div>
      </div>
    </footer>
  `;document.body.insertAdjacentHTML("beforeend",n)}function k(){document.body.insertAdjacentHTML("beforeend",`
    <div class="floating-badges">
      <a href="#contact" class="floating-badge-btn">
        <span>⚡ Get for Free</span>
      </a>
      <a href="https://framer.com" target="_blank" rel="noopener" class="floating-badge-btn">
        <span>❖ Made in Framer</span>
      </a>
    </div>
  `)}function x(){const n=new IntersectionObserver(i=>{i.forEach(r=>{r.isIntersecting&&r.target.classList.add("is-visible")})},{threshold:.1,rootMargin:"0px 0px -40px 0px"});document.querySelectorAll(".reveal-blur").forEach(i=>n.observe(i))}function M(){const n=document.getElementById("theme-toggle-btn");n&&n.addEventListener("click",v),document.querySelectorAll(".faq-question").forEach(r=>{r.addEventListener("click",()=>{const t=r.parentElement,s=t.classList.contains("active");document.querySelectorAll(".faq-item").forEach(o=>o.classList.remove("active")),s||t.classList.add("active")})});const i=document.getElementById("contact-form");i&&i.addEventListener("submit",r=>{r.preventDefault();const t=i.querySelector('button[type="submit"]'),s=t.innerHTML;t.innerHTML="Sending...",t.disabled=!0,setTimeout(()=>{t.innerHTML="✓ Message Sent Successfully!",t.style.background="var(--accent-green)",t.style.color="#fff",i.reset(),setTimeout(()=>{t.innerHTML=s,t.style.background="",t.style.color="",t.disabled=!1},4e3)},1e3)})}
