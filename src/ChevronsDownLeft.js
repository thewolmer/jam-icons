import * as React from "react";
const SvgChevronsDownLeft = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-5 -5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2 12h7a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0zm4-4h7a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0z" />
  </svg>
);
export default SvgChevronsDownLeft;
