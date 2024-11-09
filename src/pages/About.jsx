// src/pages/About.jsx
import styles from './About.module.css';
import wallpaperImg from '../assets/images/About/Wallpaper_about.jpg';
import meImg from '../assets/images/About/Me_about.jpeg';

export default function About() {
  return (
    <div className={styles.aboutWrapper}>
      <section className={styles.About}>
        <div className={styles.title}>
          ABOUT
        </div>

        <div className={styles.text}>
          My name is Martin Herguedas, born and raised in Madrid and currently
          based in Boston. I've been drawn to photography since 2019.
          Particularly drawn to urban and landscape photography, I find joy in
          capturing the beauty of daily life through my lens. Photography is all
          about capturing the essence of a moment, finding beauty in the mundane,
          and the joy of sharing these moments with the world.
        </div>

        <div 
          className={styles.fotoMia}
          style={{ backgroundImage: `url(${meImg})` }}
          aria-label="Portrait photo"
        />

        <div 
          className={styles.fotoBoston}
          style={{ backgroundImage: `url(${wallpaperImg})` }}
          aria-label="Boston landscape"
        />
      </section>
    </div>
  );
}