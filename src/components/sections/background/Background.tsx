import React from "react";
import BrandSlider from "@/components/brandslider/BrandSlider";
import styles from "./BackgroundSection.module.css";
const BackgroundSection: React.FC = () => {
  return (
    <section>
      <div className={`${styles.backgroundContainer} container`}>
        <h2 className={styles.backgroundTextHeader}>
          Lorem software <span>partner</span> ecosystem
        </h2>
      </div>
      <div className={styles.brandsContainer}>
        <BrandSlider />
      </div>
    </section>
  );
};

export default BackgroundSection;
