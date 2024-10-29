import * as React from "react";
const SvgBeerF = ({ title, titleId, ...props }) => (
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
    <path d="M12 15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V6h13a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3zM.035 4a3.5 3.5 0 0 1 3.632-2.996A4.5 4.5 0 0 1 10.973 4zM4 8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1m4 0v5h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z" />
  </svg>
);
export default SvgBeerF;
