import React from "react";
import PropTypes from "prop-types";
import CustomInput from "../../from/InputText/CustomInput";
import styles from "./ShortLinkAdd.module.scss";
import CustomButton from "../../from/Button/CustomButton";
const ShortLinkAdd = ({ onClick, onChange, urlText, resetError, error }) => {
  return (
    <div className={styles.container}>
      <CustomInput
        placeHolder="Shorten a link here..."
        onChange={onChange}
        resetError={resetError}
        error={error}
        value={urlText}
      />
      <CustomButton name="Shorten it!" onClick={onClick} />
    </div>
  );
};

ShortLinkAdd.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  resetError: PropTypes.func.isRequired,
  error: PropTypes.func,
  urlText: PropTypes.string,
};
ShortLinkAdd.defaultProps = {
  error: null,
};
export default ShortLinkAdd;
