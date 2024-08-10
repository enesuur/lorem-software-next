import React from "react";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import styles from "./PageBanner.module.css";

interface PageBannerProps {
  pageName: string;
}
const PageBanner: React.FC<PageBannerProps> = ({ pageName }) => {
  return (
    <section>
      <div className={`${styles.pageBannerContainer} container`}>
        <h1>{pageName}</h1>
        <BreadCrumb />
      </div>
    </section>
  );
};

export default PageBanner;
