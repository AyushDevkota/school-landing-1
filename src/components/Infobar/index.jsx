import React from "react";
import styles from "./Infobar.module.css";

const Navbar = () => {
  return (
    <div className={styles.infobar}>
      <div className={styles.container}>
        <p className="fw-light">Affiliated to Pokhara University</p>
        <ul className="fw-light">
          <li>078-545307</li>
          <span>|</span>
          <li>Online Application</li>
          <span>|</span>
          <li>980-4485480</li>
          <span>|</span>
          <li>Live Counceling</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
