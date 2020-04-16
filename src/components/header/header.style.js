import { css } from "@emotion/core";

export const header = () =>
  css`
    display: flex;
    align-items: flex-start;
  `;

export const headerTitle = () =>
  css`
    width: 52%;
    text-align: center;
    font-size: 3.6rem;
    color: var(--main-black-color);
  `;