import * as React from "react";
const SvgSubtraction = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13 0a7 7 0 1 1-3 13.326A7 7 0 1 1 10 .673 7 7 0 0 1 13 0M7 2a5 5 0 1 0 1.002 9.9A6.97 6.97 0 0 1 6 7c0-1.907.763-3.637 2-4.9A5 5 0 0 0 7 2m6 0a5 5 0 1 0 0 10 5 5 0 0 0 0-10" />
  </svg>
);
export default SvgSubtraction;
