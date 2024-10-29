import * as React from "react";
const SvgTreeAltF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-5 -1.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6 14.858H1.674a1 1 0 0 1-.88-1.474l1.9-3.529a1 1 0 0 1-.785-1.512l4.234-7.056a1 1 0 0 1 1.714 0l4.234 7.056a1 1 0 0 1-.785 1.512l1.9 3.529a1 1 0 0 1-.88 1.474H8v6H6z" />
  </svg>
);
export default SvgTreeAltF;