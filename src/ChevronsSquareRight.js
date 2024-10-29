import * as React from "react";
const SvgChevronsSquareRight = ({ title, titleId, ...props }) => (
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
    <path d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm8.818 8-2.121-2.121a1 1 0 0 1 1.414-1.415l2.828 2.829a1 1 0 0 1 0 1.414l-2.828 2.829a1 1 0 1 1-1.414-1.415zm-4.99 0-2.12-2.121A1 1 0 0 1 7.12 6.464l2.83 2.829a1 1 0 0 1 0 1.414l-2.83 2.829a1 1 0 1 1-1.414-1.415z" />
  </svg>
);
export default SvgChevronsSquareRight;
