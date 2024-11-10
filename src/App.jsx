// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import Collections from './components/home/Collections';

// Pages
import About from './pages/About';
import Gear from './pages/Gear';
import Contact from './pages/Contact';

// Gallery Pages
import Boston from './pages/galleries/Boston';
import Madrid from './pages/galleries/Madrid';
import Montmelo from './pages/galleries/Montmelo';
import Other from './pages/galleries/Other';

// Styles
import './styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToCollections) {
      setTimeout(() => {
        document.querySelector('#collections')?.scrollIntoView({
          behavior: 'smooth'
        });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <Collections />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#FFFEEB]">
        <ScrollHandler />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/gear" element={<Gear />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Gallery Routes */}
            <Route path="/boston" element={<Boston />} />
            <Route path="/madrid" element={<Madrid />} />
            <Route path="/montmelo" element={<Montmelo />} />
            <Route path="/other" element={<Other />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;