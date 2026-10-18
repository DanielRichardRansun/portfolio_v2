import { siteConfig } from './data.js';
import { smoothScroll } from './smooth-scroll.js';

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

  // 10. Initialize Floating Chatbot FAB (Lottie Animation)
  initChatbotFab();
});

function getThemeIconSvg() {
  return `
    <svg class="theme-icon-svg sun-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" stroke-width="1.5" stroke="currentColor" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>
    <svg class="theme-icon-svg moon-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" stroke-width="1.5" stroke="currentColor" fill="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" /></svg>
  `;
}

function updateAllThemeButtons(theme) {
  const title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    if (!btn.querySelector('.sun-icon')) {
      btn.innerHTML = getThemeIconSvg();
    }
    btn.setAttribute('title', title);
    btn.setAttribute('aria-label', title);
  });
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateAllThemeButtons(savedTheme);
}

let isThemeTransitioning = false;

async function toggleTheme(event) {
  if (isThemeTransitioning) return;

  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  const btn = (event && event.currentTarget) || document.querySelector('.theme-toggle-btn');

  const updateDOM = () => {
    document.documentElement.classList.add('no-transitions');
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateAllThemeButtons(newTheme);
    void document.documentElement.offsetHeight;
    document.documentElement.classList.remove('no-transitions');
  };

  // If browser does not support View Transition API, execute direct toggle
  if (typeof document.startViewTransition !== 'function') {
    updateDOM();
    return;
  }

  isThemeTransitioning = true;

  try {
    const rect = btn ? btn.getBoundingClientRect() : {
      left: window.innerWidth - 60,
      top: 24,
      width: 52,
      height: 52
    };

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const rightDist = window.innerWidth - x;
    const bottomDist = window.innerHeight - y;
    const maxRadius = Math.hypot(
      Math.max(x, rightDist),
      Math.max(y, bottomDist)
    );

    const transition = document.startViewTransition(() => {
      updateDOM();
    });

    await transition.ready;

    // Framer Animated Theme Toggle: expanding circular clip-path mask from button coordinates
    const animation = document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`
        ]
      },
      {
        duration: 700,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)'
      }
    );

    await animation.finished;
  } catch (err) {
    console.debug('Theme view transition:', err);
  } finally {
    isThemeTransitioning = false;
  }
}

function renderNavbar() {
  const currentPath = window.location.pathname;
  const isAbout = currentPath.includes('about');
  const isProjects = currentPath.includes('all-projects');
  const isContact = currentPath.includes('contact');
  const isHome = !isAbout && !isProjects && !isContact;
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';

  // If navbar is already statically present in the DOM, do not re-insert!
  const existingNav = document.querySelector('.navbar-wrapper');
  if (existingNav) {
    const navLinks = existingNav.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach(link => {
      const href = link.getAttribute('href') || '';
      if (isAbout && href.includes('about')) link.classList.add('active');
      else if (isProjects && href.includes('all-projects')) link.classList.add('active');
      else if (isContact && href.includes('contact')) link.classList.add('active');
    });
    const avatar = existingNav.querySelector('.navbar-avatar');
    if (avatar && isHome) avatar.classList.add('is-home');

    initMobileMenu();
    initLanguageSwitcher();
    return;
  }

  const noAnimClass = 'no-nav-anim';

  const navHtml = `
    <!-- Progressive Top Ambient Blur Overlay behind Header (Framer Exact Component) -->
    <div class="header-blur-overlay" aria-hidden="true" style="position: fixed; top: 0px; left: 0px; width: 100%; height: 120px; pointer-events: none; z-index: 90;">
      <div style="position: absolute; inset: 0px; overflow: hidden;">
        <div style="opacity: 1; position: absolute; inset: 0px; z-index: 1; mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%); -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%); border-radius: 0px; pointer-events: none; backdrop-filter: blur(0.390625px); -webkit-backdrop-filter: blur(0.390625px);"></div>
        <div style="opacity: 1; position: absolute; inset: 0px; z-index: 2; mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%); -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%); border-radius: 0px; pointer-events: none; backdrop-filter: blur(0.78125px); -webkit-backdrop-filter: blur(0.78125px);"></div>
        <div style="opacity: 1; position: absolute; inset: 0px; z-index: 3; mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%); -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%); border-radius: 0px; pointer-events: none; backdrop-filter: blur(1.5625px); -webkit-backdrop-filter: blur(1.5625px);"></div>
        <div style="opacity: 1; position: absolute; inset: 0px; z-index: 4; mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%); -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%); border-radius: 0px; pointer-events: none; backdrop-filter: blur(3.125px); -webkit-backdrop-filter: blur(3.125px);"></div>
        <div style="opacity: 1; position: absolute; inset: 0px; z-index: 5; mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%); -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%); border-radius: 0px; pointer-events: none; backdrop-filter: blur(6.25px); -webkit-backdrop-filter: blur(6.25px);"></div>
        <div style="opacity: 1; position: absolute; inset: 0px; z-index: 6; mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%); -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%); border-radius: 0px; pointer-events: none; backdrop-filter: blur(12.5px); -webkit-backdrop-filter: blur(12.5px);"></div>
        <div style="opacity: 1; position: absolute; inset: 0px; z-index: 7; mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%); -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%); border-radius: 0px; pointer-events: none; backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px);"></div>
        <div style="opacity: 1; position: absolute; inset: 0px; z-index: 8; mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%); -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%); border-radius: 0px; pointer-events: none; backdrop-filter: blur(50px); -webkit-backdrop-filter: blur(50px);"></div>
      </div>
    </div>

    <!-- Mobile Menu Backdrop -->
    <div id="mobile-menu-backdrop" class="mobile-menu-backdrop" aria-hidden="true"></div>

    <header class="navbar-wrapper">
      <div class="navbar-container ${noAnimClass}">
        <!-- Desktop Pill Navigation -->
        <nav class="navbar-left" aria-label="Main Navigation">
          <a href="index.html" class="navbar-avatar ${isHome ? 'is-home' : ''}" title="${siteConfig.profile.name}">
            <img src="${siteConfig.profile.navbarAvatar || siteConfig.profile.avatar}" alt="${siteConfig.profile.name}" />
          </a>
          <ul class="nav-links">
            <li><a href="all-projects.html" class="nav-link ${isProjects ? 'active' : ''}">Projects</a></li>
            <li><a href="about.html" class="nav-link ${isAbout ? 'active' : ''}">About</a></li>
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
            <a href="index.html" class="mobile-menu-avatar ${isHome ? 'is-home' : ''}" title="${siteConfig.profile.name}">
              <img src="${siteConfig.profile.navbarAvatar || siteConfig.profile.avatar}" alt="${siteConfig.profile.name}" />
            </a>

            <nav class="mobile-menu-nav">
              <a href="all-projects.html" class="mobile-nav-link ${isProjects ? 'active' : ''}">Projects</a>
              <a href="about.html" class="mobile-nav-link ${isAbout ? 'active' : ''}">About</a>
              <a href="contact.html" class="mobile-nav-link ${isContact ? 'active' : ''}">Contact</a>
            </nav>

            <div class="mobile-menu-bottom">
              <a href="mailto:${siteConfig.profile.email || 'hello@danielrichard.design'}" class="nav-btn-call mobile-sidebar-connect" title="Connect with me via email">
                <span>Connect with me</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
              </a>

              <div class="mobile-menu-controls">
                <button type="button" class="lang-toggle-btn" title="Switch language (EN / ID)" aria-label="Toggle language">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20M12 2a14.5 14.5 0 0 1 0 20M2 12h20"/>
                  </svg>
                  <span class="btn-flip-wrapper">
                    <span class="btn-flip-text">
                      <span class="btn-flip-front lang-text">EN</span>
                      <span class="btn-flip-back lang-text" aria-hidden="true">EN</span>
                    </span>
                  </span>
                </button>

                <button type="button" class="theme-toggle-btn" title="${currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}" aria-label="${currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}">
                  ${getThemeIconSvg(currentTheme)}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="navbar-right">
          <a href="mailto:${siteConfig.profile.email || 'hello@danielrichard.design'}" class="nav-btn-call" title="Connect with me via email">
            <span>Connect with me</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
          </a>

          <!-- Desktop Language & Theme Controls -->
          <div class="desktop-only-controls">
            <button type="button" class="lang-toggle-btn" title="Switch language (EN / ID)" aria-label="Toggle language">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a14.5 14.5 0 0 0 0 20M12 2a14.5 14.5 0 0 1 0 20M2 12h20"/>
              </svg>
              <span class="btn-flip-wrapper">
                <span class="btn-flip-text">
                  <span class="btn-flip-front lang-text">EN</span>
                  <span class="btn-flip-back lang-text" aria-hidden="true">EN</span>
                </span>
              </span>
            </button>

            <button type="button" class="theme-toggle-btn" title="${currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}" aria-label="${currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}">
              ${getThemeIconSvg(currentTheme)}
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
  const navWrapper = document.querySelector('.navbar-wrapper');
  if (!morphMenu || !toggleBtn) return;

  function openMenu() {
    morphMenu.classList.add('is-open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    if (backdrop) backdrop.classList.add('is-active');
    if (navWrapper) navWrapper.classList.add('has-menu-open');
  }

  function closeMenu() {
    morphMenu.classList.remove('is-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    if (backdrop) backdrop.classList.remove('is-active');
    if (navWrapper) navWrapper.classList.remove('has-menu-open');
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
  const savedLang = localStorage.getItem('site_lang') || 'en';
  updateAllLangUI(savedLang);

  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const current = localStorage.getItem('site_lang') || 'en';
      const newLang = current === 'en' ? 'id' : 'en';
      localStorage.setItem('site_lang', newLang);

      // Trigger vertical flip transition to new language across all language buttons
      document.querySelectorAll('.lang-toggle-btn').forEach(b => {
        const flipBack = b.querySelector('.btn-flip-back');
        if (flipBack) {
          flipBack.textContent = newLang.toUpperCase();
        }
        b.classList.add('is-flipping');
      });

      // After flip animation completes (320ms), finalize labels and clean up classes
      setTimeout(() => {
        document.querySelectorAll('.lang-toggle-btn').forEach(b => {
          const flipFront = b.querySelector('.btn-flip-front');
          const flipBack = b.querySelector('.btn-flip-back');
          if (flipFront && flipBack) {
            b.classList.add('no-transition');
            flipFront.textContent = newLang.toUpperCase();
            flipBack.textContent = newLang.toUpperCase();
            b.classList.remove('is-flipping');

            requestAnimationFrame(() => {
              b.classList.remove('no-transition');
            });
          }
        });
        updateAllLangTitles(newLang);
      }, 320);
    });
  });

  function updateAllLangTitles(lang) {
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
      btn.setAttribute('title', lang === 'id' ? 'Bahasa: Indonesia (Klik untuk ganti ke English)' : 'Language: English (Click to switch to Bahasa Indonesia)');
    });
  }

  function updateAllLangUI(lang) {
    updateAllLangTitles(lang);
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
      const front = btn.querySelector('.btn-flip-front');
      const back = btn.querySelector('.btn-flip-back');
      if (front) front.textContent = lang.toUpperCase();
      if (back) back.textContent = lang.toUpperCase();
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
          <!-- Left: Big Name with Inline Avatar Squircle (Fade up bersamaan dengan kanan & navigation) -->
          <div class="hero-left hero-fade-up">
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

          <!-- Right: Rating Pill, Tagline & CTAs (Fade up bersamaan dengan No 1) -->
          <div class="hero-right hero-fade-up">
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

        <!-- Edge-to-Edge Hero Showcase Marquee Carousel (Fade up delay dikit setelah No 1 & 2) -->
        <div class="hero-marquee-wrapper hero-carousel-fade-up" id="hero-marquee-wrapper">
          <div class="hero-marquee-track" id="hero-marquee-track">
            ${showcaseCardsHtml}
            ${showcaseCardsHtml}
          </div>
        </div>

        <!-- 4-Column Quick Info Strip directly below Carousel (Exact Portfolica Reference) -->
        <div class="hero-info-strip-wrap hero-carousel-fade-up">
          <div class="hero-info-strip">
            <div class="info-strip-col">
              <span class="info-strip-label">ROLE</span>
              <span class="info-strip-val">${siteConfig.quickInfo?.role || 'Designer and front-end engineer'}</span>
            </div>
            <div class="info-strip-col">
              <span class="info-strip-label">BASED IN</span>
              <span class="info-strip-val">${siteConfig.quickInfo?.basedIn || 'Lisbon, remote-friendly'}</span>
            </div>
            <div class="info-strip-col">
              <span class="info-strip-label">PREVIOUSLY</span>
              <span class="info-strip-val">${siteConfig.quickInfo?.previously || 'Loopcraft, Tallyhive'}</span>
            </div>
            <div class="info-strip-col">
              <span class="info-strip-label">AVAILABILITY</span>
              <span class="info-strip-val">
                <span class="info-dot-green"></span>${siteConfig.quickInfo?.availability || 'Open for projects from November'}
              </span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Render Clients & Collaborators Pill Bar (Infinite Marquee with Gradient Blur Edges)
  const clientsEl = document.getElementById('clients-bar-section');
  if (clientsEl) {
    const logos = [
      { text: "logoipsum" },
      { text: "标识" },
      { text: "❖ LOGOIPSUM" },
      { text: "✹ Logoipsum" },
      { text: "✿ Logoipsum" }
    ];

    const logosHtml = logos.map(l => `
      <div class="client-logo-item">
        <span>${l.text}</span>
      </div>
    `).join('');

    clientsEl.innerHTML = `
      <div class="clients-bar-wrap">
        <div class="clients-bar">
          <span class="clients-label">Clients & collaborators</span>
          <div class="clients-slider-container">
            <div class="clients-track">
              ${logosHtml}
              ${logosHtml}
              ${logosHtml}
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
      <div class="stat-card">
        <div class="stat-val">${s.value}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `).join('');
  }

  // Render Featured Projects (Gambar statis tanpa animasi)
  const projectsEl = document.getElementById('projects-grid');
  if (projectsEl) {
    const isAll = window.location.pathname.includes('all-projects');
    const displayProjects = isAll ? siteConfig.projects : siteConfig.projects.filter(p => p.featured).slice(0, 4);
    
    projectsEl.innerHTML = displayProjects.map(p => `
      <a href="project.html?id=${p.id}" class="project-card" aria-label="${p.title} - ${p.year || '2024'}">
        <div class="project-thumb">
          <img src="${p.image}" alt="${p.title}" loading="lazy" />
        </div>
        <div class="project-badge">
          <span class="project-badge-title">${p.title}</span>
          <span class="project-badge-slash">/</span>
          <span class="project-badge-year">${p.year || '2024'}</span>
        </div>
        <div class="project-action-btn" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </a>
    `).join('');
  }

  // Render Career Container & Timeline
  const timelineEl = document.getElementById('career-timeline');
  if (timelineEl) {
    timelineEl.innerHTML = `
      <div class="career-container">
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
      <span class="skill-tag">${s}</span>
    `).join('');
  }

  // Render Process
  const processEl = document.getElementById('process-grid');
  if (processEl) {
    processEl.innerHTML = siteConfig.process.map(pr => `
      <div class="card-item">
        <span class="card-num">${pr.step}</span>
        <h3 class="card-title">${pr.title}</h3>
        <p class="card-desc">${pr.desc}</p>
      </div>
    `).join('');
  }

