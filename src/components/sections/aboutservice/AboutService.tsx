import React from "react";
import Image from "next/image";
import styles from "./AboutService.module.css";
import {
  WebService,
  MobileService,
  CloudService,
  DigitalTransformationService,
} from "@/utils";

const services = [
  {
    img: MobileService,
    alt: "Mobile Application Development",
    caption: "Mobile Services",
  },
  { img: WebService, alt: "Web Development", caption: "Web Development" },
  {
    img: DigitalTransformationService,
    alt: "Digital Transformation",
    caption: "Digital Transformation",
  },
  {
    img: CloudService,
    alt: "Cloud Server Management",
    caption: "Cloud Services",
  },
];

const AboutService: React.FC = () => {
  return (
    <section className={styles.aboutServiceSection}>
      <div className={`${styles.aboutServiceContainer} container`}>
        <h2>
          <span style={{ color: "var(--primary-color)" }}>
            Make a Difference{" "}
          </span>{" "}
          with Our Services
        </h2>
        <h4>
          Discover the Power of Innovation and Turn Your Dreams into Reality
        </h4>
        <div className={styles.servicesContainer}>
          {services.map((service, index) => (
            <figure key={index}>
              <Image src={service.img} alt={service.alt} fill={true} priority />
              <figcaption>{service.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutService;
