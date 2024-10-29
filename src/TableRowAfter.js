import * as React from "react";
const SvgTableRowAfter = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2 6v6h1a1 1 0 0 1 0 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1a1 1 0 0 1 0-2h1V6zm0-2h2V2H2zm4-2v2h2V2zm4 0v2h2V2zm-2 9v1a1 1 0 0 1-2 0v-1H5a1 1 0 0 1 0-2h1V8a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2z" />
  </svg>
);
export default SvgTableRowAfter;