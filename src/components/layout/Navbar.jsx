// src/components/layout/Navbar.jsx
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from '../../assets/logos/Logo.svg';
import LogoBlack from '../../assets/logos/Logo_black.svg';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleCollectionsClick = (e) => {
    e.preventDefault();
    
    if (isHomePage) {
      // If we're already on the home page, just scroll to collections
      document.querySelector('#collections')?.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      // If we're on another page, navigate to home and then scroll
      navigate('/', { 
        state: { scrollToCollections: true }
      });
    }
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

  return (
    <nav className={`${styles.navbar} ${!isHomePage ? styles.darkNavbar : ''}`}>
      <Link to="/" className={styles.logoLink}>
        <img 
          src={isHomePage ? Logo : LogoBlack} 
          alt="Mhlssdpm Logo" 
          className={styles.navbarLogo}
        />
      </Link>
      
      <div className={styles.navLinks}>
        {navigationItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={styles.navLink}
            onClick={item.onClick}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}