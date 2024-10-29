import * as React from "react";
const SvgBrightnessDown = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -4 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8m6-5h1a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2m-6 6a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1M8 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1M1 7h1a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m11.95 4.536.707.707a1 1 0 1 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414m-8.486 0a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0m9.193-9.193a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0m-9.9 0 .707.707A1 1 0 1 1 3.05 4.464l-.707-.707a1 1 0 0 1 1.414-1.414" />
  </svg>
);
export default SvgBrightnessDown;
