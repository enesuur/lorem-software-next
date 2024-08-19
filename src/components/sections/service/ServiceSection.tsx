import React from "react";
import Image from "next/image";
import servicesData from '@/data/serviceData.json';
import styles from "./ServiceSection.module.css";

const ServiceSection: React.FC = () => {
  return (
    <section>
      <div className={`${styles.servicesContainer} container`}>
        {servicesData.map((service, index) => (
          <div className={styles.serviceItem} key={index}>
            <article>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </article>
            <figure>
              <Image src={service.image} alt={service.alt} fill={true} priority={true} />
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
