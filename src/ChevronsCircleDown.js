import * as React from "react";
const SvgChevronsCircleDown = ({ title, titleId, ...props }) => (
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
    <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0-5.29 2.121-2.12a1 1 0 0 1 1.415 1.414l-2.829 2.828a1 1 0 0 1-1.414 0l-2.829-2.828a1 1 0 1 1 1.415-1.415zm0-5 2.121-2.12a1 1 0 0 1 1.415 1.414l-2.829 2.828a1 1 0 0 1-1.414 0L6.464 7.004A1 1 0 1 1 7.88 5.589L10 7.711z" />
  </svg>
);
export default SvgChevronsCircleDown;
