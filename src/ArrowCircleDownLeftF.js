import * as React from "react";
const SvgArrowCircleDownLeftF = ({ title, titleId, ...props }) => (
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
    <path d="M6.172 12.828a.997.997 0 0 0 1 1h6a1 1 0 1 0 0-2H9.586l3.95-3.95a1 1 0 1 0-1.415-1.414l-3.95 3.95V6.828a1 1 0 1 0-2 0zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10" />
  </svg>
);
export default SvgArrowCircleDownLeftF;