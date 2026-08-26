import { siteConfig } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Theme (Default Light)
  initTheme();

  // 2. Page Fade In
  document.body.classList.add('page-loaded');

  // 3. Render Global Navbar
  renderNavbar();

  // 4. Render Dynamic Content Based on Page
  renderPageContent();

  // 5. Render Global Footer & Floating Badges
  renderFooter();
  renderFloatingBadges();

  // 6. Initialize Intersection Observers (Framer blur reveal effect)
  initScrollAnimations();

  // 7. Initialize Interactive Elements (FAQ, Form, Theme Toggle)
  initInteractions();
});

function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (toggleBtn) {
    toggleBtn.innerHTML = newTheme === 'dark'
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
  }
}

function renderNavbar() {
  const currentPath = window.location.pathname;
  const isAbout = currentPath.includes('about');
  const isProjects = currentPath.includes('all-projects');
  const isContact = currentPath.includes('contact');
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';

  const navHtml = `
    <header class="navbar-wrapper">
      <div class="navbar-container">
        <nav class="navbar-left" aria-label="Main Navigation">
          <a href="index.html" class="navbar-avatar" title="${siteConfig.profile.name}">
            <img src="${siteConfig.profile.avatar}" alt="${siteConfig.profile.name}" />
          </a>
          <ul class="nav-links">
            <li><a href="about.html" class="nav-link ${isAbout ? 'active' : ''}">About</a></li>
            <li><a href="all-projects.html" class="nav-link ${isProjects ? 'active' : ''}">All Projects</a></li>
            <li><a href="contact.html" class="nav-link ${isContact ? 'active' : ''}">Contact</a></li>
          </ul>
        </nav>
        
        <div class="navbar-right">
          <a href="${siteConfig.profile.bookingLink}" target="_blank" rel="noopener" class="nav-btn-call">
            <span>Book a 30 min call</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
          </a>
          <a href="contact.html" class="nav-btn-mail" title="Send a message" aria-label="Contact">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
          <button type="button" id="theme-toggle-btn" class="theme-toggle-btn" title="Toggle Theme" aria-label="Toggle theme">
            ${currentTheme === 'dark' ?
              `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>` :
              `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`
            }
          </button>
        </div>
      </div>
    </header>
  `;
  document.body.insertAdjacentHTML('afterbegin', navHtml);
}

