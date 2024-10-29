import * as React from "react";
const SvgTarget = ({ title, titleId, ...props }) => (
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
    <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0-1a7 7 0 1 1 0-14 7 7 0 0 1 0 14m0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10m0-1a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
  </svg>
);
export default SvgTarget;
