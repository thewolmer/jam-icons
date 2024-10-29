import * as React from "react";
const SvgMoonF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.253.335A10.09 10.09 0 0 0 8.768 8c0 4.632 3.068 8.528 7.232 9.665A9.56 9.56 0 0 1 9.742 20C4.362 20 0 15.523 0 10S4.362 0 9.742 0c.868 0 1.71.117 2.511.335" />
  </svg>
);
export default SvgMoonF;
