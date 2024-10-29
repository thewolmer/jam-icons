import * as React from "react";
const SvgBeer = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -3 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2 6v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6zm10 0h1a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-1a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2m0 2v5h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zM4 8a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1M6.5 0A4.5 4.5 0 0 1 11 4.5v1.509H0V4.5a3.5 3.5 0 0 1 3.667-3.496A4.48 4.48 0 0 1 6.5 0M2 4h7a2 2 0 0 0-2-2H6a2 2 0 0 0-1.75 1.031A1 1 0 0 0 4 3H3a1 1 0 0 0-1 1" />
  </svg>
);
export default SvgBeer;
