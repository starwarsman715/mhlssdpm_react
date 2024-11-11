// src/components/gallery/Lightbox.jsx
import { useEffect } from 'react';
import styles from './Lightbox.module.css';

export default function Lightbox({ 
  isOpen, 
  onClose, 
  currentImage, 
  onPrev, 
  onNext 
}) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'Escape') {
        onClose();
      }
    }

    if (isOpen) {
      document.body.classList.add('lightbox-active');
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.classList.remove('lightbox-active');
    }

    return () => {
      document.body.classList.remove('lightbox-active');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onPrev, onNext, onClose]);

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
      <button 
        className={styles.prev} 
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous Image"
      >
        <i className="fas fa-chevron-left" />
      </button>
      <button 
        className={styles.next}
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next Image"
      >
        <i className="fas fa-chevron-right" />
      </button>
      <button 
        className={styles.close}
        onClick={onClose}
        aria-label="Close Lightbox"
      >
        &times;
      </button>
    </div>
  );
}
