import React from "react";
import styles from "./Navbar.module.css";
import logo from "../src/assets/logooo.png";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <a href="/">
        <img src={logo} alt="Logo" style={{ height: "5rem" }} />
      </a>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/events">Events</a>
        </li>
        <li>
          <a href="/implementations">Implementations</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/green-score">Green Score</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
