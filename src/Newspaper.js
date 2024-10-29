import * as React from "react";
const SvgNewspaper = ({ title, titleId, ...props }) => (
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
    <path d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm2 13h2a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m6-12a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-6 6h6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m0-3h6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m.5-6h2A1.5 1.5 0 0 1 9 4.5v2A1.5 1.5 0 0 1 7.5 8h-2A1.5 1.5 0 0 1 4 6.5v-2A1.5 1.5 0 0 1 5.5 3" />
  </svg>
);
export default SvgNewspaper;
