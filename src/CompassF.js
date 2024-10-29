import * as React from "react";
const SvgCompassF = ({ title, titleId, ...props }) => (
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
    <path d="m11.932 9.482 3.018-3.018a1 1 0 1 0-1.414-1.414l-3.018 3.018a2.003 2.003 0 0 0-2.45 2.45L5.05 13.536a1 1 0 0 0 1.414 1.414l3.018-3.018a2.003 2.003 0 0 0 2.45-2.45M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10" />
  </svg>
);
export default SvgCompassF;
