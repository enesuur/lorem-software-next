import WebService from "@/assets/images/WebsiteService.png";
import MobileService from "@/assets/images/MobileService.png";
import CloudService from "@/assets/images/CloudService.png";
import DigitalTransformationService from "@/assets/images/DigitalTranfService.png";

import React from "react";
import Image from "next/image";
import styles from "./ServiceSection.module.css";

const services = [
  {
    title: "Web Development",
    description: `Our web development services provide robust and scalable solutions to enhance your online presence. 
                    We create responsive designs and powerful functionalities that ensure an exceptional user experience. 
                    Whether you need a simple site or a complex platform, our expert team delivers custom solutions tailored 
                    to your business needs. Elevate your digital presence with a website that drives results.`,
    image: WebService,
    alt: "Webservice",
  },
  {
    title: "Mobile Development",
    description: `Our mobile development services offer cutting-edge solutions to bring your app ideas to life. 
                    We build responsive and feature-rich mobile applications that provide a seamless user experience 
                    across all devices. Whether you need an iOS, Android, or cross-platform app, our team delivers 
                    custom solutions to meet your specific needs.`,
    image: MobileService,
    alt: "Mobile service",
  },
  {
    title: "Cloud Solutions",
    description: `Our cloud solutions enable businesses to scale and innovate with ease. We provide comprehensive 
                    cloud services including infrastructure setup, migration, and management. Our solutions are 
                    designed to enhance flexibility, security, and performance, ensuring your business operates 
                    efficiently in the cloud.`,
    image: CloudService,
    alt: "Cloud service",
  },
  {
    title: "Digital Transformation",
    description: `Our digital transformation services help businesses navigate the complexities of the digital 
                    landscape. We provide strategic guidance and implementation support to modernize your processes, 
                    technologies, and customer experiences. Our goal is to drive innovation and growth, enabling you 
                    to stay competitive in a rapidly changing market.`,
    image: DigitalTransformationService,
    alt: "Digital transformation service",
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section>
      <div className={`${styles.servicesContainer} container`}>
        {services.map((service, index) => (
          <div className={styles.serviceItem} key={index}>
            <article>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </article>
            <figure>
              <Image src={service.image} alt={service.alt} fill={true} />
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
