import React, { ReactNode } from "react";
import styles from "./RootLayout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (

    <div className={styles.rootLayout}>
      <main className={`${styles.main}`}>{children}</main>
    </div>
  );
};

export default RootLayout;
