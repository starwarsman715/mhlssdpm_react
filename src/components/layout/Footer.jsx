// src/components/layout/Footer.jsx
import styles from './Footer.module.css';
// Import logo
import LogoMinimal from '/src/assets/logos/Logo_minimal.svg';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerLeft}>
        © 2024 mhlssdpm.com
      </div>

      <div 
        className={styles.footerLogo} 
        onClick={scrollToTop}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter') scrollToTop();
        }}
      >
        <img 
          src={LogoMinimal}
          alt="Mhlssdpm Logo Minimal" 
          width={57}
          height={86}
        />
      </div>

      <div className={styles.footerRight}>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
}