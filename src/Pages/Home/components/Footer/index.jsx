import React from "react";
import { Section } from "../../../../components";
import styles from "./Footer.module.css";
import { Logo } from "../../../../Assets";
import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";

const index = () => {
  return (
    <footer className={styles.footer}>
      <Section>
        <div className={`${styles.footer__container} flex-column`}>
          <div className={`${styles.footer__1} flex-row flex-space-between`}>
            <h3>Learn More About Us</h3>
            <button>explore now</button>
          </div>
          <hr />
          <div className={`${styles.footer__2} flex-row flex-space-between`}>
            <div className={`${styles.footer__gap} flex-column`}>
              <img src={Logo} alt="logo" />
              <p>Sustainability is at the core of everything we do. </p>
            </div>
            <div>
              <h3 className={`${styles.footer__heading} text-uppercase`}>
                contact us
              </h3>
              <div className={`${styles.footer__gap} flex-column`}>
                <p>078-5453307</p>
                <p>980-4485480</p>
              </div>
            </div>
            <div>
              <h3 className={`${styles.footer__heading} text-uppercase`}>
                quick menu
              </h3>
              <div className={`${styles.footer__gap} flex-row`}>
                <div className={`${styles.footer__gap} flex-column`}>
                  <a href="#">Home</a>
                  <a href="#">About Us</a>
                  <a href="#">Courses</a>
                </div>
                <div className={`${styles.footer__gap} flex-column`}>
                  <a href="#">Faqs</a>
                  <a href="#">About Us</a>
                  <a href="#">Gallery</a>
                </div>
              </div>
            </div>
            <div>
              <h3 className={`${styles.footer__heading} text-uppercase`}>
                follow us
              </h3>
              <div className="flex-row flex-space-between">
                <FaFacebookF size={20} />
                <FaLinkedin size={20} />
                <FaYoutube size={20} />
              </div>
            </div>
          </div>
          <hr />
          <div className={`${styles.footer__3} flex-row flex-space-between`}>
            <p>{`Privacy Policy | © Copyright ${new Date().getFullYear()}. All Rights Reserved`}</p>
            <p>Nepal</p>
          </div>
        </div>
      </Section>
    </footer>
  );
};

export default index;
