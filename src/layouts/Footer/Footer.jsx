import React from "react";
import Logo from "../../assets/images/logo.svg";
import CustomLink from "../../components/from/Link/CustomLink";
import styles from "./Footer.module.scss";
import FaceBook from "../../assets/images/icon-facebook.svg";
import Twitter from "../../assets/images/icon-twitter.svg";
import Insta from "../../assets/images/icon-instagram.svg";
import Paintress from "../../assets/images/icon-pinterest.svg";

const Footer = (props) => {
  return (
    <div className={styles.container}>
      <img src={Logo} alt="logo" />
      <div className={styles.links}>
        <h4>Features</h4>
        <CustomLink text="Link Shortening" href="#" type="footer" />
        <CustomLink text="Branded Links" href="#" type="footer" />
        <CustomLink text="Analytics" href="#" type="footer" />
      </div>
      <div className={styles.links}>
        <h4>Resources</h4>
        <CustomLink text="Blog" href="#" type="footer" />
        <CustomLink text="Developers" href="#" type="footer" />
        <CustomLink text="Support" href="#" type="footer" />
      </div>
      <div className={styles.links}>
        <h4>Company</h4>
        <CustomLink text="About" href="#" type="footer" />
        <CustomLink text="Our Team" href="#" type="footer" />
        <CustomLink text="Careers" href="#" type="footer" />
        <CustomLink text="Contact" href="#" type="footer" />
      </div>

      <div className={styles.social}>
        <img src={FaceBook} alt="FaceBook" />
        <img src={Twitter} alt="Twitter" />
        <img src={Insta} alt="Insta" />
        <img src={Paintress} alt="Paintress" />
      </div>
    </div>
  );
};

export default Footer;
