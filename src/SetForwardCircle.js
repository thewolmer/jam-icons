import * as React from "react";
const SvgSetForwardCircle = ({ title, titleId, ...props }) => (
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
    <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m2.514-6.164-3.929 2.808c-.905.646-2.13.389-2.736-.576a2.2 2.2 0 0 1-.335-1.17V7.102C5.514 5.942 6.397 5 7.487 5c.39 0 .773.124 1.098.356l3.93 2.808V6a1 1 0 0 1 2 0v8a1 1 0 1 1-2 0v-2.164zM7.487 7.102v5.796L11.542 10z" />
  </svg>
);
export default SvgSetForwardCircle;
