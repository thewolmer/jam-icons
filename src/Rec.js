import * as React from "react";
const SvgRec = ({ title, titleId, ...props }) => (
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
    <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12m0 2A8 8 0 1 1 8 0a8 8 0 0 1 0 16" />
  </svg>
);
export default SvgRec;
