/** @jsx jsx */
// import React from "react";
import { jsx } from "@emotion/core";
import propTypes from "prop-types";
import { useTheme } from "emotion-theming";

// import styles from "./paper.module.css";
import * as styles from "./paper.style";

const Paper = ({ children }) => {
  const theme = useTheme();

  return (
    <div css={styles.paper({ theme })}>
      <div css={styles.frame({ theme })}>{children}</div>
    </div>
  );
};

Paper.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node
  ])
};

export default Paper;
