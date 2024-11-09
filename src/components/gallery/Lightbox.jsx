// src/components/gallery/Lightbox.jsx
import { useEffect } from 'react';
import styles from './Lightbox.module.css';

export default function Lightbox({ 
  isOpen, 
  onClose, 
  currentImage, 
  onPrev, 
  onNext }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('lightbox-active');
    } else {
      document.body.classList.remove('lightbox-active');
    }

    return () => {
      document.body.classList.remove('lightbox-active');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className={styles.lightbox}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <img 
        src={currentImage} 
        alt="Gallery view" 
        className={styles.lightboxImage}
      />
      <span 
        className={styles.prev} 
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
      >
        <i className="fas fa-chevron-left" />
      </span>
      <span 
        className={styles.next}
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        <i className="fas fa-chevron-right" />
      </span>
      <span 
        className={styles.close}
        onClick={onClose}
      >
        ×
      </span>
    </div>
  );
}