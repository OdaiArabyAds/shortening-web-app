import React from "react";
import PropTypes from "prop-types";
import styles from "./AddedLinked.module.scss";
import classNames from "classnames";
import CustomButton from "../../from/Button/CustomButton";

const AddedLinked = ({
  longLink,
  shortLink,
  isCopied,
  customClass,
  copyToClipBoard,
}) => {
  return (
    <div className={classNames([styles.container, customClass])}>
      <div>{longLink}</div>
      <div></div>
      <div>{shortLink}</div>
      <CustomButton
        active={isCopied === shortLink}
        name={isCopied === shortLink ? "Copied!" : "Copy"}
        onClick={() => copyToClipBoard(shortLink)}
      />
    </div>
  );
};

AddedLinked.propTypes = {
  longLink: PropTypes.string.isRequired,
  shortLink: PropTypes.string.isRequired,
  isCopied: PropTypes.string,
  copyToClipBoard: PropTypes.func.isRequired,
};

AddedLinked.defaultProps = {
  isCopied: "",
};
export default AddedLinked;
