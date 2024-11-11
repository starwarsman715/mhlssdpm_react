// src/pages/galleries/Boston.jsx
import { useState, useEffect, useCallback } from 'react';
import Lightbox from '../../components/gallery/Lightbox';
import styles from './Boston.module.css';

// Import all images properly
import img911 from '@/assets/images/Boston/911.jpeg';
import imgBay from '@/assets/images/Boston/Bay.jpeg';
import imgBridge from '@/assets/images/Boston/Bridge.jpeg';
import imgCDS from '@/assets/images/Boston/CDS.jpeg';
import imgCDS2 from '@/assets/images/Boston/CDS_2.jpeg';
import imgChurchTower from '@/assets/images/Boston/Church_Tower.jpeg';
import imgCitgo from '@/assets/images/Boston/Citgo.jpeg';
import imgCommAve from '@/assets/images/Boston/Comm_Ave.jpeg';
import imgDisco from '@/assets/images/Boston/Disco.jpeg';
import imgDSCF33090 from '@/assets/images/Boston/DSCF33090.jpeg';
import imgEsta from '@/assets/images/Boston/Esta.jpeg';
import imgFabrik from '@/assets/images/Boston/Fabrik.jpeg';
import imgFlowerPower from '@/assets/images/Boston/Flower_Power.jpeg';
import imgGriego2 from '@/assets/images/Boston/Griego_2.jpeg';
import imgIglesia from '@/assets/images/Boston/Iglesia.jpeg';
import imgKhan2 from '@/assets/images/Boston/Khan_2.jpeg';
import imgKhan from '@/assets/images/Boston/Khan.jpeg';
import imgKimi from '@/assets/images/Boston/Kimi.jpeg';
import imgMarro3 from '@/assets/images/Boston/Marro_3.jpeg';
import imgMarro from '@/assets/images/Boston/Marro.jpeg';
import imgMartina2 from '@/assets/images/Boston/Martina_2.jpeg';
import imgPrimeraChamba from '@/assets/images/Boston/Mi_primera_chamba.jpeg';
import imgMirror from '@/assets/images/Boston/Mirror.jpeg';
import imgMuseo1 from '@/assets/images/Boston/museo_1.jpeg';
import imgFriendship2 from '@/assets/images/Boston/Friendship_2.jpeg';
import imgNightTrip from '@/assets/images/Boston/Night_trip.jpeg';
import imgPanas from '@/assets/images/Boston/Panas.jpeg';
import imgPlanta1 from '@/assets/images/Boston/Planta_1.jpeg';
import imgPrudential from '@/assets/images/Boston/Prudential.jpeg';
import imgPrudi from '@/assets/images/Boston/Prudi.jpeg';
import imgRealismoMagico from '@/assets/images/Boston/Realismo_magico.jpeg';
import imgRoad from '@/assets/images/Boston/Road.jpeg';
import imgSemi2 from '@/assets/images/Boston/Semi_2.jpeg';
import imgSkyline from '@/assets/images/Boston/Skyline.jpeg';
import imgSMH from '@/assets/images/Boston/SMH.jpeg';
import imgSunset from '@/assets/images/Boston/Sunset.jpeg';
import imgThomas from '@/assets/images/Boston/Thomas.jpeg';
import imgWallpaper from '@/assets/images/Boston/Wallpaper.jpeg';
import imgMuseo2 from '@/assets/images/Boston/museo_2.jpeg';

// Organize images into columns
const images = {
  col1: [
    img911,
    imgBay,
    imgBridge,
    imgCDS,
    imgCDS2,
    imgChurchTower,
    imgCitgo,
    imgCommAve,
    imgDisco,
    imgDSCF33090,
    imgEsta,
    imgFabrik,
    imgFlowerPower
  ],
  col2: [
    imgGriego2,
    imgIglesia,
    imgKhan2,
    imgKhan,
    imgKimi,
    imgMarro3,
    imgMarro,
    imgMartina2,
    imgPrimeraChamba,
    imgMirror,
    imgMuseo1,
    imgFriendship2
  ],
  col3: [
    imgNightTrip,
    imgPanas,
    imgPlanta1,
    imgPrudential,
    imgPrudi,
    imgRealismoMagico,
    imgRoad,
    imgSemi2,
    imgSkyline,
    imgSMH,
    imgSunset,
    imgThomas,
    imgWallpaper,
    imgMuseo2
  ]
};

export default function Boston() {
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
              loading="lazy"
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
              loading="lazy"
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