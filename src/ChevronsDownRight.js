import * as React from "react";
const SvgChevronsDownRight = ({ title, titleId, ...props }) => (
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
    <path d="M8 8V1a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2zm4 4V5a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2z" />
  </svg>
);
export default SvgChevronsDownRight;
