import * as React from "react";
const SvgMug = ({ title, titleId, ...props }) => (
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
    <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm10.874 1H16a4 4 0 0 1 4 4v3a4 4 0 0 1-4 4h-1v2a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h7a4 4 0 0 1 3.874 3M15 12h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1z" />
  </svg>
);
export default SvgMug;
