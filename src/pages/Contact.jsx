// src/pages/Contact.jsx
import styles from './Contact.module.css';
import contactImg from '../assets/images/Contact/Camel_contact.jpg';

export default function Contact() {
  return (
    <div className={styles.contactWrapper}>
      <section className={styles.Contact}>
        <div className={styles.title}>
          CONTACT
        </div>

        <hr className={styles.horizontalLine} />

        <div className={styles.text}>
          For business inquiries and sponsorship opportunities, please email me at:{' '}
          <a 
            href="mailto:martinhl3310@gmail.com"
            className={styles.emailLink}
          >
            martinhl3310@gmail.com
          </a>
        </div>

        <div 
          className={styles.fotoMia}
          style={{ backgroundImage: `url(${contactImg})` }}
          aria-label="Contact image"
        />
      </section>
    </div>
  );
}