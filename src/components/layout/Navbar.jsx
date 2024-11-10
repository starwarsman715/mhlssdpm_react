// src/components/layout/Navbar.jsx
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from '../../assets/logos/Logo.svg';
import LogoBlack from '../../assets/logos/Logo_black.svg';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleCollectionsClick = (e) => {
    e.preventDefault();
    
    if (isHomePage) {
      document.querySelector('#collections')?.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      navigate('/', { 
        state: { scrollToCollections: true }
      });
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { label: 'About', path: '/about' },
    { 
      label: 'Collections', 
      path: '/#collections',
      onClick: handleCollectionsClick 
    },
    { label: 'Gear', path: '/gear' },
    { label: 'Contact', path: '/contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${!isHomePage ? styles.darkNavbar : ''} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <Link to="/" className={styles.logoLink}>
        <img 
          src={isHomePage ? Logo : LogoBlack} 
          alt="Mhlssdpm Logo" 
          className={styles.navbarLogo}
        />
      </Link>
      
      <button 
        className={styles.menuButton} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={styles.menuIcon}></span>
      </button>

      <div className={styles.navLinks}>
        {navigationItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={styles.navLink}
            onClick={(e) => {
              if (item.onClick) {
                item.onClick(e);
              }
              setIsMenuOpen(false);
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}