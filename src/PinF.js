import * as React from "react";
const SvgPinF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-3 -2.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m7.374 12.268-5.656 5.657A1 1 0 1 1 .303 16.51l5.657-5.656L1.718 6.61A6.99 6.99 0 0 1 7.9 4.67L11.617.954a2 2 0 0 1 2.828 0l2.829 2.828a2 2 0 0 1 0 2.829l-3.716 3.716a6.99 6.99 0 0 1-1.941 6.183z" />
  </svg>
);
export default SvgPinF;
