import React from 'react';
import Hero from "./Images/Hero.jpg";
import styles from "./Main.module.css";
import service from "./Images/service.jpg";

function Main() {
  return (
    <div>
      <div className={styles.main}>
        {/* Hero image with text overlay */}
        <div className={styles.heroContainer}>
          <img src={Hero} className={styles.heroImage} alt="Hero"/>
          <div className={styles.heroText}>
            <h1>Catering Service in Parvathi Puram</h1>
            <p>Discover our exceptional catering service nestled in the heart of Parvathi Puram, where culinary delights meet unparalleled hospitality.</p>
          </div>
        </div>
      </div>
      
      <h2 className={styles.header}>What We Do</h2>
      <div className={styles.what_we_do}>
        <div>
          <h4>Catering</h4>
          <img src={service} alt="Catering Service"/>
        </div>
        <div>
          <h4>Cooking</h4>
          <img src={service} alt="Cooking Service"/>
        </div>
        <div>
          <h4>Event Managing</h4>
          <img src={service} alt="Event Managing Service"/>
        </div>
      </div>
    </div>
  );
}

export default Main;
