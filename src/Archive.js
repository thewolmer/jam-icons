import * as React from "react";
const SvgArchive = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -2 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2 5h16V2H2zm16 2v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1zM4 18h12V7H4zm4-4h4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2" />
  </svg>
);
export default SvgArchive;
