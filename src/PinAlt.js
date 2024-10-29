import * as React from "react";
const SvgPinAlt = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-7 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4 9.9A5.002 5.002 0 0 1 5 0a5 5 0 0 1 1 9.9V19a1 1 0 0 1-2 0zM5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
  </svg>
);
export default SvgPinAlt;
