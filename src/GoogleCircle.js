import * as React from "react";
const SvgGoogleCircle = ({ title, titleId, ...props }) => (
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
    <path d="M7.188 9.034a2.97 2.97 0 0 0 .028 2.01 2.973 2.973 0 0 0 4.285 1.522 2.98 2.98 0 0 0 1.283-1.522H10.11V9.066h4.803a5 5 0 0 1-1.783 4.833A5 5 0 1 1 10 5a4.98 4.98 0 0 1 3.191 1.152l-1.62 1.326a2.974 2.974 0 0 0-4.384 1.557z" />
    <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10" />
  </svg>
);
export default SvgGoogleCircle;
