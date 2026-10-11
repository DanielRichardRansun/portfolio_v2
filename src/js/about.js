/**
 * ABOUT PAGE - Dynamic Content & Interactions
 * Exact replica of Portfolica Framer reference layout
 * Data sourced from constants/dictionaries.ts
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

let showAllCerts = false;

// ─── Render Career History (Pill Cards with Accordion) ───────────────────────
function renderCareer() {
  const container = document.getElementById('about-career-list');
  if (!container) return;

  container.innerHTML = careerItems.map((item, index) => {
    const isCurrent = item.date.toLowerCase().includes('present');
    const respItems = item.responsibilities.map(r => `<li>${r}</li>`).join('');
    const impactItems = item.impacts.map(im => `<li>${im}</li>`).join('');

    return `
      <div class="career-pill-item" id="career-item-${index}">
        <div 
          class="career-pill-header" 
          role="button" 
          tabindex="0" 
          aria-expanded="false" 
          aria-controls="career-body-${index}"
          onclick="toggleCareer(${index})"
        >
          <div class="career-role-title">${item.role}</div>

          <div class="career-company-col">
            <div class="career-company-logo">
              <img 
                src="${item.logo}" 
                alt="${item.company}" 
                loading="lazy" 
                onerror="this.parentElement.innerHTML='<span style=\\'font-size:12px;font-weight:600;color:var(--accent-orange)\\'>${item.company[0]}</span>'" 
              />
            </div>
            <span class="career-company-name">${item.company}</span>
          </div>

          <div class="career-date-col">${item.date}</div>

          <div class="career-arrow-btn" aria-hidden="true">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
        </div>

        <div class="career-pill-body" id="career-body-${index}" role="region">
          <div class="career-pill-inner">
            <div class="career-status-bar">
              <span class="career-status-tag ${isCurrent ? 'active' : 'completed'}">
                ${isCurrent ? '<span class="status-dot"></span>' : ''}
                ${item.type} · ${isCurrent ? 'Active Role' : 'Completed'}
              </span>
            </div>
            <p class="career-item-desc">${item.desc}</p>
            <div class="career-details-grid">
              <div class="career-col-block">
                <h5>Key Responsibilities</h5>
                <ul>${respItems}</ul>
              </div>
              <div class="career-col-block">
                <h5>Impacts & Achievements</h5>
                <ul>${impactItems}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Keyboard accessibility
  document.querySelectorAll('.career-pill-header').forEach((header, i) => {
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCareer(i);
      }
    });
  });
}

// ─── Toggle Career Accordion ─────────────────────────────────────────────────
window.toggleCareer = function(index) {
  const item = document.getElementById(`career-item-${index}`);
  if (!item) return;

  const isOpen = item.classList.contains('is-open');

  // Close any open item first (clean single accordion)
  document.querySelectorAll('.career-pill-item.is-open').forEach(el => {
    el.classList.remove('is-open');
    const header = el.querySelector('.career-pill-header');
    if (header) header.setAttribute('aria-expanded', 'false');
  });

  // Toggle clicked item
  if (!isOpen) {
    item.classList.add('is-open');
    const header = item.querySelector('.career-pill-header');
    if (header) header.setAttribute('aria-expanded', 'true');
  }
};

// ─── Render Certificates Showcase ───────────────────────────────────────────
function renderCertificates() {
  const container = document.getElementById('about-certs-showcase');
  if (!container) return;

  const itemsToRender = showAllCerts ? certItems : certItems.slice(0, 8);

  container.innerHTML = itemsToRender.map(cert => `
    <div class="cert-card-item">
      <div class="cert-thumb-wrap">
        <img 
          src="${cert.image}" 
          alt="${cert.name}" 
          loading="lazy" 
          onerror="this.src='./src/assets/images/certificate/cert-1.jpg'"
        />
      </div>
      <div class="cert-body-info">
        <div class="cert-title-text" title="${cert.name}">${cert.name}</div>
        <div class="cert-meta-row">
          <span class="cert-issuer-text">${cert.issuer}</span>
          <span class="cert-date-badge">${cert.date}</span>
        </div>
      </div>
    </div>
  `).join('');

  // Update button text
  const toggleBtn = document.getElementById('certs-toggle-btn');
  const toggleText = document.getElementById('certs-toggle-text');
  if (toggleBtn && toggleText) {
    if (showAllCerts) {
      toggleText.textContent = 'Show Less';
      toggleBtn.classList.add('is-expanded');
    } else {
      toggleText.textContent = `Show All Certifications (${certItems.length})`;
      toggleBtn.classList.remove('is-expanded');
    }
  }
}

// ─── Setup Certificate Toggle Button ────────────────────────────────────────
function setupCertsToggle() {
  const toggleBtn = document.getElementById('certs-toggle-btn');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    showAllCerts = !showAllCerts;
    renderCertificates();
  });
}

// ─── Initialize on DOM Load ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderCareer();
  renderCertificates();
  setupCertsToggle();
});
