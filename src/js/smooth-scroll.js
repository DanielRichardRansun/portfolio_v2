/**
 * Smooth Inertia & Momentum Scrolling (Framer / Lenis Replica)
 * Replaces harsh discrete mouse wheel ticks with buttery smooth interpolation,
 * delta-time compensated damping (120Hz/60Hz compatible),
 * and automatic modal passthrough.
 */

class SmoothScroll {
  constructor(options = {}) {
    this.damping = options.damping || 0.082; // Calibrated for luxurious Framer glide
    this.current = window.scrollY;
    this.target = window.scrollY;
    this.maxScroll = 0;
    this.isRunning = false;
    this.rafId = null;
    this.lastTime = performance.now();
    this.isPaused = false;

    this.onWheel = this.onWheel.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onKeydown = this.onKeydown.bind(this);
    this.update = this.update.bind(this);

    this.init();
  }

  init() {
    // Only enable on devices with fine pointer (mouse/trackpad), not pure touch mobile
    if (window.matchMedia('(pointer: coarse)').matches && !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    this.updateMaxScroll();

    // Intercept wheel events
    window.addEventListener('wheel', this.onWheel, { passive: false });
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onResize, { passive: true });
    window.addEventListener('keydown', this.onKeydown);

    // Smooth anchor navigation
    document.addEventListener('click', (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        const id = anchor.getAttribute('href');
        if (id && id.length > 1) {
          const targetEl = document.querySelector(id);
          if (targetEl) {
            e.preventDefault();
            this.scrollTo(targetEl);
          }
        }
      }
    });
  }

  updateMaxScroll() {
    this.maxScroll = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight
    );
  }

  onWheel(e) {
    // If modal is open or scroll is locked on body, pass through
    if (document.body.style.overflow === 'hidden' || this.isPaused) {
      return;
    }

    // If mouse is inside a scrollable modal or popup, allow native inner scroll
    const path = e.composedPath ? e.composedPath() : [];
    const isInsideScrollable = path.some(el => {
      if (el instanceof HTMLElement) {
        if (el.classList.contains('career-modal-dialog') || 
            el.classList.contains('cert-modal-dialog') || 
            el.hasAttribute('data-scroll-prevent')) {
          return true;
        }
      }
      return false;
    });

    if (isInsideScrollable) return;

    // Prevent default harsh jump
    e.preventDefault();

    this.updateMaxScroll();

    // Normalize wheel delta
    let delta = e.deltaY;
    if (e.deltaMode === 1) {
      delta *= 38; // Lines (Firefox)
    } else if (e.deltaMode === 2) {
      delta *= window.innerHeight; // Pages
    }

    // Accumulate target
    this.target = Math.max(0, Math.min(this.maxScroll, this.target + delta));

    if (!this.isRunning) {
      this.isRunning = true;
      this.lastTime = performance.now();
      this.rafId = requestAnimationFrame(this.update);
    }
  }

  onScroll() {
    // If scroll occurred without our RAF (e.g. scrollbar thumb drag), resync
    if (!this.isRunning) {
      this.current = window.scrollY;
      this.target = window.scrollY;
    }
  }

  onResize() {
    this.updateMaxScroll();
    this.target = Math.min(this.target, this.maxScroll);
    this.current = Math.min(this.current, this.maxScroll);
  }

  onKeydown(e) {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;
    if (document.body.style.overflow === 'hidden' || this.isPaused) return;

    this.updateMaxScroll();
    let handled = false;

    if (e.code === 'ArrowDown') {
      this.target = Math.min(this.maxScroll, this.target + 120);
      handled = true;
    } else if (e.code === 'ArrowUp') {
      this.target = Math.max(0, this.target - 120);
      handled = true;
    } else if (e.code === 'PageDown' || (e.code === 'Space' && !e.shiftKey)) {
      this.target = Math.min(this.maxScroll, this.target + window.innerHeight * 0.85);
      handled = true;
    } else if (e.code === 'PageUp' || (e.code === 'Space' && e.shiftKey)) {
      this.target = Math.max(0, this.target - window.innerHeight * 0.85);
      handled = true;
    } else if (e.code === 'Home') {
      this.target = 0;
      handled = true;
    } else if (e.code === 'End') {
      this.target = this.maxScroll;
      handled = true;
    }

    if (handled) {
      e.preventDefault();
      if (!this.isRunning) {
        this.isRunning = true;
        this.lastTime = performance.now();
        this.rafId = requestAnimationFrame(this.update);
      }
    }
  }

  scrollTo(target, offset = 80) {
    this.updateMaxScroll();
    let top = 0;
    if (typeof target === 'number') {
      top = target;
    } else if (target instanceof HTMLElement) {
      const rect = target.getBoundingClientRect();
      top = window.scrollY + rect.top - offset;
    }
    this.target = Math.max(0, Math.min(this.maxScroll, top));
    if (!this.isRunning) {
      this.isRunning = true;
      this.lastTime = performance.now();
      this.rafId = requestAnimationFrame(this.update);
    }
  }

  update(now) {
    const dt = Math.min(64, Math.max(4, now - this.lastTime));
    this.lastTime = now;

    // Delta-time compensated lerp (consistent at 60Hz, 120Hz, etc.)
    const factor = 1 - Math.pow(1 - this.damping, dt / 16.667);
    const diff = this.target - this.current;

    if (Math.abs(diff) < 0.4) {
      this.current = this.target;
      window.scrollTo(0, this.current);
      this.isRunning = false;
      return;
    }

    this.current += diff * factor;
    window.scrollTo(0, this.current);

    this.rafId = requestAnimationFrame(this.update);
  }
}

export const smoothScroll = new SmoothScroll();
