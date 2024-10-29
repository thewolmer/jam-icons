import * as React from "react";
const SvgPadlockAlt = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-6 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8M2 9.528V4a4 4 0 1 1 8 0v5.528a6 6 0 1 1-8 0M4 8.34A6 6 0 0 1 6 8c.701 0 1.374.12 2 .341V4a2 2 0 1 0-4 0v4.341zM6 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
  </svg>
);
export default SvgPadlockAlt;
