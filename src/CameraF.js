import * as React from "react";
const SvgCameraF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -4 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.126 3C4.57 1.275 6.136 0 8 0h4a4 4 0 0 1 3.874 3H16a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM10 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8m6-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-6 3a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
  </svg>
);
export default SvgCameraF;
