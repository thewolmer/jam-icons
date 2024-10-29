import * as React from "react";
const SvgChevronsCircleUpF = ({ title, titleId, ...props }) => (
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
    <path d="m10 12.382 2.121 2.121a1 1 0 0 0 1.415-1.414l-2.829-2.828a1 1 0 0 0-1.414 0l-2.829 2.828a1 1 0 0 0 1.415 1.414zm0-5 2.121 2.121a1 1 0 0 0 1.415-1.414l-2.829-2.828a1 1 0 0 0-1.414 0L6.464 8.089A1 1 0 1 0 7.88 9.503L10 7.383zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10" />
  </svg>
);
export default SvgChevronsCircleUpF;
