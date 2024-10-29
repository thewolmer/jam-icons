import * as React from "react";
const SvgChevronsCircleDownRightF = ({ title, titleId, ...props }) => (
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
    <path d="M9 9H6a1 1 0 1 0 0 2h4a1 1 0 0 0 1-1V6a1 1 0 0 0-2 0zm3 3H9a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0zm-2 8C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10" />
  </svg>
);
export default SvgChevronsCircleDownRightF;
