import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./BreadCrumb.module.css";

interface BreadCrumbItem {
  name: string;
  href: string;
}

const BreadCrumb: React.FC = () => {
  const { pathname } = useRouter();

  const generateBreadcrumbs = (): BreadCrumbItem[] => {
    const pathnames = pathname.split("/").filter((item) => item);
    console.log(pathnames);
    const breadcrumbs: BreadCrumbItem[] = [{ name: "Home", href: "/" }];

    pathnames.forEach((name, index) => {
      const href = `/${pathnames.slice(0, index + 1).join("/")}`;
      breadcrumbs.push({
        name: name.charAt(0).toUpperCase() + name.slice(1),
        href,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();
  console.log(breadcrumbs);

  return (
    <nav className={styles.breadCrumbContainer}>
      <ol>
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          return (
            <li key={breadcrumb.href} className={isLast ? styles.active : ""}>
              {!isLast ? (
                <Link href={breadcrumb.href}>{breadcrumb.name}</Link>
              ) : (
                <span>{breadcrumb.name}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
