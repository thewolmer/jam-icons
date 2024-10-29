import * as React from "react";
const SvgIntersection = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7 14A7 7 0 1 1 10 .674a7 7 0 1 1 0 12.653A7 7 0 0 1 7 14M7 2a5 5 0 1 0 1 9.9A6.98 6.98 0 0 1 6 7a6.98 6.98 0 0 1 2-4.9A5 5 0 0 0 7 2m7 5a6.98 6.98 0 0 1-2 4.9 5 5 0 1 0 0-9.8A6.98 6.98 0 0 1 14 7" />
  </svg>
);
export default SvgIntersection;
