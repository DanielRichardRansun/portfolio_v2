/**
 * ABOUT PAGE - Dynamic Content & Interactions
 * Exact recreation with clickable career popup modal,
 * thick-bordered image certificates with slow-mo reveal/hide,
 * and minimalist popup details.
 */

// ─── Career items from dictionaries.ts ──────────────────────────────────────
const careerItems = [
  {
    role: "Full-Stack Web Developer",
    company: "PT Muda Karya Krya",
    date: "Feb 2025 – Present",
    type: "Full-time",
    logo: "./src/assets/images/logo/krya.png",
    desc: "Driving digital transformation and managing scalable web infrastructure for global operations.",
    responsibilities: [
      "Developed, launched, and maintained 5+ websites and apps for company digitalization.",
      "Implemented SEO strategies to boost organic traffic and conversion rates.",
      "Managed web projects for international events across multiple countries.",
      "Handled full-cycle deployment: hosting, DNS, business email, and database.",
    ],
    impacts: [
      "Managed 5+ websites improving internal operational efficiency.",
      "Achieved 2000+ unique visitors/month through structured SEO.",
      "Generated 20+ click-to-contact actions per month to support business growth.",
      "Delivered stable systems supporting international-scale projects.",
    ],
  },
  {
    role: "Freelance Tech Support",
    company: "Billstone Official",
    date: "Apr 2026 – Jan 2027",
    type: "Freelance",
    logo: "./src/assets/images/logo/billstone.png",
    desc: "Providing technical website maintenance, performance optimization, and infrastructure migration for a luxury watch accessories brand.",
    responsibilities: [
      "Optimized website speed and loading performance.",
      "Migrated website to VPS hosting, including domain and database configuration.",
      "Performed routine website maintenance, security updates, and bug fixing.",
      "Developed landing pages and content to support business growth.",
    ],
    impacts: [
      "Reduced average page load times from 40+ seconds to 5-seconds average.",
      "Completed full website migration to VPS with zero downtime.",
      "Performed routine maintenance for website stability and content updates.",
      "Improved user engagement on e-commerce platform.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "PT Muda Karya Krya",
    date: "Sep 2024 – Jan 2025",
    type: "Internship",
    logo: "./src/assets/images/logo/krya.png",
    desc: "Building professional CMS-based websites while honing UI/UX and global communication skills.",
    responsibilities: [
      "Built and maintained company profile websites using CMS platforms.",
      "Gained practical knowledge in UI/UX design principles.",
      "Collaborated globally using English as the primary language.",
      "Translated client requirements into functional websites.",
    ],
    impacts: [
      "Contributed to 3 projects for company and global partners.",
      "Worked closely with clients from 5+ different countries.",
      "Strengthened CMS, UI/UX, and SEO practical skills.",
      "Improved English communication in a global work environment.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Ransite Official",
    date: "Nov 2024 – Present",
    type: "Freelance",
    logo: "./src/assets/images/logo/ransite.png",
    desc: "Providing freelance web development services for business and e-commerce clients.",
    responsibilities: [
      "Developed and delivered 3+ business and e-commerce websites.",
      "Built websites using WordPress and custom coding based on client needs.",
      "Handled full website setup: hosting, domain, DNS, SEO, testing, and maintenance.",
      "Managed client communication, requirement analysis, and project execution.",
    ],
    impacts: [
      "Successfully launched 3+ active websites for real clients.",
      "Improved WordPress and custom coding skills through real-world projects.",
      "Helped clients establish professional and functional online presence.",
      "Built repeat-client trust through clear communication and reliable delivery.",
    ],
  },
  {
    role: "Assistant Lecturer",
    company: "Surabaya University",
    date: "Sep 2024 – Dec 2024",
    type: "Part-time",
    logo: "./src/assets/images/logo/univ_surabaya.png",
    desc: "Mentoring Android development students and troubleshooting complex programming logic.",
    responsibilities: [
      "Guided students in building mobile apps with Android Studio (Java & Kotlin).",
      "Prepared teaching materials and assessed student performance.",
      "Helped debug code and solve complex logic problems in lab sessions.",
    ],
    impacts: [
      "Helped 30+ students complete their final mobile apps.",
      "Improved student understanding of programming logic and debugging.",
      "Reduced student debugging time through effective mentorship.",
    ],
  },
  {
    role: "Multimedia Service",
    company: "GPIB Cahaya Anugerah",
    date: "Jul 2020 – Present",
    type: "Volunteering",
    logo: "./src/assets/images/logo/gpib.png",
    desc: "Orchestrating digital broadcasts and creating high-impact visual content for the community.",
    responsibilities: [
      "Managed live streaming tools for high-quality broadcast services.",
      "Designed visual content (graphics & videos) for weekly services.",
      "Coordinated with the team and performed real-time troubleshooting.",
    ],
    impacts: [
      "Ensured reliable weekly online broadcast quality.",
      "Boosted engagement through high-quality visual content.",
      "Modernized the church's digital presence and standards.",
    ],
  },
];

// ─── Certificates from dictionaries.ts ──────────────────────────────────────
const certItems = [
  { name: "On-Page SEO and AI Search Essentials", issuer: "Semrush Academy", date: "Mar 2026", image: "./src/assets/images/certificate/cert-13.jpg" },
  { name: "Critical Thinking in the AI Era", issuer: "HP Foundation", date: "Mar 2026", image: "./src/assets/images/certificate/cert-14.jpg" },
  { name: "Responsive Web Design", issuer: "FreeCodeCamp", date: "Jan 2026", image: "./src/assets/images/certificate/cert-6.jpg" },
  { name: "SOLID Programming Principles", issuer: "Dicoding Academy", date: "Jan 2026", image: "./src/assets/images/certificate/cert-1.jpg" },
  { name: "Starting Programming with C", issuer: "Dicoding Academy", date: "Jan 2026", image: "./src/assets/images/certificate/cert-2.jpg" },
  { name: "Starting Programming with Java", issuer: "Dicoding Academy", date: "Jan 2026", image: "./src/assets/images/certificate/cert-3.jpg" },
  { name: "Basic Project Management", issuer: "Dicoding Academy", date: "Jan 2026", image: "./src/assets/images/certificate/cert-4.jpg" },
  { name: "Starting Programming with Python", issuer: "Dicoding Academy", date: "May 2026", image: "./src/assets/images/certificate/cert-15.jpg" },
  { name: "PCAP: Programming Essentials in Python", issuer: "Cisco & OpenEDG", date: "May 2023", image: "./src/assets/images/certificate/cert-7.jpg" },
  { name: "Student Challenge Winner – Software Engineering", issuer: "Ubaya Information Engineering", date: "Feb 2023", image: "./src/assets/images/certificate/cert-8.jpg" },
  { name: "Introduction to GitHub Copilot", issuer: "Microsoft", date: "Jan 2026", image: "./src/assets/images/certificate/cert-9.jpg" },
  { name: "Building Workflows with GitHub Actions", issuer: "Microsoft", date: "Jan 2026", image: "./src/assets/images/certificate/cert-10.jpg" },
  { name: "Optimizing Development with GitHub Actions", issuer: "Microsoft", date: "Jan 2026", image: "./src/assets/images/certificate/cert-11.jpg" },
  { name: "Prompt Engineering: Shaping Better AI Responses", issuer: "IBM SkillsBuild", date: "Mar 2026", image: "./src/assets/images/certificate/cert-12.jpg" },
];

const INITIAL_CERT_COUNT = 8;
let isCertsExpanded = false;
let isAnimatingCerts = false;

// ─── Render Career History (Clean Clickable Pill Rows) ──────────────────────
function renderCareer() {
  const container = document.getElementById('about-career-list');
  if (!container) return;

  container.innerHTML = careerItems.map((item, index) => {
    return `
      <div 
        class="career-pill-item" 
        id="career-item-${index}" 
        role="button" 
        tabindex="0" 
        onclick="openCareerModal(${index})"
        aria-label="View details for ${item.role} at ${item.company}"
      >
        <!-- Left: Role Title -->
        <div class="career-role-title">${item.role}</div>

        <!-- Center: Company Logo + Name -->
        <div class="career-company-col">
          <div class="career-company-logo">
            <img 
              src="${item.logo}" 
              alt="${item.company}" 
              loading="lazy" 
              onerror="this.parentElement.innerHTML='<span style=\\'font-size:14px;font-weight:500;color:var(--accent-orange)\\'>${item.company[0]}</span>'" 
            />
          </div>
          <span class="career-company-name">${item.company}</span>
        </div>

        <!-- Right: Date Range (Right-aligned to edge) -->
        <div class="career-date-col">${item.date}</div>
      </div>
    `;
  }).join('');

  // Keyboard accessibility
  document.querySelectorAll('.career-pill-item').forEach((pill, i) => {
    pill.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCareerModal(i);
      }
    });
  });
}

