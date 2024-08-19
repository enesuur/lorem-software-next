import React from "react";
import styles from "./ClientCard.module.css";
import Image, { StaticImageData } from "next/image";

interface ClientCardProps {
  imageSrc: string | StaticImageData;
  altText: string;
  clientCompany: string;
  clientTitle: string;
  articleContent: string;
}

const ClientCard: React.FC<ClientCardProps> = ({
  imageSrc,
  altText,
  clientCompany,
  clientTitle,
  articleContent,
}) => {
  return (
    <div className={styles.clientCardContainer}>
      <div className={styles.cardHeader}>
        <figure>
          <Image src={imageSrc} alt={altText} fill={true} />
        </figure>
        <div className={styles.clientInfo}>
          <span>{clientCompany}</span>
          <span>{clientTitle}</span>
        </div>
      </div>
      <article>{articleContent}</article>
    </div>
  );
};

export default ClientCard;
