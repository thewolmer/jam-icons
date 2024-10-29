import * as React from "react";
const SvgBellF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-3 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18 17H0a8.98 8.98 0 0 1 3-6.708V6a6 6 0 1 1 12 0v4.292A8.98 8.98 0 0 1 18 17M6.17 18h5.66a3.001 3.001 0 0 1-5.66 0" />
  </svg>
);
export default SvgBellF;
