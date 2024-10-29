import * as React from "react";
const SvgEgg = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8 18a6 6 0 0 0 6-6c0-4.221-3.418-10-6-10S2 7.779 2 12a6 6 0 0 0 6 6m0 2a8 8 0 0 1-8-8C0 7.582 3.582 0 8 0s8 7.582 8 12a8 8 0 0 1-8 8" />
  </svg>
);
export default SvgEgg;