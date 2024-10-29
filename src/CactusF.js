import * as React from "react";
const SvgCactusF = ({ title, titleId, ...props }) => (
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
    <path d="M6 16H0V8.5a2.5 2.5 0 0 1 5 0V11h1V4a4 4 0 1 1 8 0v5h1V6.5a2.5 2.5 0 1 1 5 0V14h-6v6H6zm4-7a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1m0-5a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1" />
  </svg>
);
export default SvgCactusF;
