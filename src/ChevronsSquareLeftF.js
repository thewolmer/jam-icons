import * as React from "react";
const SvgChevronsSquareLeftF = ({ title, titleId, ...props }) => (
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
    <path d="m11.818 10 2.121-2.121a1 1 0 1 0-1.414-1.415L9.697 9.293a1 1 0 0 0 0 1.414l2.828 2.829a1 1 0 0 0 1.414-1.415zm-4.99 0L8.95 7.879a1 1 0 0 0-1.414-1.415L4.707 9.293a1 1 0 0 0 0 1.414l2.829 2.829A1 1 0 1 0 8.95 12.12zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4" />
  </svg>
);
export default SvgChevronsSquareLeftF;