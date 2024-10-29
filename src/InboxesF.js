import * as React from "react";
const SvgInboxesF = ({ title, titleId, ...props }) => (
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
    <path d="M20 6v5H0V6h6.126a4.002 4.002 0 0 0 7.748 0zm0-2H0l5-4h10zm0 9v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-5h6.126a4.002 4.002 0 0 0 7.748 0zM8.268 13h3.464a2 2 0 0 1-3.464 0m-.002-6.988h3.464a2 2 0 0 1-3.464 0" />
  </svg>
);
export default SvgInboxesF;
