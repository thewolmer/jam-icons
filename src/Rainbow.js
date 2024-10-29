import * as React from "react";
const SvgRainbow = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -7 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10h-2a8 8 0 1 0-16 0zm4 0a6 6 0 1 1 12 0h-2a4 4 0 1 0-8 0zm4 0a2 2 0 1 1 4 0z" />
  </svg>
);
export default SvgRainbow;
