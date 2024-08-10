import React from "react";
import CountUp from "@/components/countup/CountUp";
import styles from "./Experience.module.css";

const ExperinceSection: React.FC = () => {
  return (
    <section>
      <div className={`${styles.experienceContainer} container`}>
        <h1 className={styles.experienceHeader}>
          Pioneering
          <span style={{ color: "var(--primary-color)" }}> solutions</span>
        </h1>
        <CountUp clients={243} experience={20} project={153} />
      </div>
    </section>
  );
};

export default ExperinceSection;
