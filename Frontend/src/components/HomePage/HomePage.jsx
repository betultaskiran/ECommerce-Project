import React from "react";
import { CardsCarousel } from "../Carousel/CardsCarousel";
import { FeaturesCard } from "../Card/FeaturesCard";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <>
      <div className={styles.carouselContainer}>
        <CardsCarousel />
      </div>
      <header className={styles.header}>
        <h1>LATEST COLLECTIONS</h1>
      </header>
      <div className={styles.gridContainer}>
        {/* <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard /> */}
      </div>
    </>
  );
}

export default HomePage;
