import * as React from "react";
const SvgFlameF = ({ title, titleId, ...props }) => (
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
    <path d="M8 20c-4.418 0-8-3.411-8-7.619q0-2.54 2.914-6.523a28 28 0 0 1 1.202-1.545Q4.952 3.311 8 0q8 8.174 8 12.381C16 16.589 12.418 20 8 20m0-3c2.21 0 4-1.706 4-3.81Q12 11.087 8 7q-4 4.087-4 6.19C4 15.294 5.79 17 8 17" />
  </svg>
);
export default SvgFlameF;
