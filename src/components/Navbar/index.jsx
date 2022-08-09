import React from "react";
import styles from "./Navbar.module.css";
import { Logo } from "../../Assets";

const Header = (props) => {
  return (
    <div className={styles.container} {...props}>
      <img src={Logo} alt="school logo" />
      <ul className={`${styles.navbar} fw-light`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Academic</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">FAQs</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
