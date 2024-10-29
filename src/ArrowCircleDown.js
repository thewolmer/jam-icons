import * as React from "react";
const SvgArrowCircleDown = ({ title, titleId, ...props }) => (
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
    <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-1-6.414V6a1 1 0 1 1 2 0v5.586l2.536-2.536a1 1 0 0 1 1.414 1.414l-4.243 4.243a.997.997 0 0 1-1.414 0L5.05 10.464A1 1 0 0 1 6.464 9.05z" />
  </svg>
);
export default SvgArrowCircleDown;
