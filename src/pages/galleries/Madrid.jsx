// src/pages/galleries/Madrid.jsx
import { useState, useEffect, useCallback } from 'react';
import Lightbox from '../../components/gallery/Lightbox';
import styles from './Madrid.module.css';

// Import all images
import imgFuck1 from '@/assets/images/Madrid/Fuck_1.jpeg';
import imgArbol2 from '@/assets/images/Madrid/Arbol2.jpeg';
import imgCamel from '@/assets/images/Madrid/Camel.jpeg';
import imgCar from '@/assets/images/Madrid/car.jpeg';
import imgCibeles from '@/assets/images/Madrid/Cibeles.jpeg';
import imgColumna from '@/assets/images/Madrid/columna.jpeg';
import imgTim3 from '@/assets/images/Madrid/Tim_3.jpeg';
import imgHotel from '@/assets/images/Madrid/hotel.jpeg';
import imgAlacala2 from '@/assets/images/Madrid/Alacala_2.jpeg';
import imgAlcala from '@/assets/images/Madrid/Alcala.jpeg';
import imgGranVia from '@/assets/images/Madrid/Gran_via.jpeg';
import imgFuck3 from '@/assets/images/Madrid/Fuck_3.jpeg';
import imgGroup3 from '@/assets/images/Madrid/Group_3.jpeg';
import imgHaider1 from '@/assets/images/Madrid/Haider_1.jpeg';
import imgHotel2 from '@/assets/images/Madrid/hotel_2.jpeg';
import imgJeep from '@/assets/images/Madrid/Jeep.jpeg';
import imgJustin1 from '@/assets/images/Madrid/Justin_1.jpeg';
import imgKim1 from '@/assets/images/Madrid/Kim_1.jpeg';
import imgMetropolis from '@/assets/images/Madrid/Metropolis.jpeg';
import imgMetropolis2 from '@/assets/images/Madrid/Metropolis_2.jpeg';
import imgMyself from '@/assets/images/Madrid/Myself.jpeg';
import imgStreet1 from '@/assets/images/Madrid/street1.jpeg';

// Organize images into columns
const images = {
  col1: [
    imgFuck1,
    imgArbol2,
    imgCamel,
    imgCar,
    imgCibeles,
    imgColumna,
    imgTim3,
    imgHotel
  ],
  col2: [
    imgAlacala2,
    imgAlcala,
    imgGranVia,
    imgFuck3,
    imgGroup3,
    imgHaider1,
    imgHotel2
  ],
  col3: [
    imgJeep,
    imgJustin1,
    imgKim1,
    imgMetropolis,
    imgMetropolis2,
    imgMyself,
    imgStreet1
  ]
};

export default function Madrid() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
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
              loading="lazy"
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
              loading="lazy"
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
              loading="lazy"
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