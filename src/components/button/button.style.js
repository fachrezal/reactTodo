import { css } from "@emotion/core";

export const button = ({ color, align }) => {
  let textColor;
  switch (color) {
    case "black":
      textColor = "#484848";
      break;
    case "red":
      textColor = "rgb(219, 67, 67)";
      break;
    default:
      textColor = "#484848";
  }

  return css`
    font-size: 1.8rem;
    font-family: Arial, Helvetica, sans-serif;
    color: ${textColor};
    text-align: ${align};

    width: 24%;
    padding: 16px;
    cursor: pointer;
    background: unset;
    border: unset;
    outline: unset;
  `;
};
