// src/pages/galleries/Boston.jsx
import { useState, useEffect, useCallback } from 'react';
import Lightbox from '../../components/gallery/Lightbox';
import styles from './Boston.module.css';

// Import all images
const images = {
  col1: [
    '/src/assets/images/Boston/911.jpeg',
    '/src/assets/images/Boston/Bay.jpeg',
    '/src/assets/images/Boston/Bridge.jpeg',
    '/src/assets/images/Boston/CDS.jpeg',
    '/src/assets/images/Boston/CDS_2.jpeg',
    '/src/assets/images/Boston/Church_Tower.jpeg',
    '/src/assets/images/Boston/Citgo.jpeg',
    '/src/assets/images/Boston/Comm_Ave.jpeg',
    '/src/assets/images/Boston/Disco.jpeg',
    '/src/assets/images/Boston/DSCF33090.jpeg',
    '/src/assets/images/Boston/Esta.jpeg',
    '/src/assets/images/Boston/Fabrik.jpeg',
    '/src/assets/images/Boston/Flower_Power.jpeg'
  ],
  col2: [
    '/src/assets/images/Boston/Griego_2.jpeg',
    '/src/assets/images/Boston/Iglesia.jpeg',
    '/src/assets/images/Boston/Khan_2.jpeg',
    '/src/assets/images/Boston/Khan.jpeg',
    '/src/assets/images/Boston/Kimi.jpeg',
    '/src/assets/images/Boston/Marro_3.jpeg',
    '/src/assets/images/Boston/Marro.jpeg',
    '/src/assets/images/Boston/Martina_2.jpeg',
    '/src/assets/images/Boston/Mi_primera_chamba.jpeg',
    '/src/assets/images/Boston/Mirror.jpeg',
    '/src/assets/images/Boston/museo_1.jpeg',
    '/src/assets/images/Boston/Friendship_2.jpeg'
  ],
  col3: [
    '/src/assets/images/Boston/Night_trip.jpeg',
    '/src/assets/images/Boston/Panas.jpeg',
    '/src/assets/images/Boston/Planta_1.jpeg',
    '/src/assets/images/Boston/Prudential.jpeg',
    '/src/assets/images/Boston/Prudi.jpeg',
    '/src/assets/images/Boston/Realismo_magico.jpeg',
    '/src/assets/images/Boston/Road.jpeg',
    '/src/assets/images/Boston/Semi_2.jpeg',
    '/src/assets/images/Boston/Skyline.jpeg',
    '/src/assets/images/Boston/SMH.jpeg',
    '/src/assets/images/Boston/Sunset.jpeg',
    '/src/assets/images/Boston/Thomas.jpeg',
    '/src/assets/images/Boston/Wallpaper.jpeg',
    '/src/assets/images/Boston/museo_2.jpeg'
  ]
};

export default function Boston() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [currentIndex, setCurrentIndex] = useState(0);

  // Flatten the images array for lightbox navigation
  const allImages = [...images.col1, ...images.col2, ...images.col3];

  const handleImageClick = useCallback((imageSrc) => {
    const index = allImages.indexOf(imageSrc);
    setCurrentIndex(index);
    setCurrentImage(imageSrc);
    setLightboxOpen(true);
  }, [allImages]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : allImages.length - 1;
      setCurrentImage(allImages[newIndex]);
      return newIndex;
    });
  }, [allImages]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex < allImages.length - 1 ? prevIndex + 1 : 0;
      setCurrentImage(allImages[newIndex]);
      return newIndex;
    });
  }, [allImages]);

  // Image visibility on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(`.${styles.photos} img`).forEach(img => {
      observer.observe(img);
    });

    return () => {
      document.querySelectorAll(`.${styles.photos} img`).forEach(img => {
        observer.unobserve(img);
      });
    };
  }, []);

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.bostonTitle}>BOSTON</h1>
        </div>
        
        <div className={styles.quoteWrapper}>
          <p className={styles.quote}>
            &quot;Boston is an oasis in the desert, a place where the larger proportion 
            of people are loving, rational and happy.&quot;
            <span className={styles.author}>- Julia Ward Howe</span>
          </p>
        </div>
      </div>

      <div className={styles.photos}>
        <div className={styles.col1}>
          {images.col1.map((src, index) => (
            <img
              key={`col1-${index}`}
              src={src}
              alt={`Boston ${index + 1}`}
              onClick={() => handleImageClick(src)}
            />
          ))}
        </div>

        <div className={styles.col2}>
          {images.col2.map((src, index) => (
            <img
              key={`col2-${index}`}
              src={src}
              alt={`Boston ${images.col1.length + index + 1}`}
              onClick={() => handleImageClick(src)}
            />
          ))}
        </div>

        <div className={styles.col3}>
          {images.col3.map((src, index) => (
            <img
              key={`col3-${index}`}
              src={src}
              alt={`Boston ${images.col1.length + images.col2.length + index + 1}`}
              onClick={() => handleImageClick(src)}
            />
          ))}
        </div>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentImage={currentImage}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}