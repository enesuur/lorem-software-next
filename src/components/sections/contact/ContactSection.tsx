import React from "react";
import Link from "next/link";
import styles from "./ContactSection.module.css";
const ContactSection: React.FC = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={`${styles.contactContainer} container`}>
        <h2>Let’s Connect and Make Things Happen!</h2>
        <Link href={"/contact"}>Contact Us</Link>
      </div>
    </section>
  );
};

export default ContactSection;
