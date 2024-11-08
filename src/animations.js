// src/utils/animations.js
import gsap from 'gsap';

// Initialize GSAP Animations for Smooth Page Transitions
export const fadeIn = (element) => {
  gsap.fromTo(
    element,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
    }
  );
};

export const slideInLeft = (element) => {
  gsap.fromTo(
    element,
    { x: '-100%', opacity: 0 },
    {
      x: '0%',
      opacity: 1,
      duration: 1.5,
      ease: 'power2.out',
    }
  );
};

export const scaleUp = (element) => {
  gsap.fromTo(
    element,
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: 'power2.out',
    }
  );
};

// Complex animation for car model images
export const carImageAnimation = (element) => {
  gsap.fromTo(
    element,
    { scale: 0.9, rotation: -5, opacity: 0 },
    {
      scale: 1,
      rotation: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'elastic.out(1, 0.75)',
    }
  );
};

// Scroll-triggered animation for sections
export const scrollAnimation = (element) => {
  gsap.fromTo(
    element,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
      },
    }
  );
};

// Animations for page load
export const pageLoadAnimation = (element) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power3.out',
    }
  );
};
