/**
 * Elegant Skeleton Shimmer & Progressive Blur-Up Image Loader
 * Ultra-lightweight, GPU-accelerated, zero-dependency.
 * Prevents jagged / line-by-line chunk rendering with smooth blur transition.
 */

export function setupImageSkeleton(img) {
  if (!img || img.dataset.skeletonInit === 'true') return;
  img.dataset.skeletonInit = 'true';

  img.classList.add('skeleton-img');

  const parent = img.parentElement;
  if (parent && !parent.classList.contains('skeleton-wrap')) {
    parent.classList.add('skeleton-wrap');
  }

  const markLoaded = (instant = false) => {
    if (instant) {
      img.classList.add('is-instant');
    }
    img.classList.add('is-loaded');
    if (parent) parent.classList.add('is-loaded');
  };

  // If already fully loaded from cache
  if (img.complete && img.naturalWidth > 0) {
    markLoaded(true);
    return;
  }

  // Handle load with off-thread decode to prevent main-thread jank
  const onLoad = () => {
    if ('decode' in img) {
      img.decode()
        .then(() => markLoaded(false))
        .catch(() => markLoaded(false));
    } else {
      markLoaded(false);
    }
  };

  img.addEventListener('load', onLoad, { once: true });
  img.addEventListener('error', () => markLoaded(false), { once: true });
}

export function initImageSkeletonLoading(root = document) {
  if (!root) return;
  const images = root.querySelectorAll('img');
  images.forEach(setupImageSkeleton);
}

// Global MutationObserver to automatically catch dynamically rendered images
let observerInitialized = false;
export function initSkeletonObserver() {
  if (observerInitialized || typeof window === 'undefined') return;
  observerInitialized = true;

  initImageSkeletonLoading(document);

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.tagName === 'IMG') {
            setupImageSkeleton(node);
          } else if (node.querySelectorAll) {
            const nestedImgs = node.querySelectorAll('img');
            nestedImgs.forEach(setupImageSkeleton);
          }
        }
      }
    }
  });

  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      observer.observe(document.body, { childList: true, subtree: true });
    });
  }
}

