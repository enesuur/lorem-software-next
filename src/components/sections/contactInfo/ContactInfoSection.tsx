import React from "react";
import styles from "./ContactInfoSection.module.css";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

const ContactInfoSection: React.FC = () => {
  return (
    <section>
      <div className="container">
        <h2 className={styles.contactInfoTitle}><span style={{color:"var(--primary-color)"}}>Connect</span> With Us</h2>
        <div className={`${styles.contactInfoContainer}`}>
          <div className={styles.contactInfoItem}>
            <a href="tel:+1234567890" className={styles.contactLink}>
              <FiPhone className={styles.icon} />
              <h2>Phone</h2>

              <span className={styles.itemLast}>Phone: +1 234 567 890</span>
            </a>
          </div>

          <div className={styles.contactInfoItem}>
            <GrLocation className={styles.icon} />
            <h2>Location</h2>
            <span className={styles.itemLast}>
              Address: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nisi, nesciunt.
            </span>
          </div>

          <div className={styles.contactInfoItem}>
            <a
              href="mailto:loremipsum@gmail.com"
              className={styles.contactLink}
            >
              <FiMail className={styles.icon} />
              <h2>Mail</h2>

              <span className={styles.itemLast}>loremipsum@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
