import * as React from "react";
const SvgUnderline = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-7 -6.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.5 10h7a.5.5 0 1 1 0 1h-7a.5.5 0 1 1 0-1M7 2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2v3a4 4 0 1 1-8 0V2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2v3a2 2 0 1 0 4 0z" />
  </svg>
);
export default SvgUnderline;
