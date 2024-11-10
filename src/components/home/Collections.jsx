import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Collections.module.css';

// Import images
import bostonImg from '../../assets/images/Home/Skyline_main.jpeg';
import montmeloImg from '../../assets/images/Montmelo/F1_2.jpeg';
import madridImg from '../../assets/images/Home/Cibeles_main.jpg';
import otherImg from '../../assets/images/Home/museo_2_main.jpeg';

const CollectionItem = ({ to, className, image, name }) => {
  return (
    <Link 
      to={to} 
      className={`${styles.collectionItem} ${styles[className]} ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.collectionContent}>
        <span>{name}</span>
      </div>
    </Link>
  );
};

export default function Collections() {
  // Parallax effect setup
  useEffect(() => {
    const collectionItems = document.querySelectorAll(`.${styles.collectionItem}`);
    let ticking = false;

    const initialOffsets = {
        boston: 40,    // Centered
        montmelo: 40,  // Slightly higher
        madrid: 20,    // Slightly lower
        other: 45      // Centered
    };

    const speedFactors = {
        landscape: 0.08,    // Speed factor for landscape images
        portrait: 0.1,      // Speed factor for portrait images
        formula_one: 0.3   // Faster speed factor for Formula One image
    };

    function parallaxEffect() {
        const viewportHeight = window.innerHeight;

        collectionItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const offset = window.pageYOffset;

            if (rect.top < viewportHeight && rect.bottom > 0) {
                // Get the base class name without the CSS module hash
                const classList = Array.from(item.classList);
                const itemId = classList.find(className => 
                    ['boston', 'montmelo', 'madrid', 'other'].includes(className)
                );
                const initialOffsetY = initialOffsets[itemId] || 50;

                // Determine the speed factor based on image type
                let speedFactor;
                if (itemId === 'montmelo') {
                    speedFactor = speedFactors.formula_one;
                } else if (itemId === 'other') {
                    speedFactor = speedFactors.landscape;
                } else {
                    speedFactor = speedFactors.portrait;
                }

                // Calculate percentage of visibility
                const scrollPercentage = (offset - (rect.top - viewportHeight)) / 
                    (rect.bottom - rect.top + viewportHeight);

                // Calculate offset for background images
                const backgroundOffsetY = initialOffsetY + 
                    ((scrollPercentage - 0.5) * 100 * speedFactor);

                // Set background position
                item.style.backgroundPosition = `50% ${backgroundOffsetY}%`;
            }
        });

        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(parallaxEffect);
            ticking = true;
        }
    }

    // Initial call
    parallaxEffect();

    window.addEventListener("scroll", onScroll);
    
    return () => {
        window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const collections = [
    { path: '/boston', className: 'boston', image: bostonImg, name: 'BOSTON' },
    { path: '/montmelo', className: 'montmelo', image: montmeloImg, name: 'MONTMELO' },
    { path: '/madrid', className: 'madrid', image: madridImg, name: 'MADRID' },
    { path: '/other', className: 'other', image: otherImg, name: 'OTHER' }
  ];

  return (
    <div className={styles.collections} id="collections">
      {collections.map((collection) => (
        <CollectionItem
          key={collection.path}
          to={collection.path}
          className={collection.className}
          image={collection.image}
          name={collection.name}
        />
      ))}
    </div>
  );
}