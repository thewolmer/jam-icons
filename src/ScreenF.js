import * as React from "react";
const SvgScreenF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -2.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3 .565h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3m4 16h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2" />
  </svg>
);
export default SvgScreenF;
