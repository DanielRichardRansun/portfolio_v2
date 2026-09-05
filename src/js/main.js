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

  // 5. Render Global Footer (No floating badges)
  renderFooter();

  // 6. Initialize Hero Marquee Carousel
  initHeroMarquee();

  // 7. Initialize Button Flip Rolling Text Interaction
  initButtonFlipEffects();

  // 8. Initialize Intersection Observers (Framer blur reveal effect)
  initScrollAnimations();

  // 9. Initialize Interactive Elements (FAQ, Form, Theme Toggle)
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

  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.innerHTML = newTheme === 'dark'
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
  });
}

function renderNavbar() {
  const currentPath = window.location.pathname;
  const isAbout = currentPath.includes('about');
  const isProjects = currentPath.includes('all-projects');
  const isContact = currentPath.includes('contact');
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';

  const navHtml = `
    <!-- Mobile Menu Backdrop -->
    <div id="mobile-menu-backdrop" class="mobile-menu-backdrop" aria-hidden="true"></div>

    <header class="navbar-wrapper">
      <div class="navbar-container">
        <!-- Desktop Pill Navigation -->
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

        <!-- Mobile & Tablet Morphing Squircle Menu -->
        <div id="mobile-morph-menu" class="mobile-morph-menu" aria-label="Mobile Navigation">
          <button type="button" id="mobile-menu-toggle" class="mobile-menu-toggle-btn" aria-label="Toggle navigation menu" aria-expanded="false">
            <span class="hamburger-bar bar-top"></span>
            <span class="hamburger-bar bar-bottom"></span>
          </button>

          <div class="mobile-menu-content">
            <a href="index.html" class="mobile-menu-avatar" title="${siteConfig.profile.name}">
              <img src="${siteConfig.profile.avatar}" alt="${siteConfig.profile.name}" />
            </a>

            <nav class="mobile-menu-nav">
              <a href="about.html" class="mobile-nav-link ${isAbout ? 'active' : ''}">About</a>
              <a href="all-projects.html" class="mobile-nav-link ${isProjects ? 'active' : ''}">All Projects</a>
              <a href="contact.html" class="mobile-nav-link ${isContact ? 'active' : ''}">Contact</a>
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
                ${currentTheme === 'dark' ?
                  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>` :
                  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`
                }
              </button>
            </div>
          </div>
        </div>
        
        <div class="navbar-right">
          <a href="mailto:${siteConfig.profile.email || 'hello@alexmorgan.design'}" class="nav-btn-call" title="Connect with me via email">
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
              ${currentTheme === 'dark' ?
                `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>` :
                `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`
              }
            </button>
          </div>
        </div>
      </div>
    </header>
  `;
  document.body.insertAdjacentHTML('afterbegin', navHtml);
  initMobileMenu();
  initLanguageSwitcher();
}

function initMobileMenu() {
  const morphMenu = document.getElementById('mobile-morph-menu');
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  if (!morphMenu || !toggleBtn) return;

  function openMenu() {
    morphMenu.classList.add('is-open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    if (backdrop) backdrop.classList.add('is-active');
  }

  function closeMenu() {
    morphMenu.classList.remove('is-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    if (backdrop) backdrop.classList.remove('is-active');
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (morphMenu.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
  }

  document.addEventListener('click', (e) => {
    if (morphMenu.classList.contains('is-open') && !morphMenu.contains(e.target) && e.target !== backdrop) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && morphMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });

  morphMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 960 && morphMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });
}

function initLanguageSwitcher() {
  const wraps = document.querySelectorAll('.lang-switcher-wrap');
  if (!wraps.length) return;

  const savedLang = localStorage.getItem('site_lang') || 'en';
  updateAllLangUI(savedLang);

  wraps.forEach(wrap => {
    const toggleBtn = wrap.querySelector('.lang-toggle-btn');
    const dropdown = wrap.querySelector('.lang-dropdown');
    if (!toggleBtn || !dropdown) return;

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const wasVisible = dropdown.classList.contains('is-visible');
      document.querySelectorAll('.lang-dropdown').forEach(d => d.classList.remove('is-visible'));
      if (!wasVisible) dropdown.classList.add('is-visible');
    });

    dropdown.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        const lang = opt.getAttribute('data-lang');
        localStorage.setItem('site_lang', lang);
        updateAllLangUI(lang);
        document.querySelectorAll('.lang-dropdown').forEach(d => d.classList.remove('is-visible'));
      });
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.lang-dropdown').forEach(d => d.classList.remove('is-visible'));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.lang-dropdown').forEach(d => d.classList.remove('is-visible'));
    }
  });

  function updateAllLangUI(lang) {
    document.querySelectorAll('.lang-code-badge').forEach(badge => {
      badge.textContent = lang.toUpperCase();
    });
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
      btn.setAttribute('title', lang === 'id' ? 'Bahasa: Indonesia' : 'Language: English');
    });
    document.querySelectorAll('.lang-option').forEach(opt => {
      if (opt.getAttribute('data-lang') === lang) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });
  }
}

