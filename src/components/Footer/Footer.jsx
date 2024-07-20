import React from "react";
import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

export const Footer = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.classInfo}>C856 - UI/UX Design - Task 1</h1>
      <div className={styles.horizontalDivider}></div>
      <div className={styles.categoryContainer}>
        <div className={styles.category}>
          <h1 className={styles.categoryHeader}>Tourism</h1>
          <ul className={styles.links}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#stay">Stay</a>
            </li>
            <li>
              <a href="#dining">Dining</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
          </ul>
        </div>

        <div className={styles.category}>
          <h1 className={styles.categoryHeader}>Project</h1>
          <ul className={styles.links}>
            <li>
              <a href="#blank">C856 Task 1</a>
            </li>
            <li>
              <a href="#blank">Katrina Roland</a>
            </li>
            <li>
              <a href="#blank">July 2024</a>
            </li>
            <li>
              <a href="#blank">WGU</a>
            </li>
          </ul>
        </div>

        <div className={styles.category}>
          <h1 className={styles.categoryHeader}>Tools</h1>
          <ul className={styles.links}>
            <li>
              <a href="#blank">HTML</a>
            </li>
            <li>
              <a href="#blank">CSS</a>
            </li>
            <li>
              <a href="#blank">Node.js</a>
            </li>
            <li>
              <a href="#blank">React</a>
            </li>
          </ul>
        </div>

        <div className={styles.category}>
          <h1 className={styles.categoryHeader}>Links</h1>
          <ul className={styles.links}>
            <li>
              <a href="#blank">LinkedIn</a>
            </li>
            <li>
              <a href="#blank">GitHub</a>
            </li>
            <li>
              <a href="mailto:kroland09@gmail.com">Email</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.horizontalDivider} id="bottomDivider"></div>
      <div className={styles.infodump}>
        <p>
          You can view the ReadMe detailing the planning stages{" "}
          <a href="">here</a>.{" "}
        </p>
      </div>
    </section>
  );
};
