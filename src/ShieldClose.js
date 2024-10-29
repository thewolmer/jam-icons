import * as React from "react";
const SvgShieldClose = ({ title, titleId, ...props }) => (
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
    <path d="M2 4.386V8a9.02 9.02 0 0 0 3.08 6.787L8 17.342l2.92-2.555A9.02 9.02 0 0 0 14 8V4.386l-6-2.25zM.649 2.756 8 0l7.351 2.757a1 1 0 0 1 .649.936V8c0 3.177-1.372 6.2-3.763 8.293L8 20l-4.237-3.707A11.02 11.02 0 0 1 0 8V3.693a1 1 0 0 1 .649-.936zM9.414 9l1.414 1.414a1 1 0 1 1-1.414 1.414L8 10.414l-1.414 1.414a1 1 0 0 1-1.414-1.414L6.586 9 5.172 7.586a1 1 0 1 1 1.414-1.414L8 7.586l1.414-1.414a1 1 0 1 1 1.414 1.414z" />
  </svg>
);
export default SvgShieldClose;
