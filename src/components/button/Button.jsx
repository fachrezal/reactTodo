import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import styles from "./button.module.css";

const Button = ({ text, onClick, color, align }) => {
  const className = cx(styles.headerBtn, {
    [styles.mainBlackColor]: color === "black",
    [styles.mainRedColor]: color === "red",
    [styles.alignLeft]: align === "left",
    [styles.alignRight]: align === "right"
  });
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "button",
  color: "black",
  align: "left"
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["black", "red"]),
  align: PropTypes.oneOf(["left", "right"])
};

export default Button;