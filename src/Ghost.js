import * as React from "react";
const SvgGhost = ({ title, titleId, ...props }) => (
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
    <path d="M8 0a8 8 0 0 1 8 8v12l-4.919-1-3.08 1-2.992-1L0 20V8a8 8 0 0 1 8-8m6 8A6 6 0 0 0 2 8v9.561l3.138-.626 2.871.96 2.955-.96 3.036.618zm-8.5 2a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
  </svg>
);
export default SvgGhost;
