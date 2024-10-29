import * as React from "react";
const SvgCandleF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -1 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7 9h6v6H7zm-5 8h16a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2m8-8.6a3 3 0 0 1-3-3Q7 3.742 10 0q3 3.742 3 5.4a3 3 0 0 1-3 3" />
  </svg>
);
export default SvgCandleF;
