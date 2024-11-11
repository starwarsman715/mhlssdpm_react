// src/pages/galleries/Other.jsx
import { useState, useEffect, useCallback } from 'react';
import Lightbox from '../../components/gallery/Lightbox';
import styles from './Other.module.css';

// Import all images
import imgCocaCola from '@/assets/images/Other/Coca_Cola.jpeg';
import imgKeepGoing from '@/assets/images/Other/Keep_Going.jpeg';
import imgSevilla1 from '@/assets/images/Other/Sevilla_1.jpeg';
import imgSevilla2 from '@/assets/images/Other/Sevilla_2.jpeg';
import imgSevilla3 from '@/assets/images/Other/Sevilla_3.jpeg';
import imgSevilla4 from '@/assets/images/Other/Sevilla_4.jpeg';
import imgSevilla5 from '@/assets/images/Other/Sevilla_5.jpeg';
import imgSevilla6 from '@/assets/images/Other/Sevilla_6.jpeg';
import imgSevilla7 from '@/assets/images/Other/Sevilla_7.jpeg';
import imgSevilla8 from '@/assets/images/Other/Sevilla_8.jpeg';
import imgDSC0085 from '@/assets/images/Other/DSC_0085.jpg';
import imgNightsky from '@/assets/images/Other/Nightsky.jpg';

// Organize images into columns
const images = {
  col1: [
    imgCocaCola,
    imgKeepGoing,
    imgSevilla1,
    imgSevilla2
  ],
  col2: [
    imgSevilla3,
    imgSevilla4,
    imgSevilla5,
    imgSevilla6
  ],
  col3: [
    imgSevilla7,
    imgSevilla8,
    imgDSC0085,
    imgNightsky
  ]
};

export default function Other() {
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
          <h1 className={styles.otherTitle}>OTHER</h1>
        </div>
        
        <div className={styles.quoteWrapper}>
          <p className={styles.quote}>
            &quot;Photography is the story I fail to put into words.&quot;
            <span className={styles.author}>- Destin Sparks</span>
          </p>
        </div>
      </div>

      <div className={styles.photos}>
        <div className={styles.col1}>
          {images.col1.map((src, index) => (
            <img
              key={`col1-${index}`}
              src={src}
              alt={`Other ${index + 1}`}
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
              alt={`Other ${images.col1.length + index + 1}`}
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
              alt={`Other ${images.col1.length + images.col2.length + index + 1}`}
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