"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./ScrollSection.module.css";

export interface ScrollSectionProps
  extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const ScrollSection: React.FC<ScrollSectionProps> = ({
  children,
  className,
  ...rest
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element || isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -20% 0px",
        threshold: 0.25,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${
        isVisible ? styles.visible : ""
      } ${className ?? ""}`}
      {...rest}
    >
      {children}
    </section>
  );
};

export default ScrollSection;