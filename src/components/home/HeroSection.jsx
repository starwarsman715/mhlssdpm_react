// src/components/home/HeroSection.jsx
import { useEffect, useRef } from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const introTextRef = useRef(null);

  useEffect(() => {
    function checkIntroVisibility() {
      const rect = introTextRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.top < viewportHeight && rect.bottom > 0) {
        introTextRef.current.classList.add(styles.fadeIn);
      }
    }

    // Initial check
    checkIntroVisibility();

    window.addEventListener('scroll', checkIntroVisibility);
    
    return () => {
      window.removeEventListener('scroll', checkIntroVisibility);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div 
        ref={introTextRef}
        className={styles.introText}
      >
        My name is <span className={styles.highlight}>Martin Herguedas</span> and this is my photography portfolio.
      </div>
    </section>
  );
}