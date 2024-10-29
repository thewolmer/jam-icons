import * as React from "react";
const SvgChevronSquareLeftF = ({ title, titleId, ...props }) => (
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
    <path d="m8.172 10 3.535-3.536a1 1 0 1 0-1.414-1.414L6.05 9.293a1 1 0 0 0 0 1.414l4.243 4.243a1 1 0 0 0 1.414-1.414zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgChevronSquareLeftF;
