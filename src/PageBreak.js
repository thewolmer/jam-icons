import * as React from "react";
const SvgPageBreak = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1 6h2a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m10 0h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2M6 6h2a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2M0 1a1 1 0 1 1 2 0v2.014h10V1a1 1 0 0 1 2 0v2.014a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm0 12.014V11a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2.014a1 1 0 0 1-2 0V11H2v2.014a1 1 0 0 1-2 0" />
  </svg>
);
export default SvgPageBreak;
