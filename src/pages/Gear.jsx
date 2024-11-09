// src/pages/Gear.jsx
import styles from './Gear.module.css';
import cameraImg from '../assets/images/Gear/camera_gear.jpg';
import lensImg from '../assets/images/Gear/lens_gear.jpg';

export default function Gear() {
  return (
    <div className={styles.gearWrapper}>
      <section className={styles.Gear}>
        <div className={styles.title}>
          GEAR
        </div>

        <div className={styles.textCamera}>
          The Fujifilm X-E3 is an indispensable tool in my photography arsenal,
          chosen for its blend of vintage aesthetics and modern technology. This
          compact mirrorless camera features Fujifilm's renowned film simulation
          modes, such as Provia, Velvia, and Acros, which allow me to replicate
          classic film stocks and infuse my photos with timeless character. Its
          intuitive controls and advanced imaging capabilities enable me to
          capture the world with clarity and creativity, making the X-E3 my go-to
          camera for crafting vivid, storytelling images.
        </div>

        <div className={styles.textLens}>
          My lens of choice is the TTartisan 50mm F2, valued for its sharpness and
          classic rendering. This lens provides a perfect balance of affordability
          and performance. Its F2 aperture allows for beautiful bokeh and
          excellent low-light performance, giving my images a distinctive quality.
          Being a fixed lens, it encourages me to think more about framing,
          enhancing my creative process and enabling me to capture stunning
          portraits and detailed close-ups with remarkable clarity and character.
        </div>

        <div 
          className={styles.fotoCamara}
          style={{
            backgroundImage: `radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 56.4%, rgba(0, 0, 0, 0.20) 100%), url(${cameraImg})`
          }}
          aria-label="Camera equipment"
        />

        <div 
          className={styles.fotoLens}
          style={{ backgroundImage: `url(${lensImg})` }}
          aria-label="Camera lens"
        />
      </section>
    </div>
  );
}