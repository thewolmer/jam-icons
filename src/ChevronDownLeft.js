import * as React from "react";
const SvgChevronDownLeft = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-7 -7 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2 8h7a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0z" />
  </svg>
);
export default SvgChevronDownLeft;
