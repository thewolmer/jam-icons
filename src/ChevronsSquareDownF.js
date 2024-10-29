import * as React from "react";
const SvgChevronsSquareDownF = ({ title, titleId, ...props }) => (
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
    <path d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m5.998 12.612-2.122-2.121a1 1 0 1 0-1.414 1.414l2.829 2.828a1 1 0 0 0 1.414 0l2.828-2.828a1 1 0 0 0-1.414-1.414zm0-5L7.876 5.491a1 1 0 1 0-1.414 1.414l2.829 2.828a1 1 0 0 0 1.414 0l2.828-2.828A1 1 0 0 0 12.12 5.49z" />
  </svg>
);
export default SvgChevronsSquareDownF;
