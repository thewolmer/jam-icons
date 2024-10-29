import * as React from "react";
const SvgDifferenciation = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10 .674a7 7 0 1 1 0 12.653A7 7 0 1 1 10 .673ZM10 3a5 5 0 0 0-2 4c0 1.636.786 3.088 2 4a5 5 0 0 0 2-4 5 5 0 0 0-2-4" />
  </svg>
);
export default SvgDifferenciation;
