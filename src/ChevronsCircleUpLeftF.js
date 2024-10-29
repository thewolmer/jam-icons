import * as React from "react";
const SvgChevronsCircleUpLeftF = ({ title, titleId, ...props }) => (
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
    <path d="M11 11h3a1 1 0 0 0 0-2h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0zM8 8h3a1 1 0 0 0 0-2H7a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0zm2 12C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10" />
  </svg>
);
export default SvgChevronsCircleUpLeftF;
