import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./BrandSlider.module.css";

const BrandSlider: React.FC = () => {
  const brandArr = [
    "./brand1.svg",
    "./brand2.svg",
    "./brand3.svg",
    "./brand4.svg",
    "./brand5.svg",
    "./brand6.svg",
    "./brand7.svg",
    "./brand8.svg",
  ];

  return (
    <Marquee
    className={styles.main}
    speed={40}
    autoFill={true}
    pauseOnHover={true}
    gradient={true}
    gradientColor="#f0f6fb"
    gradientWidth={128}
    >
      {brandArr.map((brand, index) => (
        <img key={index} src={brand} alt={`${index + 1} image.`} />
      ))}
    </Marquee>
  );
};

export default BrandSlider;
