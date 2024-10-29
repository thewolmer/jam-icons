import * as React from "react";
const SvgChevronSquareLeft = ({ title, titleId, ...props }) => (
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
    <path d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm4.172 8 3.535 3.536a1 1 0 0 1-1.414 1.414L6.05 10.707a1 1 0 0 1 0-1.414l4.243-4.243a1 1 0 0 1 1.414 1.414z" />
  </svg>
);
export default SvgChevronSquareLeft;