function getServiceIconSvg(iconName, isGlow = false) {
  const cls = isGlow ? 'service-icon-glow' : 'service-icon-svg';
  switch (iconName) {
    case 'figma':
      return `
        <svg class="${cls}" viewBox="0 0 24 24" fill="none" role="presentation" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 7 0 L 7 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" transform="translate(5 2)"/>
          <path d="M 0 0 L 3.5 0 C 5.433 0 7 1.567 7 3.5 C 7 5.433 5.433 7 3.5 7 L 0 7 Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" transform="translate(12 2)"/>
          <path d="M 0 3.5 C 0 1.567 1.567 0 3.5 0 C 5.433 0 7 1.567 7 3.5 C 7 5.433 5.433 7 3.5 7 L 0 7 Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" transform="translate(12 9)"/>
          <path d="M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 7 0 L 7 3.5 C 7 5.433 5.433 7 3.5 7 C 1.567 7 0 5.433 0 3.5 Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" transform="translate(5 16)"/>
          <path d="M 0 3.5 C 0 1.567 1.567 0 3.5 0 L 7 0 L 7 7 L 3.5 7 C 1.567 7 0 5.433 0 3.5 Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" transform="translate(5 9)"/>
        </svg>
      `;
    case 'code':
      return `
        <svg class="${cls}" viewBox="0 0 24 24" fill="none" role="presentation" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 12 L 6 6 L 0 0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" transform="translate(16 6)"/>
          <path d="M 6 0 L 0 6 L 6 12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" transform="translate(2 6)"/>
        </svg>
      `;
    case 'brand':
    case 'dribbble':
      return `
        <svg class="${cls}" viewBox="0 0 24 24" fill="none" role="presentation" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" transform="translate(2 2)"/>
          <path d="M 16.88 0 C 12.97 4.05 7.75 5.35 0 5.85" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" transform="translate(2.25 5.09)"/>
          <path d="M 16.38 0.396 C 9.76 -1.014 4.24 1.396 0 6.716" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" transform="translate(5.37 12.444)"/>
          <path d="M 0 0 C 4.37 6 6 9.42 8 17.72" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" transform="translate(8.56 2.75)"/>
        </svg>
      `;
    case 'consultation':
      return `
        <svg class="${cls}" viewBox="0 0 24 24" fill="none" role="presentation" xmlns="http://www.w3.org/2000/svg">
          <path d="M 4.123 0.69 C 4.258 0.274 4.648 -0.005 5.086 0 C 5.523 0.006 5.906 0.295 6.032 0.714 L 6.769 2.166 C 6.914 2.452 7.188 2.651 7.506 2.701 L 9.14 2.957 C 9.571 2.959 9.953 3.237 10.087 3.647 C 10.22 4.058 10.075 4.508 9.728 4.763 L 8.556 5.931 C 8.328 6.158 8.223 6.48 8.274 6.797 L 8.533 8.41 C 8.679 8.825 8.537 9.287 8.182 9.548 C 7.828 9.809 7.344 9.807 6.992 9.544 L 5.527 8.794 C 5.24 8.647 4.901 8.647 4.615 8.794 L 3.15 9.544 C 2.797 9.805 2.315 9.805 1.962 9.545 C 1.609 9.285 1.466 8.825 1.611 8.411 L 1.869 6.798 C 1.919 6.481 1.814 6.159 1.587 5.932 L 0.431 4.779 C 0.071 4.53 -0.085 4.075 0.046 3.658 C 0.177 3.24 0.565 2.956 1.003 2.957 L 2.636 2.701 C 2.953 2.651 3.227 2.452 3.373 2.166 Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" transform="translate(11.928 11.926)"/>
          <path d="M 5 0 L 4 0 C 1.791 0 0 1.791 0 4 L 0 6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" transform="translate(3 15)"/>
          <path d="M 0 4 C 0 1.791 1.791 0 4 0 C 6.209 0 8 1.791 8 4 C 8 6.209 6.209 8 4 8 C 1.791 8 0 6.209 0 4 Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" transform="translate(6 3)"/>
        </svg>
      `;
    default:
      return '';
  }
}

  // Render Services
  const servicesEl = document.getElementById('services-grid');
  if (servicesEl) {
    servicesEl.innerHTML = siteConfig.services.map(sv => `
      <div class="service-card">
        <div class="service-card-header">
          <div class="service-card-icon-wrap" aria-hidden="true">
            ${getServiceIconSvg(sv.icon, false)}
            ${getServiceIconSvg(sv.icon, true)}
          </div>
          <div class="service-card-title-wrap">
            <h3 class="service-card-title">${sv.title}</h3>
          </div>
        </div>
        <p class="service-card-desc">${sv.desc}</p>
      </div>
    `).join('');
  }

  // Render Testimonials
  const testimonialsEl = document.getElementById('testimonials-grid');
  if (testimonialsEl) {
    testimonialsEl.innerHTML = siteConfig.testimonials.map(t => `
      <div class="testimonial-card">
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
      <div class="faq-item">
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
      <div class="section-title-wrap hero-fade-up" style="text-align: center; align-items: center; gap: 18px; margin-bottom: 36px;">
        <div class="badge">${project.category} · ${project.year}</div>
        <h1 class="hero-name" style="font-size: clamp(2.5rem, 5vw, 4rem); text-align: center;"><span>${project.title}</span></h1>
        <p class="hero-tagline" style="max-width: 650px; text-align: center;">${project.subtitle}</p>
        <a href="${project.liveUrl}" target="_blank" rel="noopener" class="btn-primary" style="margin-top: 8px;">
          <span>Visit Live Site</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
        </a>
      </div>

      <div class="project-thumb hero-carousel-fade-up" style="height: 500px; border-radius: var(--radius-xl); margin-bottom: 50px; border: 1px solid var(--border-subtle); box-shadow: var(--shadow-card);">
        <img src="${project.image}" alt="${project.title}" style="width:100%; height:100%; object-fit: cover;" />
      </div>

      <div class="about-grid hero-carousel-fade-up" style="margin-bottom: 70px;">
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
            <h3 style="font-size: 20px; font-weight: 500; margin-bottom: 6px;">${siteConfig.profile.name}</h3>
            <p style="color: var(--text-muted); font-size: 15px;">${siteConfig.footer.responseGuarantee}</p>
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
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .nav-btn-call, .social-link, .nav-link, .mobile-nav-link, .certs-toggle-btn');
  
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
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        triggerCharBlur(entry.target);
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal-blur').forEach(el => {
    const rect = el.getBoundingClientRect();
    const isInInitialViewport = rect.top < window.innerHeight && rect.bottom > 0;

    if (isInInitialViewport && window.scrollY === 0) {
      el.classList.add('is-visible');
      triggerCharBlur(el);
    } else {
      observer.observe(el);
    }
  });
}

function triggerCharBlur(el) {
  if (el.dataset.charBlurDone) return;
  el.dataset.charBlurDone = 'true';
  const baseDelay = parseFloat(el.dataset.blurDelay || 0);
  let globalCharIndex = 0;

  function processNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      if (!text.trim()) return node;
      const span = document.createElement('span');
      span.innerHTML = text.split(/(\s+)/).map(part => {
        if (/^\s+$/.test(part)) return part;
        const charsHtml = Array.from(part).map(char => {
          const delay = (baseDelay + globalCharIndex * 0.022).toFixed(3);
          globalCharIndex++;
          return `<span class="blur-char" style="--char-delay: ${delay}s;">${char}</span>`;
        }).join('');
        return `<span class="blur-word">${charsHtml}</span>`;
      }).join('');
      return span;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const childNodes = Array.from(node.childNodes);
      childNodes.forEach(child => {
        const replacement = processNode(child);
        if (replacement !== child) {
          node.replaceChild(replacement, child);
        }
      });
      return node;
    }
    return node;
  }

  processNode(el);
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

/**
 * Floating Chatbot FAB with Lottie Animation
 * Renders a fixed bottom-right animated chatbot icon using lottie-web.
 */
function initChatbotFab() {
  // Don't render if already present
  if (document.getElementById('chatbot-fab')) return;

  // Create FAB button element
  const fab = document.createElement('button');
  fab.id = 'chatbot-fab';
  fab.className = 'chatbot-fab';
  fab.setAttribute('aria-label', 'Chat with AI Assistant');
  fab.setAttribute('type', 'button');
  fab.innerHTML = '<div class="chatbot-lottie" id="chatbot-lottie"></div>';
  document.body.appendChild(fab);

  // After entrance animation ends, add idle floating
  fab.addEventListener('animationend', () => {
    fab.classList.add('is-idle');
  }, { once: true });

  // Load lottie-web dynamically from CDN
  if (typeof lottie !== 'undefined') {
    initLottieAnimation();
    return;
  }

  const lottieScript = document.createElement('script');
  lottieScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js';
  lottieScript.async = true;
  lottieScript.onload = initLottieAnimation;
  document.head.appendChild(lottieScript);
}

function initLottieAnimation() {
  if (typeof lottie === 'undefined') return;

  const container = document.getElementById('chatbot-lottie');
  if (!container) return;

  lottie.loadAnimation({
    container: container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/chat-bot-icon.json'
  });
}
