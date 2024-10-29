import * as React from "react";
const SvgCastleF = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="-2 -2.5 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18 8v11h-3v-4a2 2 0 1 0-4 0v4H0v-8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V8a2 2 0 0 1-2-2V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2m-6 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z" />
  </svg>
);
export default SvgCastleF;
