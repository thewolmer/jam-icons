import * as React from "react";
const SvgChevronsCircleUpLeft = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16M8 8v3a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2zm3 3v3a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2z" />
  </svg>
);
export default SvgChevronsCircleUpLeft;