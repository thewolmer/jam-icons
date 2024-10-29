import * as React from "react";
const SvgChevronSquareDownRightF = ({ title, titleId, ...props }) => (
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
    <path d="M11 11H6a1 1 0 0 0 0 2h6a1 1 0 0 0 1-1V6a1 1 0 0 0-2 0zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgChevronSquareDownRightF;
