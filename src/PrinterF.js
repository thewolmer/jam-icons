import * as React from "react";
const SvgPrinterF = ({ title, titleId, ...props }) => (
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
    <path d="M16 4h1a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-1V9H4v7H3a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1v2h12zM6 20v-9h8v9zM6 4V0h8v4z" />
  </svg>
);
export default SvgPrinterF;
