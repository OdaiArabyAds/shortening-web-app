import React from "react";
import PropTypes from "prop-types";

const CustomLink = ({ text, href, customClass, children }) => {
  return (
    // <a className={customClass} href={href}>
    <a className={customClass} href={href}>
      {text && text}
      {children && children}
    </a>
  );
};

CustomLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  customClass: PropTypes.object,
};
CustomLink.defaultProps = {
  href: "/",
  customClass: null,
  text: "",
};
export default CustomLink;
