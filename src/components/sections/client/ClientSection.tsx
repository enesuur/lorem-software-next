import React from "react";
import ClientCard from "@/components/cards/client/ClientCard";
import clientData from "@/data/clientData.json";
import styles from "./ClientSection.module.css";

const ClientSection: React.FC = () => {
  return (
    <section>
      <div className={`${styles.clientContainer} container`}>
        <h1 className={styles.clientTextHeader}>
          Our <span> Client </span> Reviews
        </h1>
        <div className={styles.clientReviews}>
          {clientData.map((client, index) => (
            <ClientCard
              key={index}
              imageSrc={client.imageSrc}
              altText={client.altText}
              clientCompany={client.clientCompany}
              clientTitle={client.clientTitle}
              articleContent={client.articleContent}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
