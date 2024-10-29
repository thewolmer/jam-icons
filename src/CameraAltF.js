import * as React from "react";
const SvgCameraAltF = ({ title, titleId, ...props }) => (
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
    <path d="M20 12H0V6a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6zm0 2a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6zM6 15a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zm4-4a4 4 0 1 0 0-8 4 4 0 0 0 0 8m6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-6-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
  </svg>
);
export default SvgCameraAltF;
