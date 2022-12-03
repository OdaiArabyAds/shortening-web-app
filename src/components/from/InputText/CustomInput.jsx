import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./CustomInput.module.scss";

const CustomInput = ({
  error,
  placeHolder,
  customClass,
  onChange,
  resetError,
  value,
}) => {
  return (
    <div className={styles.container}>
      <input
        value={value}
        type="text"
        placeholder={placeHolder}
        className={classNames([
          error?.show && styles.containerError,
          customClass,
        ])}
        onChange={(e) => {
          onChange(e.target.value);
          resetError(null);
        }}
      />
      {error?.message && (
        <div className={styles.errorMessage}>{error?.message}</div>
      )}
    </div>
  );
};

CustomInput.propTypes = {
  error: PropTypes.object,
  customClass: PropTypes.object,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  resetError: PropTypes.func.isRequired,
  value: PropTypes.string,
};

CustomInput.defaultProps = {
  value: "",
  error: { show: true, message: "fffffffffff" },
  customClass: null,
  placeHolder: "",
};
export default CustomInput;
