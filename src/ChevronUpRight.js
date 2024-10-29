import * as React from "react";
const SvgChevronUpRight = ({ title, titleId, ...props }) => (
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
    <path d="M8 2H1a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0z" />
  </svg>
);
export default SvgChevronUpRight;
