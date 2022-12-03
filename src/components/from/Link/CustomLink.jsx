import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./CustomLink.module.scss";
const CustomLink = ({ text, href, customClass, children, type }) => {
  return (
    // <a className={customClass} href={href}>
    <a className={classNames([styles[type], customClass])} href={href}>
      {text && text}
      {children && children}
    </a>
  );
};

CustomLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  type: PropTypes.string,
  customClass: PropTypes.object,
};
CustomLink.defaultProps = {
  href: "/",
  customClass: null,
  text: "",
  type: "header",
};
export default CustomLink;
