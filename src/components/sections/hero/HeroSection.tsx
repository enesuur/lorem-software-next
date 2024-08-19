import React from "react";
import Image from "next/image";
import { HeroImage } from "@/utils/index";
import styles from "./HeroSection.module.css";
const HeroSection: React.FC = () => {
  return (
    <section>
      <div className={`${styles.heroContainer} container`}>
        <article>
          <h1 className={styles.heroTextHeader}>
            Catalyze Your Product <span> Evolution</span>
          </h1>
          <p>
            Exceptional software solutions that propel your business. Fast-track
            your development with tailored engineering expertise.
          </p>
          <button className="btn-primary">Get Started</button>
        </article>
        <figure>
          <Image src={HeroImage} alt="Hero Image" fill={true} priority={true} />
        </figure>
      </div>
    </section>
  );
};

export default HeroSection;
