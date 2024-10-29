import * as React from "react";
const SvgShieldHalf = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-4 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m8 2.136-6 2.25V8a9.02 9.02 0 0 0 3.08 6.787L8 17.342zm-7.351.62L8 0l7.351 2.757a1 1 0 0 1 .649.936V8c0 3.177-1.372 6.2-3.763 8.293L8 20l-4.237-3.707A11.02 11.02 0 0 1 0 8V3.693a1 1 0 0 1 .649-.936z" />
  </svg>
);
export default SvgShieldHalf;
