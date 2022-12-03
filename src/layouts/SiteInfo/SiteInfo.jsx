import React from "react";
import CustomButton from "../../components/from/Button/CustomButton";
import styles from "./SiteInfo.module.scss";
import Image1 from "../../assets/images/illustration-working.svg";
const SiteInfo = () => {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.titlesContainer}>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performed
        </p>
        <CustomButton name="Get Started" shape="fullyRoundedShape" size="lg" />
      </div>
      <div className={styles.imageContainer}>
        <img src={Image1} alt="info" />
      </div>
    </div>
  );
};

export default SiteInfo;
