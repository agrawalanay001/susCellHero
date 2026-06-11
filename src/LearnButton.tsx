import React from "react";
import styles from "./LearnButton.module.css";

const LearnButton = () => {
  return (
    <div className={styles.learnButton} style={{}}>
      <a href="/about" style={{ textDecoration: "none", color: "inherit" }}>
        Learn More
      </a>
    </div>
  );
};

export default LearnButton;