function renderPageContent() {
  // Render Hero Section (Reference Image 1)
  const heroEl = document.getElementById('hero-section');
  if (heroEl) {
    heroEl.innerHTML = `
      <div class="container">
        <div class="hero-grid">
          <!-- Left: Big Name with Inline Avatar Squircle -->
          <div class="hero-left reveal-blur">
            <h1 class="hero-name">
              <span class="hero-name-row">
                <span>${siteConfig.profile.firstName}</span>
                <span class="hero-avatar-badge">
                  <img src="${siteConfig.profile.avatar}" alt="${siteConfig.profile.name}" />
                </span>
              </span>
              <span>${siteConfig.profile.lastName}</span>
            </h1>
          </div>

          <!-- Right: Rating Pill, Tagline & CTAs -->
          <div class="hero-right reveal-blur">
            <div class="rating-pill">
              <span class="rating-badge-star">
                <span class="rating-star-icon">★</span>
                <span>${siteConfig.profile.rating.score}</span>
              </span>
              <span class="rating-text">${siteConfig.profile.rating.count}</span>
            </div>

            <p class="hero-tagline">${siteConfig.profile.tagline}</p>

            <div class="hero-actions">
              <a href="${siteConfig.profile.ctaPrimary.link}" class="btn-primary">
                <span>${siteConfig.profile.ctaPrimary.text}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="${siteConfig.profile.ctaSecondary.link}" class="btn-secondary">
                <span>${siteConfig.profile.ctaSecondary.text}</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Showcase Gallery Strip (Reference Image 1) -->
        <div class="hero-showcase-wrap reveal-blur">
          <div class="hero-showcase-grid">
            ${siteConfig.showcase.map(item => `
              <div class="showcase-card">
                <img src="${item.image}" alt="${item.title}" loading="lazy" />
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // Render Clients & Collaborators Pill Bar (Reference Image 2)
  const clientsEl = document.getElementById('clients-bar-section');
  if (clientsEl) {
    clientsEl.innerHTML = `
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
    `;
  }

  // Render Stats Grid
  const statsEl = document.getElementById('stats-grid');
  if (statsEl) {
    statsEl.innerHTML = siteConfig.stats.map(s => `
      <div class="stat-card reveal-blur">
        <div class="stat-val">${s.value}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `).join('');
  }

  // Render Featured Projects
  const projectsEl = document.getElementById('projects-grid');
  if (projectsEl) {
    const isAll = window.location.pathname.includes('all-projects');
    const displayProjects = isAll ? siteConfig.projects : siteConfig.projects.filter(p => p.featured);
    
    projectsEl.innerHTML = displayProjects.map(p => `
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
    `).join('');
  }

  // Render Career Container & Timeline (Reference Image 2)
  const timelineEl = document.getElementById('career-timeline');
  if (timelineEl) {
    timelineEl.innerHTML = `
      <div class="career-container reveal-blur">
        <div class="badge-career">
          <span class="dot-orange"></span>
          <span>Career</span>
        </div>
        <div class="career-list">
          ${siteConfig.career.map(c => `
            <div class="career-row">
              <div>
                <div class="career-role-title">${c.role}</div>
                <div class="career-role-sub">${c.company} · ${c.desc}</div>
              </div>
              <div class="career-period">${c.period}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Render Skills
  const skillsEl = document.getElementById('skills-wrap');
  if (skillsEl) {
    skillsEl.innerHTML = siteConfig.skills.map(s => `
      <span class="skill-tag reveal-blur">${s}</span>
    `).join('');
  }

  // Render Process
  const processEl = document.getElementById('process-grid');
  if (processEl) {
    processEl.innerHTML = siteConfig.process.map(pr => `
      <div class="card-item reveal-blur">
        <span class="card-num">${pr.step}</span>
        <h3 class="card-title">${pr.title}</h3>
        <p class="card-desc">${pr.desc}</p>
      </div>
    `).join('');
  }

  // Render Services
  const servicesEl = document.getElementById('services-grid');
  if (servicesEl) {
    servicesEl.innerHTML = siteConfig.services.map(sv => `
      <div class="card-item reveal-blur">
        <h3 class="card-title">${sv.title}</h3>
        <p class="card-desc">${sv.desc}</p>
      </div>
    `).join('');
  }

  // Render Testimonials
  const testimonialsEl = document.getElementById('testimonials-grid');
  if (testimonialsEl) {
    testimonialsEl.innerHTML = siteConfig.testimonials.map(t => `
      <div class="testimonial-card reveal-blur">
        <div class="rating-star-icon" style="font-size: 16px;">★★★★★</div>
        <p class="testimonial-quote">"${t.quote}"</p>
        <div class="testimonial-author">
          <img src="${t.avatar}" alt="${t.author}" class="testimonial-avatar" />
          <div>
            <div class="author-name">${t.author}</div>
            <div class="author-role">${t.role}</div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Render FAQs
  const faqEl = document.getElementById('faq-list');
  if (faqEl) {
    faqEl.innerHTML = siteConfig.faqs.map(faq => `
      <div class="faq-item reveal-blur">
        <button class="faq-question" type="button">
          <span>${faq.question}</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
          <p>${faq.answer}</p>
        </div>
      </div>
    `).join('');
  }

  // Render Dynamic Project Details if on project.html
  const projectDetailEl = document.getElementById('project-detail-content');
  if (projectDetailEl) {
    renderProjectDetailPage(projectDetailEl);
  }
}

function renderProjectDetailPage(container) {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id') || 'connecto';
  const project = siteConfig.projects.find(p => p.id === projectId) || siteConfig.projects[0];

  document.title = `${project.title} - ${siteConfig.meta.author}`;

  container.innerHTML = `
    <div class="container-narrow">
      <div class="section-title-wrap reveal-blur" style="text-align: center; align-items: center; gap: 20px; margin-bottom: 40px;">
        <div class="badge">${project.category} · ${project.year}</div>
        <h1 class="hero-name" style="font-size: clamp(2.5rem, 5vw, 4rem);"><span>${project.title}</span></h1>
        <p class="hero-tagline" style="max-width: 650px;">${project.subtitle}</p>
        <a href="${project.liveUrl}" target="_blank" rel="noopener" class="btn-primary" style="margin-top: 10px;">
          <span>Visit Live Site</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
        </a>
      </div>

      <div class="project-thumb reveal-blur" style="height: 520px; border-radius: var(--radius-xl); margin-bottom: 60px;">
        <img src="${project.image}" alt="${project.title}" style="width:100%; height:100%; object-fit: cover;" />
      </div>

      <div class="about-grid reveal-blur" style="margin-bottom: 80px;">
        <div class="card-item">
          <span class="card-num">01 / CHALLENGE</span>
          <h2 class="card-title">The Problem</h2>
          <p class="card-desc">${project.challenge}</p>
        </div>
        <div class="card-item">
          <span class="card-num">02 / SOLUTION</span>
          <h2 class="card-title">Our Approach</h2>
          <p class="card-desc">${project.approach}</p>
        </div>
      </div>

      <div style="text-align: center; margin-top: 60px;">
        <a href="all-projects.html" class="btn-secondary">
          <span>← Back to All Projects</span>
        </a>
      </div>
    </div>
  `;
}

function renderFooter() {
  const footerHtml = `
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div>
            <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">${siteConfig.profile.name}</h3>
            <p style="color: var(--text-muted); font-size: 14px;">${siteConfig.footer.responseGuarantee}</p>
          </div>
          <div class="footer-socials">
            ${siteConfig.socials.map(s => `
              <a href="${s.url}" target="_blank" rel="noopener" class="social-link">${s.name}</a>
            `).join('')}
          </div>
        </div>
        <div class="footer-bottom">
          <p>${siteConfig.footer.copyright}</p>
          <p>${siteConfig.footer.newsletterNote}</p>
        </div>
      </div>
    </footer>
  `;
  document.body.insertAdjacentHTML('beforeend', footerHtml);
}

function renderFloatingBadges() {
  const badgesHtml = `
    <div class="floating-badges">
      <a href="#contact" class="floating-badge-btn">
        <span>⚡ Get for Free</span>
      </a>
      <a href="https://framer.com" target="_blank" rel="noopener" class="floating-badge-btn">
        <span>❖ Made in Framer</span>
      </a>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', badgesHtml);
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal-blur').forEach(el => observer.observe(el));
}

function initInteractions() {
  // Theme Toggle Button
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }

  // FAQ Accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isActive = item.classList.contains('active');
      
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = 'Sending...';
      submitBtn.disabled = true;

      // Simulated smooth submission
      setTimeout(() => {
        submitBtn.innerHTML = '✓ Message Sent Successfully!';
        submitBtn.style.background = 'var(--accent-green)';
        submitBtn.style.color = '#fff';
        contactForm.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
          submitBtn.style.color = '';
          submitBtn.disabled = false;
        }, 4000);
      }, 1000);
    });
  }
}
