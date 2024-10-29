import * as React from "react";
const SvgChevronLeft = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-8 -5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m2.757 7 4.95 4.95a1 1 0 1 1-1.414 1.414L.636 7.707a1 1 0 0 1 0-1.414L6.293.636A1 1 0 0 1 7.707 2.05z" />
  </svg>
);
export default SvgChevronLeft;
