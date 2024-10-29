import * as React from "react";
const SvgTableDelete = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2 0h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m0 4v8h10V4zm5 5.414-1.414 1.414a1 1 0 1 1-1.414-1.414L5.586 8 4.172 6.586a1 1 0 1 1 1.414-1.414L7 6.586l1.414-1.414a1 1 0 1 1 1.414 1.414L8.414 8l1.414 1.414a1 1 0 0 1-1.414 1.414z" />
  </svg>
);
export default SvgTableDelete;
