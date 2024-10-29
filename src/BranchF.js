import * as React from "react";
const SvgBranchF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4 11.856v3.173a3.001 3.001 0 1 1-2 0V6.687a3.001 3.001 0 1 1 2 0v2.34c.312-.11.647-.17.997-.171l6.037-.006a1 1 0 0 0 .999-1V6.699A3.001 3.001 0 0 1 13 .858a3 3 0 0 1 1.033 5.817V7.85a3 3 0 0 1-2.997 3l-6.037.006a1 1 0 0 0-.999 1" />
  </svg>
);
export default SvgBranchF;
