import styles from "./Stay.module.css";

import React from "react";

export const Stay = () => {
  return (
    <section className={styles.container} id="stay">
      <div className={styles.headerContainer}>
        <div className={styles.stayHeader}>
          <h1 className={styles.stayHeaderTitle}>Hotels & Accommodations</h1>
          <p className={styles.stayHeaderDesc}>
            Taniti has a wide variety of accommodations - from luxury hotels to
            quaint bed and breakfasts, from resorts to hostels - if you're
            looking for a place to lay your head in Taniti during your stay,
            look no further.
          </p>
        </div>
      </div>
      <div className={styles.optionsContainer}>
        <div className={styles.hotel} id={styles.hotelCard}>
          <h1 className={styles.hotelName}>Hotels</h1>
          <p className={styles.hotelDescription}>
            For staying close to the action
          </p>
        </div>
        <div className={styles.hotel} id={styles.bedAndBreakfastsCard}>
          <h1 className={styles.hotelName}>Bed & Breakfasts</h1>
          <p className={styles.hotelDescription}>For that cozy home feeling</p>
        </div>
        <div className={styles.hotel} id={styles.privateRentalsCard}>
          <h1 className={styles.hotelName}>Private Rentals</h1>
          <p className={styles.hotelDescription}>
            For that private luxury getaway
          </p>
        </div>
        <div className={styles.hotel} id={styles.resortCard}>
          <h1 className={styles.hotelName}>Resorts</h1>
          <p className={styles.hotelDescription}>For the all-inclusive stay </p>
        </div>
      </div>
    </section>
  );
};
