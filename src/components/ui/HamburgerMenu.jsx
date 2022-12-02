import React from "react";
import PropTypes from "prop-types";

const HamburgerMenu = ({ customClass, image }) => {
  return (
    <>
      <input type="checkbox" id="checkbox" className={customClass?.checkBox} />
      <label htmlFor="checkbox">
        <img src={image} alt="menuIcon" className={customClass?.hamburger} />
      </label>
    </>
  );
};

HamburgerMenu.propTypes = {
  customClass: PropTypes.object,
  image: PropTypes.elementType.isRequired,
};
HamburgerMenu.defaultProps = {
  customClass: null,
};

export default HamburgerMenu;
