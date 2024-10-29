import * as React from "react";
const SvgSwitchLeft = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7 2a5 5 0 1 0 0 10h6a5 5 0 0 0 0-10zm0-2h6a7 7 0 0 1 0 14H7A7 7 0 0 1 7 0m0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
  </svg>
);
export default SvgSwitchLeft;
