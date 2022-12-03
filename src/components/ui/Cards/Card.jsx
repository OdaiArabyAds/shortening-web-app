import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Cards.module.scss";
const Card = ({ image, title, subTitle, customClass }) => {
  return (
    <div className={classNames([styles.container, customClass])}>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{subTitle}</p>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  customClass: PropTypes.object,
};

Card.defaultProps = {
  customClass: null,
};
export default Card;
