// src/pages/galleries/Madrid.jsx
import { useState, useEffect, useCallback } from 'react';
import Lightbox from '../../components/gallery/Lightbox';
import styles from './Madrid.module.css';

// Import all images
const images = {
  col1: [
    '/src/assets/images/Madrid/Fuck_1.jpeg',
    '/src/assets/images/Madrid/Arbol2.jpeg',
    '/src/assets/images/Madrid/Camel.jpeg',
    '/src/assets/images/Madrid/car.jpeg',
    '/src/assets/images/Madrid/Cibeles.jpeg',
    '/src/assets/images/Madrid/columna.jpeg',
    '/src/assets/images/Madrid/Tim_3.jpeg',
    '/src/assets/images/Madrid/hotel.jpeg'
  ],
  col2: [
    '/src/assets/images/Madrid/Alacala_2.jpeg',
    '/src/assets/images/Madrid/Alcala.jpeg',
    '/src/assets/images/Madrid/Gran_via.jpeg',
    '/src/assets/images/Madrid/Fuck_3.jpeg',
    '/src/assets/images/Madrid/Group_3.jpeg',
    '/src/assets/images/Madrid/Haider_1.jpeg',
    '/src/assets/images/Madrid/hotel_2.jpeg'
  ],
  col3: [
    '/src/assets/images/Madrid/Jeep.jpeg',
    '/src/assets/images/Madrid/Justin_1.jpeg',
    '/src/assets/images/Madrid/Kim_1.jpeg',
    '/src/assets/images/Madrid/Metropolis.jpeg',
    '/src/assets/images/Madrid/Metropolis_2.jpeg',
    '/src/assets/images/Madrid/Myself.jpeg',
    '/src/assets/images/Madrid/street1.jpeg'
  ]
};

export default function Madrid() {
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
          <h1 className={styles.madridTitle}>MADRID</h1>
        </div>
        
        <div className={styles.quoteWrapper}>
          <p className={styles.quote}>
             &quot;I have never been to a city, where there is less reason to go to bed,
            and If I did go to bed, to sleep&quot;
            <span className={styles.author}>- Ernest Hemingway</span>
          </p>
        </div>
      </div>

      <div className={styles.photos}>
        <div className={styles.col1}>
          {images.col1.map((src, index) => (
            <img
              key={`col1-${index}`}
              src={src}
              alt={`Madrid ${index + 1}`}
              onClick={() => handleImageClick(src)}
            />
          ))}
        </div>

        <div className={styles.col2}>
          {images.col2.map((src, index) => (
            <img
              key={`col2-${index}`}
              src={src}
              alt={`Madrid ${images.col1.length + index + 1}`}
              onClick={() => handleImageClick(src)}
            />
          ))}
        </div>

        <div className={styles.col3}>
          {images.col3.map((src, index) => (
            <img
              key={`col3-${index}`}
              src={src}
              alt={`Madrid ${images.col1.length + images.col2.length + index + 1}`}
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