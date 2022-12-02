import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./CustomButton.module.scss";
const CustomButton = ({ name, customClass, shape, active, size, onClick }) => {
  return (
    <input
      type="button"
      value={name}
      onClick={onClick}
      className={classNames([
        styles.container,
        styles[shape],
        active && styles.active,
        styles[size],
        customClass,
      ])}
    />
  );
};

CustomButton.propTypes = {
  customClass: PropTypes.object,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  size: PropTypes.string,
  shape: PropTypes.oneOf(["roundedShape", "fullyRoundedShape"]),
};
CustomButton.defaultProps = {
  customClass: null,
  shape: "roundedShape",
  active: false,
  onClick: () => {},
  size: "sm",
};

export default CustomButton;
