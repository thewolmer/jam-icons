import * as React from "react";
const SvgShieldF = ({ title, titleId, ...props }) => (
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
    <path d="M.649 3.322 8 .565l7.351 2.757a1 1 0 0 1 .649.936v4.307c0 3.177-1.372 6.2-3.763 8.292L8 20.565l-4.237-3.708A11.02 11.02 0 0 1 0 8.565V4.258a1 1 0 0 1 .649-.936" />
  </svg>
);
export default SvgShieldF;
