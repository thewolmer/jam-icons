import * as React from "react";
const SvgMoon = ({ title, titleId, ...props }) => (
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
    <path d="M2 10c0 4.43 3.478 8 7.742 8 .658 0 1.302-.085 1.922-.248-2.996-2.2-4.896-5.786-4.896-9.752 0-2.09.527-4.095 1.489-5.853C4.699 2.863 2 6.097 2 10m6.768-2c0 4.632 3.068 8.528 7.232 9.665A9.56 9.56 0 0 1 9.742 20C4.362 20 0 15.523 0 10S4.362 0 9.742 0c.868 0 1.71.117 2.511.335A10.09 10.09 0 0 0 8.768 8" />
  </svg>
);
export default SvgMoon;