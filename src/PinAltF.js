import * as React from "react";
const SvgPinAltF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-7 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4 10.465a5.002 5.002 0 0 1 1-9.9 5 5 0 0 1 1 9.9v9.1a1 1 0 0 1-2 0z" />
  </svg>
);
export default SvgPinAltF;
