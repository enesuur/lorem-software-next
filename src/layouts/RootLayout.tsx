import React, { ReactNode } from "react";
import styles from "./RootLayout.module.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
interface LayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (

    <div className={styles.rootLayout}>
      <Navbar/>
      <main className={`${styles.main}`}>{children}</main>
      <Footer/>
    </div>
  );
};

export default RootLayout;
