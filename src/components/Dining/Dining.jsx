import styles from "./Dining.module.css";

import React from "react";

export const Dining = () => {
  return (
    <section className={styles.container} id="dining">
      <div className={styles.diningHeaderContainer}>
        <div className={styles.diningHeader}>
          <h1>Food & Drink</h1>
          <p>
            Consider yourself a foodie? Scope out the local cuisine and try
            something new, or find something familiar. Taniti has everything
            from your standard American burgers and fries to Japanese Hibachi
            grills to fine French cuisine - it's all up to you!
          </p>
        </div>
      </div>
      <div className={styles.featuredContainer}>
        <div className={styles.featuredRestaurant}>
          <h1>Paradise Grill</h1>
        </div>
        <div className={styles.featuredDishes}>
          <div className={styles.featuredDish} id={styles.dish1}>
            <h1 className={styles.dishTitle}>Tanitian Burger</h1>
          </div>
          <div className={styles.featuredDish} id={styles.dish2}>
            <h1 className={styles.dishTitle}>Chicken Philly</h1>
          </div>
          <div className={styles.featuredDish} id={styles.dish3}>
            <h1 className={styles.dishTitle}>Crab Bowl</h1>
          </div>
          <div className={styles.featuredDish} id={styles.dish4}>
            <h1 className={styles.dishTitle}>Chicken Fajitas</h1>
          </div>
          <div className={styles.featuredDish} id={styles.dish5}>
            <h1 className={styles.dishTitle}>Tanitian Delight</h1>
          </div>
          <div className={styles.featuredDish} id={styles.dish6}>
            <h1 className={styles.dishTitle}>Roasted Lamb</h1>
          </div>
        </div>
      </div>

      <div className={styles.localRegional}>
        <div className={styles.localCuisine}>
          <h1 className={styles.title}>Local Favorites</h1>
        </div>
        <div className={styles.regionalCuisine}>
          <h1 className={styles.title}>Regional Cuisine</h1>
        </div>
      </div>
    </section>
  );
};
