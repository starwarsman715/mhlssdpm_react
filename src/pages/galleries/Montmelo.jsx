// src/pages/galleries/Montmelo.jsx
import { useState, useEffect, useCallback } from 'react';
import Lightbox from '../../components/gallery/Lightbox';
import styles from './Montmelo.module.css';

// Import all images
import imgF1_1 from '@/assets/images/Montmelo/F1_1.jpeg';
import imgF1_2 from '@/assets/images/Montmelo/F1_2.jpeg';
import imgF1_3 from '@/assets/images/Montmelo/F1_3.jpeg';
import imgF1_4 from '@/assets/images/Montmelo/F1_4.jpeg';
import imgF1_5 from '@/assets/images/Montmelo/F1_5.jpeg';
import imgF1_6 from '@/assets/images/Montmelo/F1_6.jpeg';
import imgF1_7 from '@/assets/images/Montmelo/F1_7.jpeg';
import imgF1_8 from '@/assets/images/Montmelo/F1_8.jpeg';
import imgF1_9 from '@/assets/images/Montmelo/F1_9.jpeg';
import imgF1_10 from '@/assets/images/Montmelo/F1_10.jpeg';
import imgF1_11 from '@/assets/images/Montmelo/F1_11.jpeg';

// Organize images into columns
const images = {
  col1: [
    imgF1_1,
    imgF1_2,
    imgF1_3,
    imgF1_4
  ],
  col2: [
    imgF1_5,
    imgF1_6,
    imgF1_7
  ],
  col3: [
    imgF1_9,
    imgF1_10,
    imgF1_11,
    imgF1_8
  ]
};

export default function Montmelo() {
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
          <h1 className={styles.montmeloTitle}>MONTMELO</h1>
        </div>
        
        <div className={styles.quoteWrapper}>
          <p className={styles.quote}>
            &quot;Formula 1 racing is like a symphony of speed, precision, and passion, 
            where every millisecond counts and history is written in tire marks.&quot;
            <span className={styles.author}>- Circuit de Barcelona-Catalunya</span>
          </p>
        </div>
      </div>

      <div className={styles.photos}>
        <div className={styles.col1}>
          {images.col1.map((src, index) => (
            <img
              key={`col1-${index}`}
              src={src}
              alt={`Montmelo ${index + 1}`}
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
              alt={`Montmelo ${images.col1.length + index + 1}`}
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
              alt={`Montmelo ${images.col1.length + images.col2.length + index + 1}`}
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