function renderPageContent() {
  // Render Hero Section
  const heroEl = document.getElementById('hero-section');
  if (heroEl) {
    const showcaseCardsHtml = siteConfig.showcase.map(item => `
      <a href="project.html?id=${item.projectId || 'connecto'}" class="marquee-card">
        <div class="marquee-card-img-wrap">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
        </div>
        <div class="marquee-card-badge">
          <span>${item.title}</span>
          <svg class="marquee-card-badge-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
        </div>
      </a>
    `).join('');

    heroEl.innerHTML = `
      <div class="container">
        <div class="hero-grid">
          <!-- Left: Big Name with Inline Avatar Squircle -->
          <div class="hero-left reveal-blur">
            <h1 class="hero-name">
              <span class="hero-name-row">
                <span>${siteConfig.profile.firstName}</span>
                <span class="hero-avatar-badge" title="${siteConfig.profile.name}">
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
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="${siteConfig.profile.ctaSecondary.link}" class="btn-secondary">
                <span>${siteConfig.profile.ctaSecondary.text}</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Edge-to-Edge Hero Showcase Marquee Carousel -->
        <div class="hero-marquee-wrapper reveal-blur" id="hero-marquee-wrapper">
          <div class="hero-marquee-track" id="hero-marquee-track">
            ${showcaseCardsHtml}
            ${showcaseCardsHtml}
          </div>
        </div>
      </div>
    `;
  }

  // Render Clients & Collaborators Pill Bar
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

  // Render Career Container & Timeline
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
        <div class="rating-star-icon" style="font-size: 15px;">★★★★★</div>
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
      <div class="section-title-wrap reveal-blur" style="text-align: center; align-items: center; gap: 18px; margin-bottom: 36px;">
        <div class="badge">${project.category} · ${project.year}</div>
        <h1 class="hero-name" style="font-size: clamp(2.5rem, 5vw, 4rem); text-align: center;"><span>${project.title}</span></h1>
        <p class="hero-tagline" style="max-width: 650px; text-align: center;">${project.subtitle}</p>
        <a href="${project.liveUrl}" target="_blank" rel="noopener" class="btn-primary" style="margin-top: 8px;">
          <span>Visit Live Site</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
        </a>
      </div>

      <div class="project-thumb reveal-blur" style="height: 500px; border-radius: var(--radius-xl); margin-bottom: 50px; border: 1px solid var(--border-subtle); box-shadow: var(--shadow-card);">
        <img src="${project.image}" alt="${project.title}" style="width:100%; height:100%; object-fit: cover;" />
      </div>

      <div class="about-grid reveal-blur" style="margin-bottom: 70px;">
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

      <div style="text-align: center; margin-top: 50px;">
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
            <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">${siteConfig.profile.name}</h3>
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

/**
 * High Performance Auto-Scrolling Hero Marquee
 * Features smooth physics lerping, continuous loop, and hover slowdown.
 */
function initHeroMarquee() {
  const wrapper = document.getElementById('hero-marquee-wrapper');
  const track = document.getElementById('hero-marquee-track');
  if (!wrapper || !track) return;

  let currentPos = 0;
  let normalSpeed = 1.15;
  let slowSpeed = 0.25;
  let targetSpeed = normalSpeed;
  let currentSpeed = normalSpeed;
  let isHovered = false;
  let animationFrameId = null;

  wrapper.addEventListener('mouseenter', () => {
    isHovered = true;
    targetSpeed = slowSpeed;
  });

  wrapper.addEventListener('mouseleave', () => {
    isHovered = false;
    targetSpeed = normalSpeed;
  });

  function step() {
    // Smooth lerp speed transition
    currentSpeed += (targetSpeed - currentSpeed) * 0.08;
    currentPos += currentSpeed;

    const halfWidth = track.scrollWidth / 2;
    if (halfWidth > 0 && currentPos >= halfWidth) {
      currentPos -= halfWidth;
    }

    track.style.transform = `translate3d(-${currentPos.toFixed(2)}px, 0, 0)`;
    animationFrameId = requestAnimationFrame(step);
  }

  animationFrameId = requestAnimationFrame(step);

  window.addEventListener('beforeunload', () => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
  });
}

/**
 * Enhance All Buttons with Vertical Rolling Flip Text Effect
 */
function initButtonFlipEffects() {
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .nav-btn-call, .social-link, .nav-link, .mobile-nav-link');
  
  buttons.forEach(btn => {
    if (btn.querySelector('.btn-flip-wrapper')) return;

    const span = btn.querySelector('span');
    const svg = btn.querySelector('svg');
    const text = span ? span.textContent.trim() : btn.textContent.trim();

    if (!text) return;

    const flipWrapper = document.createElement('span');
    flipWrapper.className = 'btn-flip-wrapper';

    const flipText = document.createElement('span');
    flipText.className = 'btn-flip-text';

    const flipFront = document.createElement('span');
    flipFront.className = 'btn-flip-front';
    flipFront.textContent = text;

    const flipBack = document.createElement('span');
    flipBack.className = 'btn-flip-back';
    flipBack.setAttribute('aria-hidden', 'true');
    flipBack.textContent = text;

    flipText.appendChild(flipFront);
    flipText.appendChild(flipBack);
    flipWrapper.appendChild(flipText);

    if (svg) {
      flipWrapper.appendChild(svg.cloneNode(true));
    }

    btn.innerHTML = '';
    btn.appendChild(flipWrapper);
  });
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal-blur').forEach(el => observer.observe(el));
}

function initInteractions() {
  // Theme Toggle Buttons
  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

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
      submitBtn.innerHTML = '<span>Sending...</span>';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = '<span>✓ Message Sent Successfully!</span>';
        submitBtn.style.background = 'var(--accent-green)';
        submitBtn.style.color = '#fff';
        contactForm.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
          submitBtn.style.color = '';
          submitBtn.disabled = false;
          initButtonFlipEffects();
        }, 4000);
      }, 1000);
    });
  }
}
