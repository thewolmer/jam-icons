import * as React from "react";
const SvgArrowCircleLeftF = ({ title, titleId, ...props }) => (
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
    <path d="M5.293 9.293a.997.997 0 0 0 0 1.414l4.243 4.243a1 1 0 1 0 1.414-1.414L8.414 11H14a1 1 0 0 0 0-2H8.414l2.536-2.536A1 1 0 1 0 9.536 5.05zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10" />
  </svg>
);
export default SvgArrowCircleLeftF;
