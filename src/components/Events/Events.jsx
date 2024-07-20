import React from "react";
import styles from "./Events.module.css";

export const Events = () => {
  return (
    <section className={styles.container} id="events">
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <h1>EVENTS IN TANITI</h1>
          <p>
            Looking for something exciting to do during your stay? Whether
            you're looking to attend or even host, Taniti has you covered.
          </p>
        </div>
      </div>
      <div className={styles.eventListContainer}>
        <div className={styles.eventCategory}>
          <h1>SPORTS & RECREATION</h1>
          <div className={styles.events}>
            <div className={styles.eventDate}>
              <h2 className={styles.dateMonth}>Jul</h2>
              <h3 className={styles.dateDay}>19</h3>
            </div>
            <div className={styles.eventDesc}>
              <p className={styles.description}>Taniti Tigers vs Tampa Rays</p>
              <h2 className={styles.location}>Rudd Stadium</h2>
            </div>
          </div>
          {/* Event two  */}
          <div className={styles.events}>
            <div className={styles.eventDate}>
              <h2 className={styles.dateMonth}>Jul.</h2>
              <h3 className={styles.dateDay}>20</h3>
            </div>
            <div className={styles.eventDesc}>
              <p className={styles.description}>
                Taniti Bengals vs Miami Dolphins
              </p>
              <h2 className={styles.location}>Rudd Stadium</h2>
            </div>
          </div>
        </div>

        <div className={styles.eventCategory}>
          <h1>ARTS & CULTURE</h1>
          <div className={styles.events}>
            <div className={styles.eventDate}>
              <h2 className={styles.dateMonth}>Jul.</h2>
              <h3 className={styles.dateDay}>17</h3>
            </div>
            <div className={styles.eventDesc}>
              <p className={styles.description}>Taste of Taniti</p>
              <h2 className={styles.location}>Serpentine Wall</h2>
            </div>
          </div>

          <div className={styles.events}>
            <div className={styles.eventDate}>
              <h2 className={styles.dateMonth}>Jul.</h2>
              <h3 className={styles.dateDay}>21</h3>
            </div>
            <div className={styles.eventDesc}>
              <p className={styles.description}>Tanitian Family Reunion</p>
              <h2 className={styles.location}>Sequoia Point</h2>
            </div>
          </div>
        </div>

        <div className={styles.eventCategory}>
          <h1>DINING & NIGHTLIFE</h1>
          <div className={styles.events}>
            <div className={styles.eventDate}>
              <h2 className={styles.dateMonth}>Jul.</h2>
              <h3 className={styles.dateDay}>19</h3>
            </div>
            <div className={styles.eventDesc}>
              <p className={styles.description}>Drag Show</p>
              <h2 className={styles.location}>Night Owl</h2>
            </div>
          </div>
          <div className={styles.events}>
            <div className={styles.eventDate}>
              <h2 className={styles.dateMonth}>Jul.</h2>
              <h3 className={styles.dateDay}>22</h3>
            </div>
            <div className={styles.eventDesc}>
              <p className={styles.description}>Taniti Pub Crawl</p>
              <h2 className={styles.location}>Northside Taniti</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
