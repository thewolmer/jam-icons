import * as React from "react";
const SvgTrophyF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-7 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.294 15Q1.394 12.263 1 9 .457 4.5 1 0h8q.466 4.993 0 9a32.7 32.7 0 0 1-1.287 6H8a2 2 0 0 1 2 2v3H0v-3a2 2 0 0 1 2-2zM3 16v2h4v-2z" />
  </svg>
);
export default SvgTrophyF;
