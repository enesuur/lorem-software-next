import React from "react";
import {
  BrandOne,
  BrandTwo,
  BrandThree,
  BrandFour,
  BrandFive,
  BrandSix,
  BrandSeven,
  BrandEight,
} from "@/utils/index";
import Marquee from "react-fast-marquee";
import styles from "./BrandSlider.module.css";

const BrandSlider: React.FC = () => {
  const brandArr = [
    BrandOne,
    BrandTwo,
    BrandThree,
    BrandFour,
    BrandFive,
    BrandSix,
    BrandSeven,
    BrandEight,
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
