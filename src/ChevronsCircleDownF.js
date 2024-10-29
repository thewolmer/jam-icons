import * as React from "react";
const SvgChevronsCircleDownF = ({ title, titleId, ...props }) => (
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
    <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10m.009-7.377-2.122-2.12a1 1 0 0 0-1.414 1.413l2.828 2.829a1 1 0 0 0 1.415 0l2.828-2.829a1 1 0 1 0-1.414-1.414zm0-5-2.122-2.12a1 1 0 0 0-1.414 1.413l2.828 2.829a1 1 0 0 0 1.415 0l2.828-2.829a1 1 0 1 0-1.414-1.414z" />
  </svg>
);
export default SvgChevronsCircleDownF;