// ─── Career Detail Popup Modal ──────────────────────────────────────────────
window.openCareerModal = function(index) {
  const item = careerItems[index];
  if (!item) return;

  const modal = document.getElementById('career-modal');
  const logo = document.getElementById('career-modal-logo');
  const status = document.getElementById('career-modal-status');
  const role = document.getElementById('career-modal-role');
  const company = document.getElementById('career-modal-company');
  const date = document.getElementById('career-modal-date');
  const desc = document.getElementById('career-modal-desc');
  const respList = document.getElementById('career-modal-resp');
  const impactList = document.getElementById('career-modal-impact');

  if (!modal || !role) return;

  logo.src = item.logo;
  logo.alt = item.company;
  status.className = `career-modal-status-badge ${item.type.toLowerCase().replace(/[\s-]+/g, '-')}`;
  status.textContent = item.type;
  
  role.textContent = item.role;
  company.textContent = item.company;
  date.textContent = item.date;
  desc.textContent = item.desc;

  respList.innerHTML = item.responsibilities.map(r => `<li>${r}</li>`).join('');
  impactList.innerHTML = item.impacts.map(im => `<li>${im}</li>`).join('');

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

window.closeCareerModal = function() {
  const modal = document.getElementById('career-modal');
  if (!modal) return;

  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

// ─── Render Certificates Showcase (Pure Images Only) ─────────────────────────
function renderCertificates(initial = true) {
  const container = document.getElementById('about-certs-showcase');
  if (!container) return;

  const count = isCertsExpanded ? certItems.length : INITIAL_CERT_COUNT;
  const items = certItems.slice(0, count);

  container.innerHTML = items.map((cert, i) => {
    const isExtra = i >= INITIAL_CERT_COUNT;
    const animClass = isExtra && !initial ? 'cert-anim-reveal' : '';
    // Slow-mo staggered delay per item (0.09s interval)
    const delay = isExtra ? ((i - INITIAL_CERT_COUNT) * 0.09).toFixed(3) : '0';

    return `
      <div 
        class="cert-image-card ${animClass}" 
        style="--row-delay: ${delay}s;" 
        onclick="openCertModal(${i})"
        tabindex="0"
        role="button"
        aria-label="View ${cert.name}"
      >
        <div class="cert-image-inner">
          <img 
            src="${cert.image}" 
            alt="${cert.name}" 
            loading="lazy" 
            onerror="this.src='./src/assets/images/certificate/cert-1.jpg'"
          />
        </div>
      </div>
    `;
  }).join('');

  // Keyboard accessibility for cert cards
  container.querySelectorAll('.cert-image-card').forEach((card, i) => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCertModal(i);
      }
    });
  });

  updateToggleBtn();
}

