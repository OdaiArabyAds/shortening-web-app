import React from "react";
import CustomButton from "../../from/Button/CustomButton";
import styles from "./Boost.module.scss";
const Boost = () => {
  return (
    <div className={styles.container}>
      <h2>Boost your Links Today</h2>
      <CustomButton name="Get Started" shape="fullyRoundedShape" />
    </div>
  );
};

Boost.propTypes = {};

export default Boost;
