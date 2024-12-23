import React from "react";
import styles from "./AboutPage.module.css";

function AboutPage() {
  return (
    <div className={styles.container}>
      <section className={styles.aboutSection}>
        <div className={styles.imageContainer}>
          <img
            src="https://plus.unsplash.com/premium_photo-1679134540967-2a53b6113ba6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Us"
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h1>ABOUT US</h1>
          <p>
            Flower is the most innovative and effective solution for medical
            cosmetic products. We combine the convenience and security of online
            shopping with the high-quality medical cosmetic products we offer to
            our customers.
          </p>
          <p>
            For years, we have been working in collaboration with dermatologists
            and beauty experts to integrate the latest technological innovations
            in skin health and beauty care into personal care products. By
            offering healthy, reliable, and effective products, we aim to
            improve the quality of life for our customers.
          </p>
          <h2>Our Mission</h2>
          <p>
            Flower's mission is to provide customers with choice, convenience,
            and trust. With medical cosmetic products recommended and tested by
            expert dermatologists, we bring the professional skincare experience
            to your home.
          </p>
        </div>
      </section>

      <section className={styles.whyChooseUsSection}>
        <h2>WHY CHOOSE US?</h2>
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <h3>Quality Assurance:</h3>
            <p>
              Each of our products is carefully selected and tested with
              effective formulations and high-quality standards in mind.
            </p>
          </div>
          <div className={styles.box}>
            <h3>Convenience:</h3>
            <p>
              Discovering and purchasing medical cosmetic products has never
              been easier, thanks to our user-friendly interface. We provide all
              the information and details you need to save time and money.
            </p>
          </div>
          <div className={styles.box}>
            <h3>Exceptional Customer Service:</h3>
            <p>
              Our team of professionals specializing in medical cosmetics guides
              you every step of the way and ensures you have the best customer
              experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