function updateToggleBtn() {
  const toggleBtn = document.getElementById('certs-toggle-btn');
  const toggleText = document.getElementById('certs-toggle-text');
  if (!toggleBtn || !toggleText) return;

  if (isCertsExpanded) {
    toggleText.textContent = 'Hide Extra Certifications';
    toggleBtn.classList.add('is-expanded');
  } else {
    toggleText.textContent = `Show All Certifications (${certItems.length})`;
    toggleBtn.classList.remove('is-expanded');
  }
}

// ─── Setup Certificate Toggle Button (Slow-mo with Reverse Hide Animation) ───
function setupCertsToggle() {
  const toggleBtn = document.getElementById('certs-toggle-btn');
  const container = document.getElementById('about-certs-showcase');
  if (!toggleBtn || !container) return;

  toggleBtn.addEventListener('click', () => {
    if (isAnimatingCerts) return;

    if (!isCertsExpanded) {
      // Expanding with smooth slow-mo cascade
      isCertsExpanded = true;
      renderCertificates(false);
    } else {
      // Collapsing with reverse slow-mo cascade
      isAnimatingCerts = true;
      const allCards = container.querySelectorAll('.cert-image-card');
      const extraCards = Array.from(allCards).slice(INITIAL_CERT_COUNT);

      extraCards.reverse().forEach((card, idx) => {
        card.classList.remove('cert-anim-reveal');
        card.classList.add('cert-anim-hide');
        card.style.setProperty('--row-delay', `${(idx * 0.075).toFixed(3)}s`);
      });

      // After hide animation completes, reset to initial count
      setTimeout(() => {
        isCertsExpanded = false;
        renderCertificates(true);
        isAnimatingCerts = false;

        // Smooth scroll back to certs section if user was scrolled far below
        const certSection = document.querySelector('.about-certs-section');
        if (certSection) {
          const rect = certSection.getBoundingClientRect();
          if (rect.top < 0) {
            certSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 500);
    }
  });
}

// ─── Minimalist Certificate Detail Popup Modal ───────────────────────────────
window.openCertModal = function(index) {
  const cert = certItems[index];
  if (!cert) return;

  const modal = document.getElementById('cert-modal');
  const img = document.getElementById('cert-modal-img');
  const title = document.getElementById('cert-modal-title');
  const issuer = document.getElementById('cert-modal-issuer');
  const date = document.getElementById('cert-modal-date');

  if (!modal || !img || !title) return;

  img.src = cert.image;
  img.alt = cert.name;
  title.textContent = cert.name;
  if (issuer) issuer.textContent = `Issued by: ${cert.issuer}`;
  if (date) date.textContent = cert.date;

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

window.closeCertModal = function() {
  const modal = document.getElementById('cert-modal');
  if (!modal) return;

  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

function setupModalInteractions() {
  // Career Modal
  const careerModal = document.getElementById('career-modal');
  const careerClose = document.getElementById('career-modal-close');
  if (careerClose) {
    careerClose.addEventListener('click', closeCareerModal);
  }
  if (careerModal) {
    careerModal.addEventListener('click', (e) => {
      if (e.target === careerModal) closeCareerModal();
    });
  }

  // Cert Modal
  const certModal = document.getElementById('cert-modal');
  const certClose = document.getElementById('cert-modal-close');
  if (certClose) {
    certClose.addEventListener('click', closeCertModal);
  }
  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) closeCertModal();
    });
  }

  // Global Escape Key Listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (careerModal && careerModal.classList.contains('is-open')) closeCareerModal();
      if (certModal && certModal.classList.contains('is-open')) closeCertModal();
    }
  });
}

// ─── Initialize on DOM Load ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderCareer();
  renderCertificates(true);
  setupCertsToggle();
  setupModalInteractions();
});
